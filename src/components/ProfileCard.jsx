import { CircleX, Expand } from "lucide-react";
import React from "react";
const ProfileCard = ({
  profile,
  isOpen,
  onClose = () => {},
  handleViewCurrenProfile,
}) => {
  return (
    <div
      onClick={() => {
        handleViewCurrenProfile(profile);
      }}
      className="w-full relative h-fit border-[1.5px] flex flex-col gap-8 overflow-hidden text-black border-[#E57D5B] bg- rounded-xl min-h-[400px] bg-[#F3E4CF]"
    >
      {isOpen ? (
        <button
          onClick={onClose}
          className="absolute flex cursor-pointer flex-col gap-2 justify-center items-end text-xl right-5 top-5 group"
        >
          <CircleX />
          <span className="tooltip rounded-md px-2 bg-gray-300 text-sm hidden group-hover:block ">
            close
          </span>
        </button>
      ) : (
        <button className="absolute flex cursor-pointer flex-col gap-2 justify-center items-end text-xl right-5 top-5 group">
          <Expand />
          <span className="tooltip rounded-md px-2 bg-gray-300 text-sm hidden group-hover:block ">
            view
          </span>
        </button>
      )}

      <div className="w-full bg-white p-4 flex flex-col gap-2 items-center justify-center">
        <img
          src={profile.avatar}
          className="w-20 h-20 rounded-full border-[1.5px] border-[#E57D5B]"
          alt=""
        />
        <p className="font-semibold text-2xl">{profile.name}</p>
        <p className="font-semibold">{profile.age}</p>
      </div>
      <div className="bg-white p-4">
        <p className="text-xl font-semibold">Hobbies</p>
        <div className="divide-y-2 divide-amber-400">
          {profile?.hobbies?.map((hobbie) => {
            return (
              <p className="py-2" key={hobbie.title}>
                <span className="font-semibold">{hobbie.title} : </span>
                <span>{hobbie.description}</span>
              </p>
            );
          })}
        </div>
      </div>
      <div className="p-4 bg-white space-y-2 tracking-tight">
        <p className="font-semibold">{profile.location}</p>
        <p>{profile.tagline}</p>
        <p>{profile.description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
