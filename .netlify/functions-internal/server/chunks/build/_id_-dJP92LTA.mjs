import { mergeProps, unref, withCtx, createTextVNode, createVNode, computed, shallowRef, useId, Fragment, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useProductStore } from './productStore-CVgKG8TE.mjs';
import { _ as _export_sfc, ab as useRoute, g as genericComponent, e as propsFactory, P as useLocale, f as provideTheme, w as useProxiedModel, G as clamp, aa as createRange, m as makeThemeProps, I as IconValue } from './server.mjs';
import { e as VProgressCircular, V as VBtn, a as VIcon, f as VImg, b as useRender, m as makeTagProps, g as makeSizeProps, h as makeDensityProps, d as makeComponentProps } from './VImg-CNRCAQ0F.mjs';
import 'pinia';
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
import 'vue-router';

const makeVRatingProps = propsFactory({
  name: String,
  itemAriaLabel: {
    type: String,
    default: "$vuetify.rating.ariaLabel.item"
  },
  activeColor: String,
  color: String,
  clearable: Boolean,
  disabled: Boolean,
  emptyIcon: {
    type: IconValue,
    default: "$ratingEmpty"
  },
  fullIcon: {
    type: IconValue,
    default: "$ratingFull"
  },
  halfIncrements: Boolean,
  hover: Boolean,
  length: {
    type: [Number, String],
    default: 5
  },
  readonly: Boolean,
  modelValue: {
    type: [Number, String],
    default: 0
  },
  itemLabels: Array,
  itemLabelPosition: {
    type: String,
    default: "top",
    validator: (v) => ["top", "bottom"].includes(v)
  },
  ripple: Boolean,
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeSizeProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VRating");
const VRating = genericComponent()({
  name: "VRating",
  props: makeVRatingProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const {
      themeClasses
    } = provideTheme(props);
    const rating = useProxiedModel(props, "modelValue");
    const normalizedValue = computed(() => clamp(parseFloat(rating.value), 0, Number(props.length)));
    const range = computed(() => createRange(Number(props.length), 1));
    const increments = computed(() => range.value.flatMap((v) => props.halfIncrements ? [v - 0.5, v] : [v]));
    const hoverIndex = shallowRef(-1);
    const itemState = computed(() => increments.value.map((value) => {
      var _a;
      const isHovering = props.hover && hoverIndex.value > -1;
      const isFilled = normalizedValue.value >= value;
      const isHovered = hoverIndex.value >= value;
      const isFullIcon = isHovering ? isHovered : isFilled;
      const icon = isFullIcon ? props.fullIcon : props.emptyIcon;
      const activeColor = (_a = props.activeColor) != null ? _a : props.color;
      const color = isFilled || isHovered ? activeColor : props.color;
      return {
        isFilled,
        isHovered,
        icon,
        color
      };
    }));
    const eventState = computed(() => [0, ...increments.value].map((value) => {
      function onMouseenter() {
        hoverIndex.value = value;
      }
      function onMouseleave() {
        hoverIndex.value = -1;
      }
      function onClick() {
        if (props.disabled || props.readonly) return;
        rating.value = normalizedValue.value === value && props.clearable ? 0 : value;
      }
      return {
        onMouseenter: props.hover ? onMouseenter : void 0,
        onMouseleave: props.hover ? onMouseleave : void 0,
        onClick
      };
    }));
    const uid = useId();
    const name = computed(() => {
      var _a;
      return (_a = props.name) != null ? _a : `v-rating-${uid}`;
    });
    function VRatingItem(_ref2) {
      var _a, _b;
      let {
        value,
        index,
        showStar = true
      } = _ref2;
      const {
        onMouseenter,
        onMouseleave,
        onClick
      } = eventState.value[index + 1];
      const id = `${name.value}-${String(value).replace(".", "-")}`;
      const btnProps = {
        color: (_a = itemState.value[index]) == null ? void 0 : _a.color,
        density: props.density,
        disabled: props.disabled,
        icon: (_b = itemState.value[index]) == null ? void 0 : _b.icon,
        ripple: props.ripple,
        size: props.size,
        variant: "plain"
      };
      return createVNode(Fragment, null, [createVNode("label", {
        "for": id,
        "class": {
          "v-rating__item--half": props.halfIncrements && value % 1 > 0,
          "v-rating__item--full": props.halfIncrements && value % 1 === 0
        },
        "onMouseenter": onMouseenter,
        "onMouseleave": onMouseleave,
        "onClick": onClick
      }, [createVNode("span", {
        "class": "v-rating__hidden"
      }, [t(props.itemAriaLabel, value, props.length)]), !showStar ? void 0 : slots.item ? slots.item({
        ...itemState.value[index],
        props: btnProps,
        value,
        index,
        rating: normalizedValue.value
      }) : createVNode(VBtn, mergeProps({
        "aria-label": t(props.itemAriaLabel, value, props.length)
      }, btnProps), null)]), createVNode("input", {
        "class": "v-rating__hidden",
        "name": name.value,
        "id": id,
        "type": "radio",
        "value": value,
        "checked": normalizedValue.value === value,
        "tabindex": -1,
        "readonly": props.readonly,
        "disabled": props.disabled
      }, null)]);
    }
    function createLabel(labelProps) {
      if (slots["item-label"]) return slots["item-label"](labelProps);
      if (labelProps.label) return createVNode("span", null, [labelProps.label]);
      return createVNode("span", null, [createTextVNode("\xA0")]);
    }
    useRender(() => {
      var _a;
      const hasLabels = !!((_a = props.itemLabels) == null ? void 0 : _a.length) || slots["item-label"];
      return createVNode(props.tag, {
        "class": ["v-rating", {
          "v-rating--hover": props.hover,
          "v-rating--readonly": props.readonly
        }, themeClasses.value, props.class],
        "style": props.style
      }, {
        default: () => [createVNode(VRatingItem, {
          "value": 0,
          "index": -1,
          "showStar": false
        }, null), range.value.map((value, i) => {
          var _a2, _b;
          return createVNode("div", {
            "class": "v-rating__wrapper"
          }, [hasLabels && props.itemLabelPosition === "top" ? createLabel({
            value,
            index: i,
            label: (_a2 = props.itemLabels) == null ? void 0 : _a2[i]
          }) : void 0, createVNode("div", {
            "class": "v-rating__item"
          }, [props.halfIncrements ? createVNode(Fragment, null, [createVNode(VRatingItem, {
            "value": value - 0.5,
            "index": i * 2
          }, null), createVNode(VRatingItem, {
            "value": value,
            "index": i * 2 + 1
          }, null)]) : createVNode(VRatingItem, {
            "value": value,
            "index": i
          }, null)]), hasLabels && props.itemLabelPosition === "bottom" ? createLabel({
            value,
            index: i,
            label: (_b = props.itemLabels) == null ? void 0 : _b[i]
          }) : void 0]);
        })]
      });
    });
    return {};
  }
});
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    route.params.id;
    const productStore = useProductStore();
    productStore.product = null;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product__section" }, _attrs))} data-v-859c1997>`);
      if (unref(productStore).loading) {
        _push(`<div class="d-flex align-center justify-center" style="${ssrRenderStyle({ "height": "100vh" })}" data-v-859c1997>`);
        _push(ssrRenderComponent(VProgressCircular, {
          color: "#EAB308",
          indeterminate: "",
          size: 128,
          width: 12
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="product__container" data-v-859c1997><div class="product__button--wrapper d-flex" data-v-859c1997>`);
        _push(ssrRenderComponent(VBtn, {
          class: "product__button",
          ripple: false,
          variant: "text",
          color: "#9CA3AF",
          size: "medium",
          to: "../products"
        }, {
          prepend: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VIcon, { class: "me-2" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`mdi-arrow-left`);
                  } else {
                    return [
                      createTextVNode("mdi-arrow-left")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VIcon, { class: "me-2" }, {
                  default: withCtx(() => [
                    createTextVNode("mdi-arrow-left")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Back to Products`);
            } else {
              return [
                createTextVNode(" Back to Products")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="product__wrapper--background" data-v-859c1997><div class="product__wrapper" data-v-859c1997><div class="product__image" data-v-859c1997>`);
        _push(ssrRenderComponent(VImg, {
          src: (_a = unref(productStore).product) == null ? void 0 : _a.image,
          width: "400px"
        }, null, _parent));
        _push(`</div><div class="product__data" data-v-859c1997><div class="product__category" data-v-859c1997>${ssrInterpolate((_b = unref(productStore).product) == null ? void 0 : _b.category)}</div><h1 class="product__title text-white" data-v-859c1997>${ssrInterpolate((_c = unref(productStore).product) == null ? void 0 : _c.title)}</h1><div class="product__ratings d-flex" data-v-859c1997>`);
        _push(ssrRenderComponent(VRating, {
          "model-value": (_d = unref(productStore).product) == null ? void 0 : _d.rating.rate,
          readonly: "",
          color: "amber",
          size: "small",
          density: "compact",
          style: { "margin-right": "0.75rem", "margin-bottom": "3px" }
        }, null, _parent));
        _push(`<p data-v-859c1997>( ${ssrInterpolate((_e = unref(productStore).product) == null ? void 0 : _e.rating.count)} reviews )</p></div><div class="product__price text-white" data-v-859c1997> $${ssrInterpolate((_f = unref(productStore).product) == null ? void 0 : _f.price.toFixed(2))}</div><p class="product__description" data-v-859c1997>${ssrInterpolate((_g = unref(productStore).product) == null ? void 0 : _g.description)}</p><div class="product__tagline" data-v-859c1997><div class="d-flex" data-v-859c1997>`);
        _push(ssrRenderComponent(VIcon, {
          color: "#EAB308",
          size: "small"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`mdi-truck-outline`);
            } else {
              return [
                createTextVNode("mdi-truck-outline")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span data-v-859c1997>Free shipping on orders over $50</span></div><div data-v-859c1997>In stock and ready to ship</div></div></div></div></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-859c1997"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-dJP92LTA.mjs.map
