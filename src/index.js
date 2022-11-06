import { createRoot } from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/index.js';
import { App } from './App';

const root = createRoot(document.getElementById('root'));
const store = createStore(rootReducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
