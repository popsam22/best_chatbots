import React from "react";

const ProfileCard = ({ name, handle, imageSrc, about}) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={imageSrc} alt="chatbot logo" width={100} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{name}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
      <div className="content">
        {about}
      </div>
      </div>
    </div>
  );
};

export default ProfileCard;
