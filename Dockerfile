##### DEPENDENCIES

FROM --platform=linux/amd64 node:16-alpine AS deps
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci
##### BUILDER

FROM --platform=linux/amd64 node:16-alpine AS builder
# ARG DATABASE_URL
ARG NEXT_PUBLIC_CLIENTVAR
WORKDIR /app


COPY --from=deps /app/node_modules ./node_modules
COPY . .


RUN \
  if [ -f package-lock.json ]; then npm run build; \
  fi

##### RUNNER

FROM --platform=linux/amd64 node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json




COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static



USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]


# docker build -t portfolio_artiste:v1 --build-arg NEXT_PUBLIC_CLIENTVAR=clientvar .
# docker run -p 3001:3000 portfolio_artiste:v1