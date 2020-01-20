# NodeJs, PM2 and Docker

## Running

`npm run build-pm2`

`npm run start-pm2`

`curl http://localhost:3000`

## Useful commands

| Command                                           | Description                           |
| ------------------------------------------------- | ------------------------------------- |
| `$ docker exec -it sampleapp pm2 monit`      | Monitoring CPU/Usage of each process  |
| `$ docker exec -it sampleapp pm2 list`       | Listing managed processes             |
| `$ docker exec -it sampleapp pm2 show`       | Get more information about a process  |
| `$ docker exec -it sampleapp pm2 reload all` | 0sec downtime reload all applications |

