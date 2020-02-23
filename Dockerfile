FROM node

COPY ./package.json ./package.json
RUN npm install
COPY ./ ./
RUN npm run build
RUN npm run test

EXPOSE 3030
CMD ["npm", "start"]
