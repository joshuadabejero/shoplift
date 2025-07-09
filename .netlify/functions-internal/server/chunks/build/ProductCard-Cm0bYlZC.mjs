import { _ as __nuxt_component_0 } from './nuxt-link-Bob1bXqo.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, withDirectives, resolveDirective, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { f as VImg, a as VIcon, V as VBtn, R as Ripple, q as useBorder, w as useVariant, j as useDensity, u as useDimension, r as useElevation, k as useLoader, S as useLocation, T as usePosition, l as useRounded, v as useLink, b as useRender, C as makeVariantProps, m as makeTagProps, D as makeRouterProps, y as makeRoundedProps, U as makePositionProps, W as makeLocationProps, z as makeLoaderProps, F as makeElevationProps, c as makeDimensionProps, h as makeDensityProps, d as makeComponentProps, G as makeBorderProps, i as VDefaultsProvider, x as genOverlays, L as LoaderSlot } from './VImg-CNRCAQ0F.mjs';
import { _ as _export_sfc, g as genericComponent, e as propsFactory, f as provideTheme, m as makeThemeProps, I as IconValue, p as provideDefaults } from './server.mjs';
import { c as createSimpleFunctional, V as VAvatar } from './VAvatar-mCO-D1Ut.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'pinia';
import 'vue-router';

