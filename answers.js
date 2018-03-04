// IN CURL

// CREATE
template: 
curl --data "name=FILLIN&type=FILLIN&cuisine=FILLIN" http://localhost:5000/api/soupsdb

example:
curl --data "name=Miso&type=Ramen&cuisine=Japanese" http://localhost:5000/api/soupsdb


// READ
http://localhost:5000/api/soupsdb


// UPDATE 
template: 
curl -X PUT --data "name=FILLIN&type=FILLIN&cuisine=FILLIN" http://localhost:5000/api/soupsdb/:id

example:
curl -X PUT --data "name=Shoyu&type=Ramen&cuisine=Japanese" http://127.0.0.1:5000/api/soupsdb/1


// DELETE
template: 
curl -X DELETE http://127.0.0.1:5000/api/soupsdb/:id

example:
curl -X DELETE http://127.0.0.1:5000/api/soupsdb/1


//write down endpoints
CREATE
http://localhost:5000/api/soupsdb/
READ
http://localhost:5000/api/soupsdb/
UPDATE
http://localhost:5000/api/soupsdb/1
DELETE
http://localhost:5000/api/soupsdb/1
