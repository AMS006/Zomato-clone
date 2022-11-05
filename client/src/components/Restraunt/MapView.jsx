import React,{useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DirectionsIcon from '@mui/icons-material/Directions';
import {useSelector} from 'react-redux'

function MapView(props) {

    return (
        <>
        <div>
          <h4 className="text-xl font-normal">Call</h4>
          <h5 className="text-zomato-400 font-medium">{props.phno}</h5>
        </div>
        <div>
          <h4 className="text-lg font-normal pt-1">Direction</h4>
          <div className="w-full h-36">
            <MapContainer
              center={props.mapLocation}
              zoom={13}
              scrollWheelZoom={false}
              className="h-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={props.mapLocation}>
                <Popup>{props.title}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        <div className="flex items-center gap-3 pt-4">
          <button className="flex items-center gap-2 px-3 py-2 text-gray-700 border border-gray-400 rounded-lg">
            <ContentCopyIcon fontSize='medium' /> Copy
          </button>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${props.latAndLong}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-2 py-2 text-gray-700 border border-gray-400 rounded-lg"
          >
            <span className="text-zomato-400">
              <DirectionsIcon />
            </span>{" "}
            Direction
          </a>
        </div>
      </>
    )
}

export default MapView