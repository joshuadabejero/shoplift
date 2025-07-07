import { defineStore } from "pinia";
import type { Product } from "~/shared/types/product";

export const useProductStore = defineStore("products", () => {
  const { fetchProducts, fetchCategories, fetchByCategory } = useFakeStoreApi();

  const products = ref<Product[]>([]);
  const loading = ref(false);
  const error = ref<Error | null>(null);
  const featuredProducts = ref<Product[]>([]);
  const newArrivalProducts = ref<Product[]>([]);
  const categories = ref<String[]>([]);
  const selectedCategory = ref("all");

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

  return {
    products,
    loading,
    error,
    featuredProducts,
    newArrivalProducts,
    categories,
    selectedCategory,
    loadProducts,
    loadFeaturedProducts,
    loadNewArrivalProducts,
    loadCategory,
    loadProductsByCategory,
  };
});
