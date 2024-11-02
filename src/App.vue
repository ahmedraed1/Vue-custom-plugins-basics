<template>
  <div>
    <h1>Vue-custom-plugin</h1>
    <input type="text" v-model="tooltip" />
    <ToolKit :text="tooltip" :options="{ placement: 'right' }" />
    <ToolKit :text="tooltip" :options="{ placement: 'right' }" />
    <br />

    <button @click="$hideAllTolltips()">Hide</button>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const tooltip = ref('Hello');
</script>

<style scoped></style>
