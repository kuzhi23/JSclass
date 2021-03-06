var Bee = require('./Bee');

var ForagerBee = function () {
    Bee.call(this)
    this.age = 10
    this.job = "find pollen"
    this.canFly = true
    this.treasureChest = []

    ForagerBee.prototype.forage = function (value){
        this.treasureChest.push(value)
    }
};


ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;
module.exports = ForagerBee;
