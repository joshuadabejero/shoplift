import { defineStore } from "pinia";
import type { Product } from "~/shared/types/product";

export const useProductStore = defineStore("products", () => {
  const {
    fetchProducts,
    fetchCategories,
    fetchProductById,
    fetchByCategory,
    createProduct,
    updateProduct,
    deleteProduct,
  } = useFakeStoreApi();

  const products = ref<Product[]>([]);
  const product = ref<Product | null>(null);
  const loading = ref(false);
  const error = ref<Error | null>(null);
  const featuredProducts = ref<Product[]>([]);
  const newArrivalProducts = ref<Product[]>([]);
  const categories = ref<String[]>([]);
  const selectedCategory = ref("all");
  const selectedProduct = ref<Product | null>(null);

  const loadProducts = async (limit?: number) => {
    loading.value = true;
    error.value = null;

    try {
      const data = await fetchProducts();
      products.value = limit
        ? (data as Product[]).slice(0, limit)
        : (data as Product[]);
    } catch (err: any) {
      error.value = err.message || "Something went wrong.";
    } finally {
      loading.value = false;
    }
  };

  const loadProductById = async (id: number) => {
    loading.value = true;
    error.value = null;

    try {
      const data = await fetchProductById(id);
      product.value = data as Product;
    } catch (err: any) {
      error.value = err.message || "Something went wrong.";
    } finally {
      loading.value = false;
    }
  };

  const loadProductsTo = async (
    target: Ref<Product[]>,
    start?: number,
    limit?: number
  ) => {
    loading.value = true;
    error.value = null;

    const offset: number = start ?? 0;

    try {
      const data = await fetchProducts();
      const sliced = limit
        ? (data as Product[]).slice(offset, offset + limit)
        : (data as Product[]).slice(offset);
      target.value = sliced;
    } catch (err: any) {
      error.value = err.message || "Something went wrong.";
    } finally {
      loading.value = false;
    }
  };

  const loadFeaturedProducts = async (start?: number, limit?: number) => {
    return loadProductsTo(featuredProducts, start, limit);
  };

  const loadNewArrivalProducts = async (start?: number, limit?: number) => {
    return loadProductsTo(newArrivalProducts, start, limit);
  };

  const loadCategory = async () => {
    loading.value = true;
    error.value = null;
    try {
      const data = await fetchCategories();
      categories.value = data as String[];
    } catch (err: any) {
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
      products.value = data as Product[];
      selectedCategory.value = category;
    } catch (err: any) {
      error.value = err.message || "Something went wrong.";
    } finally {
      loading.value = false;
    }
  };

  const addProduct = async (product: any) => {
    const id = (await createProduct(product)) as Product;
    const newProduct = { ...id, ...product.value };
    products.value.push(newProduct);
  };

  const getProductById = (id: number): Product | undefined =>
    products.value.find((p) => p.id === id);

  const editProduct = async (id: number, updated: any) => {
    const data = (await updateProduct(id, updated)) as Product;
    const result = {
      ...data,
      rating: {
        // since data from API does not provide rating{}, it was manually merged from store - Joshua
        ...updated.rating,
      },
    };
    const idx = products.value.findIndex((p) => p.id === id);
    if (idx > -1) products.value[idx] = result;
  };

  const removeProduct = async (id: number) => {
    await deleteProduct(id);
    products.value = products.value.filter((p) => p.id !== id);
  };

  const setSelectedProduct = (product: any) => {
    selectedProduct.value = product;
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
    setSelectedProduct,
  };
});
