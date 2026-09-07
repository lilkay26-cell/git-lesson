/**
 * Returns the plural form of a single English word.
 * Handles common English pluralization rules.
 */
function pluralizeWord(word) {
  // Handle irregular nouns
  const irregulars = {
    man: "men",
    woman: "women",
    child: "children",
    person: "people",
    foot: "feet",
    tooth: "teeth",
    goose: "geese",
    mouse: "mice",
    sheep: "sheep",
    fish: "fish",
    deer: "deer",
    species: "species",
    series: "series",
    ox: "oxen",
    cactus: "cacti",
    focus: "foci",
    fungus: "fungi",
    nucleus: "nuclei",
    syllabus: "syllabi",
    analysis: "analyses",
    diagnosis: "diagnoses",
    basis: "bases",
    crisis: "crises",
    thesis: "theses",
    datum: "data",
    medium: "media",
    phenomenon: "phenomena",
    criterion: "criteria",
    index: "indices",
    matrix: "matrices",
    vertex: "vertices",
    appendix: "appendices",
    alias: "aliases",
    status: "statuses",
    quiz: "quizzes",
    bus: "buses",
    box: "boxes",
    church: "churches",
    brush: "brushes",
    fox: "foxes",
    dish: "dishes",
    watch: "watches",
    class: "classes",
    glass: "glasses",
    hero: "heroes",
    potato: "potatoes",
    tomato: "tomatoes",
    echo: "echoes",
    veto: "vetoes",
    leaf: "leaves",
    life: "lives",
    knife: "knives",
    wife: "wives",
    wolf: "wolves",
    loaf: "loaves",
    thief: "thieves",
    shelf: "shelves",
    calf: "calves",
    half: "halves",
    self: "selves",
    photo: "photos",
    piano: "pianos",
    halo: "halos",
    zoo: "zoos",
    studio: "studios",
    bay: "bays",
    day: "days",
    toy: "toys",
    key: "keys",
    boy: "boys",
    baby: "babies",
    city: "cities",
    country: "countries",
    family: "families",
    story: "stories",
    berry: "berries",
    lady: "ladies",
    party: "parties",
    duty: "duties",
    army: "armies",
    fly: "flies",
    sky: "skies",
    try: "tries",
    cry: "cries",
    spy: "spies",
    reply: "replies",
    activity: "activities",
    company: "companies",
    category: "categories",
    copy: "copies",
    cherry: "cherries",
    dictionary: "dictionaries",
    library: "libraries",
    responsibility: "responsibilities",
    ability: "abilities",
    possibility: "possibilities",
    quality: "qualities",
    quantity: "quantities",
    identity: "identities",
    authority: "authorities",
    community: "communities",
    opportunity: "opportunities",
    university: "universities",
    security: "securities",
    necessity: "necessities",
    luxury: "luxuries",
    memory: "memories",
    history: "histories",
    victory: "victories",
    industry: "industries",
    property: "properties",
    facility: "facilities",
    difficulty: "difficulties",
    economy: "economies",
    policy: "policies",
    strategy: "strategies",
    technology: "technologies",
    biology: "biologies",
    sociology: "sociologies",
    psychology: "psychologies",
    hypothesis: "hypotheses",
    cycle: "cycles",
    style: "styles",
    mile: "miles",
    file: "files",
    smile: "smiles",
    while: "whiles",
    pile: "piles",
    tile: "tiles",
    bottle: "bottles",
    table: "tables",
    apple: "apples",
    example: "examples",
    sample: "samples",
    article: "articles",
    vehicle: "vehicles",
    principle: "principles",
    interview: "interviews",
    nature: "natures",
    culture: "cultures",
    creature: "creatures",
    feature: "features",
    picture: "pictures",
    structure: "structures",
    lecture: "lectures",
    architecture: "architectures",
    gesture: "gestures",
    waste: "wastes",
    taste: "tastes",
    paste: "pastes",
    haste: "hastes",
    estate: "estates",
    state: "states",
    rate: "rates",
    mate: "mates",
    date: "dates",
    fate: "fates",
    gate: "gates",
    plate: "plates",
    slate: "slates",
    late: "lates",
    skate: "skates",
    crate: "crates",
    update: "updates",
    execute: "executes",
    attribute: "attributes",
    contribute: "contributes",
    distribute: "distributes",
    institute: "institutes",
    constitute: "constitutes",
    substitute: "substitutes",
  };

  const lower = word.toLowerCase();

  if (irregulars[lower]) {
    // Preserve original capitalization if the word was capitalized
    if (word[0] === word[0].toUpperCase()) {
      const plural = irregulars[lower];
      return plural[0].toUpperCase() + plural.slice(1);
    }
    return irregulars[lower];
  }

  // Words ending in -s, -x, -z, -ch, -sh → add -es
  if (/(s|x|z|ch|sh)$/i.test(word)) {
    return word + "es";
  }

  // Words ending in consonant + y → change y to ies
  // (but not vowel + y like "boy" → "boys")
  if (/[^aeiou]y$/i.test(word)) {
    return word.slice(0, -1) + "ies";
  }

  // Words ending in -f or -fe → often change to -ves
  if (/fe$/i.test(word)) {
    return word.slice(0, -2) + "ves";
  }
  if (/[^f]f$/i.test(word)) {
    return word.slice(0, -1) + "ves";
  }

  // Words ending in consonant + o → add -es (heroes, potatoes)
  if (/[^aeiou]o$/i.test(word)) {
    return word + "es";
  }

  // Default: add -s
  return word + "s";
}

/**
 * Given an array of words, returns an array of their plural forms.
 * @param {string[]} words
 * @returns {string[]}
 */
function getPlural(words) {
  return words.map(pluralizeWord);
}

// Example usage
if (require.main === module) {
  const examples = [
    "cat",
    "dog",
    "bus",
    "box",
    "church",
    "lady",
    "boy",
    "photo",
    "hero",
    "wife",
    "leaf",
    "man",
    "child",
    "person",
    "foot",
    "mouse",
    "sheep",
    "analysis",
    "datum",
    "criterion",
    "index",
    "quiz",
    "potato",
    "tomato",
  ];

  console.log("Plural forms:");
  examples.forEach((w) => console.log(`  ${w} -> ${pluralizeWord(w)}`));

  console.log("\ngetPlural(['apple', 'woman', 'box', 'city']):");
  console.log(getPlural(["apple", "woman", "box", "city"]));
}
