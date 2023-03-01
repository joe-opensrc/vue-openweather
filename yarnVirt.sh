#!/bin/bash -x

# Here be dragons!
# Provided ASIS

pyvirtDir="${1:-~/pyvirts/nodeenv}"
novirtDir="${2:-~/novirts/vueopen}"

# Use virtualenv / venv to create pyvirtdir install nodeenv:
python -mvenv --copies "${pyvirtDir}"

# use pip to install nodeenv 
source "${pyvirtDir}/bin/activate"
pip install nodeenv 

# Use nodeenv to install npm
nodeenv -n lts "${novirtDir}"

# Use npm to install yarn:
source "${novirtDir}/bin/activate"
npm install -g yarn

