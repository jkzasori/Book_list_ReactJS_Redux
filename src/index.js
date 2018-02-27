import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware} from 'redux';

import Home from "./container/home";
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const app = document.getElementById("app");
render(
	<Provider store={createStoreWithMiddleware(reducers) }>
		<Home />
	</Provider>
	, app);