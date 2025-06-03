<script setup>
import ProductCard from "~/components/global/ProductCard.vue";
const { products } = useProducts(4);

const items = [
  {
    title: "Fast Delivery",
    description: "Get your products in 24-48 hours",
    icon: "mdi-truck-outline",
  },
  {
    title: "Secure Payment",
    description: "100% secure payment methods",
    icon: "mdi-credit-card-outline",
  },
  {
    title: "Quality Guarantee",
    description: "30-day money-back guarantee",
    icon: "mdi-shield-outline",
  },
];
</script>

<template>
  <section class="hero-section">
    <div class="background-image__container"></div>
    <v-container class="hero-content">
      <div class="hero-content__container">
        <h1 class="hero-content__title">
          Fast Delivery, <span>Great Products</span>
        </h1>
        <p class="hero-content__description">
          Shop the latest trends and get your products delivered quickly. Your
          satisfaction is our priority.
        </p>
        <div class="hero-content__button--container">
          <v-btn color="#eab308" size="large"
            >Shop Now <v-icon>mdi-arrow-right</v-icon></v-btn
          >
          <v-btn variant="outlined" color="white" size="large" :ripple="false"
            >View Collection</v-btn
          >
        </div>
      </div>
    </v-container>
  </section>
  <section class="highlights-section">
    <div class="highlights__container">
      <div v-for="item in items" :key="item.title" class="highlights-item">
        <v-icon class="item__icon" :icon="item.icon" size="large"></v-icon>
        <div>
          <h3 class="item__title">{{ item.title }}</h3>
          <p class="item__description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
  <section class="featured-products-section">
    <div class="featured-products__container">
      <div class="featured-products-section__title">
        <h2>Featured Products</h2>

        <v-btn
          append-icon="mdi-arrow-right"
          color="#eab308"
          :ripple="false"
          variant="text"
          >View All</v-btn
        >
      </div>
      <div class="products__container">
        <v-row>
          <v-col
            v-for="product in products"
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
              :rating="product.rating"
            />
          </v-col>
        </v-row>
      </div>
    </div>
  </section>
  <section class="special-offer-section">
    <div class="special-offer__background"></div>
    <div class="special-offer__container">
      <h1 class="special-offer__title">Special Offer Just For You</h1>
      <p class="special-offer__description">
        Discover our exclusive collection with special discounts. Limited time
        offers on selected items.
      </p>
      <v-btn class="special-offer__button" :ripple="false" color="#eab308"
        >Shop Now</v-btn
      >
    </div>
  </section>
  <section class="new-arrival-products-section">
    <div class="new-arrival-products__container">
      <div class="new-arrival-products-section__title">
        <h2>New Arrivals</h2>

        <v-btn
          append-icon="mdi-arrow-right"
          color="#eab308"
          :ripple="false"
          variant="text"
          >View All</v-btn
        >
      </div>
      <div class="products__container">
        <v-row>
          <v-col
            v-for="product in products"
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
              :rating="product.rating"
            />
          </v-col>
        </v-row>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* --- HERO SECTION --- */
/* Custom Styles */
.hero-section {
  position: relative;
  height: 500px;
  width: 100%;
  overflow: hidden;
  background-color: #000;
}

.hero-section .background-image__container {
  position: absolute;
  inset: 0;
  background-image: url("https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
  background-size: cover;
  background-position: center;
  opacity: 0.4;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 10;
  height: 100%;
  display: flex;
  align-items: center;
  max-width: 1280px;
  padding: 0 24px;
}

.hero-content__container {
  width: 100%;
}

.hero-content__title {
  color: #ffffff;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  margin-bottom: 16px;
}

.hero-content__title span {
  color: #eab308;
}

.hero-content__description {
  color: #d1d5db;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 32px;
}

.hero-content__button--container {
  display: flex;
}

/* --- HIGHLIGHTS SECTION --- */
/* Custom Styles */
.highlights-section {
  padding-top: 48px;
  padding-bottom: 48px;
  background-color: #1f2937;
}

.highlights__container {
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 32px;
  padding-left: 24px;
  padding-right: 24px;
}

.highlights-item {
  padding: 24px;
  background-color: #111827;
  border-radius: 8px;
  align-items: center;
  display: flex;
}

.item__icon {
  padding: 16px;
  background-color: #eab308;
  border-radius: 9999px;
  margin-right: 16px;
  width: 48px;
  height: 48px;
}

.item__title {
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  margin: 0;
}
.item__description {
  color: #9ca3af;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
}

/* --- FEATURED PRODUCTS SECTION --- */
/* Custom Styles */
.featured-products-section {
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: #111827;
}

.featured-products__container {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
}

.featured-products-section__title {
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-bottom: 2rem;
}

.featured-products-section__title > h2 {
  color: #ffffff;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  margin: 0;
}

/* --- SPECIAL OFFER SECTION --- */
/* Custom Styles */
.special-offer-section {
  position: relative;
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: #000000;
  text-align: center;
}

.special-offer__background {
  background-image: url(https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
  opacity: 0.2;
  background-position: center;
  background-size: cover;
  inset: 0;
  position: absolute;
}

.special-offer__container {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  max-width: 80rem;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  z-index: 10;
}

.special-offer__title {
  color: #fff;
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 2.25rem;
  margin-bottom: 1.5rem;
}

.special-offer__description {
  color: #d1d5db;
  margin-bottom: 2rem;
}

/* --- NEW ARRIVAL PRODUCT SECTION --- */
/* Custom Styles */
.new-arrival-products-section {
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: #111827;
}

.new-arrival-products__container {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
}

.new-arrival-products-section__title {
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-bottom: 2rem;
}

.new-arrival-products-section__title > h2 {
  color: #ffffff;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  margin: 0;
}

/* Component Overrides */
.hero-content__button--container ::v-deep(.v-btn__overlay),
.hero-content__button--container ::v-deep(.v-btn__underlay),
.featured-products-section ::v-deep(.v-btn__overlay),
.featured-products-section ::v-deep(.v-btn__underlay),
.new-arrival-products-section::v-deep(.v-btn__overlay),
.new-arrival-products-section ::v-deep(.v-btn__underlay) {
  display: none !important;
  pointer-events: none !important;
}

.featured-products-section__title ::v-deep(.v-btn),
.new-arrival-products-section__title ::v-deep(.v-btn) {
  text-transform: none !important;
}

.hero-content__button--container ::v-deep(.v-btn) {
  font-weight: 500;
  border-radius: 6px;
  text-transform: none !important;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
}

.hero-content__button--container ::v-deep(.v-btn:last-of-type) {
  margin-left: 16px;
}

:deep(.hero-content__button--container .v-btn:last-of-type:hover) {
  border: thin solid #eab308;
}

:deep(.new-arrival-products-section__title .v-btn:hover .v-btn__content),
:deep(
    .hero-content__button--container .v-btn:last-of-type:hover .v-btn__content
  ),
:deep(.featured-products-section__title .v-btn:hover .v-btn__content) {
  color: #eab308;
}

/* Responsive Styling */
@media (max-width: 424px) {
  .hero-content__button--container {
    display: block;
  }

  .hero-content__button--container ::v-deep(.v-btn:last-of-type) {
    margin-left: 0px;
    margin-top: 16px;
  }
}

@media (min-width: 768px) {
  .hero-content__container {
    width: 50%;
  }

  .hero-content__title {
    font-size: 48px;
    line-height: 1;
  }

  .highlights__container {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-left: auto;
    margin-right: auto;
  }

  .special-offer-section {
    text-align: left;
  }

  .special-offer__title {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
}
</style>
