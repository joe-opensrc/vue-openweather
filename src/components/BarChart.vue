<script setup>
  import { ref, onMounted } from 'vue'
  const foo = ref(0) 

  onMounted(() => { 
    console.log("const foo = ref(" + foo.value + ")") 
  })
</script>

<template>
  <div>foo: {{ foo }}</div>  
</template>
