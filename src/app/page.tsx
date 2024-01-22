"use client";
import { ethers } from "ethers";
import Image from "next/image";
import { useState } from "react";


export default function Home() {

  const [bnM, setBnM] = useState("");
  const [bnS, setBnS] = useState("");

  const a = async () => {
    console.log('test');
    const sepoliaKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY_SEPOLIA!;
    const mainnetKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY_MAINNET!;
  
    if (!sepoliaKey || !mainnetKey) {
      setBnM("AT LEAST ONE KEY MISSING");
      return;
    }
    // mainnet
  
    const mainnetRPC = `https://eth-mainnet.g.alchemy.com/v2/${mainnetKey}`;
    const mainnetProvider = new ethers.providers.JsonRpcProvider(mainnetRPC);
    const mainnetBlock = await mainnetProvider.getBlockNumber();
    console.log('mainnetBlock', mainnetBlock);
    setBnM(`Mainnet: ${mainnetBlock}`);
  
    // sepolia
    const sepoliaRPC = `https://eth-sepolia.g.alchemy.com/v2/${sepoliaKey}`;

    const sepoliaProvider = new ethers.providers.JsonRpcProvider(sepoliaRPC);
    const sepoliaBlock = await sepoliaProvider.getBlockNumber();
    setBnS(`Sepolia: ${sepoliaBlock}`);
    console.log('sepoliaBlock', sepoliaBlock);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Next 14 Ethers 5 issue: {" "}
          {bnM} {bnS}
        </p>
        <button className="p-10 w-full justify-center bg-red-700 hover:bg-red-800 focus:ring-4" onClick={() => a()}>CLICK TO GET BLOCK NUMBER</button>
      </div>
    </main>
  );
}
