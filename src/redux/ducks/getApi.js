
import { put, call } from 'redux-saga/effects';

export const SET_LIST = 'SET_LIST';

export function * apiSideEffect() {
  const url = '/products.json';

  try {
    const data = yield call(() => fetch(url)
      .then(res => res.json()));

    yield put({
      type: SET_LIST, data,
    });
  } catch (error) {
    console.error(`fetchUsers return erros: ${error}`);
  }
}
