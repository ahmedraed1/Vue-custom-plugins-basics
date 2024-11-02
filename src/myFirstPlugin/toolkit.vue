<template>
  <span ref="tooltip">AAA</span>
</template>
<script setup>
import { ref, onMounted, onUpdated, onUnmounted, inject } from 'vue';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import { tooltipOptionsInject } from './firstplugin.js';

const props = defineProps({
  text: { type: String, required: true },
  options: {
    type: Object,
    default() {
      return {};
    },
  },
});

const tooltip = ref(null);

let tippyInstance = null;

function initTippy() {
  if (tippyInstance) tippyInstance.destroy();
  tippy(tooltip.value.parentNode, {
    ...inject(tooltipOptionsInject),
    content: props.text,
    ...props.options,
  });
}

onMounted(initTippy);
onUpdated(initTippy);
onUnmounted(() => tippyInstance.destroy());
</script>
