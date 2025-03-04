from node:18

workdir ./app

copy . . 

run npm install
RUN npm run build

expose 3000

cmd ["npm", "start"]