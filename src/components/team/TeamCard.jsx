/* eslint-disable react/prop-types */

import SocialMedia from "../common/SocialMedia";

const TeamCard = ({ team }) => {
  return (
    <div className="group overflow-hidden relative">
      <div className="overflow-hidden ">
        <img
          src={team.img}
          alt={team.name}
          className="
           group-hover:scale-105 group-hover:blur-sm transition-all duration-700 w-full"
        />
      </div>
      <div className="boxShadow bg-dark flex justify-center flex-col items-center py-5 relative border-inner">
        <h4 className="font-bold font-oswald text-primary">{team.name}</h4>
        <p className="text-white">{team.role}</p>
      </div>
      {/* Socila Media */}
      <div
        className="
          group-hover:block hidden 
         absolute z-[999] top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]  "
      >
        <SocialMedia />
      </div>
    </div>
  );
};

export default TeamCard;
