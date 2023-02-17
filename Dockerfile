FROM node:18-alpine

ENV HOME=/home/app
WORKDIR $HOME

COPY . .
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]