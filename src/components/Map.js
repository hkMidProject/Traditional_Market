// import React, { useEffect } from 'react';

// const Map = () => {
//   useEffect(() => {
//     // 카카오맵 스크립트를 동적으로 로드
//     const script = document.createElement('script');
//     script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=9c013cffc99959e1dd65a1c3145a57ef&autoload=false`;
//     script.async = true;
//     document.head.appendChild(script);

//     script.onload = () => {
//       // 스크립트가 로드된 후 지도를 초기화
//       window.kakao.maps.load(() => {
//         const mapContainer = document.getElementById('map'); // 지도를 표시할 div
//         const mapOption = {
//           center: new window.kakao.maps.LatLng(37.5598681, 126.9673822), // 지도의 중심좌표
//           level: 3, // 지도의 확대 레벨
//         };
//         const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도 생성

//         // 마커 생성
//         const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
//         const marker = new window.kakao.maps.Marker({
//           position: markerPosition,
//         });
//         marker.setMap(map);
//       });
//     };

//     // 컴포넌트 언마운트 시 스크립트를 제거
//     return () => script.remove();
//   }, []);

//   return <div id="map" style={{ width: '100%', height: '100%' }} />;
//   return <div id="map" style={{ width: '100%', height: '75vh'}} />;
// };

// export default Map;
