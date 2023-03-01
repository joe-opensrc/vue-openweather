<script>
  const defaultButtonOptions = {
    showLabel: true,
    showValue: false,
    disableToggle: false,
    selfReset: false,
    timeout: 275
  }
</script>

<script setup>
  import { ref, computed } from 'vue'


  const emit = defineEmits(['buttonValue'])
  const props = defineProps({

      buttonLabel: { type: String, default: "ToggleButton" },
      buttonValue: { type: Boolean, default: false },
      buttonOptions: { type: Object, default: defaultButtonOptions }
                
  })

  var buttonLabel = ref( props.buttonLabel )
  var buttonValue = ref( props.buttonValue )
  var buttonOptions = computed( function(){ return { ...defaultButtonOptions, ...props.buttonOptions } } )

  const buttonToggleWithOptions = function(){
    if( ! buttonOptions.value.disableToggle ){
      buttonToggle()
      if( buttonOptions.value.selfReset == true ){
        setTimeout(buttonToggle, buttonOptions.value.timeout )
      }
    }
  }

  const buttonToggle = function(){
    buttonValue.value = !buttonValue.value
  }

  function emitButtonValue(){ // pass ref(bool)
    emit('buttonValue', buttonValue.value )      
  }

  function buttonActivate(){
      buttonToggleWithOptions()
      emitButtonValue()
  }

</script>

<style scoped>

  .button-area {
    display: flex;
    margin: auto;
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

  .button.true {
    color: #000000;
    background-color: #9f9f9f; 
  } 

  .button.false {
    color: #f0f0f0; 
    background-color: #2f2f2f; 
  }

</style>

<template>
    <div class="button-area">
      <div class="button" :class="[ buttonValue? 'true' : 'false' ]" @click="buttonActivate">
        <div v-if="buttonOptions.showLabel" class="button-label">
          {{ buttonLabel }}
        </div>
        <div v-if="buttonOptions.showValue" class="button-value">
          {{ buttonValue }}
        </div>
      </div>  
    </div>
</template>
