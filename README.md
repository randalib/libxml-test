
# Libxml-test

## Probem statement
Updating libxml from **v0.19.7** (which has vulnerabilities) seems to break the docker container running on **node:14-alpine** on **Intel** processors (x86). 
On **node 16** and above package v0.19.7 cannot be installed and the newer release needs to be used, but on **node 14** downgrading to **v0.19.7** seems to fix the issue.

## How to Reproduce
The app can be run with no issues locally; however, docker seems to run into an issue when running the project on an Intel processor (x86 architecture). The same docker config works on an M1 mac (ARM architecture).

The following command works in all scenarios:

> npm start

However trying to run the docker fails on Intel processors without a proper error. To get docker up and running, run:

> npm run docker

The result: 
![Docker fails](/docker-fail.png)

The docker runs fine if libxml is downgraded to v0.19.7:

> npm i libxmljs@0.19.7 
