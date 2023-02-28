import CreateHeader from '@/components/CreateHeader';
import ProfileNavbar from '@/components/ProfileNavbar';
import Sidebar from '@/components/Sidebar';
import React from 'react';
import Create from '@/components/Create';

const createDomain = () => {
  return (
    <div className="bg-black-gradient h-full">
      <div className="flex">
        <Sidebar />
        <ProfileNavbar />
      </div>
      <div>
        <CreateHeader />

        <Create />
      </div>
    </div>
  );
};

export default createDomain;
