// FOR EACH //
const arr = [1,2,3]
Array.prototype.myEach = function(callbackFn) {
    for (let i=0;i< this.length;i++){
        if(this[i]===undefined) continue;
        
        callbackFn(this[i],i,this);
    }
};

// MAP //
Array.prototype.myMap = function(callbackFn) {
    const newarr = [];
    for(let i=0; i<this.length;i++){
        newarr.push(callbackFn(this[i],i,this));
    }
    return newarr;
};


// FILTER //
Array.prototype.myFilter = function() {

};

// SOME //
Array.prototype.mySome = function() {

};

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function() {

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};

//Test
/*console.log("myEach : ") 
arr.myEach(x=> console.log(x));

console.log("forEach: ")
arr.forEach(x=> console.log(x));

console.log("myMap")
const map1 = arr.myMap(x=>x*2);
console.log(map1);
console.log("map")
const map2 = arr.map(x=>x*2);
console.log(map2);
*/