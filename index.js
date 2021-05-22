// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
    return Math.abs(42 - parseInt(pickup));
}

function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks(pickup) * 264;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
    return Math.abs(parseInt(endingBlock) - parseInt(startingBlock)) * 264;
}

function calculatesFarePrice(startingBlock, endingBlock) {
    const distance = distanceTravelledInFeet(startingBlock, endingBlock);
    if (distance < 400) {
        return 0;
    } else if (distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance < 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}