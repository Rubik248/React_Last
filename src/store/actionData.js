export const DATA_REQUEST = 'DATA_REQUEST';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_FAILURE = 'DATA_FAILURE';

export const dataRequest = () => ({
  type: DATA_REQUEST,
});

export const dataSuccess = (api, data) => ({
  type: DATA_SUCCESS,
  payload: { api, data },
});

export const dataFailure = (api, error) => ({
  type: DATA_FAILURE,
  payload: { api, error },
});