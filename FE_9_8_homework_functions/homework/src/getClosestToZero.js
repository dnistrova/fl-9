function getClosestToZero() {
    let number = 0,
    closestToZero;
    closestToZero = arguments[0];
	let i;
    for (i = 0; i < arguments.length; i++) {
        if (Math.abs(number - arguments[i]) < Math.abs(number - closestToZero)) {
            closestToZero = arguments[i];
        }
    }
    return closestToZero;
}

//getClosestToZero(9, 5, -4, -9); 
