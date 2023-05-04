export default [
    // ADMINISTRATIVE
    // ADM -> country = nom pays
    {
      featureType: 'administrative.country',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#756f66',
        },
      ],
    },
    {
      featureType: 'administrative.country',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    // ADM -> locality = noms arrondissements + villes
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#89b0c9',
        },
      ],
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#fdf3ea',
        },
      ],
    },
    // ADM -> neighborhood = noms des quartiers
    {
      featureType: 'administrative.neighborhood',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#879196',
        },
      ],
    },
    {
      featureType: 'administrative.neighborhood',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#fdf3ea',
        },
      ],
    },
    // ADM -> province = noms des provinces
    {
      featureType: 'administrative.province',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    // LANDSCAPE
    // LD -> man_made
    {
      featureType: 'landscape.man_made',
      elementType: 'geometry',
      stylers: [
        {
          color: '#fdf3ea',
        },
      ],
    },
    // LD -> natural -> default OK
    // LD -> natural.landcover -> default OK
    // LD -> natural.terrain -> default OK
    // POINTS OF INTEREST
    // all
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#f5eadf',
        },
      ],
    },
    // icons
    {
      featureType: 'poi',
      elementType: 'labels.icon',
      stylers: [
        {
          color: '#e3d3c1',
        },
      ],
    },
    // labels
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#e3d3c1',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    // POI -> parks
    {
      featureType: 'poi.park',
      elementType: 'all',
      stylers: [
        {
          color: '#d4ebab',
        },
      ],
    },
    // POI -> schools
    {
      featureType: 'poi.school',
      elementType: 'all',
      stylers: [
        {
          color: '#e3ded8',
        },
      ],
    },
    // POI -> sports
    {
      featureType: 'poi.sports_complex',
      elementType: 'all',
      stylers: [
        {
          color: '#e3ded8',
        },
      ],
    },
    // ROADS
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#ccbfb1',
        },
      ],
    },
    // RO -> arterial
    {
      featureType: 'road.arterial',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#efe5db',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#a19485',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    // RO -> Highways
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#dbdbdb',
        },
      ],
    },
    // RO -> local
    {
      featureType: 'road.local',
      elementType: 'geometry',
      stylers: [
        {
          color: '#efe5db',
        },
      ],
    },
  
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#bda994',
        },
      ],
    },
    // TRANSIT
    // TR -> lines
    {
      featureType: 'transit.line',
      elementType: 'all',
      stylers: [
        {
          color: '#e6e0d9',
        },
      ],
    },
    // TR -> stations
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#3950e3',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    // TR -> stations airport / bus / rails
    {
      featureType: 'transit.station.airport',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'transit.station.bus',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'transit.station.rail',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    // WATER
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#99d5de',
        },
      ],
    },
  ];
  