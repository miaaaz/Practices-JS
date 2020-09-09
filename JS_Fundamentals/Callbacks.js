// Phase I
// Takes an array of names and a function (callback),
// create a new array full of titleized versions of each name
function titleize(array, callback) {
  const fullNames = array.map((name) => `Mx. ${name} Jingleheimer Schmidt`);
  callback(fullNames);
}

function printCallback(names) {
  names.forEach((element) => {
    console.log(element);
  });
}

// Test
titleize(["Mary", "Brian", "Leo"], printCallback);

// Phase II
function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function () {
  console.log(`${this.name} goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function () {
  this.height += 12;
};

Elephant.prototype.addTrick = function (trick) {
  this.tricks.push(trick);
};

Elephant.prototype.play = function () {
  const index = Math.floor(Math.random() * this.tricks.length);
  console.log(`${this.name} is ${this.tricks[index]}`);
};

// Phase III

// Create elephants
let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

// 'static' method, has no relation with instances
Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!`);
};

// Pass paradeHelper in as the callback without invoking it
herd.forEach(Elephant.paradeHelper);



// Phase IV: Closures
function dinerBreakfast() {
  let order = 'cheesy scrambled eggs';
  console.log(`I'd like ${order} please`);
  return (newFood) => {
    order = `${order} and ${newFood}`;
    console.log(`I'd like ${order} please`);
  }
}

// Test
let bfastOrder = dinerBreakfast();
bfastOrder("chocolate chip pancakes");
bfastOrder("grits");
