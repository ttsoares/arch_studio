"use client";

import React, { useState } from "react";
import Map, { Marker } from "react-map-gl/maplibre";

const MyMap = () => {
  const settings = {
    scrollZoom: false,
    boxZoom: false,
    dragRotate: false,
    dragPan: true,
    keyboard: false,
    doubleClickZoom: false,
    touchZoomRotate: false,
    touchPitch: false,
  };

  return (
    <div className="w-full">
      <Map
        initialViewState={{
          longitude: -93.8,
          latitude: 34.7,
          zoom: 4.4,
        }}
        {...settings}
        style={{ width: 1100, height: 500, margin: "auto" }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=8bzvn7xDYUv2Ymp6UHYx"
      >
        <Marker longitude={-86.7499} latitude={35.991} color="black" />
        <Marker longitude={-99.9066} latitude={31.8665} color="black" />
      </Map>
    </div>
  );
};

export default MyMap;
