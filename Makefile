start:
	docker-compose -f docker-compose.yml up --abort-on-container-exit --exit-code-from app

dev:
	docker-compose -f docker-compose.dev.yml up app

build:
	docker-compose -f docker-compose.yml build app

push:
	docker-compose -f docker-compose.yml push app

test:
	docker-compose -f docker-compose.test.yml up --abort-on-container-exit --exit-code-from app
