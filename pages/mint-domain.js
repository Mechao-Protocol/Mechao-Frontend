import React from 'react';
import MintNavbar from '@/components/MintNavbar';
import MinterHeader from '@/components/MinterHeader';
import MintFooter from '@/components/MintFooter';
import Nav from '@/components/Nav';

const MintDomain = () => {
  return (
    <div className="bg-black-gradient overflow-hidden h-screen">
      <Nav />
      <div>
        <MinterHeader />
      </div>
      {/* <MintFooter /> */}
    </div>
  );
};

export default MintDomain;
