/**
 *
 * @param {*} A arr
 * Algo:
 * Step1: take a pivot ele (can be last element)
 * Step2:
 */

 //[7, 2, 5, 6, 4]
var findPartitionIndex = (A, start, end) => {
    const pivotEle = A[end];
    let partitionIndex = start;
    for(let i=start; i<end; i++) {
        if(A[i] < pivotEle) {
            const temp = A[i];
            A[i] = A[partitionIndex];
            A[partitionIndex] = temp;
            partitionIndex++;
        }
    }
    const temp = A[partitionIndex];
    A[partitionIndex] = A[end];
    A[end] = temp;

    return partitionIndex;
}
var QuickSort = (A, start, end) => {
    if(start >= end) {
        return;
    }
    let partitionIndex = findPartitionIndex(A, start, end);
    QuickSort(A, start, partitionIndex - 1);
    QuickSort(A, partitionIndex + 1, end);
    return A
}
