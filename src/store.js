// fonction principal qui permet de créer le store de redux
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './components/Auth/AuthSlice'; 

export const store = configureStore({
  // Ici, on définit les "reducers", c’est-à-dire les morceaux d’état à gérer.
  reducer: {
    auth: authReducer, // "auth" sera le nom de cette partie du store
  },
});

// En gros avec le store, toute mon app peux acceder aux informations d'authentification de maniere centralisé