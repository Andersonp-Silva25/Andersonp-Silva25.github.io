// Desafio 11
function generatePhoneNumber(numbers) {
  let arrayNumbers = [];
  let thriceRepeat = 0;
  let phoneNumbers = "";

  if(numbers.length !== 11){
    return 'Array com tamanho incorreto.';
  }

  for(let index = 0; index < numbers.length; index += 1){
    for(let compare = 1; compare < numbers.length; compare += 1){
      if(numbers[index] === numbers[compare]){
        thriceRepeat += 1;
        if(thriceRepeat > 2){
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
    if(numbers[index] < 0 || numbers[index] > 9){
      return 'não é possível gerar um número de telefone com esses valores';
    }
    thriceRepeat = 0;
    arrayNumbers.push(numbers[index]);
  }
  phoneNumbers = "("+arrayNumbers[0]+arrayNumbers[1]+") "+arrayNumbers[2]+arrayNumbers[3]+arrayNumbers[4]+arrayNumbers[5]+arrayNumbers[6]+"-"+arrayNumbers[7]+arrayNumbers[8]+arrayNumbers[9]+arrayNumbers[10];

  return phoneNumbers;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = false;

  function soma(a, b){
    return Math.abs(a + b);
  }
  
  function subtracao(a,b){
    return Math.abs(a - b);
  }

  if(lineA < soma(lineB, lineC) && lineA > subtracao(lineB, lineC) && lineB < soma(lineA, lineC) && lineB > subtracao(lineA, lineC) && lineC < soma(lineA, lineB) && lineC > subtracao(lineA, lineB)){
    result = true;
  }

  return result;
}

// Desafio 13
function hydrate(string) {
  let findNumbers = /\d+/g; //Expressão regular que faz encontrar um ou mais digitos/numeros de forma global
  let result = string.match(findNumbers); //Usa o .match para pesquisar os numeros com a expressao global(findNumbers) dentro do parametro passado
  let drinkWater = 0;
  let answer = "";

  for(let index = 0; index < result.length; index += 1){
    drinkWater += Number(result[index]);
  }
  if(drinkWater === 1){
    String(drinkWater);
    answer = drinkWater + " copo de água";
  }else if(drinkWater > 1){
    answer = drinkWater + " copos de água";
  }
  return answer;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
