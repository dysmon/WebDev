// Turn the object into JSON and back

let user = {
  name: "John Smith",
  age: 35,
};

let user2 = JSON.parse(JSON.stringify(user));
