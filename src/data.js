/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// import MtgPrintings from 'VintagePrintings.json'
// import MtgEditions  from 'SetList.json'
// import MtgTypes     from 'CardTypes.json'
// import MtgKeywords  from 'Keywords.json'

MtgTypes    = { "meta": { "date": "2020-03-30", "pricesDate": "2020-03-30", "version": "4.6.2+20200330" }, "types": { "artifact": { "subTypes": ["Clue", "Contraption", "Equipment", "Food", "Fortification", "Treasure", "Vehicle"], "superTypes": ["Basic", "Legendary", "Ongoing", "Snow", "World"] }, "conspiracy": { "subTypes": [], "superTypes": ["Basic", "Legendary", "Ongoing", "Snow", "World"] }, "creature": { "subTypes": ["Advisor", "Aetherborn", "Ally", "Angel", "Antelope", "Ape", "Archer", "Archon", "Army", "Artificer", "Assassin", "Assembly-Worker", "Atog", "Aurochs", "Avatar", "Azra", "Badger", "Barbarian", "Basilisk", "Bat", "Bear", "Beast", "Beeble", "Berserker", "Bird", "Blinkmoth", "Boar", "Bringer", "Brushwagg", "Camarid", "Camel", "Caribou", "Carrier", "Cat", "Centaur", "Cephalid", "Chimera", "Citizen", "Cleric", "Cockatrice", "Construct", "Coward", "Crab", "Crocodile", "Cyclops", "Dauthi", "Demigod", "Demon", "Deserter", "Devil", "Dinosaur", "Djinn", "Dragon", "Drake", "Dreadnought", "Drone", "Druid", "Dryad", "Dwarf", "Efreet", "Egg", "Elder", "Eldrazi", "Elemental", "Elephant", "Elf", "Elk", "Eye", "Faerie", "Ferret", "Fish", "Flagbearer", "Fox", "Frog", "Fungus", "Gargoyle", "Germ", "Giant", "Gnome", "Goat", "Goblin", "God", "Golem", "Gorgon", "Graveborn", "Gremlin", "Griffin", "Hag", "Harpy", "Head", "Hellion", "Hippo", "Hippogriff", "Homarid", "Homunculus", "Hornet", "Horror", "Horse", "Hound", "Human", "Hydra", "Hyena", "Illusion", "Imp", "Incarnation", "Insect", "Jackal", "Jellyfish", "Juggernaut", "Kavu", "Kirin", "Kithkin", "Knight", "Kobold", "Kor", "Kraken", "Lamia", "Lammasu", "Leech", "Leviathan", "Lhurgoyf", "Licid", "Lizard", "Manticore", "Masticore", "Mercenary", "Merfolk", "Metathran", "Minion", "Minotaur", "Mole", "Monger", "Mongoose", "Monk", "Monkey", "Moonfolk", "Mouse", "Mutant", "Myr", "Mystic", "Naga", "Nautilus", "Nephilim", "Nightmare", "Nightstalker", "Ninja", "Noble", "Noggle", "Nomad", "Nymph", "Octopus", "Ogre", "Ooze", "Orb", "Orc", "Orgg", "Ouphe", "Ox", "Oyster", "Pangolin", "Peasant", "Pegasus", "Pentavite", "Pest", "Phelddagrif", "Phoenix", "Pilot", "Pincher", "Pirate", "Plant", "Praetor", "Prism", "Processor", "Rabbit", "Rat", "Rebel", "Reflection", "Reveler", "Rhino", "Rigger", "Rogue", "Rukh", "Sable", "Salamander", "Samurai", "Sand", "Saproling", "Satyr", "Scarecrow", "Scion", "Scorpion", "Scout", "Sculpture", "Serf", "Serpent", "Servo", "Shade", "Shaman", "Shapeshifter", "Sheep", "Siren", "Skeleton", "Slith", "Sliver", "Slug", "Snake", "Soldier", "Soltari", "Spawn", "Specter", "Spellshaper", "Sphinx", "Spider", "Spike", "Spirit", "Splinter", "Sponge", "Squid", "Squirrel", "Starfish", "Surrakar", "Survivor", "Teddy", "Tentacle", "Tetravite", "Thalakos", "Thopter", "Thrull", "Treefolk", "Trilobite", "Triskelavite", "Troll", "Turtle", "Unicorn", "Vampire", "Vedalken", "Viashino", "Volver", "Wall", "Warlock", "Warrior", "Wasp", "Weird", "Werewolf", "Whale", "Wizard", "Wolf", "Wolverine", "Wombat", "Worm", "Wraith", "Wurm", "Yeti", "Zombie", "Zubera"], "superTypes": ["Basic", "Legendary", "Ongoing", "Snow", "World"] }, "enchantment": { "subTypes": ["Aura", "Cartouche", "Curse", "Saga", "Shrine"], "superTypes": ["Basic", "Legendary", "Ongoing", "Snow", "World"] }, "instant": { "subTypes": ["Adventure", "Arcane", "Trap"], "superTypes": ["Basic", "Legendary", "Ongoing", "Snow", "World"] }, "land": { "subTypes": ["Desert", "Forest", "Gate", "Island", "Lair", "Locus", "Mine", "Mountain", "Plains", "Power-Plant", "Swamp", "Tower", "Urza’s"], "superTypes": ["Basic", "Legendary", "Ongoing", "Snow", "World"] }, "phenomenon": { "subTypes": [], "superTypes": ["Basic", "Legendary", "Ongoing", "Snow", "World"] }, "plane": { "subTypes": ["Alara", "Arkhos", "Azgol", "Belenon", "Bolas's Meditation Realm", "Dominaria", "Equilor", "Ergamon", "Fabacin", "Innistrad", "Iquatana", "Ir", "Kaldheim", "Kamigawa", "Karsus", "Kephalai", "Kinshala", "Kolbahan", "Kyneth", "Lorwyn", "Luvion", "Mercadia", "Mirrodin", "Moag", "Mongseng", "Muraganda", "New Phyrexia", "Phyrexia", "Pyrulea", "Rabiah", "Rath", "Ravnica", "Regatha", "Segovia", "Serra's Realm", "Shadowmoor", "Shandalar", "Ulgrotha", "Valla", "Vryn", "Wildfire", "Xerex", "Zendikar"], "superTypes": ["Basic", "Legendary", "Ongoing", "Snow", "World"] }, "planeswalker": { "subTypes": ["Abian", "Ajani", "Aminatou", "Angrath", "Arlinn", "Ashiok", "B.O.B.", "Bolas", "Calix", "Chandra", "Dack", "Daretti", "Davriel", "Domri", "Dovin", "Duck", "Dungeon", "Elspeth", "Estrid", "Freyalise", "Garruk", "Gideon", "Huatli", "Inzerva", "Jace", "Jaya", "Karn", "Kasmina", "Kaya", "Kiora", "Koth", "Liliana", "Master", "Nahiri", "Narset", "Nissa", "Nixilis", "Oko", "Ral", "Rowan", "Saheeli", "Samut", "Sarkhan", "Serra", "Sorin", "Tamiyo", "Teferi", "Teyo", "Tezzeret", "Tibalt", "Ugin", "Urza", "Venser", "Vivien", "Vraska", "Will", "Windgrace", "Wrenn", "Xenagos", "Yanggu", "Yanling"], "superTypes": ["Basic", "Legendary", "Ongoing", "Snow", "World"] }, "scheme": { "subTypes": [], "superTypes": ["Basic", "Legendary", "Ongoing", "Snow", "World"] }, "sorcery": { "subTypes": ["Adventure", "Arcane", "Trap"], "superTypes": ["Basic", "Legendary", "Ongoing", "Snow", "World"] }, "tribal": { "subTypes": [], "superTypes": ["Basic", "Legendary", "Ongoing", "Snow", "World"] }, "vanguard": { "subTypes": [], "superTypes": ["Basic", "Legendary", "Ongoing", "Snow", "World"] } } };
MtgKeywords = { "abilityWords": ["adamant", "addendum", "battalion", "bloodrush", "channel", "chroma", "cohort", "constellation", "converge", "council's dilemma", "delirium", "domain", "eminence", "enrage", "fateful hour", "ferocious", "formidable", "grandeur", "hellbent", "heroic", "imprint", "inspired", "join forces", "kinship", "landfall", "lieutenant", "metalcraft", "morbid", "parley", "radiance", "raid", "rally", "revolt", "spell mastery", "strive", "sweep", "tempting offer", "threshold", "undergrowth", "will of the council"], "keywordAbilities": ["absorb", "affinity", "afflict", "afterlife", "aftermath", "amplify", "annihilator", "ascend", "assist", "aura swap", "awaken", "banding", "battle cry", "bestow", "bloodthirst", "bushido", "buyback", "cascade", "champion", "changeling", "cipher", "conspire", "convoke", "crew", "cumulative upkeep", "cycling", "dash", "deathtouch", "defender", "delve", "dethrone", "devoid", "devour", "double strike", "dredge", "echo", "embalm", "emerge", "enchant", "entwine", "epic", "equip", "escalate", "escape", "eternalize", "evoke", "evolve", "exalted", "exploit", "extort", "fabricate", "fading", "fear", "first strike", "flanking", "flash", "flashback", "flying", "forecast", "fortify", "frenzy", "fuse", "graft", "gravestorm", "haste", "haunt", "hexproof", "hidden agenda", "hideaway", "horsemanship", "improvise", "indestructible", "infect", "ingest", "intimidate", "jump-start", "kicker", "landwalk", "level up", "lifelink", "living weapon", "madness", "melee", "menace", "mentor", "miracle", "modular", "morph", "myriad", "ninjutsu", "offering", "outlast", "overload", "partner", "persist", "phasing", "poisonous", "protection", "provoke", "prowess", "prowl", "rampage", "reach", "rebound", "recover", "reinforce", "renown", "replicate", "retrace", "riot", "ripple", "scavenge", "shadow", "shroud", "skulk", "soulbond", "soulshift", "spectacle", "splice", "split second", "storm", "sunburst", "surge", "suspend", "totem armor", "trample", "transfigure", "transmute", "tribute", "undaunted", "undying", "unearth", "unleash", "vanishing", "vigilance", "wither"], "keywordActions": ["abandon", "activate", "adapt", "amass", "assemble", "attach", "bolster", "cast", "clash", "counter", "create", "destroy", "detain", "discard", "double", "exchange", "exert", "exile", "explore", "fateseal", "fight", "goad", "investigate", "manifest", "meld", "monstrosity", "planeswalk", "play", "populate", "proliferate", "regenerate", "reveal", "sacrifice", "scry", "search", "set in motion", "shuffle", "support", "surveil", "tap and untap", "transform", "vote"], "meta": { "date": "2020-03-30", "pricesDate": "2020-03-30", "version": "4.6.2+20200330" } };

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/*
 *
 */
