/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import React    from 'react';
import ReactDOM from 'react-dom';

//

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/* a <form> (to write search queries).

*/
function SearchQuery(props) {

  // Properties:

  const { value, setValue } = props;

  // References:

  const refQueryBar = React.createRef();

  const refSubmit = React.createRef();

  const refQueryColor = React.createRef();

  const refQueryType = React.createRef();

  const refQueryMana = React.createRef();

  const refQueryNumerals = React.createRef();

  const refQueryRarity = React.createRef();

  const refQueryEdition = React.createRef();

  const refQueryLegality = React.createRef();

  const refQueryLanguage = React.createRef();

 /*

  const refQuery_ = React.createRef();

  */

  // Effects:

  React.useEffect(() => {

    function onQueryColorKeydown(e) {
  if (e.defaultPrevented) { return; }

  switch (e.key) {

    case "w":
      props.toggleColorWhite();
      break;

    case "u":
      props.toggleColorBlue();
      break;

    case "b":
      props.toggleColorBlack();
      break;

    case "r":
      props.toggleColorRed();
      break;

    case "g":
      props.toggleColorGreen();
      break;

    case "c":
      props.toggleColorless();
      break;

    case "m":
      props.toggleMulticolor();
      break;

    case "0":
      props.setExactlyColors0();
      break;

    case "1":
      props.setExactlyColors1();
      break;

    case "2":
      props.setExactlyColors2();
      break;

    case "3":
      props.setExactlyColors3();
      break;

    case "4":
      props.setExactlyColors4();
      break;

    case "5":
      props.setExactlyColors5();
      break;

    default:
      return;
  }

  e.preventDefault();
    }

    refQueryColor.addEventListener("keydown", onQueryColorKeydown, true);

    return () => { refQueryColor.removeEventListener("keydown", onQueryColorKeydown); };

  }, []);

  React.useEffect(() => {

    function onQueryTypeKeydown(e) {
  if (e.defaultPrevented) { return; }

  switch (e.key) {

    case "i":
      props.toggleTypeInstant();
      break;

    case "s":
      props.toggleTypeSorcery();
      break;

    case "l":
      props.toggleTypeLand();
      break;

    case "c":
      props.toggleTypeCreature();
      break;

    case "p":
      props.toggleTypePlaneswalker();
      break;

    case "a":
      props.toggleTypeArtifact();
      break;

    case "e":
      props.toggleTypeEnchantment();
      break;

    //

    case "m":
      props.toggleTypeEquipment();
      break;

    case "v":
      props.toggleTypeVehicle();
      break;

    //

    case "u":
      props.toggleTypeAura();
      break;

    case "g":
      props.toggleTypeSaga();
      break;

    //

 /*
    case "":
      props.toggleType();
      break;
  */

    default:
      return;
  }

  e.preventDefault();
    }

    refQueryType.addEventListener("keydown", onQueryTypeKeydown, true);

    return () => { refQueryType.removeEventListener("keydown", onQueryTypeKeydown); };

  }, []);

  React.useEffect(() => {

    function onQueryManaKeydown(e) {
  if (e.defaultPrevented) { return; }

  switch (e.key) {

    case "w":
      props.addManaWhite();
      break;

    case "u":
      props.addManaBlue();
      break;

    case "b":
      props.addManaBlack();
      break;

    case "r":
      props.addManaRed();
      break;

    case "g":
      props.addManaGreen();
      break;

    case "-":
    case "_":
      props.remManaGeneric();
      break;

    case "=":
    case "+":
      props.addManaGeneric();
      break;

    case "0":
      props.setCmc0();
      break;

    case "1":
      props.setCmc1();
      break;

    case "2":
      props.setCmc2();
      break;

    case "3":
      props.setCmc3();
      break;

    case "4":
      props.setCmc4();
      break;

    case "5":
      props.setCmc5();
      break;

    case "6":
      props.setCmc6();
      break;

    case "7":
      props.setCmc7();
      break;

    case "8":
      props.setCmc8();
      break;

    case "9":
      props.setCmc9();
      break;

    //

    case "-":
    case "_":
      props.decrementCmc();
      break;

    case "=":
    case "+":
      props.incrementCmc();
      break;

    case "0":
      props.setCmc0();
      break;

    case "1":
      props.setCmc1();
      break;

    case "2":
      props.setCmc2();
      break;

    case "3":
      props.setCmc3();
      break;

    case "4":
      props.setCmc4();
      break;

    case "5":
      props.setCmc5();
      break;

    case "6":
      props.setCmc6();
      break;

    case "7":
      props.setCmc7();
      break;

    case "8":
      props.setCmc8();
      break;

    case "9":
      props.setCmc9();
      break;

    //

    default:
      return;
  }

  e.preventDefault();
    }

    refQuery_.addEventListener("keydown", onQuery_Keydown, true);

    return () => { refQuery_.removeEventListener("keydown", onQuery_Keydown); };

  }, []);

  React.useEffect(() => {

    function onQueryLegalityKeydown(e) {
  if (e.defaultPrevented) { return; }

  switch (e.key) {

    case "v":
      props.setFormatVintage();
      break;

    case "l":
      props.setFormatLegacy();
      break;

    case "m":
      props.setFormatModern();
      break;

    case "s":
      props.setFormatStandard();
      break;

    case "o":
      props.setFormatOldschool();
      break;

    case "p":
      props.setFormatPauper();
      break;

    case "e":
      props.setFormatPioneer();
      break;

    case "c":
      props.setFormatCommander();
      break;

 /*
    case "":
      props.setFormat();
      break;
  */

    case "g":
      props.setLegalityLegal();
      break;

    case "b":
      props.setLegalityBanned();
      break;

    case "r":
      props.setLegalityRestricted();
      break;

    default:
      return;
  }

  e.preventDefault();
    }

    refQueryLegality.addEventListener("keydown", onQueryLegalityKeydown, true);

    return () => { refQueryLegality.removeEventListener("keydown", onQueryLegalityKeydown); };

  }, []);

  React.useEffect(() => {

    function onQueryRarityKeydown(e) {
  if (e.defaultPrevented) { return; }

  switch (e.key) {

    case "_":
      props.toggle_();
      break;

    default:
      return;
  }

  e.preventDefault();
    }

    refQuery_.addEventListener("keydown", onQuery_Keydown, true);

    return () => { refQuery_.removeEventListener("keydown", onQuery_Keydown); };

  }, []);

  React.useEffect(() => {

    function onQueryLanguageKeydown(e) {
  if (e.defaultPrevented) { return; }

  switch (e.key) {

    case "e":  // en
      props.setLanguageEnglish();
      break;

    case "s":  // es
      props.setLanguageSpanish();
      break;

    case "f":  // fr
      props.setLanguageFrench();
      break;

    case "d":  // de
    case "g":
      props.setLanguageGerman();
      break;

    case "i":  // it
      props.setLanguageItalian();
      break;

    case "p":  // pt
      props.setLanguagePortuguese();
      break;

    case "j":  // jp
      props.setLanguageJapanese();
      break;

    case "k":  // ko
      props.setLanguageKorean();
      break;

    case "r":  // ru
      props.setLanguageRussian();
      break;

    case "z":  // zh
      props.setLanguageChinese();
      break;

 /*
    case "":
      props.setLanguage();
      break;
  */

    default:
      return;
  }

  e.preventDefault();
    }

    refQueryLanguage.addEventListener("keydown", onQueryLanguageKeydown, true);

    return () => { refQueryLanguage.removeEventListener("keydown", onQueryLanguageKeydown); };

  }, []);

 /*

  React.useEffect(() => {

    function onQuery_Keydown(e) {
  if (e.defaultPrevented) { return; }

  switch (e.key) {

    case "_":
      props.toggle_();
      break;

    default:
      return;
  }

  e.preventDefault();
    }

    refQuery_.addEventListener("keydown", onQuery_Keydown, true);

    return () => { refQuery_.removeEventListener("keydown", onQuery_Keydown); };

  }, []);

  */

  // 

  return (
    <section id="query">

             // ^ “#query” URL Fragment.

      <h2>Query</h2>

      <br />

      <section>
      <label for="query-"> <strong><u>Q</u></strong>uery</label>
      <input type="text"
             name="query"
             id="query-bar"
             placeholder="e.g. « t>Elf o>(Elf|Elves) c>-g »"
             autocorrect="off"
             spellcheck="false"
             accesskey="q"
             onChange={props.handleQuery}
             value={props.value.query}
             ref={refQueryBar}>
      </section>

      <br />

      <!-- -->

      <section id= "query-colors"
                accesskey="c"
                ref={refQueryColor}>
      <fieldset>
      <legend> <strong><u>C</u></strong>olor </legend>

      <Colorbox name="white"
                on= {props.handle}
                value= {props.value.colors.white} >

      <Colorbox name="blue"
                on= {props.handle}
                value= {props.value.colors.blue} >

      <Colorbox name="black"
                on= {props.handle}
                value= {props.value.colors.black} >

      <Colorbox name="red"
                on= {props.handle}
                value= {props.value.colors.red} >

      <Colorbox name="green"
                on= {props.handle}
                value= {props.value.colors.green} >

      </fieldset>
      </section>

      <br />

      <section ref={refQueryType}>
      <label for="query-"> <strong><u>T</u></strong>ypes</label>
      <input type="text"
             name="types"
             id="query-types"
             accesskey="t"
             onChange= {props.handle}
             value= {props.value.types} >
      <br />
      <select multiple
              name="subtypes"
              id="query-subtypes"
              accesskey="s"
              onChange= {props.handle}
              value= {props.value.subtypes} >
        {options_mtgSubtypes}
      </select>
      <section>

      <br />

      <section ref={refQueryRules}>
      <label for="query-"> <strong><u>O</u></strong>racle Text</label>
      <textarea type="text"
                name="rules"
                id="query-rules"
                placeholder="e.g. « When ~ enters the battlefield, … »"
                autocorrect="off"
                spellcheck="false"
                accesskey="o"
                onChange= {props.handle}
                value= {props.value.rules} >
      </textarea>

      <br />

      <select multiple
              name="keywords"
              id="query-rules-keywords"
              accesskey="k"
              onChange= {props.handle}
              value= {props.value.keywords} >
        {options_mtgKeywords}
      </select>

      <fieldset>
        <input type="checkbox"
               name="vanilla"
               id="query-rules-vanilla"
               accesskey="v"
               onChange= {props.handle}
               value= {props.value.vanilla} >
      </fieldset>

      <br />
      <section>

      <br />

      <section ref={refQueryMana}>
      <fieldset>

        <label for="query-"> <strong><u>M</u></strong>ana</label>
        <input type="text"
               name="mana"
               id="query-mana"
               accesskey="m"
               onChange= {props.handle}
               value= {props.value.mana} >

        <br />

        <label for="query-"> <strong><u>C</u></strong>onverted Mana Cost</label>
        <input type="number"
               min="0"
               name="cmc"
               id="query-cmc"
               step="1"
               accesskey="#"
               onChange= {props.handle}
               value= {props.value.cmc} >
        <span id="query-cmc-validity">_</span>

      </fieldset>
      </section>

      <br />

      <section ref={refQueryNumerals}>
      <fieldset>
      <legend>Creature Body</legend>

      <label for="query-power"> Po<strong><u>w</u></strong>er </label>
      <input type="number"
             name="power"
             id="query-power"
             accesskey="w"
             onChange= {props.handle}
             value= {props.value.power} >
      <input type="text"
             name="power"
             id="query-power-text"
             onChange= {props.handle}
             value= {props.value.power} >

      // ^ <input type="text"> for “1+*”.

      <label for="query-toughness"> To<strong><u>u</u></strong>ghness </label>
      <input type="number"
             name="toughness"
             id="query-toughness"
             accesskey="u"
             onChange= {props.handle}
             value= {props.value.toughness} >

      </fieldset>

      <fieldset>
      <legend>Planeswalker Body</legend>

      <label for="query-loyalty"> <strong><u>L</u></strong>oyalty</label>
      <input type="number"
             name="loyalty"
             id="query-loyalty"
             accesskey=""
             onChange= {props.handle}
             value= {props.value.loyalty} >
      </fieldset>

      </section>

      <br />

  <!-- 
      <section ref={refQueryAbc}>
      <label for="query-"> <strong><u></u></strong></label>
      <fieldset>

        <input type="radio"
               name="abc"
               value="x"
               id="query-abc-x"
               checked= {("x" === props.value.abc)}
               onChange= {props.handle?} >

        <input type="radio"
               name=""
               value=""
               id="query-"
               checked= {("" === props.value.)}
               onChange= {props.handle} >

        <input type="radio"
               name=""
               value=""
               checked= {("" === props.value.)}
               onChange= {props.handle} >

      </fieldset>
      </section>
  -->

      <br />

      <!-- -->

      <section ref={refQueryEdition}>
      <label for="query-edition"> <strong><u>E</u></strong>ditions (Sets & Blocks)</label>
      <select multiple
              name="editions"
              id="query-editions"
              size="4"
              accesskey="e"
              onChange= {props.handle}
              value= {props.value.editions} >
        <QueryEditions/>
      </select>
      </section>

      <br />

      <section ref={refQueryRarity}>
      <label for="query-rarity" > <strong>Rarit<u>y</u></strong></label>
      <fieldset name="rarity"
                id="query-rarity"
                accesskey="y" >

      <RarityCheckbox name="common"
                      on={props.handle}
                      value={props.value.rarity.common} >

      <RarityCheckbox name="uncommon"
                      on={props.handle}
                      value={props.value.rarity.uncommon} >

      <RarityCheckbox name="rare"
                      on={props.handle}
                      value={props.value.rarity.rare} >

      <RarityCheckbox name="mythic"
                      on={props.handle}
                      value={props.value.rarity.mythic} >
      </section>

      <br />

      <section>
      <label for="query-"> <strong><u>A</u></strong>rtist</label>
      <input type="text"
             name="artist"
             id="query-artist"
             accesskey="a"
             onChange= {props.handle}
             value= {props.value.artist} >
      </section>

      <br />
 
      <section ref={refQueryDate}>
      <label for="query-"> <strong><u>D</u>ate</strong> (Printed)</label>
      <input type="month"
             name="date"
             min="1993-08"
             max={props.now}
             id="query-date"
             pattern="\d{4}-\d{2}"  // ← “YYYY-MM”
             accesskey="d"
             onChange= {props.handle}
             value= {props.value.original.date} >

      // ^ Limited Edition Alpha was released on “August 5, 1993”.

      <input type="text"
             pattern="\d{4}-\d{2}" >
      </section>

      <br />

  /*
      <section ref={refQuery}>
      <label for="query-"> <strong><u></u></strong></label>
      <input type="text"
             name=""
             id="query-"
             accesskey=""
             onChange= {props.handle}
             value= {props.value.} >
      </section>

      <br />

   */

      <section>
        <input type="submit"
               id="query-submit" 
               // on=forceUpdate();
               ref={refQuerySubmit} >
          Submit {refSubmit.current.accessKey && `(${refSubmit.current.accessKeyLabel})`}
        </input>
      </section>

    </div>
  );
}

