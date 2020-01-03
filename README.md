# NodeJs, PM2 and Docker

## Running
```$ docker build -t SampleApp .```
```$ docker run -e KEYMETRICS_PUBLIC=pm2_admin -e KEYMETRICS_SECRET=PaSsW0Rd SampleApp```

## Useful commands

Command | Description
--------|------------
```$ docker exec -it <container-id> pm2 monit``` | Monitoring CPU/Usage of each process
```$ docker exec -it <container-id> pm2 list``` | Listing managed processes
```$ docker exec -it <container-id> pm2 show``` | Get more information about a process
```$ docker exec -it <container-id> pm2 reload all``` | 0sec downtime reload all applications