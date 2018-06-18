var SortedList = function() {
    this.items = [];
    //this.items = this.items.sort();
    this.length = this.items.length;
};

SortedList.prototype.add     = function(x) {
    this.items.push(x);
    this.items.sort();
    this.length++;
}

SortedList.prototype.get     = function(i) {
    return this.items[i];
}

SortedList.prototype.max     = function() {
    return this.items[this.length];
}
SortedList.prototype.min     = function() {
    return this.items[0];
}
SortedList.prototype.average = function() {
    /*return this.items.reduce(function(acc, el){
        return acc + el
    },0 / this.length);*/
    return this.sum() / this.length;
}
SortedList.prototype.sum     = function() {
    return this.items.reduce(function(acc, el){
        return acc + el;
    });
}

module.exports = SortedList;