const mtgSymbols = [

];

/*
 *
 */
const mtgKeywords = [

];

/*
 *
 */
const mtgCardNames = [

];

/*
 *
 */
const mtgCardTypes = [

];

/*
 *
 */
const mtgSupertypes = [

];

/*
 *
 */
const mtgCreatureTypes = [

];

/*
 *
 */
const mtgPlaneswalkerTypes = [

];

/*
 *
 */
const mtgLandTypes = [

];

/*
 *
 */
const mtgSpellTypes = [

];

/*
 *
 */
const mtgArtifactTypes = [

];

/*
 *
 */
const mtgEnchantmentTypes = [

];

/*
 *
 */
const mtg = [

];

/*
 *
 */
const mtg = [

];

/*
 *
 */
const mtgSubtypes = {

  creature:     mtgCreatureTypes,
  planeswalker: mtgPlaneswalkerTypes,
  land:         mtgLandTypes,
  instant:      mtgSpellTypes,
  sorcery:      mtgSpellTypes,
  artifact:     mtgArtifactTypes,
  enchantment:    mtgEnchantmentTypes

};

/*
 *
 */
const mtgBlocks = [

  "tsp",

];

/* 🃏
 *
 */
const mtgEditions = [

  {
    name: "Time Spiral",
    code: "tsp",
    block: "tsp",
    icons: { char: '⏳', svg: _ },
  },

  {
    name: "Planar Chaos",
    code: "plc",
    block: "tsp",
    icons: { char: '🗗', svg: _ },
  },

  {
    name: "Future Sight",
    code: "fut",
    block: "tsp",
    icons: { char: '👁', svg: _ },
  },

];

