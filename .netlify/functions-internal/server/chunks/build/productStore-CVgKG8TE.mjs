import { defineStore } from 'pinia';
import { ref } from 'vue';

const useFakeStoreApi = () => {
  const baseURL = "https://fakestoreapi.com/products";
  const fetchProducts = async () => {
    return await $fetch(baseURL);
  };
  const fetchCategories = async () => {
    const res = await $fetch(`${baseURL}/categories`);
    return ["all", ...res];
  };
  const fetchProductById = async (id) => {
    return await $fetch(`${baseURL}/${id}`);
  };
  const fetchByCategory = async (category) => {
    const url = category === "all" ? baseURL : `${baseURL}/category/${category}`;
    return await $fetch(url);
  };
  const createProduct = async (product) => {
    return await $fetch(baseURL, {
      method: "POST",
      body: product
    });
  };
  const updateProduct = async (id, product) => {
    return await $fetch(`${baseURL}/${id}`, {
      method: "PUT",
      body: product
    });
  };
  const deleteProduct = async (id) => {
    return await $fetch(`${baseURL}/${id}`, {
      method: "DELETE"
    });
  };
  return {
    fetchProducts,
    fetchCategories,
    fetchProductById,
    fetchByCategory,
    createProduct,
    updateProduct,
    deleteProduct
  };
};
const useProductStore = defineStore("products", () => {
  const {
    fetchProducts,
    fetchCategories,
    fetchProductById,
    fetchByCategory,
    createProduct,
    updateProduct,
    deleteProduct
  } = useFakeStoreApi();
  const products = ref([]);
  const product = ref(null);
  const loading = ref(false);
  const error = ref(null);
  const featuredProducts = ref([]);
  const newArrivalProducts = ref([]);
  const categories = ref([]);
  const selectedCategory = ref("all");
  const selectedProduct = ref(null);
  const loadProducts = async (limit) => {
    loading.value = true;
    error.value = null;
    try {
      const data = await fetchProducts();
      products.value = limit ? data.slice(0, limit) : data;
    } catch (err) {
      error.value = err.message || "Something went wrong.";
    } finally {
      loading.value = false;
    }
  };
  const loadProductById = async (id) => {
    loading.value = true;
    error.value = null;
    try {
      const data = await fetchProductById(id);
      product.value = data;
    } catch (err) {
      error.value = err.message || "Something went wrong.";
    } finally {
      loading.value = false;
    }
  };
  const loadProductsTo = async (target, start, limit) => {
    loading.value = true;
    error.value = null;
    const offset = start != null ? start : 0;
    try {
      const data = await fetchProducts();
      const sliced = limit ? data.slice(offset, offset + limit) : data.slice(offset);
      target.value = sliced;
    } catch (err) {
      error.value = err.message || "Something went wrong.";
    } finally {
      loading.value = false;
    }
  };
  const loadFeaturedProducts = async (start, limit) => {
    return loadProductsTo(featuredProducts, start, limit);
  };
  const loadNewArrivalProducts = async (start, limit) => {
    return loadProductsTo(newArrivalProducts, start, limit);
  };
  const loadCategory = async () => {
    loading.value = true;
    error.value = null;
    try {
      const data = await fetchCategories();
      categories.value = data;
    } catch (err) {
      error.value = err.message || "Something went wrong.";
    } finally {
      loading.value = false;
    }
  };
  const loadProductsByCategory = async (category = "all") => {
    loading.value = true;
    error.value = null;
    try {
      const data = await fetchByCategory(category);
      products.value = data;
      selectedCategory.value = category;
    } catch (err) {
      error.value = err.message || "Something went wrong.";
    } finally {
      loading.value = false;
    }
  };
  const addProduct = async (product2) => {
    const id = await createProduct(product2);
    const newProduct = { ...id, ...product2.value };
    products.value.push(newProduct);
  };
  const getProductById = (id) => products.value.find((p) => p.id === id);
  const editProduct = async (id, updated) => {
    const data = await updateProduct(id, updated);
    const result = {
      ...data,
      rating: {
        // since data from API does not provide rating{}, it was manually merged from store - Joshua
        ...updated.rating
      }
    };
    const idx = products.value.findIndex((p) => p.id === id);
    if (idx > -1) products.value[idx] = result;
  };
  const removeProduct = async (id) => {
    await deleteProduct(id);
    products.value = products.value.filter((p) => p.id !== id);
  };
  const setSelectedProduct = (product2) => {
    selectedProduct.value = product2;
  };
  return {
    products,
    product,
    loading,
    error,
    featuredProducts,
    newArrivalProducts,
    categories,
    selectedCategory,
    selectedProduct,
    loadProducts,
    loadProductById,
    loadFeaturedProducts,
    loadNewArrivalProducts,
    loadCategory,
    loadProductsByCategory,
    addProduct,
    getProductById,
    editProduct,
    removeProduct,
    setSelectedProduct
  };
});

export { useProductStore as u };
//# sourceMappingURL=productStore-CVgKG8TE.mjs.map
