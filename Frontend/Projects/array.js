// in the array remove duplicate values

function nums(arr,len){
    for(let i=0;i<=len-1;i++){
        for(let j=i+1;j<=len;j++){
            if(arr[i] == arr[j]){
                arr[j] = '_';
            }
        }
    }
    return arr;
}
let arr = [1,1,2,2];
let len = arr.length;
console.log(nums(arr,len));