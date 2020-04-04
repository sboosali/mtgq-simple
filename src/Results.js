/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import React    from 'react';
import ReactDOM from 'react-dom';

//

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/* a <table> (to read the search results).

*/
function SearchResults(props) {
    // 
  
    const results = search({
      query: props.query,
      data:  props.data,
    });
  
    // 
  
    const refResults = React.createRef();
  
    // 
  
    return (
      <div id="results">
  
           // ^ “#results” URL Fragment.
  
        <h2>Results</h2>
  
        <table id="results-table"
               summary="…"
               accesskey="r"
               ref={refResults}>
  
        <caption>
          …
        </caption>
  
        <thead>
          <th abbr="cmc">Converted Mana Cost</th>
        </thead>
  
      </div>
    );
  }

  <table border="1" summary="Black plums and bosca pears table with one level of row and column headers">
     <caption>Prices for black plums and bosca pears in Sydney</caption>
     <tr>
        <td></td>
  
        <th abbr="plums">Black Plums</th>
        <th abbr="pears">Bosca Pears</th>
     </tr>
     <tr>
  
        <th>Wholesale</th>
        <td>$1.00</td>
        <td>$1.50</td>
     </tr>
  
     <tr>
        <th>Retail</th>
        <td>$2.00</td>
        <td>$2.50</td>
  
     </tr>
  </table>
  
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  
function Card(props) {
  
      //
  
      return (
    
        </>
    
      );
}
  
//

function Image(props) {
  
      //
  
      const id = props.id;
  
      //
  
      return (
  
          <Link to={`/cards/${id}/`}>
              <figure className={style.Image}>
                  <img src={`static/images/${id}/full.jpg`} />
  
                  <figcaption>
                      {props.item.title}
                  </figcaption>
  
              </figure>
          </Link>
  
      );
  }
  
  /* TODO file:///images/index.html#/cards/123
   */
  
//
  
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
