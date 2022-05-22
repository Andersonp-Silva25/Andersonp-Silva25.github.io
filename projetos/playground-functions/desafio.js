// Desafio 1
function compareTrue(value1, value2) {
  if(value1 === true && value2 === true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let separator = " ";
  let array = string.split(separator);
  return array;
}

// Desafio 4
function concatName(names) {
  let firstPosition = names[0];
  let lastPosition = names[names.length-1];
  return lastPosition +", "+ firstPosition;
}

// Desafio 5
function footballPoints(wins, ties) {
  totalWins = wins * 3;
  totalTies = ties * 1;
  result = totalWins + totalTies;
  return result;
}

// Desafio 6
function highestCount(numbers) {
  let higherNumber = numbers[0];
  let countNumbers = 0;
  for(let index = 0; index < numbers.length; index += 1){
    if(higherNumber < numbers[index]){
      higherNumber = numbers[index];
    }
  }
  for(let index = 0; index < numbers.length; index += 1){
    if(higherNumber === numbers[index]){
      countNumbers += 1;
    }
  }
  return countNumbers;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1AndMouse = cat1 - mouse;
  let distanceCat2AndMouse = cat2 - mouse;
  if(distanceCat1AndMouse < 0){
    distanceCat1AndMouse = mouse - cat1;
  }
  if(distanceCat2AndMouse < 0){
    distanceCat2AndMouse = mouse - cat2;
  }
  if(distanceCat1AndMouse < distanceCat2AndMouse){
    return "cat1";
  }else if(distanceCat1AndMouse > distanceCat2AndMouse){
    return "cat2";
  }else if(distanceCat1AndMouse === distanceCat2AndMouse){
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];

  for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index]%3 === 0 && numbers[index]%5 === 0){
      result.push("fizzBuzz");
    }else if(numbers[index]%3 === 0){
      result.push("fizz");
    }else if(numbers[index]%5 === 0){
      result.push("buzz");
    }else{
      result.push("bug!");
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let result = "";
  for(let index = 0; index < string.length; index += 1){
    if(string[index] === "a"){
      result += "1";
    }else if(string[index] === "e"){
      result += "2";
    }else if(string[index] === "i"){
      result += "3";
    }else if(string[index] === "o"){
      result += "4";
    }else if(string[index] === "u"){
      result += "5";
    }else{
      result += string[index];
    }
  }
  return result;
}
function decode(string) {
  let result = "";
  for(let index = 0; index < string.length; index += 1){
    if(string[index] === "1"){
      result += "a";
    }else if(string[index] === "2"){
      result += "e";
    }else if(string[index] === "3"){
      result += "i";
    }else if(string[index] === "4"){
      result += "o";
    }else if(string[index] === "5"){
      result += "u";
    }else{
      result += string[index];
    }
  }
  return result;
}

// Desafio 10
function techList(tech, name) {
  if(tech == undefined || tech == '' || tech == 0 || tech == []){
    return "Vazio!";
  }

  tech.sort();
  let object = [];

  for(let index = 0; index < tech.length; index += 1){
    object.push(
      {
        tech: tech[index], 
        name: name,
      });
  }
  return object;

}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
