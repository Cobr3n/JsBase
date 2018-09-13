var Iterator = function (items) {
    this.index = 0;
    this.items = items
}

Iterator.prototype = {
    first: function(){
        this.reset();
        return this.next();
    },
    next: function () {
        return this.items[this.index++]
    },
    hasNext: function(){
        return this.index <= this.items.length
    },
    reset: function(){
        this.index = 0
    },
    each: function(callback) {
        for (var item = this.first(); this.hasNext(); item = this.next()){
            callback(item)
        }
    }
}


var items = ['One', 2 , true, false, 'rusta'];
var iter = new Iterator(items);

console.log(iter.next())
console.log(iter.next())
console.log('first again', iter.first())
iter.each(function(i) {console.log(i)})
