<script lang="ts" setup>
import type { Product } from "~/shared/types/product";
import { useProductStore } from "~/store/productStore";

const productStore = useProductStore();

const required = (v: string) => !!v || "This field is required";
const mustBeNumber = (v: string) => !isNaN(Number(v)) || "Must be a number";
const validUrl = (v: string) =>
  !v ||
  /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))$/i.test(v) ||
  "Must be a valid image URL";
const minLength = (min: number) => (v: string) =>
  v?.length >= min || `Minimum ${min} characters`;

const props = defineProps({
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
      count: 0,
    }),
  },
  action: Boolean,
  modelValue: Boolean,
});

const form = ref<Product>({
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: {
    rate: 0,
    count: 0,
  },
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});

const close = () => {
  emit("update:modelValue", false);
};

const submit = () => {
  if (props.action == true) {
    productStore.editProduct(form.value.id, form.value);
    close();
  } else {
    productStore.addProduct(form.value);
    close();
  }
};

const deleteProduct = () => {
  productStore.removeProduct(form.value.id);
  close();
};

onMounted(() => {
  if (props.action == true) {
    form.value = {
      id: props.id!,
      title: props.title!,
      price: props.price!,
      description: props.description!,
      category: props.category!,
      image: props.image!,
      rating: props.rating as { rate: number; count: number },
    };
  }
});

watch(
  () => props,
  (newProps) => {
    form.value = {
      id: newProps.id!,
      title: newProps.title!,
      price: newProps.price!,
      description: newProps.description!,
      category: newProps.category!,
      image: newProps.image!,
      rating: newProps.rating as { rate: number; count: number },
    };
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <client-only>
    <v-dialog v-model="isOpen" max-width="500">
      <v-card color="#111827">
        <v-card-title class="pt-6 pl-6">{{
          action ? "Edit Product" : "Add Product"
        }}</v-card-title>
        <v-card-text class="py-4">
          <v-text-field
            class="custom-rule-text"
            label="Title"
            :rules="[required]"
            v-model="form.title"
          />
          <v-text-field
            class="custom-rule-text"
            label="Price ($)"
            :rules="[required, mustBeNumber]"
            type="number"
            v-model.number="form.price"
          />
          <v-text-field
            class="custom-rule-text"
            label="Category"
            :rules="[required]"
            v-model="form.category"
          />
          <v-text-field
            class="custom-rule-text"
            label="Image URL"
            :rules="[required, validUrl]"
            v-model="form.image"
          />
          <v-textarea
            class="custom-rule-text"
            label="Description"
            :rules="[required, minLength(10)]"
            v-model="form.description"
          />
        </v-card-text>
        <v-card-actions class="px-6 pb-6">
          <v-btn
            :ripple="false"
            size="large"
            variant="outlined"
            color="#EAB308"
            @click="submit"
            >{{ action ? "Update" : "Save" }}</v-btn
          >
          <v-btn
            v-if="action"
            :ripple="false"
            size="large"
            variant="outlined"
            color="red"
            @click="deleteProduct"
            >Delete</v-btn
          >
          <v-btn :ripple="false" size="large" text @click="close">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </client-only>
</template>

<style scoped>
.custom-rule-text ::v-deep(.v-field--error .v-field__outline),
.custom-rule-text ::v-deep(.v-field--error .v-label),
.custom-rule-text ::v-deep(.v-field--error .v-field__underlined),
.custom-rule-text ::v-deep(.v-messages__message) {
  color: #eab308 !important;
}
</style>
