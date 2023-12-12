import React, { useState } from "react";
import { FiUser, FiPower } from "react-icons/fi";
import { logoutUser } from "../../store/authSlice";
import profileImg from "../../assets/vectors/userProfile3.avif";
import { useDispatch, useSelector } from "react-redux";
function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userSlice);
  const [profileOpen, setprofileOpen] = useState(false);
  const closeProfile = () => setprofileOpen(false);
  return (
    <div className="relative">
        <div
          onClick={() => setprofileOpen(!profileOpen)}
          className="flex items-center gap-1 cursor-pointer rounded-lg py-0.5 pr-1 pl-1 lg:ml-auto shadow-md shadow-neutral-400"
        >
          <div className="flex items-center gap-1">
            <div className="border border-gray-900 p-0.5 rounded-xl overflow-hidden">
              <img
                src={profileImg}  alt="User_Profile"
                className="w-20 h-9 object-top object-cover"
              />
            </div>
            <FiPower className="h-5 w-5 text-primary" />
          </div>
      </div>
      {profileOpen && (
        <div className="absolute py-1 -left-[30%] mt-[18px] w-48 rounded-lg shadow-lg bg-white mobile:centerd">
          <div className="py-3">
            <button type="button" onClick={closeProfile}  aria-label="close"
              className="w-full px-4 py-2 text-sm  hover:bg-gray-100 flex items-center gap-2 
                 ">
              <FiUser className="h-4 w-4" />
              <span className="font-normal tracking-wider">
                {user?.email || "user"}
              </span>
            </button>
            <button type="button" onClick={() => dispatch(logoutUser())}
              className="w-full text-red-700 px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2
                 ">
              <FiPower className="h-4 w-4" />
              <span className="font-normal">Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
