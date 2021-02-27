import { createStore, combineReducers,applyMiddleware } from "redux";
import { dataReducer } from "./data";
import {persistStore,persistReducer} from 'redux-persist';
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import {
    MODULE_NAME as contactsModuleName,
    dataReducer as contactsReducer,
  } from "./data";

const config = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  data: dataReducer,
});


 const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  
 export const persistor = persistStore(store);

export default store;
