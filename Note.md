## run this command to launch the server : npm start or npm run start

## npm i nodemon -D

## npm i ts-node -D

## npm i express

## npm i mongoose

## npm i socket.io

## npm i @types/express -D

## npm i validator

## npm i @types/validator

## npm i @types/validator -D

## npm i bcryptjs

## npm i @types/bcryptjs -D

## npm i jsonwebtoken

## npm i @types/jsonwebtoken -D

## npm i cors

## Mongoose command:

use eltrello
show collections

## MongoDB Compass insert Document

{
"\_id": {
"$oid": "6458ad9277fe7e809dc6f344"
  },
  "title": "Second board",
  "userId": {
    "$oid": "645885a7537aac834509bd1f"
}
}

### another example:

{
"\_id": {
"$oid": "6458ad9277fe7e809dc6f344"
  },
  "title": "First Column - 57",
  "userId": {
    "$oid": "645885a7537aac834509bd1f"
},
"boardId": {
"$oid": "6458ad9277fe7e809dc6f344"
}
}

### you only need to insert below part:

"title": "First Column - 57",
"userId": {
"$oid": "645885a7537aac834509bd1f"
},
  "boardId": {
    "$oid": "6458ad9277fe7e809dc6f344"
}

## Insert a task

{
"\_id": {
"$oid": "6458ad9277fe7e809dc6f344"
  },
  "title": "First task - 57",
  "description":"description 57",
  "userId": {
    "$oid": "645885a7537aac834509bd1f"
},
"boardId": {
"$oid": "6458aca677fe7e809dc6f342"
},
"columnId": {
"$oid": "645f2f24fe8c1930b1948623"
}
}

## Deploy

## ssh root@65.108.248.80

11 mins 45s begin upload ....

## mkdir projects

## cd projects

## git clone https://github.com/wuqiang5733/server.git

## git clone https://github.com/wuqiang5733/client.git

## git clone https://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@github.com/wuqiang5733/server.git

## git clone https://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@github.com/wuqiang5733/client.git

## ls

now You should see the folder you cloned to

## apt-get update

## apt install nginx

## service nginx status

---

## apt-get install mongodb

## apt-cache search package-name

## apt-cache show

## service mongodb status

## sudo systemctl status mongodb

## sudo apt install postgresql-14

## dpkg -l | grep postgresql

## sudo netstat -naptu | grep 5432

## cat /etc/apt/sources.list

cat is a command-line utility that is short for "concatenate" in Unix-like operating systems. It is used to display the contents of a file on the terminal.

## cp /etc/apt/sources.list /etc/apt/sources.list.backup

## apt-get remove package-name

## cat /etc/issue

## sudo gedit /etc/apt/sources.list

## sudo apt-get update

---

## apt install build-essential

## curl -L https://git.io/n-install | bash

-- Cloning https://github.com/tj/n to '/root/n/n/.repo'...
-- Running local n installation to '/root/n/bin'...
-- Shell initialization file '/root/.bashrc' updated.
-- Installing helper scripts in '/root/n/bin'...
-- Installing the requested Node.js version(s)...
1 of 1: lts...
installing : node-v18.16.0
mkdir : /root/n/n/versions/node/18.16.0
fetch : https://nodejs.org/dist/v18.16.0/node-v18.16.0-linux-x64.tar.xz
copying : node/18.16.0
installed : v18.16.0 (with npm 9.5.1)
=== n successfully installed.
The active Node.js version is: v18.16.0

Run `n -h` for help.
To update n later, run `n-update`.
To uninstall, run `n-uninstall`.

IMPORTANT: OPEN A NEW TERMINAL TAB/WINDOW or run `. /root/.bashrc`
before using n and Node.js.

## . /root/.bashrc

## npm install -g pm2

## exit

## cd /etc/nginx/conf.d/

client mongodb-linux-x86_64-ubuntu2004-4.4.1.tgz server
root@ubuntu-2gb-hel1-2:~/projects# tar -xvzf mongodb-linux-x86_64-ubuntu2004-4.4.1.tgz
mongodb-linux-x86_64-ubuntu2004-4.4.1/LICENSE-Community.txt
mongodb-linux-x86_64-ubuntu2004-4.4.1/MPL-2
mongodb-linux-x86_64-ubuntu2004-4.4.1/README
mongodb-linux-x86_64-ubuntu2004-4.4.1/THIRD-PARTY-NOTICES
mongodb-linux-x86_64-ubuntu2004-4.4.1/bin/install_compass
mongodb-linux-x86_64-ubuntu2004-4.4.1/bin/mongo
mongodb-linux-x86_64-ubuntu2004-4.4.1/bin/mongod
mongodb-linux-x86_64-ubuntu2004-4.4.1/bin/mongos
root@ubuntu-2gb-hel1-2:~/projects#

tar -xvzf mongodb-linux-x86_64-ubuntu2004-4.4.1.tgz
sudo mv mongodb-linux-x86_64-ubuntu2004-4.4.1 /opt/mongodb
echo 'export PATH="/opt/mongodb/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

[n-install](https://github.com/mklement0/n-install)

Installing a package from an external repository in Ubuntu consists of three steps:

Adding the repository’s GPG key to the system
Adding the external repository to the system
Installing the package from this external repository

It works by adding the keys to the /etc/apt/trusted.gpg file. The apt package manager trusts the keys inside this file.

sudo apt-get install gnupg

curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
 sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
 --dearmor

echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

sudo apt-get update

## hostname -i hostname -I

## uname -m

## cat /etc/os-release
