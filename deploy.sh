#!/usr/bin/bash

if [ -z "$1" ]
then
    msg="Rebuild on `date`"
else
    msg=$1
fi

echo "** Atualizando site"
hugo

echo "\n\n** Enviandopara o GitHub - master"
git add .
git commit -am "$msg"
git rev-parse source
ghp-import -n -m "$msg" -p -r origin -b master public

echo "\n\n** Enviandopara o GitHub - source"
git push -u origin source


