# NodeJs, PM2 and Docker

## Running

`npm run build-pm2`
`npm run start-pm2`

## Useful commands

| Command                                           | Description                           |
| ------------------------------------------------- | ------------------------------------- |
| `$ docker exec -it <container-id> pm2 monit`      | Monitoring CPU/Usage of each process  |
| `$ docker exec -it <container-id> pm2 list`       | Listing managed processes             |
| `$ docker exec -it <container-id> pm2 show`       | Get more information about a process  |
| `$ docker exec -it <container-id> pm2 reload all` | 0sec downtime reload all applications |
