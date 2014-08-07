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

# Package manager can't seem to name it right
RUN ln -s /usr/bin/nodejs /usr/bin/node

# In generall all the RUN commands are cached but
# if an ADD command preceeds it and <src> has changed
# then it invalidates the cache for next RUN command - thankfully
# ADD devboot.sh /workaround/
# RUN chmod +x /workaround/devboot.sh
# CMD  /workaround/devboot.sh

WORKDIR /node2

CMD /node2/devboot.sh