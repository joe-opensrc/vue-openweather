<script setup>
  import { ref, onMounted } from 'vue'

  const emit = defineEmits(['buttonValue'])
  const props = defineProps({

    buttonLabel: { type: String, default: "ToggleButton" },
    buttonValue: { type: Boolean, default: false },
    buttonOptions: { type: Object, default: (() => {}) }
                
    })

  var buttonLabel = ref( props.buttonLabel )
  var buttonValue = ref( props.buttonValue )
  var buttonOptions = {}

  const defaultButtonOptions = {
    disableToggle: false,
    selfReset: false,
    timeout: 275
  }

  onMounted(()=>{
    buttonOptions = { ...defaultButtonOptions, ...props.buttonOptions }
  }) 

  const buttonToggleWithOptions = function(){
    if( ! buttonOptions.disableToggle == true ){

      buttonToggle()
      if( buttonOptions.selfReset == true ){
        console.log("selfReset: ", buttonOptions.timeout )
        setTimeout(buttonToggle, buttonOptions.timeout )
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
      console.log("bo: ", buttonOptions)
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

        <div class="button-label">
          {{ buttonLabel }}:
        </div>
        <div class="button-value">
          {{ buttonValue }}
        </div>
      </div>  
    </div>
</template>
