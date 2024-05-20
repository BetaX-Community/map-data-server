# Map data server

Serve map data for the editor.


## Environment Variables
This project uses environment variables to manage configuration. Before running the application, make sure to create a `.env` file in the root directory based on the provided `.env.example` file. You can copy the contents of `.env.example` and replace the placeholder values with your actual configuration values.

**Example `.env.example` file:**
```dotenv
PORT=3000
```

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

## Data origin and format

`data/antananarivo.json` was generated using the
[router](https://github.com/BetaX-Community/router)

`/lines`, `/stops/:lineName`, and `/ways/:lineName` expose the data from it.

The data is organized in the following format:

```json
[
    {
        "line_name": <line name>
        "bus_stops":
        [{"location": {"lat": <latitude>,
                       "lng": <longitude>},
         "name": <bus name>,
         "role": <stop role>
        },
        ...]
        "ways": [
            [{"lat": <latitude>,
              "lng": <longitude>},
              ...],
            ...
        ]
    },
    ...
]
```

`data/busLines.json`, `data/busLines2.json`, `data/lineTypes.json` and
`data/busStops.json` were provided by IMV (Institut des Métiers de la
Ville). Haja Rasolofojaona contacted me and my two other teammates
(Tianasoa and Nafissa) when we were working on
[BetaX](http://www.betax.mg) and gave some data that could be used.

![IMV logo](./images/IMV-logo-730x327.jpg)

Institut des Métiers de la Ville (IMV) is a cooperation platform
between the CUA and the Île de France region for the development of
municipal capacities.

The format of the data is as following:

`data/busLines.json`

```json
[
    {
        "color": <color>,
        "itinerary":
        [
            places:
                [
                    <bus stop names>,
                    ...
                ]
        ],
        "name": <line name>,
        "cooperative": <cooperative name>
    },
    ...
]
```

`data/busLines2.json`

```json
[
    "itinerary":
    [
        {
            "type": <line type>,
            "color": <color>,
            places:
            [
                <bus stop names>,
                ...
            ],
            "name": <line name>,
            "cooperative": <cooperative name>
        },
        ...
    ],
    ...
]
```

`data/lineTypes.json`

```json
[
    {
        "lines":
        [
            <line_name>,
            ...
        ],
        "type": <line type>
    }
]
```

`data/busStops.json`

```json
[
    {
        "lat": <latitude>,
        "lng": <longitude>,
        "name" <bus stop name>
    },
    ...
]
```
