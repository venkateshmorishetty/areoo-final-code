#base image
FROM node:16

#creating an empty directory
RUN mkdir areooo

#making working directory as areooo

WORKDIR areooo


#copying dependency file
COPY package.json .

#installing all the depencies
RUN npm install --legacy-peer-deps

#installing angular cli

RUN npm install -g @angular/cli #added

#moving entire app code to the container
COPY . .

#to make port number avilable 4200
EXPOSE 4200

#running app when container is started

CMD ng serve --host 0.0.0.0



