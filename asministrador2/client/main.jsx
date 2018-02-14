import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Hoc from './components/Hoc.jsx';

render(<Hoc />, document.getElementById('root'));