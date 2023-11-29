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
      {/* SD */}
      <div className="md:hidden w-full">
        <Map
          initialViewState={{
            longitude: -93.8,
            latitude: 34.7,
            zoom: 3.8,
          }}
          {...settings}
          style={{ width: 375, height: 367, margin: "auto" }}
          mapStyle="https://api.maptiler.com/maps/streets/style.json?key=8bzvn7xDYUv2Ymp6UHYx"
        >
          <Marker longitude={-86.7499} latitude={35.991} color="black" />
          <Marker longitude={-99.9066} latitude={31.8665} color="black" />
        </Map>
      </div>
      {/* MD */}
      <div className="hidden md:block lg:hidden w-full">
        <Map
          initialViewState={{
            longitude: -93.8,
            latitude: 34.7,
            zoom: 4,
          }}
          {...settings}
          style={{ width: 572, height: 560, margin: "auto" }}
          mapStyle="https://api.maptiler.com/maps/streets/style.json?key=8bzvn7xDYUv2Ymp6UHYx"
        >
          <Marker longitude={-86.7499} latitude={35.991} color="black" />
          <Marker longitude={-99.9066} latitude={31.8665} color="black" />
        </Map>
      </div>
      <div className="hidden lg:block w-full">
        <Map
          initialViewState={{
            longitude: -93.8,
            latitude: 34.7,
            zoom: 4.4,
          }}
          {...settings}
          style={{ width: 1110, height: 560, margin: "auto" }}
          mapStyle="https://api.maptiler.com/maps/streets/style.json?key=8bzvn7xDYUv2Ymp6UHYx"
        >
          <Marker longitude={-86.7499} latitude={35.991} color="black" />
          <Marker longitude={-99.9066} latitude={31.8665} color="black" />
        </Map>
      </div>
    </div>
  );
};

export default MyMap;
