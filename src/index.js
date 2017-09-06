import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './containers/App';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

injectTapEventPlugin();

const AppUI = () => (
    <MuiThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>
);

render(
    <AppUI />,
  document.getElementById('root')
);
