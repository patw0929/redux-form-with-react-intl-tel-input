import { createStore } from 'redux';
import rootReducer from './reducers';

export default function configureStore() {
  const store = createStore(rootReducer);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers');
        store.replaceReducer(nextRootReducer);
      });
    }
  }

  return store;
}
