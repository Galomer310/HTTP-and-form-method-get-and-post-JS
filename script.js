const marioGame = {
  detail: "An amazing game!",
  characters: {
    mario: {
      description: "Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser: {
      description: "Big and green, Hates princesses.",
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach: {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2,
    },
  },
};

// Convert to JSON
const marioGameJSON = JSON.stringify(marioGame);
console.log(marioGameJSON);

// Pretty print the JSON
const prettyMarioGameJSON = JSON.stringify(marioGame, null, 2);
console.log(prettyMarioGameJSON);

// When the JavaScript object is converted into JSON:
// All properties are serialized into strings.
// Nested objects are preserved as nested JSON structures.
// The resulting JSON is a string that represents the hierarchical structure of the object.