//

/* 

a <fieldset> of <input type="radio">s.

Relations (equal to, not equal to, similar to (c.f. Tarmogoyf’s “1+*”), less than, greater than or equal to, greater than, less than or equal to):

• = ≠ ≈
• < ≥
• > ≤

 */
function NumericVerbRadioGroup(props) {

  { name, value } = props;

  //

  return (
    <>
      <fieldset>

        <label>
        =
        <input type="radio"
               name={name}
               value="eq"
               id=`query-${name}-`
               checked={("" === value)}
               onChange={props.handle} />
        </label>

        <label>
        ≠
        <input type="radio"
               name={name}
               value="neq"
               id=`query-${name}-`
               checked={("" === value)}
               onChange={props.handle} />
        </label>

        <label>
        ≈
        <input type="radio"
               name={name}
               value="sim"
               id=`query-${name}-`
               checked={("" === value)}
               onChange={props.handle} />
        </label>

        <label>
        ≤
        <input type="radio"
               name={name}
               value="lte"
               id=`query-${name}-leq`
               checked={("leq" === value)}
               onChange={props.handle} />
        </label>

        <label>
        {'>'}
        <input type="radio"
               name={name}
               value="gt"
               id=`query-${name}-`
               checked={("" === value)}
               onChange={props.handle} />
        </label>

        <label>
        ≥
        <input type="radio"
               name={name}
               value="geq"
               id=`query-${name}-`
               checked={("" === value)}
               onChange={props.handle} />
        </label>

        <label>
        {'<'}
        <input type="radio"
               name={name}
               value="lt"
               id=`query-${name}-`
               checked={("" === value)}
               onChange={props.handle} />
        </label>

    </>
  );
}

