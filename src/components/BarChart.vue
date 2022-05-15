<script setup>
  import { ref, onMounted } from 'vue'
  const foo = ref(0) 

  onMounted(() => { 
   console.log(foo) 
  })
</script>

<template>
  <div>PHOLD</div>  
</template>
