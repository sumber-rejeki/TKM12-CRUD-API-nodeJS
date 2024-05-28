## //REQUEST
GET http://localhost:3000/note

## //RESPONSE
```javascript
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 165
ETag: W/"a5-9LNR05ff9m6u4yxXkuLQQxWx+gk"
Date: Thu, 23 May 2024 01:55:00 GMT
Connection: close

[
  {
    "id": "firstNote",
    "content": "this firstNote content"
  },
  {
    "id": "secondNote",
    "content": "this secondNote content"
  },
  {
    "id": "thirdNote",
    "content": "this thirdNote content"
  }
]
```

###
## //REQUEST
POST http://localhost:3000/note
```javascript
Content-Type: application/json

{
    "note": 
    {
        "id":"newNote",
        "content":"this new note content"
    }
}
```

## //RESPONSE
```javascript
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 216
ETag: W/"d8-gcoqcbU+cGlHhnufqq686iw7s+A"
Date: Thu, 23 May 2024 02:34:40 GMT
Connection: close

[
  {
    "id": "firstNote",
    "content": "this firstNote content"
  },
  {
    "id": "secondNote",
    "content": "this secondNote content"
  },
  {
    "id": "thirdNote",
    "content": "this thirdNote content"
  },
  {
    "id": "newNote",
    "content": "this new note content"
  }
]
```


###
## //REQUEST
PUT http://localhost:3000/note
```javascript
Content-Type: application/json

{
    "note": 
    {
        "id":"firstNote",
        "content":"FIRST NOTE CONTENT UPDATED"
    }
}
```

## //RESPONSE
```javascript
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 220
ETag: W/"dc-VAsAKKZQ40rO9MUpChOLNEhFWFQ"
Date: Thu, 23 May 2024 02:48:05 GMT
Connection: close

[
  {
    "id": "firstNote",
    "content": "FIRST NOTE CONTENT UPDATED"
  },
  {
    "id": "secondNote",
    "content": "this secondNote content"
  },
  {
    "id": "thirdNote",
    "content": "this thirdNote content"
  },
  {
    "id": "newNote",
    "content": "this new note content"
  }
]
```


###
## //REQUEST
DELETE http://localhost:3000/note/firstNote


## //RESPONSE
```javascript
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 162
ETag: W/"a2-vyaynMnGZDbW/bTdYao3M9sVGN0"
Date: Thu, 23 May 2024 02:55:26 GMT
Connection: close

[
  {
    "id": "secondNote",
    "content": "this secondNote content"
  },
  {
    "id": "thirdNote",
    "content": "this thirdNote content"
  },
  {
    "id": "newNote",
    "content": "this new note content"
  }
]
```
