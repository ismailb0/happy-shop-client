import URI from "urijs";


export const getProducts = (
  start_price,
  end_price,
  category,
  subcategory,
  subsubcategory,
  pagination,
  page,
  results_per_page,
  sorted
) => {
  const params = {};

  if (start_price) {
    params.start_price = start_price
  }
  if (end_price) {
    params.end_price = end_price
  }
  if (category) {
    params.category = category
  }
  if (subcategory) {
    params.subcategory = subcategory
  }
  if (subsubcategory) {
    params.subsubcategory = subsubcategory
  }
  if (pagination) {
    params.pagination = pagination
  }
  if (page) {
    params.page = page
  }
  if (results_per_page) {
    params.results_per_page = results_per_page
  }
  if (sorted) {
    params.sorted = sorted
  }

  const url = new URI('https://happy-shop-isb-api.herokuapp.com/application/products');

  Object.keys(params).forEach(key => url.addQuery(key, params[key]));

  return fetch(url)
    .then(response => response.json())
    .then(products => {
      return products
    }
    )
};
