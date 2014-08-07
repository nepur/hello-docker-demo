#
# A Node.js Dockerfile
#

FROM     phusion/baseimage:latest
MAINTAINER Rupen Patel "rupenp@yahoo.com"

# make sure the package repository is up to date
RUN apt-get update

# Install Python.
RUN apt-get install -y python python-dev python-pip python-virtualenv

# install nodejs and npm
RUN apt-get install -y nodejs npm git git-core

# Package manager can't see to name it right
RUN ln -s /usr/bin/nodejs /usr/bin/node

# In generall all the RUN commands are cached but
# if an ADD command preceeds it and <src> has changed
# then it invalidates the cache for next RUN command - thankfully
ADD ./src /src

# Have all the dependencies install
RUN cd src; npm install

# Assume its listening on this port for purposes of this demo
EXPOSE 8080

WORKDIR /src

CMD    ["nodejs", "index.js"]
