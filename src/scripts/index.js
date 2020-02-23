import '../styles/index.scss';

console.log('webpack starterkit');

async function doit(){
  const test = await fetch("http://jsonplaceholder.typicode.com/todos");
}
doit();