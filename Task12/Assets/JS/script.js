// let arr = [12,15,23,40,5,3];

// function One(a) {
//     let arr1 = a;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]==arr1){
//             return arr1;
//         }
//     }
// }

// console.log(One(23));


// function Two() {
//     let c = " ";

//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%2==0){
//             c = c + arr[i] + " ";
//         }
//     }
//     return c;
// }

// console.log(Two());



function Calc(a, b, c="+") {

    switch (c)
    {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
             return -1;
    }
}

console.log(Calc(12,5));
