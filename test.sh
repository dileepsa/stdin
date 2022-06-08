#!/bin/bash

function assert(){
  local actual=$1
  local expected=$2
  
  echo ${actual} > /tmp/_actual.txt
  echo ${expected} > /tmp/_expected.txt

  diff /tmp/_actual.txt /tmp/_expected.txt
}

function case1(){
  prompts=$(node practice.js << EOF
dileep
2021-12-12
playing,kabbadi
1234567890
EOF
)
  expectedPrompts="Enter name Enter dob Enter hobbies Enter ph-no"
  expected='{"name":"dileep","dob":"2021-12-12","hobbies":["playing","kabbadi"],"ph-no":"1234567890"}'
  actual=`cat 'details.json'`
  assert "${prompts[@]}" "${expectedPrompts}"
  assert "${actual}" "${expected}"
}

case1
