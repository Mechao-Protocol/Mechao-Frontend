import React from 'react';

const MyDomainCard = ({ img, domain, tld }) => {
  return (
    <div className="mx-10">
      <div className="bg-black-gradient rounded-xl w-full rex">
        <img src={img} alt="" className="w-[500px] h-[200px]" />
        <div>
          <p className="text-xl text-white ml-6 py-4">{domain}</p>
          <p className="ml-6 py-2 text-secondary-white pb-4 mb-10">
            A domain issued to {tld} members
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyDomainCard;
