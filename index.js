const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce(function(element, accumulator) {return element = accumulator + element},0)

console.log(totalBatteries)
