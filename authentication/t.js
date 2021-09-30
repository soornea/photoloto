const found = (arr, index, target) => {
    const res = (arr.slice(index).find(e => e === target));
    //console.log('??? ', res, 'slice ', arr.slice(index) , 'target: ', target);
    return res;
}


function threeNumberSum(array, targetSum) {
    // Write your code here.
    const finalResult = [];
    const sorted = array.sort();
    let i = 1
    sorted.forEach((e, index) => {

        for (let k = 0; i < array.length; k++) {
            let currSum = e + sorted[i];
            let foundRes = found(sorted, i, targetSum - currSum)
            console.log('curr sum:', currSum, 'i:', i, 'target: ', targetSum - currSum)
            if (foundRes) {
                finalResult.push([e, sorted[i], foundRes])
            }
            i++;
        }


    });

    console.log('000', finalResult)
    console.log('sorted', sorted)
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
