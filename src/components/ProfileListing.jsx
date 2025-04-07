import React from "react";
import ProfileCard from "./ProfileCard";

const ProfileListing = ({ profiles, handleViewCurrenProfile }) => {
  return (
    <>
      <h1 className="font-semibold text-center mb-5 md:mb-10 text-2xl md:text-4xl">
        Featured Profiles
      </h1>
      <div className="w-full px-4 sm:px-0 grid grid-cols-1 gap-3 md:gap-6 lg:gap-30  sm:grid-cols-2 lg:grid-cols-3">
        {profiles?.map((profile, i) => {
          return (
            <ProfileCard
              key={i}
              profile={profile}
              isOpen={false}
              handleViewCurrenProfile={handleViewCurrenProfile}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProfileListing;
