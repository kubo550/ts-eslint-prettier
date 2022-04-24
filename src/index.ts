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

const data = [
  { product: 'apple', price: 100 },
  { product: 'banana', price: 200 },
  { product: 'orange', price: 300 },
  { product: 'apple', price: 400 },
];

// group by product

const result2 = _.chain(data)
  .groupBy('product')
  .map((group) => {
    return {
      product: group[0].product,
      price: _.sumBy(group, 'price'),
    };
  })
  .value();

console.log(result2);

class Person {
  private readonly name: string;
  private readonly age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const me = new Person('ryan', 35);
