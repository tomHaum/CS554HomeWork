# Redis Test Site
this node express api is a simple demo of redis caching. 
## Prerequisites
Make sure that [redis](https://redis.io/ "Redis Website") is installed and `redis-server` is in the $PATH 

## Configuration Instructions
### `startNewRedisServer`
When set to true this will attempt to start a new redis server, assuming that redis-server is in the `$PATH`

When false the program assumes that a redis-server instance is already running on the local machine

### `redisPort`
the port number to look for the local redis-server

### `diskReadSpeed`
the amount of time in milli-seconds that the simulated "disk" will take to "seek"


