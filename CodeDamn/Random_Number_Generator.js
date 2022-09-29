function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	// write your solution here
    let res=Math.floor(Math.random()*(rangeEnd-rangeStart+1)+rangeStart);
    return res;
}
console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)
