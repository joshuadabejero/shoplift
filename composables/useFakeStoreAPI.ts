import type { Product } from "~/shared/types/product";

export const useFakeStoreApi = () => {
  const baseURL = "https://fakestoreapi.com/products";

  const fetchProducts = async () => {
    return await $fetch(baseURL);
  };

  const fetchCategories = async () => {
    const res = await $fetch<string[]>(`${baseURL}/categories`);
    return ["all", ...res];
  };

  const fetchProductById = async (id: number): Promise<Product> => {
    return await $fetch(`${baseURL}/${id}`);
  };

  const fetchByCategory = async (category: string) => {
    const url =
      category === "all" ? baseURL : `${baseURL}/category/${category}`;
    return await $fetch(url);
  };

  const createProduct = async (product: any) => {
    return await $fetch(baseURL, {
      method: "POST",
      body: product,
    });
  };

  const updateProduct = async (id: number, product: any) => {
    return await $fetch(`${baseURL}/${id}`, {
      method: "PUT",
      body: product,
    });
  };

  const deleteProduct = async (id: number) => {
    return await $fetch(`${baseURL}/${id}`, {
      method: "DELETE",
    });
  };

  return {
    fetchProducts,
    fetchCategories,
    fetchProductById,
    fetchByCategory,
    createProduct,
    updateProduct,
    deleteProduct,
  };
};
