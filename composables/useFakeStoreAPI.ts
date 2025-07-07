export const useFakeStoreApi = () => {
  const fetchProducts = async () => {
    const res = await $fetch("https://fakestoreapi.com/products");
    return res;
  };

  const fetchCategories = async () => {
    const res = await $fetch<string[]>(
      "https://fakestoreapi.com/products/categories"
    );
    return ["all", ...res];
  };

  const fetchByCategory = async (category: string) => {
    const url =
      category === "all"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${category}`;
    return await $fetch(url);
  };

  return { fetchProducts, fetchCategories, fetchByCategory };
};
