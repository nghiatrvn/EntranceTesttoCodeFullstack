let weight = [60, 40, 55, 75, 64];

const informSum = (arr) => {
  let team1 = 0;
  let team2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      team1 += arr[i];
    } else {
      team2 += arr[i];
    }
  }
  return [team1, team2];
};

let Total = informSum(weight);
console.log(Total);
