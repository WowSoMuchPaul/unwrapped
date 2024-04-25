
FROM node:20.12.2 

WORKDIR /app

COPY package*.json ./

RUN npm install 
RUN npm install -g serve

COPY . . 

# RUN npm run build

ENV PORT=8000

EXPOSE 8000 

# CMD [ "npm", "run", "start" ]
# CMD ["serve", "-s", "dist", "-l", "8000"]
CMD ["npm", "run", "dev"]