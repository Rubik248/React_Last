import { DATA_REQUEST, DATA_SUCCESS, DATA_FAILURE } from './actionData';

const initialState = {
  category: [],
  product: [],
  loading: false,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case DATA_SUCCESS:
      const { api, data } = action.payload;
      return {
        ...state,
        loading: false,
        [api]: data,
      };

    case DATA_FAILURE:
      const { api: errorApi, error } = action.payload;
      return {
        ...state,
        loading: false,
        error: { [errorApi]: error },
      };

    default:
      return state;
  }
};





export default dataReducer;
