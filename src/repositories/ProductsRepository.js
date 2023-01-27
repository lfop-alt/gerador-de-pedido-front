import api from '../services/axios';

const getAll = async () => {
  try {
    const products = await api.get('/api/products');
    return products;
  } catch (err) {
    throw err;
  }
};

const ProductsRepository = {
  getAll,
};

export default ProductsRepository;
