FROM node:20.19

EXPOSE 5000
ENV PORT=5000

WORKDIR /app

COPY --chown=node:node package.json package-lock.json ./

RUN npm install --production && npm cache clean --force

COPY --chown=node:node . .

USER node

CMD ["node", "index.js"]