const VCardActions = genericComponent()({
  name: "VCardActions",
  props: makeComponentProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    provideDefaults({
      VBtn: {
        slim: true,
        variant: "text"
      }
    });
    useRender(() => {
      var _a;
      return createVNode("div", {
        "class": ["v-card-actions", props.class],
        "style": props.style
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});
const makeVCardSubtitleProps = propsFactory({
  opacity: [Number, String],
  ...makeComponentProps(),
  ...makeTagProps()
}, "VCardSubtitle");
const VCardSubtitle = genericComponent()({
  name: "VCardSubtitle",
  props: makeVCardSubtitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(props.tag, {
      "class": ["v-card-subtitle", props.class],
      "style": [{
        "--v-card-subtitle-opacity": props.opacity
      }, props.style]
    }, slots));
    return {};
  }
});
const VCardTitle = createSimpleFunctional("v-card-title");
const makeCardItemProps = propsFactory({
  appendAvatar: String,
  appendIcon: IconValue,
  prependAvatar: String,
  prependIcon: IconValue,
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...makeComponentProps(),
  ...makeDensityProps()
}, "VCardItem");
const VCardItem = genericComponent()({
  name: "VCardItem",
  props: makeCardItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      var _a;
      const hasPrependMedia = !!(props.prependAvatar || props.prependIcon);
      const hasPrepend = !!(hasPrependMedia || slots.prepend);
      const hasAppendMedia = !!(props.appendAvatar || props.appendIcon);
      const hasAppend = !!(hasAppendMedia || slots.append);
      const hasTitle = !!(props.title != null || slots.title);
      const hasSubtitle = !!(props.subtitle != null || slots.subtitle);
      return createVNode("div", {
        "class": ["v-card-item", props.class],
        "style": props.style
      }, [hasPrepend && createVNode("div", {
        "key": "prepend",
        "class": "v-card-item__prepend"
      }, [!slots.prepend ? createVNode(Fragment, null, [props.prependAvatar && createVNode(VAvatar, {
        "key": "prepend-avatar",
        "density": props.density,
        "image": props.prependAvatar
      }, null), props.prependIcon && createVNode(VIcon, {
        "key": "prepend-icon",
        "density": props.density,
        "icon": props.prependIcon
      }, null)]) : createVNode(VDefaultsProvider, {
        "key": "prepend-defaults",
        "disabled": !hasPrependMedia,
        "defaults": {
          VAvatar: {
            density: props.density,
            image: props.prependAvatar
          },
          VIcon: {
            density: props.density,
            icon: props.prependIcon
          }
        }
      }, slots.prepend)]), createVNode("div", {
        "class": "v-card-item__content"
      }, [hasTitle && createVNode(VCardTitle, {
        "key": "title"
      }, {
        default: () => {
          var _a3;
          var _a2;
          return [(_a3 = (_a2 = slots.title) == null ? void 0 : _a2.call(slots)) != null ? _a3 : toDisplayString(props.title)];
        }
      }), hasSubtitle && createVNode(VCardSubtitle, {
        "key": "subtitle"
      }, {
        default: () => {
          var _a3;
          var _a2;
          return [(_a3 = (_a2 = slots.subtitle) == null ? void 0 : _a2.call(slots)) != null ? _a3 : toDisplayString(props.subtitle)];
        }
      }), (_a = slots.default) == null ? void 0 : _a.call(slots)]), hasAppend && createVNode("div", {
        "key": "append",
        "class": "v-card-item__append"
      }, [!slots.append ? createVNode(Fragment, null, [props.appendIcon && createVNode(VIcon, {
        "key": "append-icon",
        "density": props.density,
        "icon": props.appendIcon
      }, null), props.appendAvatar && createVNode(VAvatar, {
        "key": "append-avatar",
        "density": props.density,
        "image": props.appendAvatar
      }, null)]) : createVNode(VDefaultsProvider, {
        "key": "append-defaults",
        "disabled": !hasAppendMedia,
        "defaults": {
          VAvatar: {
            density: props.density,
            image: props.appendAvatar
          },
          VIcon: {
            density: props.density,
            icon: props.appendIcon
          }
        }
      }, slots.append)])]);
    });
    return {};
  }
});
const makeVCardTextProps = propsFactory({
  opacity: [Number, String],
  ...makeComponentProps(),
  ...makeTagProps()
}, "VCardText");
const VCardText = genericComponent()({
  name: "VCardText",
  props: makeVCardTextProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(props.tag, {
      "class": ["v-card-text", props.class],
      "style": [{
        "--v-card-text-opacity": props.opacity
      }, props.style]
    }, slots));
    return {};
  }
});
const makeVCardProps = propsFactory({
  appendAvatar: String,
  appendIcon: IconValue,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLoaderProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "elevated"
  })
}, "VCard");
const VCard = genericComponent()({
  name: "VCard",
  directives: {
    Ripple
  },
  props: makeVCardProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const link = useLink(props, attrs);
    useRender(() => {
      const isLink = props.link !== false && link.isLink.value;
      const isClickable = !props.disabled && props.link !== false && (props.link || link.isClickable.value);
      const Tag = isLink ? "a" : props.tag;
      const hasTitle = !!(slots.title || props.title != null);
      const hasSubtitle = !!(slots.subtitle || props.subtitle != null);
      const hasHeader = hasTitle || hasSubtitle;
      const hasAppend = !!(slots.append || props.appendAvatar || props.appendIcon);
      const hasPrepend = !!(slots.prepend || props.prependAvatar || props.prependIcon);
      const hasImage = !!(slots.image || props.image);
      const hasCardItem = hasHeader || hasPrepend || hasAppend;
      const hasText = !!(slots.text || props.text != null);
      return withDirectives(createVNode(Tag, mergeProps({
        "class": ["v-card", {
          "v-card--disabled": props.disabled,
          "v-card--flat": props.flat,
          "v-card--hover": props.hover && !(props.disabled || props.flat),
          "v-card--link": isClickable
        }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, loaderClasses.value, positionClasses.value, roundedClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, dimensionStyles.value, locationStyles.value, props.style],
        "onClick": isClickable && link.navigate,
        "tabindex": props.disabled ? -1 : void 0
      }, link.linkProps), {
        default: () => {
          var _a;
          return [hasImage && createVNode("div", {
            "key": "image",
            "class": "v-card__image"
          }, [!slots.image ? createVNode(VImg, {
            "key": "image-img",
            "cover": true,
            "src": props.image
          }, null) : createVNode(VDefaultsProvider, {
            "key": "image-defaults",
            "disabled": !props.image,
            "defaults": {
              VImg: {
                cover: true,
                src: props.image
              }
            }
          }, slots.image)]), createVNode(LoaderSlot, {
            "name": "v-card",
            "active": !!props.loading,
            "color": typeof props.loading === "boolean" ? void 0 : props.loading
          }, {
            default: slots.loader
          }), hasCardItem && createVNode(VCardItem, {
            "key": "item",
            "prependAvatar": props.prependAvatar,
            "prependIcon": props.prependIcon,
            "title": props.title,
            "subtitle": props.subtitle,
            "appendAvatar": props.appendAvatar,
            "appendIcon": props.appendIcon
          }, {
            default: slots.item,
            prepend: slots.prepend,
            title: slots.title,
            subtitle: slots.subtitle,
            append: slots.append
          }), hasText && createVNode(VCardText, {
            "key": "text"
          }, {
            default: () => {
              var _a3;
              var _a2;
              return [(_a3 = (_a2 = slots.text) == null ? void 0 : _a2.call(slots)) != null ? _a3 : props.text];
            }
          }), (_a = slots.default) == null ? void 0 : _a.call(slots), slots.actions && createVNode(VCardActions, null, {
            default: slots.actions
          }), genOverlays(isClickable, "v-card")];
        }
      }), [[resolveDirective("ripple"), isClickable && props.ripple]]);
    });
    return {};
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
      type: Object,
      required: false,
      default: () => ({
        rate: 0,
        count: 0
      })
    },
    editMode: {
      type: Boolean,
      default: false
    }
  },
  emits: ["open-dialog"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const emitProduct = () => {
      var _a, _b;
      emit("open-dialog", {
        id: props.id,
        title: props.title,
        price: props.price,
        description: props.description,
        category: props.category,
        image: props.image,
        rating: {
          rate: (_a = props.rating) == null ? void 0 : _a.rate,
          count: (_b = props.rating) == null ? void 0 : _b.count
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(VCard, mergeProps({
        class: "product-card rounded-lg",
        "max-width": "400",
        color: "#1f2937"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="product-card__image--container" data-v-a96934db${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              class: "image-link",
              to: `/products/${props.id}`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, {
                    class: "product-card__image align-end text-white",
                    height: "200",
                    src: props.image,
                    cover: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, {
                      class: "product-card__image align-end text-white",
                      height: "200",
                      src: props.image,
                      cover: ""
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="product-card__text" data-v-a96934db${_scopeId}>`);
            _push2(ssrRenderComponent(VCardTitle, { class: "pa-0 mb-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    class: "text-link",
                    to: `/products/${props.id}`
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.title)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.title), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtLink, {
                      class: "text-link",
                      to: `/products/${props.id}`
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.title), 1)
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "d-flex pa-0 mb-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  _push3(`<div data-v-a96934db${_scopeId2}>`);
                  _push3(ssrRenderComponent(VIcon, {
                    icon: "mdi-star",
                    size: "small",
                    color: "#eab308"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="product-card__rate" data-v-a96934db${_scopeId2}>${ssrInterpolate((_a = props.rating) == null ? void 0 : _a.rate)}</span></div><div class="product-card__reviews-count ml-2" data-v-a96934db${_scopeId2}> (${ssrInterpolate((_b = props.rating) == null ? void 0 : _b.count)} reviews) </div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode(VIcon, {
                        icon: "mdi-star",
                        size: "small",
                        color: "#eab308"
                      }),
                      createVNode("span", { class: "product-card__rate" }, toDisplayString((_c = props.rating) == null ? void 0 : _c.rate), 1)
                    ]),
                    createVNode("div", { class: "product-card__reviews-count ml-2" }, " (" + toDisplayString((_d = props.rating) == null ? void 0 : _d.count) + " reviews) ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="product-card__action d-flex align-center justify-space-between pa-0" data-v-a96934db${_scopeId}><h4 class="product-card__price" data-v-a96934db${_scopeId}>$${ssrInterpolate(props.price)}</h4>`);
            if (__props.editMode) {
              _push2(ssrRenderComponent(VBtn, {
                class: "btn-add_to_cart",
                "prepend-icon": "mdi-file-edit-outline",
                color: "#eab308",
                text: "Edit",
                ripple: false,
                onClick: emitProduct
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(VBtn, {
                class: "btn-add_to_cart",
                "prepend-icon": "mdi-cart-outline",
                color: "#eab308",
                text: "Add to Cart",
                ripple: false
              }, null, _parent2, _scopeId));
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "product-card__image--container" }, [
                createVNode(_component_NuxtLink, {
                  class: "image-link",
                  to: `/products/${props.id}`
                }, {
                  default: withCtx(() => [
                    createVNode(VImg, {
                      class: "product-card__image align-end text-white",
                      height: "200",
                      src: props.image,
                      cover: ""
                    }, null, 8, ["src"])
                  ]),
                  _: 1
                }, 8, ["to"])
              ]),
              createVNode("div", { class: "product-card__text" }, [
                createVNode(VCardTitle, { class: "pa-0 mb-3" }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtLink, {
                      class: "text-link",
                      to: `/products/${props.id}`
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.title), 1)
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ]),
                  _: 1
                }),
                createVNode(VCardText, { class: "d-flex pa-0 mb-4" }, {
                  default: withCtx(() => {
                    var _a, _b;
                    return [
                      createVNode("div", null, [
                        createVNode(VIcon, {
                          icon: "mdi-star",
                          size: "small",
                          color: "#eab308"
                        }),
                        createVNode("span", { class: "product-card__rate" }, toDisplayString((_a = props.rating) == null ? void 0 : _a.rate), 1)
                      ]),
                      createVNode("div", { class: "product-card__reviews-count ml-2" }, " (" + toDisplayString((_b = props.rating) == null ? void 0 : _b.count) + " reviews) ", 1)
                    ];
                  }),
                  _: 1
                }),
                createVNode("div", { class: "product-card__action d-flex align-center justify-space-between pa-0" }, [
                  createVNode("h4", { class: "product-card__price" }, "$" + toDisplayString(props.price), 1),
                  __props.editMode ? (openBlock(), createBlock(VBtn, {
                    key: 0,
                    class: "btn-add_to_cart",
                    "prepend-icon": "mdi-file-edit-outline",
                    color: "#eab308",
                    text: "Edit",
                    ripple: false,
                    onClick: emitProduct
                  })) : (openBlock(), createBlock(VBtn, {
                    key: 1,
                    class: "btn-add_to_cart",
                    "prepend-icon": "mdi-cart-outline",
                    color: "#eab308",
                    text: "Add to Cart",
                    ripple: false
                  }))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/ProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a96934db"]]);

export { ProductCard as default };
//# sourceMappingURL=ProductCard-Cm0bYlZC.mjs.map
