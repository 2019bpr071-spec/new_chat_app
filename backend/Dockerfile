# ====== Stage 1: Builder ======
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
# Install all dependencies including devDeps so tsc (TypeScript) is available for the build
# npm v9+ supports --include=dev; this makes sure `tsc` from devDependencies is installed
RUN npm ci --include=dev
COPY . .
RUN npm run build

# ====== Stage 2: Runtime ======
FROM node:20-alpine
WORKDIR /app

# Copy build output and dependencies
COPY --from=builder /app/package*.json ./
# Install only production dependencies in the runtime image
RUN npm ci --only=production
# Copy the compiled output into the runtime image
COPY --from=builder /app/dist ./dist

EXPOSE 3001

CMD ["node", "dist/index.js"]
