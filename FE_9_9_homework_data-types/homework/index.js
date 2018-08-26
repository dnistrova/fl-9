function findType (value) {
	return typeof value;
}

//findType('number');
//findType(null);

function forEach (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    fn(el);
  }
}

//forEach([2,5,8], function(el) { console.log(el) }); 

function map (arr, fn) {
	let newArray = [];
	forEach(arr, el => newArray.push(fn(el)));
    return newArray;
}

//map([2, 5, 8], function(el) { return el + 3 });

function filter (arr, fn) {
	let newArray = [];
	forEach(arr, el => {
		if (fn(el)) {
            newArray.push(el);
        }
	});
    return newArray;
}

//filter([2, 5, 8], function(el) { return el > 3 });

function getAdultAppleLovers (data) {
	return map(filter(data, el => el.age > 18 && el.favoriteFruit === 'apple'), el => el.name);
}
/*const data = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 17,
    "eyeColor": "green",
    "name": "Weiss",
    "favoriteFruit": "banana"
  }
];
*/

//getAdultAppleLovers(data); 

function keys(object) {
	let newArray = [];
    for(let key in object) {
        newArray.push(key);
    }
    return newArray;
}

//keys({keyOne: 1, keyTwo: 2, keyThree: 3});

function values(object) {
	let newArray = [];
    for(let key in object) {
        newArray.push(object[key]);
    }
    return newArray;
}

//values({keyOne: 1, keyTwo: 2, keyThree: 3});

function showFormattedDate(date) {
	date = new Date();
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const MMM = months[date.getMonth()];
	return 'It is ' + date.getDate() + ' of ' + MMM + ', ' + date.getFullYear();
} 

//showFormattedDate(new Date('2018-08-27T01:10:00'));