//

/* 

a <fieldset> of <input type="radio">s.

Relations (matches, doesn't match, loosely matches (e.g. Levenstein?), contains, doesn't contain,):

• = ≠ ≈
• > ≥

Variants (regular expression (vs literal), case-sensitive (vs case-insensitive), ):

• ^$
• aA

 */
function TextualVerbRadioGroup(props) {



  //

  return (
    <>
      <fieldset>

        <input type="radio"
               name="abc"
               value="x"
               id="query-abc-x"
               checked= {("x" === props.value.abc)}
               onChange= {props.handle?} >

        <input type="radio"
               name=""
               value=""
               id="query-"
               checked= {("" === props.value.)}
               onChange= {props.handle} >

        <input type="radio"
               name=""
               value=""
               checked= {("" === props.value.)}
               onChange= {props.handle} >

    </>
  );
}

//

function ColorCheckbox(props) {

  const id = `color-${props.name}`;

  const label = props.label
    ? props.label
    : mtgq_capitalize(props.name);

  const abbr = props.abbr
    ? props.abbr
    : props.name.charAt(0);

  const kbd = props.kbd
    ? props.kbd
    : props.abbr;

  //

  return (
    <>
      <label for={id}>{label}</label>

      <input type="checkbox"
             name={props.name}
             id={id}
             checked={props.value}
             onChange={props.on} >
    </>
  );
}

