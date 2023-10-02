const dynastyReign = [
  {dynasty: 'San Dynasty', year: 'MXLI'},
  {dynasty: 'Villoria Dynasty', year: 'MCCCIIII'},
  {dynasty: 'Tan Dynasty', year: 'MCCCXCVIII'},
  {dynasty: 'Bon Dynasty', year: 'MCDXLV'},
  {dynasty: 'Maiko Dynasty', year: 'MDCLXIV'},
  {dynasty: 'Paul Dynasty', year: 'MCMXLIX'},
  {dynasty: 'Andre Dynasty', year: 'MMMXICX'},
];



function longestDynasty(dynastyReign){
    
    const endYear = 2023;
    

    let dynasties = 'No Data';
    let years = 0;

    for (let i = 0; i < dynastyReign.length; i++){
      const dynasty = dynastyReign[i];
      const startYear = convertYear(dynasty.year)
      const resultDuration = endYear - startYear;

      if (resultDuration > years) {
        years = resultDuration;
        dynasties = dynasty.dynasty;
      }

    }
  
return dynasties;
}



function convertYear(year) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let preValue = 0;

  for (let i = year.length - 1; i >= 0; i--) {
    const currentNumeral = year[i];
    const currentValue = romanNumerals[currentNumeral];

    if(currentValue < preValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    preValue = currentValue;
  }

  return result;
}

const longestDynastyReign = longestDynasty(dynastyReign);

console.log(longestDynastyReign);