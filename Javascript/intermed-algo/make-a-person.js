//jshint esversion:6

const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;

    this.getFirstName = function() {
        return fullName.split(" ")[0];
    };

    this.getLastName = function() {
        return fullName.split(" ")[1];
    };

    this.getFullName = function() {
        return fullName;
    };
    
    this.setFirstName = function(_firstName) {
      fullName = _firstName + " " + fullName.split(" ")[1];
    };

    this.setLastName = function(_lastName) {
       fullName = fullName.split(" ")[0] + " " + _lastName;
    };

    this.setFullName = function(_firstAndLast) {
        fullName = _firstAndLast;

    };
    return firstAndLast;
  };
  
  const bob = new Person('Bob Ross');
 console.log(bob.getFullName());

 console.log(bob.getFirstName());