const Colorbox = ColorCheckbox;

//

function RarityCheckbox(props) {

  const id = `rarity-${props.name}`;

  const label = props.label
    ? props.label
    : props.name;

  const abbr = props.abbr
    ? props.abbr
    : props.name.charAt(0);

  const kbd = props.kbd
    ? props.kbd
    : props.abbr;

  //

  return (
    <>
      <label for={id}>{label}</label>

      <input type="checkbox"
             name={props.name}
             id={id}
             checked={props.value}
             onChange={props.on} >
    </>
  );
}

//

/* via a <datalist> with:
 *
 * • an <optgroup> per Block.
 * • an <option> per Set.
 *
 * @props.editions@:
 *
 * • :: @[{ name: String?, sets: { code: String, name: String, icon: String? }}]@
 * • e.g. [{ name: "Time Spiral (Block)", sets: { code: "tsp", name: "Time Spiral", icon: '⌛' }}, { name: "Khans (Block)", sets: […]}, {…}, …]
 *
 */
function QueryEditions(props) {

  //

  return (
    <select>

      {props.editions.map( QueryBlock_optgroup )}

    </select>
  );
}


<label for="query-editions</label>
<input multiple list="mtg-editions" name="edition" id="query-edition" />

/* 

 * e.g.:
 * 
 *   <datalist id="mtg-editions">
 *     <optgroup label="Time Spiral">
 *       <option value="fut">Future Sight</option>
 *       <option value="plc">Planar Chaos</option>
 *       <option value="tsp">Time Spiral</option>
 *     </optgroup>
 *      …
 *    </datalist>
 * 
 */
