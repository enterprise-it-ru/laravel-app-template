# Выгрузка на сервер с использованием докера

### Установка докера (для ubuntu)

Refresh and install packages

```shell
sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common libssl-dev libffi-dev git wget nano make
```

Add user group

```shell
sudo groupadd docker
sudo usermod -aG docker ${USER}
```

#Add docker key and repo

```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
```

#Install docker and docker-compose

```shell
sudo apt-get install -y docker-ce containerd.io docker-compose
```

### Развертывание проекта

Необходимо склонировать (или распаковать) репозиторий.

Далее необходимо настроить переменные в .env файле. Для этого можно скопировать .env.example и изменить значения.

```shell
cp .env.example .env
```

Здесь стоит обратить внимание на переменные DB_DATABASE, DB_USERNAME, DB_PASSWORD и поменять их.

Для указания доменов, по которым доступен сайт используется переменная NGINX_SERVER_NAME. Домены указываются через пробел.

APP_HOST - задается имя основного хоста (должно быть только одно).

Далее необходимо скопировать шаблон конфига докера (для локальной версии заменить prod на dev):

```shell
cp .docker/docker-compose.prod.yml docker-compose.override.yaml
```

Далее копируем папку с SSL сертификатом. Тут стоит обратить внимание, что итоговая папка должна иметь такое же название, как и значение переменной APP_HOST в .env файле.

```shell
cp -R .docker/certbot/conf/live/example-luckytry.online .docker/certbot/conf/live/luckytry.online
```

После этого запускаем контейнеры:

```shell
make up
```

Устанавливаем зависимости композера:

```shell
make composer-install
```

Собираем фронтенд админки (предварительно установить nodejs):

```shell
npm ci && npm run build:admin
```

И если необходимо восстановить базу данных, дамп можно положить в папку с бэкендом с названием **db_name.sql**, где db_name - значение переменной DB_DATABASE в .env файле.

```shell
make restore-db
```

Если указанный вариант не подходит, можно переписать и выполнить команду вручную.
Например:

```shell
docker exec -i mariadb_container_name mariadb -uuser -ppassword name_db < data.sql
```

На этом всё.

### Выгрузка изменений на сайт

Для загрузки изменений выполняем команду

```shell
make update-project
```

### Выпуск SSL сертификатов

Для выпуска сертификата используется команда:

```shell
docker compose run --rm  certbot certonly --webroot --webroot-path /var/www/certbot/ -d site-domain.com -d www.site-domain.com
```

Для перевыпуска сертификатов с истекшим сроком действия:

```shell
docker compose run --rm certbot renew
```

Для автоматизации ставим задание на крон:

`0 5 * * * cd /home/user/project_name && docker compose run --rm certbot renew`

## Описание структуры и конфигов

### php

.docker/php-fpm/app.ini - содержит общие настройки для dev и prod варианта развертывания.
.docker/php-fpm/app.prod.ini - содержит настройки только для prod режима

### nginx

Шаблон конфига nginx лежит тут: **.docker/nginx/default.conf.template**

В при сборке контейнера этот шаблон копируется в контейнер по пути **/etc/nginx/conf.d/default.conf**

При копировании в нем заменяются переменные на указанные значения.
Переменные при необходимости можно добавлять в docker-compose.override.yaml для контейнера nginx в environment.

### Места хранения различных данных

Данные докера хранятся в папке /var/lib/docker (актуально для линукса)

Логи можно смотреть с помощью команды

```shell
docker logs container_name
```

Пример:

```shell
docker logs testproject.mariadb
```

Имена контейнеров можно посмотреть с помощью docker ps в колонке names

```shell
docker ps
```

Файлы логов хранятся в формате json в папке /var/lib/docker/containers (каждый в папке со своим контейнером)

## Бэкапы

Бэкапить нужно папку с проектом и базу данных.

Пример команды для бэкапа (перед выполнением предварительно подставить нужные данные):

```shell
docker exec testapp.mariadb mariadb-dump -ularavel -p"secret" laravel > laravel_1.sql
```

Или следующей командой в папке с бэкендом:

```shell
make backup-db
```

## Порты

Для работы достаточно открытых 443 и 80 портов. Остальные порты открывать во внешний мир нет необходимости.

По умолчанию используются следующие порты, которые следует закрыть от внешнего мира если они открыты:

- 3306 - mariadb
- 6379 - redis
