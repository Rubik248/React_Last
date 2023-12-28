import { dataRequest, dataSuccess, dataFailure } from './actionData';

const categoryApi = 'http://localhost:3333/categories/all';
const productsApi = 'http://localhost:3333/products/all';

const dataApi = async (dispatch, apiUrl, api) => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    dispatch(dataSuccess(api, data));
  } catch (error) {
    dispatch(dataFailure(api, error.message || 'Ошибка'));
  }
};
export const apiData = () => {
  return async (dispatch) => {
    dispatch(dataRequest());
    await dataApi(dispatch, categoryApi, 'category');
    await dataApi(dispatch, productsApi, 'product');
  };
};
