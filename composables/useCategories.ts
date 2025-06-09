export const useCategories = () => {
  const categories = ref<string[]>([]);
  const loading = ref(true);
  const error = ref<Error | null>(null);

  const fetchCategories = async () => {
    loading.value = true;
    try {
      const data: string[] = await $fetch(
        "https://fakestoreapi.com/products/categories"
      );
      categories.value = ["all", ...data];
    } catch (err) {
      error.value = err as Error;
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchCategories);

  return {
    categories,
    loading,
    error,
    fetchCategories,
  };
};
