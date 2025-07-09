# 🛍️ ShopLift - Nuxt 3 + Pinia + FakeStore

![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_SITE_ID_HERE/deploy-status)

**ShopLift** is a simple demo e-commerce frontend built with Nuxt 3, using Pinia for state management and FakeStoreAPI as the mock backend.

## 🚀 Tech Stack

- Nuxt 3
- Pinia
- FakeStoreAPI

## 📦 Features

- Browse products from FakeStoreAPI
- View product list and details
- Mocked Add/Edit/Delete product functionality _(non-persistent)_
- State management via Pinia
- Clean, modular project structure

## ⚠️ Note on CRUD

The CRUD operations (Add, Edit, Delete) are **not persistent** and are only available on the dedicated **CRUD page**. Since FakeStoreAPI is a mock API, it does not support real data persistence — changes will not be saved on refresh or across sessions.

## 📁 Project Structure

```
.
├── composables/       # Shared logic and reusable functions
├── pages/             # Application views and routing
├── components/        # UI components
├── stores/            # Pinia stores for state management
├── assets/            # Static styles and media
├── public/            # Public files (favicon, etc.)
├── app.vue            # Root Vue component
├── nuxt.config.ts     # Nuxt configuration
└── ...
```

## 🛠️ Setup

```bash
# Install dependencies
yarn install

# Start development server
yarn dev
```

## 🌐 API Source

All product data is sourced from:
https://fakestoreapi.com/

## 📄 License

MIT License

---

Made with ❤️ for learning and experimenting — Shop responsibly with **ShopLift**
