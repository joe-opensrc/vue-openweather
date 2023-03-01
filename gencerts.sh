#!/bin/bash -x

cert_config=${1:-~/bin/self_cert.conf}
if [[ -r "${cert_config}" ]]
then

# Generate CA private key & CA cert
openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:3072 -out ca-key.pem 
openssl req -new -x509 -batch -config "${cert_config}" -days 666 -key ca-key.pem -out ca-cert.pem

# Generate server private key & cert req
openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:3072 -out server-key.pem
openssl req -new -batch -config "${cert_config}" -key server-key.pem -out server-req.pem

# Use CA cert to sign server req and generate server cert
openssl x509 -req -in server-req.pem -CA ca-cert.pem -CAkey ca-key.pem -set_serial 01 -out server-cert.pem

else

echo -ne "\nCan't find conf file: ${cert_config}!\n\n" >&2
exit 1

fi
