#!/bin/bash -x

# Here be dragons!
# Provided ASIS

pyvirtDir="${1:-~/pyvirts}"

# Use virtualenv / venv to install nodeenv:
python -mvenv --copies "${pyvirtDir}/nodeenv"

# Use nodeenv to install node/yarn:
source "${pyvirtDir}/nodeenv/bin/activate"

# Use npm to install yarn:
npm install -g yarn

