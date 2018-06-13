#!/bin/bash

# post
# curl -X POST -F 'name=Jim' -F 'age=25' http://localhost:3000/users
curl -X POST -H 'Content-Type: application/json' -d '{"name":"Jim","age":25}' http://localhost:3000/users
echo
curl -X PUT -H 'Content-Type: application/json' -d '{"name":"Jim","age":123}' http://localhost:3000/users/1
echo

curl -X POST -H 'Content-Type: application/json' -d '{"name":"Applemango","color":"red"}' http://localhost:3000/fruits
echo
