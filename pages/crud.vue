<script setup>
import ProductCard from "~/components/global/ProductCard.vue";
import { ref } from "vue";
import { useProductStore } from "~/store/productStore";
const productStore = useProductStore();

onMounted(async () => {
  await productStore.loadProducts();
  await productStore.loadCategory();
  await productStore.loadProductsByCategory(selectedCategory.value);
});

const selectedCategory = ref("all");

const showFilters = ref(false);
const toggleFilters = () => {
  showFilters.value = !showFilters.value;
};

watch(selectedCategory, async (newCategory) => {
  await productStore.loadProductsByCategory(newCategory);
});

const sortOption = ref("default");
const sortedProducts = computed(() => {
  if (!productStore.products) return [];

  const sorted = [...productStore.products];

  switch (sortOption.value) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "name-asc":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case "name-desc":
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return sorted;
  }
});

const searchQuery = ref("");
const filteredProducts = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return sortedProducts.value.filter(
    (p) =>
      p.title?.toLowerCase().includes(query) ||
      p.description?.toLowerCase().includes(query)
  );
});

const selectedProduct = ref({
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: {},
});

const handleDialog = (product) => {
  selectedProduct.value = {
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
    image: product.image,
    rating: product.rating,
  };
  showEditDialog.value = true;
};

const showAddDialog = ref(false);
const showEditDialog = ref(false);
</script>

<template>
  <div class="products__section">
    <div class="products__container">
      <div class="products__heading">
        <div>
          <h1>CRUD Management</h1>
          <p>Welcome to the Product Management Dashboard (non-persistent)</p>
        </div>
        <div class="mt-5 mt-sm-0">
          <v-btn
            class="button__add-product"
            prepend-icon="mdi-file-plus-outline"
            color="#EAB308"
            :ripple="false"
            @click="showAddDialog = true"
            >Add Product</v-btn
          >
          <CRUDDialog :action="false" v-model="showAddDialog" />
        </div>
      </div>
      <div class="products__controls">
        <div class="products__text-field">
          <v-text-field
            v-model="searchQuery"
            bg-color="#1F2937"
            prepend-inner-icon="mdi-magnify"
            variant="solo"
            label="Search for products..."
            density="compact"
            single-line
            hide-details
            rounded
          ></v-text-field>
        </div>
        <div class="products__sort-filters">
          <div class="select__container">
            <v-select
              v-model="sortOption"
              :items="[
                { title: 'Default', value: 'default' },
                { title: 'Price: Low to High', value: 'price-asc' },
                { title: 'Price: High to Low', value: 'price-desc' },
                { title: 'Name: A to Z', value: 'name-asc' },
                { title: 'Name: Z to A', value: 'name-desc' },
              ]"
              bg-color="#1F2937"
              variant="solo"
              density="compact"
              hide-details
              single-line
              append-inner-icon="mdi-tune-vertical"
            ></v-select>
          </div>
          <v-btn
            height="40px"
            prepend-icon="mdi-filter-outline"
            color="#1F2937"
            @click="toggleFilters"
            >Filters</v-btn
          >
        </div>
      </div>
      <div v-if="showFilters" class="products__categories pa-4">
        <h3 class="mb-4">Categories</h3>
        <div class="products__categories--wrapper">
          <v-btn
            v-for="category in productStore.categories"
            :key="category"
            :class="
              selectedCategory === productStore.categories
                ? 'selectedCategory'
                : ''
            "
            rounded
            :ripple="false"
            @click="selectedCategory = category"
            >{{ category }}</v-btn
          >
        </div>
      </div>
      <v-row>
        <v-col
          v-for="product in filteredProducts"
          :key="product.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <ProductCard
            :id="product.id"
            :title="product.title"
            :price="product.price"
            :image="product.image"
            :description="product.description"
            :category="product.category"
            :rating="product.rating"
            :edit-mode="true"
            @open-dialog="handleDialog"
          />
        </v-col>
      </v-row>
      <CRUDDialog
        :id="selectedProduct.id"
        :title="selectedProduct.title"
        :price="selectedProduct.price"
        :image="selectedProduct.image"
        :description="selectedProduct.description"
        :category="selectedProduct.category"
        :rating="selectedProduct.rating"
        :action="true"
        v-model="showEditDialog"
      />
    </div>
  </div>
</template>
<style scoped>
/* Custom Styles */
.products__section {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #111827;
}

.products__container {
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
}

.products__heading {
  display: block;
  margin-bottom: 2rem;
}

.products__heading h1 {
  color: #fff;
}

.products__heading p {
  color: #9ca3af;
}

.products__controls {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
}

.products__text-field {
  flex: 1 1 0%;
}

.products__sort-filters {
  gap: 1rem;
  display: flex;
  align-items: center;
}

.select__container {
  position: relative;
}

.products__categories {
  margin-bottom: 32px;
  background-color: #1f2937;
  border-radius: 8px;
}

.products__categories--wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.products__categories--wrapper .selectedCategory {
  background-color: #eab308 !important;
  color: black !important;
}

.products__categories h3 {
  font-weight: 500;
  color: #fff;
  font-size: 16px;
}

/* Component Overrides */
.products__text-field ::v-deep(.v-field--rounded) {
  border-radius: 0.5rem;
}

.products__sort-filters ::v-deep(.mdi-menu-down) {
  display: none;
}

.select__container ::v-deep(.v-field) {
  border-radius: 0.5rem;
}

.button__add-product,
.products__sort-filters ::v-deep(.v-btn) {
  text-transform: none !important;
  border-radius: 0.5rem;
}

.button__add-product,
.products__categories--wrapper ::v-deep(.v-btn) {
  text-transform: capitalize !important;
  color: #fff;
  background-color: #374151;
  transition: none !important;
}

.button__add-product,
.products__categories--wrapper ::v-deep(.v-btn .v-btn__content) {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.products__categories--wrapper ::v-deep(.v-btn__overlay),
.products__categories--wrapper ::v-deep(.v-btn__underlay) {
  display: none !important;
  pointer-events: none !important;
}

/* Responsive Styling */
@media (min-width: 768px) {
  .products__controls {
    flex-direction: row;
  }

  .products__heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
