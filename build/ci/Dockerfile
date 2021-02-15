FROM node:lts-buster as dependencies

ARG NPM_NEXUS_AUTH

WORKDIR /root/

WORKDIR /app

COPY lerna.json package.json package-lock.json .npmrc ./
COPY packages/eslint-config-js/package*.json .npmrc ./packages/eslint-config-js/
COPY packages/eslint-config-jest/package*.json .npmrc ./packages/eslint-config-jest/
COPY packages/eslint-config-jasmine/package*.json .npmrc ./packages/eslint-config-jasmine/
COPY packages/eslint-config-node/package*.json .npmrc ./packages/eslint-config-node/
COPY packages/eslint-config-ts/package*.json .npmrc ./packages/eslint-config-ts/
COPY packages/eslint-config-react/package*.json .npmrc ./packages/eslint-config-react/
COPY packages/eslint-config-react-ts/package*.json .npmrc ./packages/eslint-config-react-ts/
COPY packages/eslint-config-vue/package*.json .npmrc ./packages/eslint-config-vue/
COPY packages/stylelint-config-styled-components/package*.json .npmrc ./packages/stylelint-config-styled-components/
COPY packages/scss-lint-config/package*.json .npmrc ./packages/scss-lint-config/
COPY packages/md-lint-config/package*.json .npmrc ./packages/md-lint-config/
COPY packages/prettier-config/package*.json .npmrc ./packages/prettier-config/


RUN npm config set //repositories.mrf.io/nexus/repository/npm-internal/:_authToken ${NPM_NEXUS_AUTH}
RUN npm config set strict-ssl false

RUN npm install lerna -g
RUN lerna bootstrap --hoist

FROM node:lts-buster

WORKDIR /app

COPY --from=dependencies /root/.npmrc /root/.npmrc
COPY --from=dependencies /app/node_modules /app/node_modules
COPY --from=dependencies /app/packages /app/packages
COPY . .

ENTRYPOINT ["npm"]
