import { takeLatest } from 'redux-saga/effects';
import { apiSideEffect, SET_LIST } from './getApi';

// action
const GET_PRODUCTS_FROM_SERVER = 'GET_PRODUCTS_FROM_SERVER';
const SET_ITEM_TO_LIST = 'SET_ITEM_TO_LIST';

export const requestForProducts = () => ({ type: GET_PRODUCTS_FROM_SERVER });
export const setItemToList = (name, img, id) => ({
  type: SET_ITEM_TO_LIST, name, img, id,
});

export const initialState = {
  getPhones: [],
  listWishes: [],
};

const setWishesList = (listWishes, name, id, img) => {
  let array;

  if (listWishes.find(el => el.id === id)) {
    array = [
      ...listWishes.filter(e => e.id !== id), {
        name,
        id,
        img,
        quantity: listWishes.find(el => el.id === id).quantity + 1,
      },
    ];
  } else {
    array = [
      ...listWishes,
      {
        name,
        id,
        img,
        quantity: 1,
      }];
  }

  return array || [...listWishes];
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST:

      return {
        ...state,
        getPhones: action.data,
      };

    case SET_ITEM_TO_LIST:
      // move to another func

      return {
        ...state,
        listWishes: setWishesList(state.listWishes, action.name, action.id, action.img),
      };

    default:
      return state;
  }
};

export function * watchSomeAction() {
  yield takeLatest(GET_PRODUCTS_FROM_SERVER, apiSideEffect);
}

export default reducer;
