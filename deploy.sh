#!/usr/bin/bash

if [ -z "$1" ]
then
    msg="Rebuild on `date`"
else
    msg=$1
fi

echo "atualizando site"
hugo

echo "Enviandopara o GitHub - master"
git add .
git commit -am "$msg"
git rev-parse source
ghp-import -n -m "$msg" -p -r origin -b master public

echo "Enviandopara o GitHub - source"
git push -u origin source

echo $msg

