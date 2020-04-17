var merge = (leftArr, rightArr, arr) => {
    let i = 0, j = 0, k = 0;
    let leftArrLength = leftArr.length;
    let rightArrLength = rightArr.length;

    while (i < leftArrLength && j < rightArrLength) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
            k++;
        } else {
            arr[k] = rightArr[j];
            j++;
            k++;
        }
    }

    while (i < leftArrLength) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }
    while (j < rightArrLength) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
    return arr;
}
//[20, 30, 10, 40, 5]
var mergeSort = (arr) => {
    let arrLen = arr.length;
    if(arrLen < 2) {
        return;
    }

    const mid =  Math.floor((arrLen) / 2);
    let leftArr = [], rightArr = [];
    let leftArrLength = mid;
    let rightArrLength = arrLen - mid;
    for (let i = 0; i < leftArrLength; i++) {
        leftArr.push(arr[i]);
    }
    for (let j = 0; j < rightArrLength; j++) {
        rightArr.push(arr[j+mid]);
    }
    mergeSort(leftArr);
    mergeSort(rightArr);
    merge(leftArr, rightArr, arr);
    console.log(arr);
    return arr;
}

//Method 2:
//[20,30,10,40,5]

var merge= (A, start, end, mid) => {
    let leftArr=[];
    let leftArrLen = mid - start+1;
    for(let i=0; i<leftArrLen; i++) {
        leftArr.push(A[i+start])
    }
    let rightArr=[];
    let rightArrLen= end - mid;
    for(let j=0; j<rightArrLen; j++) {
        rightArr.push(A[j+mid+1])
    }
    let i=0,j=0,k=start;
    while(i<leftArrLen && j<rightArrLen) {
        if(leftArr[i] < rightArr[j]) {
            A[k] = leftArr[i];
            i++;
            k++
        } else {
            A[k] = rightArr[j];
            j++;
            k++
        }
    }

    while(i < leftArrLen) {
        A[k] = leftArr[i];
        i++;
        k++;
    }

    while(j < rightArrLen) {
        A[k] = rightArr[j];
        j++;
        k++
    }
    return A;
}

var MergeSort = (A, start, end) => {
    if(start >= end) {
        return
    }

    const mid = Math.floor((start+end)/2);
    MergeSort(A, start, mid);
    MergeSort(A, mid+1, end);
    merge(A, start, end, mid);
    return A;
}
