import { call, put, takeLatest } from 'redux-saga/effects';
import { setClients } from '../slices/clientSlicet';

function* fetchClients() {
  try {
    const response = yield call(fetch, '/api/clients');
    const data = yield response.json();
    yield put(setClients(data));
  } catch (error) {
    console.error('Failed to fetch clients', error);
  }
}

export default function* clientSagas() {
  yield takeLatest('FETCH_CLIENTS', fetchClients);
}
