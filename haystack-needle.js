
const strStr = (haystack, needle) => {
	if (needle === "") return 0;

	let pos = 0;
	let result = -1;

	find(haystack, needle, pos);

	function find(haystack, needle, pos) {
		if (haystack.slice(pos, pos + needle.length) === needle) {
			result = pos;
		} else {
			pos++;
			if (pos <= haystack.length - 1) find(haystack, needle, pos);
		}
	}
	return result
}

console.log(strStr('bojack horeman', 'an'))