function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
  return `${this.owner} loves ${this.name}`;
};

let cat = new Cat('leo', 'Anna');
cat.owner = "Everyone";

console.log(cat.cuteStatement());
