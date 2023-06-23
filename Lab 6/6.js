

const arr1 =[17,21,23], arr2 = [12,5,-5,0,4];

function printForecase(arr) {
    const size = arr.length;
    let str = '';
    for (let i = 0; i < size; i++) {
        str += `${arr[i]}ºC in ${i+1} days`;
    }
    console.log(str);
}

printForecase(arr1);
printForecase(arr2);