import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import App from './components/App';
import initStore from './utils/store';

const history = createHistory();
const historyMiddleware = routerMiddleware(history);
const store = initStore([historyMiddleware]);
ReactDOM.render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
);

