import { createStore, combineReducers } from 'redux';
import { postReduser } from './redusers/post';

const rootReduser = combineReducers({
  post: postReduser,
});

export default createStore(rootReduser);
