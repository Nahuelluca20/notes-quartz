---
tags:
  - Docker
  - Postgresql
---

```yml
# docker-compose.yml
version: "2.29.6"

services:
  postgres:
    image: postgres:16.4
    ports:
      - 5433:5432
    volumes:
      - ~/apps/postgres:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=S3cret
      - POSTGRES_USER=carpfy_user
      - POSTGRES_DB=carpfy_db
```
