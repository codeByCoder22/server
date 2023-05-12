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
