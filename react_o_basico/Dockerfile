FROM node:18.17.1-slim
WORKDIR /react-project
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm","run","dev", "--", "--host", "0.0.0.0"]

