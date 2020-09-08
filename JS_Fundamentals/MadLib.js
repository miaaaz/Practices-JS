// A function that takes three strings - a verb,
// an adjective, and a noun - uppercases and
// interpolates them into the sentence "We shall
// VERB the ADJECTIVE NOUN".
function madLib(verb, adj, noun) {
  console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}`);
}

// Test
madLib('make', 'best', 'guac');
