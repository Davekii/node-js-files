const animals = ['cow', 'bird', 'fish', 'horse', 'tiger'];

let newList = animals.filter(function (currentElement) {
	return currentElement.includes('i');

});

console.log(newList)
