---
tags:
  - Docker
  - Redis
---

Redis (REmote DIctionary Server) is an open-source, in-memory database and cache that's used for applications that need low data latency.

Redis provides data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes, and streams. Redis has built-in replication, Lua scripting, LRU eviction, transactions, and different levels of on-disk persistence, and provides high availability via Redis Sentinel and automatic partitioning with Redis Cluster.

**`docker-compose.yaml`** **for Redis:**

```yml
version: "3.8"

services:
  redis:
    image: redis:latest # Use the latest official Redis image
    container_name: redis-local
    ports:
      - "6379:6379" # Map port 6379 of the container to local port 6379
    volumes:
      - ./data:/data # Mount a volume for data persistence
    command: ["redis-server", "--appendonly", "yes"] # Enables persistence on disk (optional)
```

Run `docker-compose up -d` and connect using `docker exec -it redis-local redis-cli`

For stop the container and delete the data in `./data` run `docker-compose down`

### Resources

- [Redis in 100 Seconds](https://www.youtube.com/watch?v=G1rOthIU-uo&ab_channel=Fireship)
- [Introduction to Redis](https://redis.io/about/)
