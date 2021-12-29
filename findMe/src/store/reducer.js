
import { combineReducers } from 'redux-immutable';

import { reducer as panelReducer } from '../components/panel/store';
import { reducer as searchReducer } from '../components/search/store';



const reducer =  combineReducers({

    panel: panelReducer,
    search: searchReducer
})

export default reducer;