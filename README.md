# ntry

[![build](https://github.com/meyer1994/ntry/actions/workflows/build.yml/badge.svg)](https://github.com/meyer1994/ntry/actions/workflows/build.yml)

Notary in a blockchain

## Introduction
This is a proof of concept REST server capable of managing a notary organization
in a blockchain. Currently the support is limited to natural person's documents
but may be improved in the future.

This implementation uses the Ethereum blockchain and IPFS as a data storage
service.

## Development
Here we describe the tools used for developing this application. I use Docker
for easier booting of IPFS and Ethereum nodes and Truffle for Smart Contract
development.

First install all node dependencies:

```bash
$ npm install
```

To start developing, first start the containers. By default, both of them are
started in offline mode.

```bash
$ docker-compose up
```

After, you should compile all smart contracts using Truffle. I've provided an
npm script that does that.

```bash
$ npm run compile
$ npm run migrate  # optional
```

Just start the auto reload daemon and you are set to start developing.

```bash
$ npm run serve
```

## Tests
I've yet to implement some tests...

## Available endpoints
Here are the available endpoints. Each one is further described below. All code
examples are executed in a local server running on `localhost:3000` with local
Ethereum and IPFS nodes.

```
GET /health/eth
GET /health/ipfs

GET /docs/births/:addr
GET /docs/deaths/:addr
GET /docs/divorces/:addr
GET /docs/marriages/:addr
POST /docs/births
POST /docs/deaths
POST /docs/divorces
POST /docs/marriages

GET /person/:addr/validate
GET /persons/:addr
POST /persons
POST /persons/:addr/births
POST /persons/:addr/deaths
POST /persons/:addr/divorces
POST /persons/:addr/marriages
```

### Health
The health endpoints are mostly used for debugging purposes. They return the
node info and status for Ethereum and IPFS, respectively.

#### `GET /health/eth`
Ethereum node status.

```bash
$ http GET :3000/health/eth

Geth/v1.9.17-unstable-b8dd0890-20200710/linux-amd64/go1.14.4
```

#### `GET /health/ipfs`
IPFS node status

```bash
$ http GET :3000/health/ipfs

{
    "numObjects": "28",
    "repoPath": "/data/ipfs",
    "repoSize": "174897",
    "storageMax": "10000000000",
    "version": "fs-repo@10"
}
```

### Documents
This section describes the endpoints related to document creationg a fetching.
It is important to note that each reference to `addr`, or `addresses`, is
related to Ethereum Smart Contract's addresses.

#### `POST /docs/births`
Posts a document that represents the birth certificate of someone.

```bash
$ http POST :3000/docs/births name='John Doe' date=123

{
    "addr": "0xfA6B77a94de9a3dEc80CAa606Ed348D7e3B3FbF8",
    "date": "7b",
    "name": "John Doe"
}
```

#### `GET /docs/births/:addr`
Gets the data from the respective birth document.

```bash
$ http GET :3000/docs/births/0xfA6B77a94de9a3dEc80CAa606Ed348D7e3B3FbF8

{
    "addr": "0xfA6B77a94de9a3dEc80CAa606Ed348D7e3B3FbF8",
    "date": "7b",
    "name": "John Doe"
}
```

#### `POST /docs/deaths`
Posts a document that represents the death certificate of someone. For every
death, there must be a birth. So we need a birth certificate to be linked to it.

```bash
$ http POST :3000/docs/deaths date=123 birth=0xfA6B77a94de9a3dEc80CAa606Ed348D7e3B3FbF8

{
    "addr": "0xF0C52D1FB72bff10e9dC7664f30621449F695901",
    "birth": "0xfA6B77a94de9a3dEc80CAa606Ed348D7e3B3FbF8",
    "date": "7b"
}
```

#### `GET /docs/deaths/:addr`
Gets the data from the respective death document.

```bash
$ http GET :3000/docs/deaths/0xF0C52D1FB72bff10e9dC7664f30621449F695901

{
    "addr": "0xF0C52D1FB72bff10e9dC7664f30621449F695901",
    "birth": "0xfA6B77a94de9a3dEc80CAa606Ed348D7e3B3FbF8",
    "date": "7b"
}
```

#### `POST /docs/marriages`
Posts a document that represents the marriage document of 2 persons. Because a
marriage is related to 2 persons, we need to link them to it.

```bash
$ http POST :3000/docs/marriages date=123 first=0xbBfc87cBF259aFc1A9042e1410b38848cdd373E5 second=0x296cf6066D5130b6e4F1e9B0E685fc72EF8138E2

{
    "addr": "0x9ec3724F5FfA5C03C9aCa6bC85C0e69EE895C6A9",
    "date": "7b",
    "first": "0xbBfc87cBF259aFc1A9042e1410b38848cdd373E5",
    "second": "0x296cf6066D5130b6e4F1e9B0E685fc72EF8138E2"
}
```

#### `GET /docs/marriages/:addr`
Gets the data from the respective marriage document.

```bash
$ http GET :3000/docs/marriages/0x9ec3724F5FfA5C03C9aCa6bC85C0e69EE895C6A9

{
    "addr": "0x9ec3724F5FfA5C03C9aCa6bC85C0e69EE895C6A9",
    "date": "7b",
    "first": "0xbBfc87cBF259aFc1A9042e1410b38848cdd373E5",
    "second": "0x296cf6066D5130b6e4F1e9B0E685fc72EF8138E2"
}
```

#### `POST /docs/divorces`
Posts a document that represents the divorce document of 2 persons. Here we see
the same situation that happens with birth/death certificates. A divorce can
only exists if there was a matching marriage. So we reference it.

```bash
$ http POST :3000/docs/divorces date=123 marriage=0x9ec3724F5FfA5C03C9aCa6bC85C0e69EE895C6A9

{
    "addr": "0x3440E51Ef80fF12A024696cC54dd04BD3C696D66",
    "date": "7b",
    "marriage": "0x9ec3724F5FfA5C03C9aCa6bC85C0e69EE895C6A9"
}
```

#### `GET /docs/divorces/:addr`
Gets the data from the respective divorce document.

```bash
$ http GET :3000/docs/divorces/0x3440E51Ef80fF12A024696cC54dd04BD3C696D66

{
    "addr": "0x3440E51Ef80fF12A024696cC54dd04BD3C696D66",
    "date": "7b",
    "marriage": "0x9ec3724F5FfA5C03C9aCa6bC85C0e69EE895C6A9"
}
```
