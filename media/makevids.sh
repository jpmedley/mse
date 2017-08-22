#!/bin/bash
# Usage makevids.sh list.csv inputfile outputbase
# Example:
#   ./makevids.sh segs.csv source droid
#
#   Looks for a file named source.mpr runs it through the process
#   in list.csv and spits out files named dorid_v_000.mp4,
#   droid_a_000.m4a, droid_v_000.webm, droid_a_000.webm and etc..

echo ============================================================
echo Starting Conversion
echo ============================================================
line = $1
while read line || [[ -n "$line" ]]; do
  if grep -q "Header" <<< "$line" ; then
    echo
  else
    echo ------------------------------------------------------------
    echo "$line"
    echo ------------------------------------------------------------
    eval $line </dev/null
    # echo
  fi
done < "$1"