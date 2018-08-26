function getClosestToZero() {
    let closestToZero = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (Math.abs(0 - arguments[i]) < Math.abs(0 - closestToZero)) {
            closestToZero = arguments[i];
        }
    }
    return closestToZero;
}

//getClosestToZero(9, 5, -4, -9); 
