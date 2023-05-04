import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Marker, InfoBox } from '@react-google-maps/api';

const InfoBoxContent = ({ user }) => (
  <div>
    <div className='flex justify-between my-1'>
      <b>{user.name}</b> <i>{user.job_title}</i>
    </div>
    <p className='my-1'>{user.address}</p>
    <p className='my-1'>{user.description}</p>
  </div>
);

const MapMarker = ({ user }) => {
  const [open, setOpen] = useState(false);

    const infoBoxOptions = {
      pixelOffset: new window.google.maps.Size(-100, 5),
      boxStyle: { width: '250px', padding: "5px 10px", background: "rgba(255, 255, 255, 1)", zIndex: 2, borderRadius: '16px' },
      closeBoxURL: '',
    };

    const history = useHistory();

    return (
      <div>
        <Marker
          icon={{
            url: user.avatar || "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
            scaledSize: new window.google.maps.Size(35, 35),
          }}
          title={user.name}
          position={user.location}
          onMouseOver={() => setOpen(true)}
          onMouseOut={() => setOpen(false)}
          onClick={() => history.push(`/user/${user._id}`)}
        >
          {open && (
          <InfoBox options={infoBoxOptions}>
            <InfoBoxContent user={user} />
          </InfoBox>
          )}
        </Marker>
      </div>
    );
}

export default MapMarker;
