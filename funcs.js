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
Array.prototype.myFilter = function(callbackFn) {
    const newarr = [];
    for(let i=0; i<this.length;i++){
        if((callbackFn(this[i],i,this))){
            newarr.push(this[i]);
        }
    }
    return newarr;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
    const newarr = [];
    for(let i=0; i<this.length;i++){
        if((callbackFn(this[i],i,this))){
            return true;
        }
    }
    return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
    const newarr = [];
    for(let i=0; i<this.length;i++){
        if(!(callbackFn(this[i],i,this))){
            return false;
        }
    }
    return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn, reducer) {
    let sum=0;
    if(reducer!=null){
        for(let i=0; i<this.length;i++){
            sum += this[i];
        }
        sum+=reducer;
    }
    else{        
        for(let i=0; i<this.length;i++){
            sum += this[i];
        }   
    }
    return sum;
};

// INCLUDES //
Array.prototype.myIncludes = function(param) {
    for(let i =0; i < this.length;i++){
        if(this[i]===param){
            return true;
        }
    }
    return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(param1,param2) {
    if(param2==null){
        for(let i =0; i < this.length;i++){
            if(this[i]===param1){
                return i;
            }
        }
        return -1;
    }
    else{
        for(let i =param2; i < this.length;i++){
            if(this[i]===param1){
                return i;
            }
        }
        return -1;
    }
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

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log("filter default")
const result = words.filter(word => word.length > 6);
console.log(result);
console.log("myFilter")
const result2 = words.myFilter(word => word.length >6);
console.log(result2);
// expected output: Array ["exuberant", "destruction", "present"]
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.mySome(even));
console.log(array.some(even));
// expected output: true

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13,48];

console.log(array1.every(isBelowThreshold));
console.log(array1.myEvery(isBelowThreshold));
// expected output: true
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
console.log(array1.myReduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
console.log(array1.myReduce(reducer, 5));
// expected output: 15
const array1 = [1, 2, 3];

console.log(array1.includes(2));
console.log(array1.myIncludes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
console.log(pets.myIncludes('cat'));
// expected output: true

console.log(pets.includes('at'));
console.log(pets.myIncludes('at'));
// expected output: false

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
console.log(beasts.myIndexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
console.log(beasts.myIndexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
console.log(beasts.myIndexOf('giraffe'));
// expected output: -1
*/