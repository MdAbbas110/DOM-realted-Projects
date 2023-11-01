// In this function we use clouser to understand the concept of it

// Define when a function returns a function is called clouser

function clo() {
  const c = 23;
  return function ab() {
    console.log(c);
  };
}

const take = col();
//now the value is in take as well

//if there will be more senior like this the concept of  lexical scope also comes up in this particular place only

function lex(params) {
  return function ab(params) {
    return function cb() {
      console.log('a');
    };
  };
}

const taking = lec();
console.log(taking);
//Now taking has all the chain of scope that is there
//but with some condition
