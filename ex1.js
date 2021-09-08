const arr = [2, 3, -5, -2, 4];
let test = mpcMax(arr);

function mpcMax (arr) {
  let mpcArr = []
  for (let i = 0; i < arr.length-1; i++) {
    let mpc = arr[i] * arr[i + 1];
    mpcArr.push(mpc);
  }
  let max= Math.max(...mpcArr);
  console.log('Multiplication max of arr is: ' + max);
}
