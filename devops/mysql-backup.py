#!/usr/bin/env python
import os
import time

username = 'root'
hostname = 'localhost'

filestamp = time.strftime('%A')

# Get a list of databases with :
database_list_command="mysql -u %s -h %s --silent -N -e 'show databases'" % (username, hostname)
for database in os.popen(database_list_command).readlines():
    database = database.strip()
    if (database == 'information_schema' or database == 'performance_schema'):
      continue
    filename = "/tmp/backup/%s-%s.sql" % (database, filestamp)
    os.popen("mysqldump -u %s -h %s -e --opt -c %s | gzip -c > %s.gz" % (username, hostname, database, filename))
    os.system("s3cmd put %s.gz s3://rrs-database-backups/asterope/" % filename)
