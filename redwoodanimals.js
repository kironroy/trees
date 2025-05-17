class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  describe() {
    return `${this.name} is a ${this.type} found in the redwood forests.`;
  }
}

class Mammal extends Animal {
  constructor(name) {
    super(name, 'Mammal');
  }
}

class Bird extends Animal {
  constructor(name) {
    super(name, 'Bird');
  }
}

class ReptileAmphibian extends Animal {
  constructor(name) {
    super(name, 'Reptile/Amphibian');
  }
}

class Fish extends Animal {
  constructor(name) {
    super(name, 'Fish');
  }
}

class Invertebrate extends Animal {
  constructor(name) {
    super(name, 'Invertebrate');
  }
}

const animals = [
  new Mammal('Roosevelt Elk'),
  new Bird('Northern Spotted Owl'),
  new ReptileAmphibian('Wandering Salamander'),
  new Fish('Salmon'),
  new Invertebrate('Banana Slug'),
];

const animalList = document.getElementById('animal-list');
animals.forEach(animal => {
  const listItem = document.createElement('li');
  listItem.textContent = animal.describe();
  animalList.appendChild(listItem);
});
