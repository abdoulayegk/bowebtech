# syntax=docker/dockerfile:1.7

ARG NODE_VERSION=22-alpine

FROM node:${NODE_VERSION} AS base
WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json ./

FROM base AS deps
RUN npm ci

FROM deps AS build
ENV NODE_ENV=production
COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS production
LABEL org.opencontainers.image.title="Bowebtech" \
  org.opencontainers.image.description="Site statique Bowebtech construit avec Vite" \
  org.opencontainers.image.source="https://github.com/bowebtech/bowebtech"

COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

