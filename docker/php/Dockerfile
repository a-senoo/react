FROM php:8.1-fpm-bullseye

# Package & Library install
RUN apt-get update && \
  apt-get -y install --no-install-recommends git unzip libzip-dev libicu-dev libonig-dev && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/* && \
  docker-php-ext-install intl pdo_mysql zip bcmath

# Composer install
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer