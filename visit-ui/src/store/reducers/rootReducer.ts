import { combineReducers, Reducer} from "redux";
import {ApplicationState} from '../types'

const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  //put reducers here
});

export default rootReducer;
