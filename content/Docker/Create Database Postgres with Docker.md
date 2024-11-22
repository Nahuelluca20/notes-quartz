---
tags:
  - Docker
  - Postgresql
---

This command get de last version of postgres

```
docker pull postrgres
```

Then we run de following command

```
docker run --name example-db -d -p 5432:5432 -e POSTGRES_PASSWORD=sarasa postgres
```
