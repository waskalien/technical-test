import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Marker from './marker';
import Style from './style';
import { Create, Selectors } from "../user/list";

const Map = () => {
  const [users, setUsers] = useState(null);
  const [parentUsersFiltered, setParentUsersFiltered] = useState(null);

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/user");
      setUsers(data.filter(user => user.location));
    })();
  }, [])

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDaP9hhYntufhL3_WXTevlZQCocjs3Yhms"
  });

  const options = {
    styles: Style,
    clickableIcons: false,
    disableDefaultUI: true,
    zoomControl: true,
    zoomControlOptions: { position: 7 },
    gestureHandling: 'cooperative',
  };

  return (
    <div className="pt-6 px-2 md:px-8">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <Selectors users={users} setParentUsersFiltered={setParentUsersFiltered} />
        <Create />
      </div>
      <div className="flex-1 mb-[10px] py-6">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '600px', borderRadius: '16px' }}
            center={{ lat: 48.8588548, lng: 2.347035 }}
            zoom={13}
            options={options}
          >
            {parentUsersFiltered && parentUsersFiltered.map(user => (
              <Marker user={user} />
            ))}
          </GoogleMap>
      ) : <></>}
      </div>
    </div>
  );
};

export default Map;
