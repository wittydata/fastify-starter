# Fastify Starter Template

This Fastify starter template aims to help developers looking for a fast and low overhead Node.js 
web framework with TypeScript support to get started quickly

## Getting started

```bash
git clone 
cd fastify-starter
pnpm install
```

## Setting up Firebase Cloud Messaging
1. Refer to [Firebase Admin SDK Documentation](https://firebase.google.com/docs/admin/setup#initialize_the_sdk_in_non-google_environments) to get the service account key
2. Place the ***serviceAccountKey.json*** in the project root directory (Same folder as ***package.json***)
3. Rename the ***.env.example*** file to ***.env*** file
4. Update the ***.env***. Change the entry ***GOOGLE_APPLICATION_CREDENTIALS=<actual file name of serviceAccountKey.json>***

## To run in development mode

```bash
pnpm start-dev
```

## To run in production mode

```bash
pnpm package
pnpm start
```

## To format and check the code

```bash
pnpm check
```