class logger{
    constructor(){
        if(!logger.instance){
            this.logs = [];
            logger.instance = this;
        }
        return logger.instance;
    }
    log(message){
        this.logs.push(message);
        console.log(message);
    }
    printLogCount(){
        console.log(this.logs.length);
    }
}

const logs = new logger();
Object.freeze(logs);