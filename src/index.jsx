import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import store, { history } from './store'
import './index.css';
import App from './containers/app/index';
import registerServiceWorker from './registerServiceWorker';

injectTapEventPlugin();
render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
