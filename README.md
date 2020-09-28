# event

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Dockerize

## Build Image
`docker build -t hechen2/event -f deploy/docker/Dockerfile .`

## Run Container
`docker run -d -p 6060:80 --name event-viewer hechen2/event`
