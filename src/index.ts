import _ from 'lodash';

const users = [
  { name: 'ryan', age: 35 },
  { name: 'lucy', age: 30 },
  { name: 'bob', age: 25 },
  { name: 'alice', age: 20 },
];

const result = _.chain(users)
  .filter((user) => user.age > 25)
  .map((user) => user.name)
  .value();

console.log(result);

function sayHello(name: string): string {
  return `Hello, ${name}`;
}

users.forEach((user) => {
  console.log(sayHello(user.name));
});

const helloYou = (name: string) => {
  name = 'you' || name;
  console.log('hello' + name + '!');
};
const a = 'a';
