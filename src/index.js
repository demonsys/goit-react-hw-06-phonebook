import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from 'store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>ЗАГРУЗКА...</div>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
