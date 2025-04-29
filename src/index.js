import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';
import { loginSuccess } from './components/Auth/AuthSlice';

function initializeAuth() {
  // Récupérer le token depuis le localStorage ou sessionStorage
  const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
  // Si un token existe, l'utilisateur est considéré comme authentifié
  if (token) {
    store.dispatch(loginSuccess(token)); // Mise à jour du store pour marquer l'utilisateur comme connecté
  }
}

initializeAuth(); // Appel de la fonction lors du chargement initial

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
