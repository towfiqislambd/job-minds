import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; 

import demoReducer from "./features/demoSlice";

// 1. Combine reducers (in case you add more slices later)
const rootReducer = combineReducers({
  demo: demoReducer,
});

// 2. Create persist config - which slices to persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["demo"], // persist only demo slice (add more if needed)
};

// 3. Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Configure store with persisted reducer and middleware tweaks
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions for serializable middleware warnings
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// 5. Create persistor to be used in _app.tsx
export const persistor = persistStore(store);

// 6. Type helpers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
