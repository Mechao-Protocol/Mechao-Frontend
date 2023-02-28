import React from 'react';
import MyDomainCard from './MyDomainCard';

const img = '/planet-01.png';
const img2 = '/planet-02.png';

const domain = 'ademola.dojima';
const domain2 = 'johnny.mechao';

const tld = '.dojima';
const tld2 = '.mechao';

const MyDomains = () => {
  return (
    <div className="ml-[250px] pb-[100px]">
      <div className=" text-white text-2xl font-bold text-center mt-14 underline h-full">
        My Domains
      </div>

      <div className="flex gap-14 mt-10">
        <MyDomainCard img={img} domain={domain} tld={tld} />
        <MyDomainCard img={img2} domain={domain2} tld={tld2} />
      </div>
    </div>
  );
};

export default MyDomains;
