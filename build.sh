#!/bin/bash
git clone https://github.com/vmware/clarity-seed.git
docker build -t "node-angular:6.11.3-1.3.2" .
docker run -v $PWD/clarity-seed:/project --name clarity-seed -p 4200:4200 -d node-angular:6.11.3-1.3.2