up:
	@docker compose up -d

down:
	@docker compose down

ps:
	@docker compose ps

exec: up
	@docker compose exec node $(cmd)

npm-install: up
	@make exec cmd="npm install"

dev: up
	@make exec cmd="npm run dev"

build: up
	make exec cmd="npm run build"

initial-setup: up npm-install
	@echo "Project initialized!"