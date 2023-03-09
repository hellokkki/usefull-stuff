
//compare two array without regardless of order
const compareArrays = (a, b) =>  {
	return JSON.stringify(a.sort()) === JSON.stringify(b.sort());
  }

  // find min and max in str
function highAndLow(numbers){
  let arr = numbers.split('');
  //remove whitespaces
  arr = arr.filter(function(str) {
    return /\S/.test(str);
  });
  //make numbers from characters
  arr = arr.map(i => +i);
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return(max, min)
}

//return unique values for orders in array
const uniqueInOrder = iterable =>{
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

