<script setup>
  /* eslint-disable */
  import { defineProps  } from 'vue'
  import { ToggleButton } from './ToggleButton.vue'  

  const addButtonProps = defineProps({ 
    comps: { type: Array, default: () => ["ToggleButton"] }

  })

  console.log(addButtonProps.comps)
</script>

<template>
<!--  <component :is="[ToggleButton]" /> -->
  <ToggleButton />
</template>

<style>

  .button {
    min-width: 60px;
    background-color: #3f3f3f; 
    margin: 10px;
    padding: 10px;
    text-align: center;
    border-radius: 20px;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }
</style>
