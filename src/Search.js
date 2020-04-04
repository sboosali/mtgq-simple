/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import React    from 'react';
import ReactDOM from 'react-dom';

//

import Query   from './Query.js';
import Results from './Results.js';

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/* Writing ‹SearchQuery›s and reading ‹SearchResult›s.

*/
function Search(props) {

    // State:
  
    const [state, setState] = React.useState({});
  
    // Properties:
  
    const { value } = state;
  
    /*
     *
     * « setValue({}); » ≡ ≤ return null; »
     *
     */
    function setValue(v) {
      const oldValue = state.value;
      const newValue = Object.assign({}, oldValue, v);
      setState({ value: newValue });
    };
  
    // 
  
    const dateNow = Date.now();  // TODO effect.
    const dateLEA = new Date(Date.UTC(1993, 08, 05));
  
    // ^ Limited Edition Alpha was released on “August 5, 1993”.
  
    const monthNow = mtgq_formatYearMonth(dateNow);
    const monthLEA = mtgq_formatYearMonth(dateLEA);
  
    // ^ Formats “August 5, 1993” as “1993-05”.
  
    //
  
    function handle(e) {
      const k = e.target.name;
      const v = e.target.value;
      setValue({ [k]: v });
    };
  
    function handleQuery(e) {
      const v = mungeQuery(e.target.value);
      setValue({ query: v });
    };
  
    // 
  
    function toggleValue(k) {
      const v = (value[k] || false);
      setValue({ [k]: !v});
      return v;
    }
  
    function toggleColorWhite() { return toggleValue('white'); }
    function toggleColorBlue() { return toggleValue('blue'); }
    function toggleColorBlack() { return toggleValue('black'); }
    function toggleColorRed() { return toggleValue('red'); }
    function toggleColorGreen() { return toggleValue('green'); }
  
    // 
  
    const propsSearchQuery = {
  
      value,
      setValue,
  
      handle,
      handleQuery,
  
      toggleColorWhite,
      toggleColorBlue,
      toggleColorBlack,
      toggleColorRed,
      toggleColorGreen,
  
    };
  
    const propsSearchResults = {
      query,
    };
  
    // 
  
    return (
      <div id="search">
  
        <h1>mtgQ</h1>
  
        <SearchQuery   {...propsSearchQuery} />
        <SearchResults {...propsSearchResults} />
  
      </div>
  
      <div id="config">
  
        <h1>Config</h1>
  
        <button type="button"
                >
          {"Refresh/Upload « mtg.json »"}
        <button/>
  
      </div>
    );
  }


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/* search({ query, data }) searches @data@ for each card that matches @query@.

*/
function search({ query, data }) {

  ;

}

//

/* Match a CardQuery against CardData.

//

Inputs:

• @query@ :: ‹CardQuery›

• @data@ :: ‹CardData›

• @card@ :: ‹CardDatum›

//

*/

function search(query, data) {

  //

  function matchCard(card) {

    var match;

    for (var q of query) {
      // const constraint = query[q];

      switch (q) {

        case "colors":

          const queryColors = query.colors;
          const cardColors  = card.colors;

          const howColorsMatch = matchColors(queryColors, cardColors);
          if (howColorsMatch) {
            match.q = howColorsMatch;
            if (isQueryDisjunction) { break; }
          }

        case "xyz":

          const how = matchXyz(query.xyz, card.xyz);

          if (how) {
            match.q = how;
          }

     /*

        case "xyz":

          const how = matchXyz(query.xyz, card.xyz);

          if (how) {
            match.q = how;
          }
      */
      }
    };

    return match;
  }

  //

  const matches = [];

  for (var editionName of data) {
    if (!data.hasOwnProperty(editionName)) { continue; }

    let edition = data[editionName];
    let editionCards = edition.cards;

    for (var card of editionCards) {
      let cardName = card.name;

      const cardMatch = matchCard(query, card);

      if (cardMatch) {
        matches.push(cardMatch);
      }
    }
  };

  return matches;
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  switch (event.key) {
    case "Down": // IE/Edge specific value
    case "ArrowDown":
      // Do something for "down arrow" key press.
      break;
    case "Up": // IE/Edge specific value
    case "ArrowUp":
      // Do something for "up arrow" key press.
      break;
    case "Left": // IE/Edge specific value
    case "ArrowLeft":
      // Do something for "left arrow" key press.
      break;
    case "Right": // IE/Edge specific value
    case "ArrowRight":
      // Do something for "right arrow" key press.
      break;
    case "Enter":
      // Do something for "enter" or "return" key press.
      break;
    case "Esc": // IE/Edge specific value
    case "Escape":
      // Do something for "esc" key press.
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */