FROM node:14.16-alpine AS app

USER node
WORKDIR /home/node
COPY package.json package-lock.json /home/node/
RUN npm install --only=prod

COPY .env /home/node/
COPY src /home/node/src

ENV NODE_ENV production

EXPOSE 3000
CMD ["npm", "start"]
