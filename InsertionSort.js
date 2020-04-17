/**
 *
 * @param {*} A array
 * Algorithm:
 * Step1: leftmost element is the starting point, compare element to the right with elements to the left
 */
//[20,30,10,40,5]
var insertionSort = (A) => {
    const len = A.length;
    for(let i=1; i<len;  i++) {
        for(let j=i-1; j>=0; j--) {
            if(A[i]<A[j]) {
                let temp=A[j];
                A[j]=A[i];
                A[i]=temp;
                i=j
            }
        }
    }

    return A;
}
