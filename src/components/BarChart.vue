<script setup>
  import { ref, onMounted } from 'vue'
  const foo = ref(0) 

  onMounted(() => { 
    console.log("const foo = ref(" + foo.value + ")") 
  })
</script>

<template>
  <div class="button-area">
    <div class="button" @click="foo++">
      foo: {{ foo }}
    </div>  
  </div>
</template>

<style>
  .button-area {
    display: flex;
    justify-content: space-between;
  }

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