function EditionsDatalist () {

<datalist id="mtg-editions">

  <optgroup label="Time Spiral">
    <option value="fut">Future Sight</option>
    <option value="plc">Planar Chaos</option>
    <option value="tsp">Time Spiral</option>
  </optgroup>

  <optgroup label="">
    <option value=""></option>
    <option value=""></option>
    <option value=""></option>
  </optgroup>

</datalist>

}


/* an <optgroup>.
 *
 * e.g. { name: "Time Spiral", sets: [{ code: "fut", name: "Future Sight" }, { code: "plc", name: "Planar Chaos" }, { code: "tsp", name: "Time Spiral" }
] }
 *
 *    <optgroup label="Time Spiral">
 *      <option value="fut">Future Sight</option>
 *      <option value="plc">Planar Chaos</option>
 *      <option value="tsp"> Time Spiral</option>
 *    </optgroup>
 *
 * 
 */
function QueryBlock_optgroup(props) {

  //

  return (
    <optgroup label={props.name}>
      {props.sets.map( QuerySet_option )}
    </optgroup>
  );
}

/* an <option>.
 *
 * e.g. { code="tsp", name="Time Spiral", icon='⌛' }
 *
      <option value="tsp">Time Spiral (tsp) ⌛</option>
 *
 */
function QuerySet_option(props) {
  return (
    <option value={props.code}>{props.name} ({props.code}) {props.icon}</option>
  );
}

