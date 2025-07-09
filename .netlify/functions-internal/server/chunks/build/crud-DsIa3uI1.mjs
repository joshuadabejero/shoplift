import __nuxt_component_0 from './CRUDDialog-C0CND5rP.mjs';
import { ref, watch, computed, mergeProps, withCtx, createTextVNode, unref, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import ProductCard from './ProductCard-Cm0bYlZC.mjs';
import { u as useProductStore } from './productStore-CVgKG8TE.mjs';
import { _ as _export_sfc } from './server.mjs';
import { V as VBtn } from './VImg-CNRCAQ0F.mjs';
import { V as VTextField, a as VSelect } from './VSelect-D0vjoIR3.mjs';
import { V as VRow, a as VCol } from './VRow-BSFpi4f7.mjs';
import './nuxt-link-Bob1bXqo.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import './VAvatar-mCO-D1Ut.mjs';
import 'pinia';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import './VList-DYKzCXCp.mjs';

const _sfc_main = {
  __name: "crud",
  __ssrInlineRender: true,
  setup(__props) {
    const productStore = useProductStore();
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
        (p) => {
          var _a, _b;
          return ((_a = p.title) == null ? void 0 : _a.toLowerCase().includes(query)) || ((_b = p.description) == null ? void 0 : _b.toLowerCase().includes(query));
        }
      );
    });
    const selectedProduct = ref({
      id: 0,
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "",
      rating: {}
    });
    const handleDialog = (product) => {
      selectedProduct.value = {
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
        rating: product.rating
      };
      showEditDialog.value = true;
    };
    const showAddDialog = ref(false);
    const showEditDialog = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CRUDDialog = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "products__section" }, _attrs))} data-v-2abb4b00><div class="products__container" data-v-2abb4b00><div class="products__heading" data-v-2abb4b00><div data-v-2abb4b00><h1 data-v-2abb4b00>CRUD Management</h1><p data-v-2abb4b00>Welcome to the Product Management Dashboard (non-persistent)</p></div><div class="mt-5 mt-sm-0" data-v-2abb4b00>`);
      _push(ssrRenderComponent(VBtn, {
        class: "button__add-product",
        "prepend-icon": "mdi-file-plus-outline",
        color: "#EAB308",
        ripple: false,
        onClick: ($event) => showAddDialog.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Add Product`);
          } else {
            return [
              createTextVNode("Add Product")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CRUDDialog, {
        modelValue: showAddDialog.value,
        "onUpdate:modelValue": ($event) => showAddDialog.value = $event
      }, null, _parent));
      _push(`</div></div><div class="products__controls" data-v-2abb4b00><div class="products__text-field" data-v-2abb4b00>`);
      _push(ssrRenderComponent(VTextField, {
        modelValue: searchQuery.value,
        "onUpdate:modelValue": ($event) => searchQuery.value = $event,
        "bg-color": "#1F2937",
        "prepend-inner-icon": "mdi-magnify",
        variant: "solo",
        label: "Search for products...",
        density: "compact",
        "single-line": "",
        "hide-details": "",
        rounded: ""
      }, null, _parent));
      _push(`</div><div class="products__sort-filters" data-v-2abb4b00><div class="select__container" data-v-2abb4b00>`);
      _push(ssrRenderComponent(VSelect, {
        modelValue: sortOption.value,
        "onUpdate:modelValue": ($event) => sortOption.value = $event,
        items: [
          { title: "Default", value: "default" },
          { title: "Price: Low to High", value: "price-asc" },
          { title: "Price: High to Low", value: "price-desc" },
          { title: "Name: A to Z", value: "name-asc" },
          { title: "Name: Z to A", value: "name-desc" }
        ],
        "bg-color": "#1F2937",
        variant: "solo",
        density: "compact",
        "hide-details": "",
        "single-line": "",
        "append-inner-icon": "mdi-tune-vertical"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(VBtn, {
        height: "40px",
        "prepend-icon": "mdi-filter-outline",
        color: "#1F2937",
        onClick: toggleFilters
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Filters`);
          } else {
            return [
              createTextVNode("Filters")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (showFilters.value) {
        _push(`<div class="products__categories pa-4" data-v-2abb4b00><h3 class="mb-4" data-v-2abb4b00>Categories</h3><div class="products__categories--wrapper" data-v-2abb4b00><!--[-->`);
        ssrRenderList(unref(productStore).categories, (category) => {
          _push(ssrRenderComponent(VBtn, {
            key: category,
            class: selectedCategory.value === unref(productStore).categories ? "selectedCategory" : "",
            rounded: "",
            ripple: false,
            onClick: ($event) => selectedCategory.value = category
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(category)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(category), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(filteredProducts), (product) => {
              _push2(ssrRenderComponent(VCol, {
                key: product.id,
                cols: "12",
                sm: "6",
                md: "4",
                lg: "3"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(ProductCard, {
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      image: product.image,
                      description: product.description,
                      category: product.category,
                      rating: product.rating,
                      "edit-mode": true,
                      onOpenDialog: handleDialog
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(ProductCard, {
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image,
                        description: product.description,
                        category: product.category,
                        rating: product.rating,
                        "edit-mode": true,
                        onOpenDialog: handleDialog
                      }, null, 8, ["id", "title", "price", "image", "description", "category", "rating"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredProducts), (product) => {
                return openBlock(), createBlock(VCol, {
                  key: product.id,
                  cols: "12",
                  sm: "6",
                  md: "4",
                  lg: "3"
                }, {
                  default: withCtx(() => [
                    createVNode(ProductCard, {
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      image: product.image,
                      description: product.description,
                      category: product.category,
                      rating: product.rating,
                      "edit-mode": true,
                      onOpenDialog: handleDialog
                    }, null, 8, ["id", "title", "price", "image", "description", "category", "rating"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CRUDDialog, {
        id: selectedProduct.value.id,
        title: selectedProduct.value.title,
        price: selectedProduct.value.price,
        image: selectedProduct.value.image,
        description: selectedProduct.value.description,
        category: selectedProduct.value.category,
        rating: selectedProduct.value.rating,
        action: true,
        modelValue: showEditDialog.value,
        "onUpdate:modelValue": ($event) => showEditDialog.value = $event
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/crud.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const crud = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2abb4b00"]]);

export { crud as default };
//# sourceMappingURL=crud-DsIa3uI1.mjs.map
