<template>
  <div>
    <a-input v-model:value="name"></a-input>
    <a-input v-model:test="name"></a-input>
    <a-input v-model:test1 ="name"></a-input>
  </div>
</template>

<script lang="ts" setup>
const name = ref('')
</script>