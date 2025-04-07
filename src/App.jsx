import { useEffect, useState } from "react";
import Carousel from "./components/Carousel";
import profilesData from "./data/profiles.json";
import ProfileListing from "./components/ProfileListing";
import Dialog from "./components/Dialog";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentProfileData, setCurrentProfileData] = useState(null);
  const [profiles] = useState(profilesData); // static, no need for useEffect

  const handleViewCurrenProfile = (data) => {
    setIsDialogOpen(true);
    setCurrentProfileData(data);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setCurrentProfileData(null);
  };
  return (
    <div className="App w-full h-full">
      {/* carousel section*/}
      <div className=" w-full p-4 md:p-10 bg-[#C79A85]/20">
        <Carousel />
      </div>

      {/* Profile Listing Section */}
      <div className="w-full p-4 md:p-10 bg-[#FFFAF3]">
        <ProfileListing
          profiles={profiles}
          handleViewCurrenProfile={handleViewCurrenProfile}
        />
      </div>
      {/* Dialog */}
      <Dialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        data={currentProfileData}
      />
    </div>
  );
}

export default App;
