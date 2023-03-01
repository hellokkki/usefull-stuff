
// is something string?
const isStr = str => (typeof str === 'string') ? true : null;

// is str empty?
const isStrEmpty = str => (str === '') ? true : null;

// split in array
const splitStringIntoArray = str => str.trim().split(" ");

// cut string from number
const cutString = ( str, n ) => str.split('').splice(0, n);

// return set
const returnSet = something => new Set([...something]);

// replace something in str 
const replaceSmth = str => {
 let arr = str.trim().split('');
 arr.forEach( (item, i) => {
 if (item === "what to replace") arr[i] = "replace with";
 });
return arr
}

// generate unique string
const generateUniqueString = (length) => {
let string = Math.random().toString(36).substr(2, length);
return string;
}