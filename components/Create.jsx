import React, { useState } from 'react';
import Switch from './Switch';

const Create = () => {
  const [buyingEnabled, setBuyingEnabled] = useState(true);

  return (
    <div className="  p-10 rounded-[40px] ml-[460px]  pt-4 rex bg-black-gradient-2 w-1/2  flex flex-col items-center justify-center">
      <div className="px-[40px]">
        {/* <h1 className="text-center text-2xl text-secondary-white">
          Create your Custom Standard Domain
        </h1> */}
        <form className="flex flex-col" noValidate autoComplete="off">
          <label
            htmlFor="eventname"
            className="block text-sm font-medium text-secondary-white sm:mt-px sm:pt-2 pt-10"
          >
            Domain Name:
          </label>
          <input
            type="text"
            className="border  text-sm border-secondary-white p-2 rounded mb-5 text-white"
            placeholder="Add domain name (i.e '.eth')"
            required
            //   onChange={(e) => setDomainName(e.target.value)}
          />
          <label
            htmlFor="eventname"
            className="block text-sm font-medium text-secondary-white sm:mt-px sm:pt-2"
          >
            Symbol:
          </label>
          <input
            type="text"
            className="border text-sm border-secondary-white  text-secondary-white p-2 rounded mb-5"
            placeholder='Domain symbol (i.e "ETH")'
            required
            // defaultValue={symbol}
            //   onChange={(e) => setSymbol(e.target.value)}
          />
          <label
            htmlFor="eventname"
            className="block text-sm font-medium text-secondary-white sm:mt-px sm:pt-2 pb-4"
          >
            Enable Minting:
          </label>
          <Switch
            isOn={buyingEnabled}
            handleToggle={() => setBuyingEnabled(!buyingEnabled)}
          />
          <label
            htmlFor="eventname"
            className="block text-sm font-medium text-secondary-white sm:mt-px sm:pt-2"
          >
            Mint Price:
          </label>
          <input
            id="amount"
            type="number"
            min="0.000"
            step="0.001"
            className="border border-secondary-white text-secondary-white p-2 rounded mb-5 text-sm"
            placeholder="price per mint"
            required
            // defaultValue={price}
            //   onChange={(e) => setPrice(e.target.value)}
          />
        </form>
        <div className="text-center">
          <button
            className="px-5 py-2 bg-black-gradient rex mb-4 text-white rounded-lg"
            //   onClick={createDomain}
          >
            Create Domain
          </button>
        </div>
        <span className="text-white font-semibold mt-6">
          except .eth, .ens, .com, .org, .net, .smol, .punk, .dao, .xyz{' '}
        </span>
      </div>
    </div>
  );
};

export default Create;
