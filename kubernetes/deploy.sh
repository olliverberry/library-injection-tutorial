#!/bin/bash

kubectl apply -f ./app-express/deployment.yaml
kubectl apply -f ./app-express/service.yaml
kubectl apply -f ./client/deployment.yaml