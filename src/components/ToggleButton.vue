<script setup>
  import { ref } from 'vue'
  const emit = defineEmits(['buttonValue'])
  const props = defineProps({
    buttonLabel: { type: String, default: "ToggleButton" }
  })

  var buttonValue = ref(false)
  
  const buttonToggle = function buttonToggle() {
    buttonValue.value = !buttonValue.value
  }

  const emitButtonValue = function(){ // pass ref(bool)
    emit('buttonValue', buttonValue.value )      
  }

</script>

<style scoped>

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
    border-radius: 14px;
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
       -khtml-user-select: none; /* Konqueror HTML */
         -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }
 

</style>

<template>
    <div class="button-area">
      <div class="button" @click="(x) => ( buttonToggle(), emitButtonValue(x) )"> <!-- emitButtonToggle"> -->
        {{ props.buttonLabel }}: {{ buttonValue }}
      </div>  
    </div>
</template>
