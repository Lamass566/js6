let newUser = {
  firstName:"",
  lastName:"",

  getLogin: function(fName, lName){
    let sumString = fName[0] + lName;
    alert(sumString);
  }
}


function createNewUser(){
  newUser.getLogin(fName, lName);

  return newUser;
}

function setFirstName(){
  let fName = prompt("f");

  newUser.firstName = fName;

  return fName;
}

function setLastName(){
  let lName = prompt("l");

  newUser.lastName = lName;

  return lName;
}

let fName = setFirstName();
let lName = setLastName();

createNewUser();