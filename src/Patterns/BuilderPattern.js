class User{
    constructor(name){
        this.name = name;
    }
}

class UserBuilder{
    constructor(name){
        this.user = new User(name);
    }
    setAge(value){
        this.user.age = value;
        return this;
    }
    setPhone(value){
        this.user.phone = value;
        return this;
    }
    Build(){
        return this.user;
    }
}

let builder = new UserBuilder('bob').setAge(20).Build();
