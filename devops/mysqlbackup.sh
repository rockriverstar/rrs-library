#!/bin/sh
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/home/USERNAME/scripts
dt=`date +%y%m%d`

cd /var/www/WEBSITE/docroot/
drush sql-dump --gzip --result-file=/home/USERNAME/backups/$dt.sql

cd /home/USERNAME/backups
find -mtime +14 -delete

s3cmd sync --delete-removed /home/USERNAME/backups/ s3://BUCKETNAME/
s3cmd sync --delete-removed --exclude-from /home/USERNAME/scripts/backup.exclude /var/www/WEBSITE/ s3://BUCKETNAME/
