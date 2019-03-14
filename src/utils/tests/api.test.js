import URI from "urijs";
import { getProducts } from '../api';

describe('getProducts', () => {

  const parameters = {
    start_price: 10,
    end_price: 200,
    category: 'Makeup',
    subcategory: 'Face',
    subsubcategory: 'Countour',
    pagination: true,
    page: 1,
    results_per_page: 10,
    sorted: 'price'
  }

  it('getProducts should call fetch with the right parameters if they are all not null', () => {

    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    getProducts(
      parameters.start_price,
      parameters.end_price,
      parameters.category,
      parameters.subcategory,
      parameters.subsubcategory,
      parameters.pagination,
      parameters.page,
      parameters.results_per_page,
      parameters.sorted
    )

    const url = new URI('https://happy-shop-isb-api.herokuapp.com/application/products');
    Object.keys(parameters).forEach(key => url.addQuery(key, parameters[key]));
    expect(global.fetch).toHaveBeenCalledWith(url);
  });

  it('getProducts should call fetch with the right parameters if one is null', () => {

    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    parameters.start_price = null

    getProducts(
      parameters.start_price,
      parameters.end_price,
      parameters.category,
      parameters.subcategory,
      parameters.subsubcategory,
      parameters.pagination,
      parameters.page,
      parameters.results_per_page,
      parameters.sorted
    )

    const url = new URI('https://happy-shop-isb-api.herokuapp.com/application/products');
    Object.keys(parameters).forEach(key => {
      if (key !== 'start_price') {
        url.addQuery(key, parameters[key])
      }
    });
    expect(global.fetch).toHaveBeenCalledWith(url);
  });

  it('getProducts should call fetch with the right parameters', () => {

    const parameters = {
      start_price:null,
      end_price:null,
      category:null,
      subcategory:null,
      subsubcategory:null,
      pagination:null,
      page:null,
      results_per_page:null,
      sorted: null
    }

    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    getProducts(
      parameters.start_price,
      parameters.end_price,
      parameters.category,
      parameters.subcategory,
      parameters.subsubcategory,
      parameters.pagination,
      parameters.page,
      parameters.results_per_page,
      parameters.sorted
    )

    const url = new URI('https://happy-shop-isb-api.herokuapp.com/application/products');
    expect(global.fetch).toHaveBeenCalledWith(url);
  });
});
