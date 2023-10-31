function test() {
  const data = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => res.json())
    .then((rest) => console.log(rest));
  console.log(data);
}

test();
