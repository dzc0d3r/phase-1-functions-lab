
const blockToFeet = 264

function distanceFromHqInBlocks(blockNumber) {
    let currentBlockNumber = 42
    return currentBlockNumber > blockNumber ? Math.abs(currentBlockNumber - blockNumber) : Math.abs(blockNumber - currentBlockNumber)


}


function distanceFromHqInFeet(feet) {

    return distanceFromHqInBlocks(feet) * blockToFeet
}


function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs((endBlock - startBlock) * blockToFeet)

}


function calculatesFarePrice(start, destination) {
    let freeFeet = 400
    const feetWalked = distanceTravelledInFeet(start, destination)
    if (feetWalked <= freeFeet) {
        return 0
    } else if (feetWalked > freeFeet && feetWalked <= 2000) {
        return (feetWalked - 400) * 0.02

    } else if (feetWalked > 2000 && feetWalked < 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }

}