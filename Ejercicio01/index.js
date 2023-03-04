const randomNumbers = {};

for (let i = 0; i < 10000; i++) {
  const number = Math.floor(Math.random() * 20 + 1);

  if (!randomNumbers[number]) randomNumbers[number] = 1;
  //else randomNumbers[number] = randomNumbers[number] + 1;
  else randomNumbers[number]++;
}

console.log(randomNumbers);

/*  
    {
        5: 2,
        6: 1,
        10: 1
    }
*/
