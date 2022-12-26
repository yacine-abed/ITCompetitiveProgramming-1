function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function partition(arr, d, f) {
    let pivot = arr[f];
    let i = (d - 1);
    for (let j = d; j <= f - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, f);
    return (i + 1);
}
function quickSort(arr, d, f) {
    if (d < f) {
        let pi = partition(arr, d, f);
        quickSort(arr, d, pi - 1);
        quickSort(arr, pi + 1, f);
    }
}
function printArray(arr, size) {
    for (let i = 0; i < size; i++)
        console.log(arr[i] + " ");
  
    
}
let arr = [10, 7, 8, 9, 1, 5];
let n = arr.length;
  
quickSort(arr, 0, n - 1);
console.log("Sorted array:");
printArray(arr, n);
console.log(arr)