/*
 *
 */
const mtgRarities = [

];

/*
 *
 */
const mtgFormats = [

];

const mtgRarities = [

];

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const DATA = {};  // ‹const›ant reference, not immutable.

//

DATA.printings = {
};

//

DATA.editions = {
};

//

DATA.types = {
};

//

DATA.keywords = {
};

//

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/* raw:
 
- name
- types
- rules
 
e.g. `Bird` ≈ `name:Bird | type:Bird | oracle:Bird` (`n:Bird | t:Bird | o:Bird`)
 
 */



/*
 
 */
function cardFromJSON(o) {
    const card = {

        // “Game fields”:

        name: o.name,

        mana: o.manaCost,
        cmc: Math.trunc(o.convertedManaCost),

        colors: o.colors,
        ci: o.colorIdentity,

        supertypes: o.supertypes,
        cardtypes: o.types,
        subtypes: o.subtypes,

        rulestext: o.text.split('\n'),

        power: o.power,
        toughness: o.toughness,
        loyalty: o.loyalty,

        side: o.side,

      // “Print fields”:
  
       : o.,
       : o.,
       : o.,
       : o.,
       : o.,
       : o.,
       : o.,
       : o.,
       : o.,
       : o.,
       : o.,
       : o.,

      // IDs:
  
       : o.,
       : o.,
       : o.,
       : o.,

  /*
    card. = o.;
   */
  
    };

//

return card;
  }


