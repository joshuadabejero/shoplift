<script setup>
const route = useRoute();
const productId = route.params.id;

const { data: product } = await useFetch(
  `https://fakestoreapi.com/products/${productId}`
);
</script>

<template>
  <div class="product__section">
    <div class="product__container">
      <div class="product__button--wrapper d-flex">
        <v-btn
          class="product__button"
          :ripple="false"
          variant="text"
          color="#9CA3AF"
          size="medium"
          to="../products"
        >
          <template #prepend>
            <v-icon class="me-2">mdi-arrow-left</v-icon>
          </template>
          Back to Products</v-btn
        >
      </div>
      <div class="product__wrapper--background">
        <div class="product__wrapper">
          <div class="product__image">
            <v-img :src="product.image" width="400px"></v-img>
          </div>
          <div class="product__data">
            <div class="product__category">Men's clothing</div>
            <h1 class="product__title text-white">
              {{ product.title }}
            </h1>
            <div class="product__ratings d-flex">
              <v-rating
                :model-value="product.rating.rate"
                readonly
                color="amber"
                size="small"
                density="compact"
                style="margin-right: 0.75rem; margin-bottom: 3px"
              ></v-rating>
              <p>( {{ product.rating.count }} reviews )</p>
            </div>
            <div class="product__price text-white">
              ${{ product.price.toFixed(2) }}
            </div>
            <p class="product__description">
              {{ product.description }}
            </p>
            <div class="product__tagline">
              <div class="d-flex">
                <v-icon color="#EAB308" size="small">mdi-truck-outline</v-icon>
                <span>Free shipping on orders over $50</span>
              </div>
              <div>In stock and ready to ship</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom Styles */
.product__section {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #111827;
}

.product__container {
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
}

.product__wrapper--background {
  background-color: #1f2937;
  overflow: hidden;
  border-radius: 0.5rem;
}

.product__wrapper {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.product__image {
  padding: 2rem;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  display: flex;
}

.product__data {
  padding: 2rem;
}

.product__category {
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #eab308;
}

.product__title {
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 1rem;
}

.product__ratings {
  align-items: center;
  margin-bottom: 1rem;
}

.product__ratings p {
  color: #9ca3af;
}

.product__price {
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 2.25rem;
  margin-bottom: 1.5rem;
}

.product__description {
  color: #d1d5db;
  margin-bottom: 2rem;
}

.product__tagline {
  border-top: solid 1px #374151ff;
  padding-top: 1.5rem;
}

.product__tagline div span {
  color: #d1d5db;
  font-size: 16px;
}

.product__tagline div:first-of-type {
  align-items: center;
  margin-bottom: 0.75rem;
}

.product__tagline div ~ div {
  color: #9ca3af;
  font-size: 14px;
}

.product__button--wrapper {
  margin-bottom: 1.5rem;
}

/* Component Overrides */
.product__button--wrapper ::v-deep(.v-btn) {
  text-transform: none !important;
}

.product__button--wrapper ::v-deep(.v-btn:hover) {
  color: #eab308 !important;
}

.product__button--wrapper ::v-deep(.v-btn__overlay),
.product__button--wrapper ::v-deep(.v-btn__underlay) {
  display: none !important;
  pointer-events: none !important;
}

.product__image ::v-deep(.v-img) {
  max-height: 400px;
  max-width: 100%;
  object-fit: contain;
}

.product__tagline ::v-deep(.v-icon) {
  margin-right: 0.75rem;
}

/* Responsive Styling */
@media (min-width: 768px) {
  .product__wrapper {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
