import { combineReducers } from 'redux';
import uiSlice from './slices/uiSlice';

const rootReducer = combineReducers({
  ui: uiSlice.reducer
});

export { rootReducer };
