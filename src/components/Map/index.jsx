import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef, useState } from 'react';
import './index.css'
import "mapbox-gl/dist/mapbox-gl.css";
import mapData from './maps_data.json'
import { createRoot } from 'react-dom/client';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZHVtZWJ5IiwiYSI6ImNseXkwNWp3ZzF5dDgya3F2YXN1ZnJ3dzQifQ.xLjP19SfBRQ2f3pFu_l24Q';



const Marker = ({ onClick, children, feature }) => {
  const _onClick = () => {
    onClick(feature.properties.description);
  };

  return (
    <div onClick={_onClick} className="marker">
      {children}
    </div>
  );
};
  

function StationsMap() {
  const mapContainerRef = useRef(null);
  const map = useRef(null);
  const [lng] = useState(-87.637596);
  const [lat] = useState(41.940403);
  const [zoom] = useState(8);

  useEffect(() => {

    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [lng, lat],
      zoom: zoom
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    map.current.addControl(new mapboxgl.FullscreenControl());

    // Map onload event 
    map.current.on("load", ()=> {
        map.current.resize();

        mapData.features.forEach((feature) => {
          const ref = React.createRef();
          ref.current = document.createElement('div');
          createRoot(ref.current).render(
            <Marker onClick={()=>{}} feature={feature} />
          );
          const popupHtml = `<strong>${feature.properties.title}</strong><br><p>${feature.properties.description}</p><br>`
          const popup = new mapboxgl.Popup({
              closeButton: false,
              closeOnClick: false
          }).setLngLat(feature.geometry.coordinates).setHTML(popupHtml).addTo(map.current);
         const marker =  new mapboxgl.Marker(ref.current)
            .setLngLat(feature.geometry.coordinates).setPopup(popup)
            .addTo(map.current);
        const markerDiv = marker.getElement()
        markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
        markerDiv.addEventListener('mouseleave', () => marker.togglePopup());
        });
    })

    return () => map.current.remove();
  }, [lat, lng, zoom]); 

  return (
    <div className='map-container'  ref={mapContainerRef} />
  );
}

export default StationsMap