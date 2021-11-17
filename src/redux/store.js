import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

//import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { configureStore, combineReducers } from '@reduxjs/toolkit';

import logger from 'redux-logger';

import contactsReducer from './phonebook/phonebook-reducer';

//const contactsPersistConfig = {
//  key: 'Contacts',
//  storage,
//  blacklist: ['filter'],
//};

//const rootReducer = combineReducers({
//  contacts: persistReducer(contactsPersistConfig, contactsReducer),
//});

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

//const persistor = persistStore(store);

//export default { store, persistor };

export default store;
