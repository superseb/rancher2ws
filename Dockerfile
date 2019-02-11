FROM node:alpine

RUN npm install ws
COPY rancher2ws.js /rancher2ws.js
ENV NODE_TLS_REJECT_UNAUTHORIZED 0

ENTRYPOINT [ "node", "rancher2ws.js" ]
