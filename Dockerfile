FROM node:4-onbuild
MAINTAINER Tom Jenkins <tom@itsravenous.com>
WORKDIR /app

ADD ./ /app

RUN npm install -g sequelize-cli

EXPOSE 3000
CMD ["npm", "start"]
