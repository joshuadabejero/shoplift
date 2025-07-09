import { withCtx, createTextVNode, createVNode, unref, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import ProductCard from './ProductCard-Cm0bYlZC.mjs';
import { u as useProductStore } from './productStore-CVgKG8TE.mjs';
import { _ as _export_sfc, g as genericComponent, e as propsFactory, F as useRtl } from './server.mjs';
import { V as VRow, a as VCol } from './VRow-BSFpi4f7.mjs';
import { V as VBtn, a as VIcon, u as useDimension, b as useRender, m as makeTagProps, c as makeDimensionProps, d as makeComponentProps } from './VImg-CNRCAQ0F.mjs';
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

const makeVContainerProps = propsFactory({
  fluid: {
    type: Boolean,
    default: false
  },
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeTagProps()
}, "VContainer");
const VContainer = genericComponent()({
  name: "VContainer",
  props: makeVContainerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      rtlClasses
    } = useRtl();
    const {
      dimensionStyles
    } = useDimension(props);
    useRender(() => createVNode(props.tag, {
      "class": ["v-container", {
        "v-container--fluid": props.fluid
      }, rtlClasses.value, props.class],
      "style": [dimensionStyles.value, props.style]
    }, slots));
    return {};
  }
});
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const productStore = useProductStore();
    const items = [
      {
        title: "Fast Delivery",
        description: "Get your products in 24-48 hours",
        icon: "mdi-truck-outline"
      },
      {
        title: "Secure Payment",
        description: "100% secure payment methods",
        icon: "mdi-credit-card-outline"
      },
      {
        title: "Quality Guarantee",
        description: "30-day money-back guarantee",
        icon: "mdi-shield-outline"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="hero-section" data-v-7cc33761><div class="background-image__container" data-v-7cc33761></div>`);
      _push(ssrRenderComponent(VContainer, { class: "hero-content" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="hero-content__container" data-v-7cc33761${_scopeId}><h1 class="hero-content__title" data-v-7cc33761${_scopeId}> Fast Delivery, <span data-v-7cc33761${_scopeId}>Great Products</span></h1><p class="hero-content__description" data-v-7cc33761${_scopeId}> Shop the latest trends and get your products delivered quickly. Your satisfaction is our priority. </p><div class="hero-content__button--container" data-v-7cc33761${_scopeId}>`);
            _push2(ssrRenderComponent(VBtn, {
              color: "#eab308",
              size: "large"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Shop Now `);
                  _push3(ssrRenderComponent(VIcon, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-arrow-right`);
                      } else {
                        return [
                          createTextVNode("mdi-arrow-right")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode("Shop Now "),
                    createVNode(VIcon, null, {
                      default: withCtx(() => [
                        createTextVNode("mdi-arrow-right")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              variant: "outlined",
              color: "white",
              size: "large",
              ripple: false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`View Collection`);
                } else {
                  return [
                    createTextVNode("View Collection")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "hero-content__container" }, [
                createVNode("h1", { class: "hero-content__title" }, [
                  createTextVNode(" Fast Delivery, "),
                  createVNode("span", null, "Great Products")
                ]),
                createVNode("p", { class: "hero-content__description" }, " Shop the latest trends and get your products delivered quickly. Your satisfaction is our priority. "),
                createVNode("div", { class: "hero-content__button--container" }, [
                  createVNode(VBtn, {
                    color: "#eab308",
                    size: "large"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Shop Now "),
                      createVNode(VIcon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-arrow-right")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VBtn, {
                    variant: "outlined",
                    color: "white",
                    size: "large",
                    ripple: false
                  }, {
                    default: withCtx(() => [
                      createTextVNode("View Collection")
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="highlights-section" data-v-7cc33761><div class="highlights__container" data-v-7cc33761><!--[-->`);
      ssrRenderList(items, (item) => {
        _push(`<div class="highlights-item" data-v-7cc33761>`);
        _push(ssrRenderComponent(VIcon, {
          class: "item__icon",
          icon: item.icon,
          size: "large"
        }, null, _parent));
        _push(`<div data-v-7cc33761><h3 class="item__title" data-v-7cc33761>${ssrInterpolate(item.title)}</h3><p class="item__description" data-v-7cc33761>${ssrInterpolate(item.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></section><section class="featured-products-section" data-v-7cc33761><div class="featured-products__container" data-v-7cc33761><div class="featured-products-section__title" data-v-7cc33761><h2 data-v-7cc33761>Featured Products</h2>`);
      _push(ssrRenderComponent(VBtn, {
        "append-icon": "mdi-arrow-right",
        color: "#eab308",
        ripple: false,
        variant: "text"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View All`);
          } else {
            return [
              createTextVNode("View All")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="products__container" data-v-7cc33761>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(productStore).featuredProducts, (product) => {
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
                      rating: product.rating
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(ProductCard, {
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image,
                        rating: product.rating
                      }, null, 8, ["id", "title", "price", "image", "rating"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(productStore).featuredProducts, (product) => {
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
                      rating: product.rating
                    }, null, 8, ["id", "title", "price", "image", "rating"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="special-offer-section" data-v-7cc33761><div class="special-offer__background" data-v-7cc33761></div><div class="special-offer__container" data-v-7cc33761><h1 class="special-offer__title" data-v-7cc33761>Special Offer Just For You</h1><p class="special-offer__description" data-v-7cc33761> Discover our exclusive collection with special discounts. Limited time offers on selected items. </p>`);
      _push(ssrRenderComponent(VBtn, {
        class: "special-offer__button",
        ripple: false,
        color: "#eab308"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Shop Now`);
          } else {
            return [
              createTextVNode("Shop Now")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="new-arrival-products-section" data-v-7cc33761><div class="new-arrival-products__container" data-v-7cc33761><div class="new-arrival-products-section__title" data-v-7cc33761><h2 data-v-7cc33761>New Arrivals</h2>`);
      _push(ssrRenderComponent(VBtn, {
        "append-icon": "mdi-arrow-right",
        color: "#eab308",
        ripple: false,
        variant: "text"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View All`);
          } else {
            return [
              createTextVNode("View All")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="products__container" data-v-7cc33761>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(productStore).newArrivalProducts, (product) => {
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
                      rating: product.rating
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(ProductCard, {
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image,
                        rating: product.rating
                      }, null, 8, ["id", "title", "price", "image", "rating"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(productStore).newArrivalProducts, (product) => {
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
                      rating: product.rating
                    }, null, 8, ["id", "title", "price", "image", "rating"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7cc33761"]]);

export { index as default };
//# sourceMappingURL=index-Bt3OIiTF.mjs.map
