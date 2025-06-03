#!/bin/bash
yum update -y
curl -fsSL https://rpm.nodesource.com/setup_18.x | bash -
yum install -y nodejs git

cd /home/ec2-user
git clone https://github.com/eyuel4/Barkon_Tech_AWS.git
cd app
npm install
nohup node server.js > output.log 2>&1 &