name
names

manaCost
convertedManaCost

colors
colorIdentity

types
subtypes
supertypes

power
toughness
loyalty

text
isTextless

side
otherFaceIds
faceConvertedManaCost

// “ID fields”:

uuid
multiverseId
scryfallId
scryfallOracleId
scryfallIllustrationId

// “Print fields”:

printings
foreignData

number
rarity

flavorText
watermark
artist

borderColor
layout
frameEffect
frameEffects
frameVersion

isReprint
isTimeshifted
isReserved

originalText
originalType

legalities
rulings

variations
reverseRelated

//











/* mtg.json:card
 
https://mtgjson.com/structures/card/
 
artist
 
borderColor
 
colorIdentity
 
colorIndicator
 
colors
 
convertedManaCost
 
count
 
duelDeck
 
edhrecRank
 
faceConvertedManaCost
 
flavorText
 
foreignData
 
frameEffect
 
frameEffects
 
frameVersion
 
hand
 
hasFoil
 
hasNoDeckLimit
 
hasNonFoil
 
isAlternative
 
isArena
 
isFullArt
 
isMtgo
 
isOnlineOnly
 
isOversized
 
isPaper
 
isPromo
 
isReprint
 
isReserved
 
isStarter
 
isStorySpotlight
 
isTextless
 
isTimeshifted
 
layout
 
leadershipSkills
 
legalities
 
life
 
loyalty
 
manaCost
 
mcmId
 
mcmMetaId
 
mtgArenaId
 
mtgoFoilId
 
mtgoId
 
mtgstocksId
 
multiverseId
 
name
 
names
 
number
 
originalText
 
originalType
 
otherFaceIds
 
power
 
prices
 
printings
 
purchaseUrls
 
rarity
 
reverseRelated
 
rulings
 
scryfallId
 
scryfallOracleId
 
scryfallIllustrationId
 
side
 
subtypes
 
supertypes
 
tcgplayerProductId
 
text
 
toughness
 
type
 
types
 
uuid
 
variations
 
watermark
 
 */

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

async function getProcessedData(url) {
    let v
    try {
      v = await downloadData(url)
    } catch(e) {
      v = await downloadFallbackData(url)
    }
    try {
      return await processDataInWorker(v)  // Note the `return await` vs. just `return`
    } catch (e) {
      return null
    }
  }

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
