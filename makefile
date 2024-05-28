include .env

# TODO: Разобраться с передачей CURRENT_UID и CURRENT_GID. Так возможно не работает
SHELL = /bin/sh

CURRENT_UID := $(shell id -u)
CURRENT_GID := $(shell id -g)

export CURRENT_UID
export CURRENT_GID

up:
	docker compose up -d

rebuild:
	docker compose up -d --build

stop:
	docker compose stop

shell:
	docker exec -it $$(docker ps -q -f name=ubuntu.${APP_NAMESPACE}) bash
