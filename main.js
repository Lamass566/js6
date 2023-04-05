let newUser = {
  _firstName:"",
  _lastName:"",
  _birthday: '1995, 11, 17',

  getLogin: function(fName, lName){
    let sumString = fName[0] + lName;
    alert(sumString);
  }
}

Object.defineProperty(newUser, 'birthday',{
  get(){
    return this._birthday;
  },
  set(val){
    this._birthday = val;
  }
});

Object.defineProperty(newUser, 'firstName',{
  get(){
    return this._firstName;
  },
  set(val){
    this._firstName = val;
  }
});

Object.defineProperty(newUser, 'lastName',{
  get(){
    return this._lastName;
  },
  set(val){
    this._lastName = val;
  }
});

function createNewUser(){
  let fName = prompt("f");
  let lName = prompt("l");
  newUser._firstName = fName;
  newUser._lastName = lName;
  newUser.getLogin(fName, lName);

  newUser._birthday = prompt("dd.mm.yyyy");

  alert(getAge());
  alert(getPassword());
  
  return newUser;
}

function getAge(){
  let str = newUser._birthday;
  let arr = str.split('.');
  let year = arr[2];

  let datess = 2023 - Number(year);

  return datess;
}

function getPassword(){
  let strw = newUser._birthday;
  let arr = strw.split('.');
  let year = arr[2];

  let str = newUser._firstName[0].toUpperCase() + newUser._lastName.toLowerCase() + year;
  return str;
}

createNewUser();
