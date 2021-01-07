FROM devilbox/php-fpm-8.0

RUN apt-get update && apt-get install -y \
    ssh \
    git \
    zip \
    supervisor \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libsodium-dev \
    libpng-dev \
    libicu-dev \
    libonig-dev \
    libxml2-dev \
    libsqlite3-dev \
    libzip-dev

RUN set -xe \
    && docker-php-ext-configure mysqli --with-mysqli \
    && docker-php-ext-configure pdo_mysql --with-pdo-mysql
RUN docker-php-ext-install -j$(nproc) iconv intl xml soap sodium opcache pdo_mysql mysqli bcmath pcntl sockets zip
RUN docker-php-ext-install -j$(nproc) gd

#install xdebug
#RUN pecl install xdebug && docker-php-ext-enable xdebug

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
# Install latest node
#RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
#RUN yes | apt-get install nodejs

WORKDIR /var/www/app

RUN	mkdir -p var/cache var/log storage \
 && chmod -R 777 var/log/ \
 && chmod -R 777 var/cache/

COPY php-fpm.conf /etc/php-fpm.conf
COPY conf/php.ini /usr/local/etc/php/
COPY supervisord.conf /etc/supervisor/supervisord.conf

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/supervisord.conf"]
