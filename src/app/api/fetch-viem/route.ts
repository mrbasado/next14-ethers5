import { createClient, createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'


// curl -X GET "localhost:3000/api/fetch-viem" -H "accept: application/json"
export async function GET() {
  const sepoliaKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY_SEPOLIA!;
  const mainnetKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY_MAINNET!;

  // mainnet

  const clientM = createPublicClient({
    chain: mainnet,
    transport: http(`https://eth-mainnet.g.alchemy.com/v2/${mainnetKey}`),
  })
   
  // 3. Consume an action!
  const blockNumberM = await clientM.getBlockNumber();
  console.log('blockNumberM', blockNumberM);

  // sepolia

  const clientS = createPublicClient({
    chain: mainnet,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${sepoliaKey}`),
  })
   
  // 3. Consume an action!
  const blockNumberS = await clientS.getBlockNumber();
  console.log('blockNumberS', blockNumberS);

  return new Response(JSON.stringify({}), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
