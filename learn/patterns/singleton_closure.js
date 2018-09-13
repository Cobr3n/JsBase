function Universe() {
    var instance = this;
    this.start_time = '0';
    this.bang = 'Big';
    Universe = function () {
        return instance
    }
}
var test = new Universe();
var test2 = new Universe();
console.log(test, test2, test == test2)