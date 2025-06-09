type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export const useCategoryProducts = () => {
  const products = ref<Product[]>([]);
  const loading = ref(false);
  const error = ref<Error | null>(null);

  const fetchProducts = async (category?: string) => {
    loading.value = true;
    error.value = null;

    try {
      const endpoint =
        category && category !== "all"
          ? `https://fakestoreapi.com/products/category/${category}`
          : `https://fakestoreapi.com/products`;

      const data: Product[] = await $fetch(endpoint);
      products.value = data || [];
    } catch (err) {
      error.value = err as Error;
    } finally {
      loading.value = false;
    }
  };

  return {
    products,
    loading,
    error,
    fetchProducts,
  };
};
