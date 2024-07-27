import { takeEvery } from 'redux-saga/effects';

function* fetchCollectionsAsync() {
    yield console.log('I am fired');
}

export function* fetchCollectionsStart() {
    yield takeEvery('shop/updateCollections', fetchCollectionsAsync)
}

