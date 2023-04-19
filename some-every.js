
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false

 function hasOddNumber(arr) {
    return arr.some(function(val){
     return val % 2 !== 0;
      })
}
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false

function hasAZero(num) {
    return num.toString().split('').some(function(val){
    return val === '0';
      })
}

    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false

function hasOnlyOddNumbers(arr) {
    return arr.every(function(val){
    return val % 2 !== 0;
      })
}

    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true

function hasNoDuplicates(arr) {
    return arr.every(function(val){
    return arr.indexOf(val) === arr.lastIndexOf(val);
      });
}
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false

function hasCertainKey(arr, key) {
    return arr.every(function(val){
    return key in val
      })
}
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
function hasCertainValue(arr, key, searchValue) {
    return arr.every(function(val){
     return val[key] === searchValue;
      })
}
