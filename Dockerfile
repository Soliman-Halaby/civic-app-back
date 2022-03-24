FROM node:16-alpine
ENV NODE_ENV=prod

WORKDIR /civic-app-back

COPY . .
RUN npm install --production

CMD ["node", "index.js"]