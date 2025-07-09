import { _ as _export_sfc, d as __nuxt_component_0$2 } from './server.mjs';
import { defineComponent, ref, computed, watch, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useProductStore } from './productStore-CVgKG8TE.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CRUDDialog",
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
    action: Boolean,
    modelValue: Boolean
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    useProductStore();
    const props = __props;
    const form = ref({
      id: 0,
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "",
      rating: {
        rate: 0,
        count: 0
      }
    });
    const emit = __emit;
    computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val)
    });
    watch(
      () => props,
      (newProps) => {
        form.value = {
          id: newProps.id,
          title: newProps.title,
          price: newProps.price,
          description: newProps.description,
          category: newProps.category,
          image: newProps.image,
          rating: newProps.rating
        };
      },
      { deep: true, immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/CRUDDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-73e7770f"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=CRUDDialog-C0CND5rP.mjs.map
