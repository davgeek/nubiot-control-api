FROM node
ADD . /
RUN npm install --ignore-scripts
CMD node control.js