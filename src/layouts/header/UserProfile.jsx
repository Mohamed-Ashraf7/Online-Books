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
      <div>
        <button
          type="button"
          onClick={() => setprofileOpen(!profileOpen)}
          className="flex items-center gap-1 rounded-md py-0.5 pr-1 pl-1 lg:ml-auto focus:outline-none shadow-md shadow-neutral-400"
        >
          <div className="flex items-center gap-1">
            <div className="border border-gray-900 p-0.5 bg-[#efefef] hover:bg-white rounded-xl overflow-hidden">
              <img
                src={profileImg}
                alt="ProfileImg"
                className="w-20 h-9 object-contain "
              />
            </div>
            <FiPower className="h-5 w-5 text-white" />
          </div>
        </button>
      </div>
      {profileOpen && (
        <div className="absolute -left-[30%] mt-4 w-48 rounded-lg shadow-lg bg-white  focus:outline-none  mobile:centerd">
          <div className="py-3">
            <button
              onClick={closeProfile}
              className=" w-full text-left px-4 py-2 text-sm text-gray-700  hover:bg-gray-100 flex items-center gap-2 rounded 
                 "
            >
              <FiUser className="h-4 w-4" />
              <span className="font-normal tracking-wider">
                {user?.email || "user"}
              </span>
            </button>
            <button
              onClick={() => dispatch(logoutUser())}
              className=" w-full text-left text-red-700 px-4 py-2 text-sm  hover:bg-gray-100 flex items-center gap-2 rounded 
                 "
            >
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
