# Example for ethers5.7 next14 issues


## Setup
copy secrets and add your keys (eth + sepolia) (or comment out code as need in src/app/api/fetch-gas/route.ts)
```
cp .env.sample .env
```

run it
```
yarn && yarn dev
```
you can now go to localhost:3000 and open up the console. On the client, if you click the test button, you can see that it works. Follow the steps below to see how the api doesn't work

## Test

hit api
```
curl -X GET "localhost:3000/api/fetch-gas" -H "accept: application/json"
```
in the logs you should get `Error: could not detect network (event="noNetwork", code=NETWORK_ERROR, version=providers/5.7.2)`

now lets downgrade to next13. there will be some logs about missing deps but it will work and print the block number in the logs.

```
yarn add next@13
```

restart the service
```
yarn dev
```

then repeat test
```
curl -X GET "localhost:3000/api/fetch-gas" -H "accept: application/json"
```

you should get the blockNumber