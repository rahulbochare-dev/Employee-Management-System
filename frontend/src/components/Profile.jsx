import React, { useState, useEffect } from "react";

const Profile = ({ firstName, lastName, email, avatar }) => {
  const [initials, setInitials] = useState({
    first: "",
    last: "",
  });

  useEffect(() => {
    const firstIn = firstName ? firstName.charAt(0) : "";
    const lastIn = lastName ? lastName.charAt(0) : "";

    setInitials({
      first: firstIn,
      last: lastIn,
    });
  }, [firstName, lastName]);

  return (
    <div className="w-full h-10 flex mt-5">
      {avatar ? (
        <div className="w-[15%] h-full rounded-full">
          <img className="w-full h-full" src={avatar} alt="" />
        </div>
      ) : (
        <div className="w-[15%] h-full rounded-full bg-[#d1d1d1] flex justify-center items-center">
          <h1 className="text-[#898989] text-lg font-bold">
            {initials.first}
            {initials.last}
          </h1>
        </div>
      )}
      <div className="w-[82%] h-full pl-2">
        <h3 className="text-[0.9375rem] font-medium">
          <span>{firstName}</span> <span>{lastName}</span>
        </h3>
        <h4 className="text-[0.80rem] mt-[-1%] text-[#9c9c9c]">{email}</h4>
      </div>
    </div>
  );
};

export default Profile;
