#! /bin/bash

PASSED='✅'
FAILED='❌'

function assert(){
  local actual=$1
  local expected=$2
  local description=$3

  echo ${actual} > /tmp/_actual.txt
  echo ${expected} > /tmp/_expected.txt

  diff /tmp/_actual.txt /tmp/_expected.txt > /dev/null
  code=$?
  status=${FAILED}  
  if [ ${code} -eq 0 ]
  then
    status=${PASSED}  
  fi
  echo "${status} - ${description}"
}

function all_prompts(){
  prompts=$(node main.js << EOF
dileep
2021-12-12
playing,kabbadi
1234567890
dileep
annavarapu
EOF
)
  expectedPrompts="Enter name Enter dob Enter hobbies Enter ph-no Enter address-1 Enter address-2"
  expected='{"name":"dileep","dob":"2021-12-12","hobbies":["playing","kabbadi"],"ph-no":"1234567890","address":"dileep\nannavarapu"}'
  actual=`cat 'details.json'`
  assert "${prompts[@]}" "${expectedPrompts}" "All prompts"
  assert "${actual}" "${expected}" "Details in json"
}

function repeat_name_prompt(){
  prompts=$(node main.js << EOF
dil
jhonson
2021-12-12
playing,kabbadi
1234567890
rammandir
cholepur
EOF
)
  expectedPrompts="Enter name Enter name Enter dob Enter hobbies Enter ph-no Enter address-1 Enter address-2"
  expected='{"name":"jhonson","dob":"2021-12-12","hobbies":["playing","kabbadi"],"ph-no":"1234567890","address":"rammandir\ncholepur"}'
  actual=`cat 'details.json'`
  assert "${prompts[@]}" "${expectedPrompts}" "Repeat name prompt once"
  assert "${actual}" "${expected}" "Different Details in json"
}

function repeat_ph_no_prompt(){
 prompts=$(node main.js << EOF
jhonson
2021-12-12
playing,kabbadi
123
1234
1234567890
rammandir
cholepur
EOF
)
  expectedPrompts="Enter name Enter dob Enter hobbies Enter ph-no Enter ph-no Enter ph-no Enter address-1 Enter address-2"
  expected='{"name":"jhonson","dob":"2021-12-12","hobbies":["playing","kabbadi"],"ph-no":"1234567890","address":"rammandir\ncholepur"}'
  actual=`cat 'details.json'`
  assert "${prompts[@]}" "${expectedPrompts}" "Repeat phone number prompt two times"
  assert "${actual}" "${expected}" "Different Details in json"
}


function run_tests(){
  all_prompts
  repeat_name_prompt
  repeat_ph_no_prompt
}

run_tests