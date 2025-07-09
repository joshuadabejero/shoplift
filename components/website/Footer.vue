<script setup>
const socials = ["mdi-facebook", "mdi-twitter", "mdi-instagram"];

const headline = {
  title: "ShopLift",
  description:
    "Your one-stop shop for all your needs. Fast delivery, quality products.",
};

const quickLinks = {
  title: "Quick Links",
  links: [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Products",
      to: "/products",
    },
    {
      name: "CRUD",
      to: "/crud",
    },
  ],
};

const categories = {
  title: "Categories",
  links: [
    {
      name: "Electronics",
      to: "/",
    },
    {
      name: "Jewelries",
      to: "/",
    },
    {
      name: "Men's Clothing",
      to: "/",
    },
    {
      name: "Women's Clothing",
      to: "/",
    },
  ],
};

const contactUs = {
  title: "Contact Us",
  contacts: [
    {
      name: "Nicanor Garcia, Makati, Metro Manila",
      icon: "mdi-map-marker-outline",
    },
    {
      name: "+1 234 567 8900",
      icon: "mdi-phone-outline",
    },
    {
      name: "snatch@shoplift.com",
      icon: "mdi-email -outline",
    },
  ],
};
</script>

<template>
  <v-footer color="#000000">
    <div class="footer__container">
      <div class="footer__headline--container">
        <div class="d-flex align-center">
          <div class="icon__container">
            <v-icon
              icon="mdi-cart-outline"
              color="black"
              :ripple="false"
              size="large"
            ></v-icon>
          </div>
          <h4>{{ headline.title }}</h4>
        </div>
        <p>{{ headline.description }}</p>
        <div class="footer__socials--container d-flex ga-3">
          <v-btn
            v-for="social in socials"
            class="social__item"
            color="grey"
            :icon="social"
            variant="text"
            size="medium"
          ></v-btn>
        </div>
      </div>

      <div class="footer__quick-links">
        <h4>{{ quickLinks.title }}</h4>
        <v-list bg-color="#000000" nav dense>
          <v-list-item
            v-for="link in quickLinks.links"
            :key="link.name"
            :ripple="false"
            link
            :to="link.to"
            :title="link.name"
          />
        </v-list>
      </div>
      <div class="footer__categories">
        <h4>{{ categories.title }}</h4>
        <v-list bg-color="#000000" nav dense>
          <v-list-item
            v-for="link in categories.links"
            :key="link.name"
            :ripple="false"
            link
            :title="link.name"
          />
        </v-list>
      </div>
      <div class="footer__contact-us">
        <h4>{{ contactUs.title }}</h4>
        <v-list bg-color="#000000" nav dense>
          <v-list-item
            v-for="contact in contactUs.contacts"
            :key="contact.name"
            :ripple="false"
            link
            ><template v-slot:prepend>
              <v-icon color="#eab308" :icon="contact.icon"></v-icon>
            </template>
            <v-list-item-title v-text="contact.name"></v-list-item-title
          ></v-list-item>
        </v-list>
      </div>
    </div>
  </v-footer>
</template>

<style scoped>
/* Custom Styles */
.icon__container {
  border-radius: 6px;
  background-color: #eab308;
  margin-right: 8px;
  padding: 8px;
  padding: 0.5rem;
}

.icon__container ~ h4 {
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #eab308;
}

.d-flex:has(.icon__container) {
  margin-bottom: 1rem;
}

.d-flex:has(.icon__container) ~ p {
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-bottom: 1rem;
  color: #9ca3af;
}

.footer__container {
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

/* Component Overrides */
.footer__socials--container ::v-deep(.v-btn--icon.v-btn--density-default) {
  width: 20px;
  height: 20px;
}

.footer__container ::v-deep(.v-list-item-title) {
  font-size: 16px;
  color: #9ca3af;
  white-space: normal;
}

.footer__container ::v-deep(.v-list--nav, .v-list, .v-list--nav) {
  --indent-padding: 0 !important;
  padding-inline: 0 !important;
}

.footer__container ::v-deep(.v-list-item, .v-list, .v-list--nav) {
  --indent-padding: 0 !important;
  padding-inline: 0 !important;
  padding: 4px 0 !important;
}

.footer__container
  ::v-deep(.v-list-item--density-default.v-list-item--one-line) {
  min-height: 30px !important;
}

.footer__container ::v-deep(.v-list-item__overlay),
.footer__container ::v-deep(.v-list-item__underlay) {
  display: none !important;
  pointer-events: none !important;
}

.footer__contact-us ::v-deep(.v-list-item__prepend) {
  display: block;
}
.footer__quick-links ::v-deep(.v-list-item-title:hover),
.footer__categories ::v-deep(.v-list-item-title:hover) {
  color: #eab308;
}

.footer__contact-us ::v-deep(.v-list-item-title:hover) {
  cursor: text;
}

/* Responsive Styling */
@media (min-width: 768px) {
  .footer__container {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (min-width: 1280px) {
  .footer__container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
</style>
