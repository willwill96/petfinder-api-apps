FROM node:16-alpine AS builder
RUN apk update

WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope petfinder-graphql-app --docker

FROM node:16-alpine AS installer
RUN apk update
WORKDIR /app

# COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
COPY --from=builder /app/.yarnrc.yml ./.yarnrc.yml
COPY --from=builder /app/.yarn/ ./.yarn/
RUN yarn install

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
RUN yarn turbo run build --filter=petfinder-graphql-app

FROM node:alpine AS runner

WORKDIR /app
# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 petfinder-graphql
USER petfinder-graphql

COPY --from=installer /app/apps/petfinder-graphql/package.json .
COPY --from=installer /app/apps/petfinder-graphql/index.ts .
COPY --from=installer /app/node_modules/ ./node_modules
# Copy Dependents within repo
COPY --from=installer /app/packages/willwill96-petfinder-graphql/dist/ ./node_modules/willwill96-petfinder-graphql/dist/
COPY --from=installer /app/packages/willwill96-petfinder-graphql/package.json ./node_modules/willwill96-petfinder-graphql


CMD yarn run start