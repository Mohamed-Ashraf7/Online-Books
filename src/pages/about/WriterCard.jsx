import React from "react";
import { FcLike } from "react-icons/fc";
import { BsListTask } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
const WriterCard = ({ name, role, imageSrc,
  description, taskCount,reviews,}) => {
  return (
    <div className="mb-6 rounded-lg p-6 hover:shadow-2xl cardShadow hover:scale-105">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <LazyLoadImage
            className="mr-2 h-10 w-10 rounded-full object-cover"
            src={imageSrc} alt={`profile_${name}`}
          />
          <div>
            <h3 className="text-base font-semibold text-gray-900">{name}</h3>
            <span className="block text-xs font-normal text-gray-500">
              {role}
            </span>
          </div>
        </div>
        <p className="text-sm font-medium text-primary">
          <span className="mr-0.5">+</span>Follow
        </p>
      </div>
      <p className="my-6 text-sm font-normal text-gray-700">{description}</p>
      <div className="mt-6 flex items-center justify-between text-sm font-semibold text-gray-900">
        <div className="flex">
          <BsListTask size={20} />
          <span className="mr-1 ps-1">{taskCount}</span> Task
        </div>
        <div className="flex items-center">
          <FcLike size={22} />
          {reviews}
        </div>
      </div>
    </div>
  );
};

export default WriterCard;
