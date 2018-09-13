function Universe() {
    if(typeof Universe.instance === 'object'){
        return Universe.instance
    }
    this.start_time = 0;
    this.bang = 'Big';
    Universe.instance = this;
}
var test = new Universe();
var test2 = new Universe();
console.log(test, test2, test == test2)