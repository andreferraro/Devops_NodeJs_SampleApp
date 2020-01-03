FROM keymetrics/pm2:latest-alpine

# Bundle APP files
COPY . .
COPY package.json .
COPY pm2.json .

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

RUN pm2 install pm2-server-monit

CMD [ "pm2-runtime", "start", "pm2.json" ]