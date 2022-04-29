import { Map, Marker } from 'pigeon-maps'
import React from 'react'

const Position = (props) => {
    const { location } = props;
    // console.log(location);

    return (
        <Map height={350} defaultCenter={location} defaultZoom={13}>
            <Marker width={50} anchor={location} />
        </Map>
    );
};

export default Position;