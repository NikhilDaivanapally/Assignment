import React from "react";
import ProfileCard from "./ProfileCard";

const Dialog = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Dialog Card */}
      <div className="relative z-10 w-full max-w-[300px] sm:max-w-md bg-white rounded-2xl shadow-lg">
        <ProfileCard profile={data} isOpen={isOpen} onClose={onClose} />
      </div>
    </div>
  );
};

export default Dialog;
