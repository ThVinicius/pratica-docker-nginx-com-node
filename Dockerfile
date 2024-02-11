FROM node

WORKDIR /app

COPY src/ .

RUN apt update && \
    apt install -y wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for && \
    chmod +x ./start.sh

RUN npm init -y && \
  npm install express && \
  npm install mysql2 && \
  npm i @faker-js/faker

EXPOSE 3000

CMD [ "node", "index.js" ]