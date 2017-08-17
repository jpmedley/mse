#!/bin/bash

echo ============================================================
echo Starting Conversion
echo ============================================================
while read line || [[ -n "$line" ]]; do
  if grep -q "Header" <<< "$line" ; then
    echo
  else
    echo ------------------------------------------------------------
    echo "$line"
    echo ------------------------------------------------------------
    $line </dev/null
    # echo
  fi
done < "$1"