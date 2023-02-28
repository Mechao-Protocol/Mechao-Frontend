'use client';

import React from 'react';
import styles from '../styles';
import { FaWallet } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { RiWallet3Line } from 'react-icons/ri';
import { useAccount, useBalance } from 'wagmi';

const AccountHeader = () => {
  const { address } = useAccount();
  const { data } = useBalance({
    addressOrName: address,
  });

  const formatAddress = (address) => {
    let addressFormatted;
    if (address) {
      addressFormatted = address.slice(0, -16);
    } else {
      addressFormatted = '---';
    }
    return addressFormatted;
  };

  const formatBalance = (balance) => {
    let balanceFormatted;
    if (balance) {
      balanceFormatted = balance.slice(0, -2);
    } else {
      balanceFormatted = '---';
    }
    return balanceFormatted;
  };

  return (
    <section
      className={`ml-[330px] mt-[30px]   md:flex-row flex-col ${styles}`}
    >
      <div className="flex gap-4 items-center">
        <div className=" p-10 bg-black-gradient-2 rex  rounded-lg w-[65%] h-[180px] text-secondary-white  shadow-2xl ">
          {/* <span className="bg-secondary-white p-2 rounded-lg">
            <AiOutlineHome className="text-gray-600 text-2xl" />
          </span> */}
          <p>
            <span className="text-lg font-bold">Wallet Address:</span>
            &nbsp;
            {formatAddress(address)}...
          </p>

          <br />
          <div className="flex justify-between gap-10">
            <p className="text-lg font-bold">Supported Chains:</p>
            <p className="flex items-center">
              <img src="/solana.png" alt="" className="w-[30px]" />
              &nbsp; Solana
            </p>
            <p className="flex items-center">
              <img src="/ethereum.png" alt="" className="w-[30px]" />
              &nbsp; Ethereum
            </p>
            <p className="flex items-center">
              <img src="/binance.svg" alt="" className="w-[100px]" />
              {/* &nbsp; Binance */}
            </p>
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div>
          <img src="/roko.jpg" alt="" className="w-[200px] h-[200px] polygon" />
          <p className="text-secondary-white mt-6">
            <span className="font-bold bg-[#A020F0] p-2 rounded-l-lg">
              {' '}
              Default Domain:
            </span>
            <span className="bg-white p-2 roun text-black rounded-r-lg font-bold">
              ademola.dojima
            </span>{' '}
          </p>
        </div>
        {/* <div className="card p-20 bg-slate-800 rex3 rex rounded-lg w-[45%] text-secondary-white flex items-center gap-4 shadow-2xl">
          <span className="bg-secondary-white p-2 rounded-lg">
            <RiWallet3Line className="text-gray-600 text-2xl" />
          </span>
          Wallet Balance: <br /> {formatBalance(data?.formatted)} {data?.symbol}
        </div> */}
      </div>
    </section>
  );
};

export default AccountHeader;
