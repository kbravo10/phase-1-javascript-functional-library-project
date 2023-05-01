
//terates over the collection of elements, passing each element in 
//turn to the callback function. Returns the original, unmodified, collection.
function myEach(collection, callback){
    let tempArrObj = [];

    if(typeof(collection) === "object" && collection != null){
        tempArrObj = Object.values(collection)
    }
    else{
        tempArrObj = [...collection]
    }
  
    for (let index = 0; index < tempArrObj.length; index++) {
        const element = tempArrObj[index];
        callback(element)
    }

    return collection;
}

//Produces a new array of values by mapping each value in collection 
//through a transformation function, callback. Returns the new array 
//without modifying the original.
function myMap(collection, callback){
    const newArr = [];
    let tempArrObj = [];

    if(Array.isArray(collection) === true){
         for(let num in collection){
            newArr.push(callback(collection[num]))
        }
        return newArr
    }
    else{
        tempArrObj = Object.entries(collection)
        for(let key of tempArrObj){
            newArr.push(callback(key[1],key[2]))
        }
        return newArr;
    }
}

//Reduce iterates through a collection of values and boils it down into a single 
//value. acc (short for accumulator) starts at the value that's passed in as an 
//argument, and with each successive step is updated to the return value of callback. 
//If a start value is not passed to myReduce, the first value in the collection 
//should be used as the start value.

function myReduce(collection, callback, startVal){
    let sum; 
    let tempArrObj =[];
    const ref = collection;
    if(typeof(startVal) === "undefined"){
        if(Array.isArray(collection) === true){
            sum = collection[0];
           for (let index = 1; index < collection.length; index++) {
            sum = callback(sum, collection[index], ref)
           }
        }
        else{
            tempArrObj = Object.entries(collection)
            sum = tempArrObj[0][1]
            for (let index = 1; index < tempArrObj.length; index++) {
                const element = tempArrObj[index][1];
                sum = callback(sum, element, ref)
            }
        }
        }
    else{
        sum = startVal;
        if(Array.isArray(collection) === true){
        for(let number in collection){
            sum = callback(sum, collection[number], ref)
            }
        }
        else{
            tempArrObj = Object.entries(collection)
            for(let key of tempArrObj){
            sum = callback(sum, key[1], ref)
        }
        }
    }
    return(sum)
}

// Looks through each value in the collection, returning an array of 
//all the values that pass a truth test (predicate). If no matching 
//values are found, it should return an empty array.
function myFilter(collection, predicate){
    const retArray = [];
    for (let index = 0; index < collection.length; index++) {
        const element = collection[index];
        if(predicate(element) === true){
            retArray.push(element)
        }
    }
    return retArray
}

// Looks through each value in the collection, returning the first one 
//that passes a truth test (predicate) or undefined if no value passes 
//the test. The function should return as soon as it finds an acceptable 
//element, without traversing the rest of the collection.
function myFind(collection, predicate){
    for (let index = 0; index < collection.length; index++) {
        const element = collection[index];
        if(predicate(element) === true){
            return element;
        }
    }
    return undefined;
}

//Return the number of values in the collection.
function mySize(collection){
    const tempObj = Object.keys(collection);

    if(Array.isArray(collection)){
        return collection.length;
    }

    return tempObj.length;
}

//Returns the first element of an array. Passing n will return the 
//first n elements of the array.
function myFirst(array, int){
    if (typeof(int) === "undefined"){
        return array[0];
    }

    const newArr = [];
    for (let index = 0; index < int; index++) {
        const element = array[index];
        newArr.push(element);
    }
    return newArr;
}

//Returns the last element of an array. Passing n will 
//return the last n elements of the array.
function myLast(array, int){
    if(typeof(int) === "undefined"){
        return array[array.length -1 ]
    }

    const arrNew = [];

    for (let index = array.length - 3; index < array.length; index++) {
        const element = array[index];
        arrNew.push(element)
    }
    return arrNew
}

//Retrieve all the names of the object's enumerable properties.
function myKeys(obj){

    const arr = [];
    for(let key in obj){
        arr.push(key)
    }
    return arr
}

//Return all of the values of the object's properties.
function myValues(obj){
    const arr = [];
    for(let key in obj){
        arr.push(obj[key])
    }
    return arr
}
