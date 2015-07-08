var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var _ = require('underscore')

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

var users = [
	{
		id: 1,
		username: "ricky",
		firstname: "ricky",
		lastname: "bobby",
		age: 24
	},
	{
		id: 2,
		username: "ron",
		firstname: "ron",
		lastname: "burgundy",
		age: 25
	}
	
];


//read new users
app.get("/users", function (req, res) {
  res.json(users);
});

//create a new post/user
app.post("/users", function (req, res) {
  var newUser = req.body;
  user.push(newUser)
  res.json(newUser)

});

//update an existing user
app.put("/users/:id", function (req,res){
		//set the value of the id
		var userId = parseInt(req.params.id);
		//find item in 'user' array matchng the id
		var targetUser = _.findWhere(users, {id:userId})
		//update the username,firstname,lastname,age
	  targetUser.username = req.body.username;
		//update the firstname
		targetUser.firstname = req.body.firstname;
		//update the lastname
		targetUser.lastname = req.body.lastname;
		//update the age
		targetUser.age = req.body.age;
		//send back edited object
		res.json(targetUser)

});

//delete an existing user
app.delete("/users/:id", function (req,res){
	// set the value of the id
  var userId = parseInt(req.params.id);
  // find item in `phrases` array matching the id
  var targetUser = _.findWhere(users, {id:userId});
  // get the index of the found item
  var userIndex = users.indexOf(targetUser);
  // remove the item at that index, only remove 1 item
  users.splice(userIndex, 1);
  // send back deleted object
  res.json(targetUser)
});

//server stuff
app.listen(3000)










