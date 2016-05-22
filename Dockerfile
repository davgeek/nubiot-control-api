FROM node

ADD ./ .
RUN npm install

EXPOSE 10003

CMD node control.js