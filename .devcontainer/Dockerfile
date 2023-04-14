FROM mcr.microsoft.com/devcontainers/php:0-8.2

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"

ENV DEBIAN_FRONTEND=noninteractive

RUN \
  apt-get update \
  && apt-get install -y libpq-dev \
  && docker-php-ext-install pdo pdo_pgsql \
  && apt-get clean -y \
  && rm -rf /var/lib/apt/lists/*
