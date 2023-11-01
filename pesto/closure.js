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
