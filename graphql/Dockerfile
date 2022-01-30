FROM node:16-alpine

WORKDIR /graphql
COPY package.json .
COPY package-lock.json .
COPY app/package.json ./app/package.json
COPY petfinder-graphql/package.json ./petfinder-graphql/package.json
RUN npm i install
COPY . .
RUN npm run build --workspace=petfinder-graphql
CMD ["npm", "run", "start", "--workspace=app"]