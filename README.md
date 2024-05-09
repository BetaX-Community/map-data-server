# Map data server

Serve map data for the editor.


## Usage

```sh
npm i
npm start
```

## Run in docker

Install docker and docker compose and execute

```sh
docker-compose up -d
```


Serve the data in `data/` directory in the following endpoints:

- lines

Get all lines

```http
GET http://localhost:2999/lines
```

- stops

Get stops for a particular line

```http
GET localhost:2999/stops/Ligne_160_A
```

- ways

Get ways for a particular line

```http
GET http://localhost:2999/ways/Ligne_160_A
```

- busLines

Get lines from another provider

```http
GET http://localhost:2999/busLines
```

- lineTypes

Get different type of lines

```http
GET http://localhost:2999/lineTypes
```

- busStops

Get bus stops from another provider

```http
GET http://localhost:2999/busStops
```
