var User = function(name){
    this.name = name;
    this.say = function() {
        console.log('user:', this.name)
    }
}

var DecoratedUser = function(user, street, city){
    this.user = user;
    this.name = user.name;
    this.street = street;
    this.city = city;
    this.say = function(){
        console.log('decorated user:', this.name + ', ' + this.street + ', ' + this.city)
    }
}

var user = new User("VASILIY");
var decorated = new DecoratedUser(user, 'red street', 'nsk');

user.say();
decorated.say()