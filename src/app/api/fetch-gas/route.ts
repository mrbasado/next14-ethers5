import { ethers } from "ethers";


// curl -X GET "localhost:3000/api/fetch-gas" -H "accept: application/json"
export async function GET() {
  const sepoliaKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY_SEPOLIA!;
  const mainnetKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY_MAINNET!;

  // mainnet

  const mainnetRPC = `https://eth-mainnet.g.alchemy.com/v2/${mainnetKey}`;
  console.log('mainnet rpc', mainnetRPC);
  const mainnetProvider = new ethers.providers.JsonRpcProvider(mainnetRPC);
  const mainnetBlock = await mainnetProvider.getBlockNumber();
  console.log('mainnetBlock', mainnetBlock);

  // sepolia

  const sepoliaRPC = `https://eth-sepolia.g.alchemy.com/v2/${sepoliaKey}`;

  console.log('sepolia rpc', sepoliaRPC);
  
  const sepoliaProvider = new ethers.providers.JsonRpcProvider(sepoliaRPC);
  // const provider = new ethers.providers.AlchemyProvider("sepolia", sepoliaRPC);

  const sepoliaBlock = await sepoliaProvider.getBlockNumber();
  console.log('sepoliaBlock', sepoliaBlock);

  return new Response(JSON.stringify({}), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
