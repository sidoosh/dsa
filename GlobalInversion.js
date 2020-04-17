//Both Solutions working

/**
 * @param {number[]} A
 * @return {boolean}
 */
var globalInvCount=0;
var merge = (leftArr, rightArr, arr) => {
    let i=0,j=0,k=0;
    let leftArrLen = leftArr.length;
    let rightArrLen = rightArr.length;

    while(i<leftArrLen && j<rightArrLen) {
        if(leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
            k++
        } else {
            arr[k] = rightArr[j];
            j++;
            k++;
            globalInvCount += leftArrLen - i;
        }
    }

    while(i<leftArrLen) {
        arr[k] = leftArr[i];
        i++;
        k++
    }
    while(j<rightArrLen) {
        arr[k] = rightArr[j];
        j++;
        k++
    }
    return globalInvCount;
}
var mergeSort = (arr) => {
    const arrLen = arr.length;
    if(arrLen < 2) return 0;
    const mid = Math.floor(arrLen/2);
    let leftArr=[], rightArr=[];
    const leftArrLen=mid;
    const rightArrLen=arrLen - mid;

    for(let i=0; i<leftArrLen; i++) {
        leftArr.push(arr[i]);
    }
    for(let j=0; j<rightArrLen; j++) {
        rightArr.push(arr[j+mid]);
    }
    mergeSort(leftArr);
    mergeSort(rightArr);
    merge(leftArr, rightArr, arr);
}
var isIdealPermutation = function(A) {
    let localInvCount=0;
    for(let i=0, len=A.length; i<len; i++) {
        if(A[i] > A[i+1]) {
            localInvCount++
        }
    }
    mergeSort(A);
    const res = localInvCount === globalInvCount;
    globalInvCount=0;
    return res;
};


//Method2
/**
 * @param {number[]} A
 * @return {boolean}
 */
var globalInvCount=0;
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
            k++;
            globalInvCount += leftArrLen - i
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

var isIdealPermutation = function(A) {
    let localInvCount=0;
    for(let i=0, len=A.length; i<len; i++) {
        if(A[i] > A[i+1]) {
            localInvCount++
        }
    }
    MergeSort(A, 0, A.length - 1);
    const res = localInvCount === globalInvCount;
    globalInvCount=0;
    return res;
};

