// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j < (arr.length -1 - i); j++) { // KEY HERE: - I !!!
            if (arr[j] > arr[j+1]) {
                let greaterVal = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = greaterVal;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    // "PROVE ME WRONG" algorithm
    for(let i=0; i<arr.length; i++) {
        let indexOfMin = i;

        for(let j = i+1; j < arr.length; j++) { 
            if (arr[j] < arr[indexOfMin]) indexOfMin = j;
        }

        if (i !== indexOfMin) {
            let lesserVal = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesserVal;
        }
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length ===1) return arr;

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center); // slice excludes the 2nd argument index
    const right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right)); // <------ KEY!
}

function merge(left, right) {
    const results = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) results.push(left.shift());
        else results.push(right.shift())
    }

    return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
