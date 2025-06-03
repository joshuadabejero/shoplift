import type { Ref } from "vue";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const useProducts = (limit?: number) => {
  const { data, pending, error, refresh } = useFetch<Product[]>(
    "https://fakestoreapi.com/products",
    {
      transform: (products) => (limit ? products.slice(0, limit) : products),
      server: true,
    }
  );

  return {
    products: data as Ref<Product[] | undefined>,
    pending,
    error,
    refresh,
  };
};