//

/* Keybindings on the search page.

*/
function kbdSearch(props) {
  return {

   // Colors–keymap:

   'c': {
    'w': props.toggleColorWhite(),
    'u': props.toggleColorBlue(),
    'b': props.toggleColorBlack(),
    'r': props.toggleColorRed(),
    'g': props.toggleColorGreen(),
   },

   // Types–keymap:

   't': {
    'i': props.toggleTypeInstant(),
    's': props.toggleSorceryType(),
    'c': props.toggleCreatureType(),
    'p': props.togglePlaneswalkerType(),
    'a': props.toggleTypeArtifact(),
    'e': props.toggleEnchantmentType(),
    'l': props.toggleLandType(),
   },

   // Colors–keymap:

   'c': {
    'w': props.toggleColorWhite(),
    'u': props.toggleColorBlue(),
    'b': props.toggleColorBlack(),
    'r': props.toggleColorRed(),
    'g': props.toggleColorGreen(),
   },

   // ManaCost–keymap:

   'm': {
    'w': props.addManaWhite(),
    'u': props.addManaBlue(),
    'b': props.addManaBlack(),
    'r': props.addManaRed(),
    'g': props.addManaGreen(),
    'c': props.addManaColorless(),

    '-': props.decrementCmc(),
    '_': props.decrementCmc(),
    '=': props.incrementCmc(),
    '+': props.incrementCmc(),

    '0': props.setCmc(0),
    '1': props.setCmc(1),
    '2': props.setCmc(2),
    '3': props.setCmc(3),
    '4': props.setCmc(),
    '5': props.setCmc(),
    '6': props.setCmc(),
    '7': props.setCmc(),
    '8': props.setCmc(),
    '9': props.setCmc(9),
   },

  };
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/* Parse a Query-String into a Query-Object.

//

*/
function parseQuery(sQuery) {

  const oQuery = {};

  //

  

  //

  return oQuery;

}

//

/* Compile a RulesQuery-Object into a RegExp.

//

*/
function compileRulesQuery(oRulesQuery) {

  const {text, config} = oRulesQuery;

  rxText
    = (text.test(/[-,;:. a-zA-Z0-9]+) ? `\b${text}\b` : text)

  rxConfig
    = (config.isCaseInsensitive ? 'i' : '')
    + ('');

  const rxRulesQuery = new RegExp(rxText, rxConfig);

  return rxRulesQuery;

}

//

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const mtgqAliases = {

  "etb": "When ~ enters the battlefield, ",
  "ltb": "When ~ leaves the battlefield, ",

/*
  "": "",
 */
};

//</option><input regex?>

/*
 */
function mtgqMatch(regexp, string) {

  return ();

};

//

/*
 */
function rx(s) {

  return new RegExp(s);

};

//

function mungeQuery(s) {
  return (s);
};

//

/* Get the current month/year.

 * e.g.:

     mtgq_formatYearMonth(new Date(1993, 08, 05)).

     // "1993-08"

 * @date@:

     • a @Date@.

 */
function mtgq_formatYearMonth(date) {

  return date.toISOString().slice(0,7);

}

// ^ Formats “August 5, 1993” as “1993-05”.

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function useKey(key) {
    // Keep track of key state
    const [pressed, setPressed] = useState(false)

    // Does an event match the key we're watching?
    const match = event => key.toLowerCase() == event.key.toLowerCase()

    // Event handlers
    const onDown = event => {
        if (match(event)) setPressed(true)
    }

    const onUp = event => {
        if (match(event)) setPressed(false)
    }

    // Bind and unbind events
    useEffect(() => {
        window.addEventListener("keydown", onDown)
        window.addEventListener("keyup", onUp)
        return () => {
            window.removeEventListener("keydown", onDown)
            window.removeEventListener("keyup", onUp)
        }
    }, [key])

    return pressed
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
