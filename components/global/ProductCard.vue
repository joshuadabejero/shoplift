<script setup>
defineProps({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: {
    type: Object,
    required: false,
    rate: Number,
    count: Number,
  },
});

defineEmits(["add-to-cart"]);
</script>

<template>
  <v-card class="product-card rounded-lg" max-width="400" color="#1f2937">
    <div class="product-card__image--container">
      <v-img
        class="product-card__image align-end text-white"
        height="200"
        :src="image"
        cover
      >
      </v-img>
    </div>

    <div class="product-card__text">
      <v-card-title class="pa-0 mb-3">{{ title }}</v-card-title>
      <v-card-text class="d-flex pa-0 mb-4">
        <div>
          <v-icon icon="mdi-star" size="small" color="#eab308"></v-icon>
          <span class="product-card__rate"> {{ rating.rate }}</span>
        </div>
        <div class="product-card__reviews-count ml-2">
          ({{ rating.count }} reviews)
        </div>
      </v-card-text>

      <div
        class="product-card__action d-flex align-center justify-space-between pa-0"
      >
        <h4 class="product-card__price">${{ price }}</h4>
        <v-btn
          class="btn-add_to_cart"
          prepend-icon="mdi-cart-outline"
          color="#eab308"
          text="Add to Cart"
          :ripple="false"
        ></v-btn>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
/* Custom Styles */
.product-card__image--container {
  background-color: #fff;
}

.product-card__text {
  padding: 1.5rem;
}

.product-card__rate {
  color: #eab308;
}

.product-card__reviews-count {
  color: #9ca3af;
}

.btn-add_to_cart {
  border-radius: 6px;
}

.product-card__price {
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #eab308;
}

/* Component Overrides */
.product-card ::v-deep(.v-img__img) {
  object-fit: contain;
  padding: 1rem;
}

.product-card ::v-deep(.v-card-title) {
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.product-card .product-card__action ::v-deep(.v-btn) {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.375rem;
  text-transform: none !important;
}

.product-card .product-card__action ::v-deep(.v-btn__overlay),
.product-card .product-card__action ::v-deep(.v-btn__underlay) {
  display: none !important;
  pointer-events: none !important;
}
</style>
