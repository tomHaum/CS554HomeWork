
# Redis with Workers Test Site
this node express api and worker is a simple demo of IPC

I had some trouble getting both the server and the worker running using one npm script, so i was using the VSCode debugger to launch both while developing(highly recommend), and for final testing just two terminal windows.
## Prerequisites
Make sure that [redis](https://redis.io/ "Redis Website") is installed and `redis-server` is in the $PATH 

## Configuration Instructions
it is assumed that a redis server is already running on the local machine

### `redisPort`
the port number to look for the local redis-server

### `dataUrl`
the url that returns the data for the people we want to display in the website

