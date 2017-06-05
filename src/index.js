import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'


import App from './components/app';
import AboutUs from './components/about_us.js';
import Blog from './components/blog.js';
import GetInTouch from './components/get_in_touch.js';
import Info from './components/info.js';



import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
    	<Route path="/" component={App}>
		  	<IndexRoute component={AboutUs} > About Us </IndexRoute>
		  	<Route path="/wedding-info" component={Info}/>
		  	<Route path="/get-in-touch" component={GetInTouch}/>
        <Route path="/blog" component={Blog}/>
      </Route>
  	</Router>

  </Provider>
  , document.querySelector('.container'));




