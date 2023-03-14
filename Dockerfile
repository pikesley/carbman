FROM node:19

ARG PROJECT
WORKDIR /opt/${PROJECT}

RUN apt-get update && apt-get install -y nginx make rsync

COPY ./ /opt/${PROJECT}

RUN npm install
RUN npm completion >> /root/.bashrc

RUN ln -sf /opt/${PROJECT}/nginx/site.conf /etc/nginx/sites-enabled/default

COPY ./docker-config/bashrc /root/.bashrc
COPY ./docker-config/entrypoint.sh /usr/local/bin/entrypoint
RUN chmod +x /usr/local/bin/entrypoint
ENTRYPOINT ["/usr/local/bin/entrypoint"]
