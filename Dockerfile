FROM node:20-alpine

WORKDIR /app

COPY . ./
RUN npm install --only=production
RUN npm install @nestjs/cli

RUN npm run build

COPY dist ./dist

EXPOSE 3333

CMD [ "node", "dist/main.js" ]