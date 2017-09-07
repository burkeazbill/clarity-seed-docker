FROM node:6.11.3

RUN npm install -g @angular/cli@latest && \
    npm cache clean

WORKDIR /project

VOLUME /project

EXPOSE 4200

ADD clarity-start.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/clarity-start.sh

ENTRYPOINT ["/usr/local/bin/clarity-start.sh"]

# Build command:
# docker build -t "node-angular:6.3.11-1.3.2" .
# Run Container in detached mode:
# docker run -v $PWD/clarity-seed:/project --name clarity-seed -p 4200:4200 -d docker build -t node-angular:6.3.11-1.3.2
# Access running container bash:
# docker exec -it clarity-seed /bin/bash