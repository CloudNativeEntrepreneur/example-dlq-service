LOCAL_DEV_CLUSTER ?= rancher-desktop
NOW := $(shell date +%m_%d_%Y_%H_%M)
SERVICE_NAME := example-dlq-service

onboard: install

install:
	npm ci

dev:
	npm run dev

open:
	code .
