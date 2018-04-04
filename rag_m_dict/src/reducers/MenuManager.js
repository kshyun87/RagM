import {SEARCH_ITEM} from '../actions';

function MenuManager (state = 1, action) {

    switch(action.type) {
        case SEARCH_ITEM:
            return action.value
        default:
            return state;
    }
}

export default MenuManager;
