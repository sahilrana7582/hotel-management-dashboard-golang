GO := go
SERVICE_NAME := user-service
MIGRATE := migrate
MIGRATION_DIR := ./migrations
DB_URL := postgres://postgres:1234@localhost:5432/multi-tenent-hotel?sslmode=disable



.PHONY: run migrate-up migrate-down create-migration

	
create:
ifndef name
	$(error "Please provide a migration name: make create-migration name=add_table")
endif
	$(MIGRATE) create -ext sql -dir $(MIGRATION_DIR) -seq $(name)

migrate-up:
	$(MIGRATE) -path $(MIGRATION_DIR) -database "$(DB_URL)" up

migrate-down:
	$(MIGRATE) -path $(MIGRATION_DIR) -database "$(DB_URL)" down 

migrate-version:
	$(MIGRATE) -path $(MIGRATION_DIR) -database "$(DB_URL)" version 



migrate-force:
ifndef v
	$(error "Please provide a migration name: make create-migration name=add_table")
endif
	$(MIGRATE) -path $(MIGRATION_DIR) -database "$(DB_URL)" force ${v}






# find . -type f -exec wc -l {} + | tail -n 1
