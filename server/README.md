# Places Around The World **(Server)**

<!--
NODE: v12.19.0
NPM: v6.14.8
YARN: v1.22.5

=======================
# DOCKER
=======================
$ sudo docker run --name places_around_the_world -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

$ docker pull postgres
$ docker run postgres

=======================
# TYPEORM
=======================
# Criar uma migration:
$ yarn typeorm migration:create -n create-place -d src/database/migrations
$ yarn typeorm migration:create -n create-place

# Executar as migrations:
$ yarn typeorm migration:run

# Desfazer a migration:
$ yarn typeorm migration:revert
-->
