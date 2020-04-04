/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import React    from 'react';
import ReactDOM from 'react-dom';

//

import Query  from './src/Query.js';

import Data   from './static/data.js';
import Images from './static/images.js';

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const wQuery = (
  <React.StrictMode>
    <Query />
  </React.StrictMode>
);

const eRoot = document.getElementById('root');

ReactDOM.render(wQuery, eRoot);

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */