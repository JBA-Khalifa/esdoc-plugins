#!/bin/bash -e

for plugin in $(ls -1 -d esdocs-*)
do
  echo $plugin
  (cd $plugin && npm run test)
  echo ========================================================================
done
