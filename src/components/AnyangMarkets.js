import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RegionSelector from './RegionSelector';

const AnyangMarkets = () => {
  const [region, setRegion] = useState('');
  const [district, setDistrict] = useState('');
  const [markets, setMarkets] = useState([]);
  const [selectedMarket, setSelectedMarket] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  // 시장 데이터를 가져오는 함수
  const fetchMarkets = async (selectedRegion, selectedDistrict) => {
    if (!selectedRegion) return; // 지역 정보가 없으면 검색하지 않음
    setLoading(true);
    setError(null);
    try {
      // 서버 API에 region과 district를 별도로 전달
      const params = { region: selectedRegion };
      if (selectedDistrict) {
        params.district = selectedDistrict;
      }
      const response = await axios.get('http://localhost:5000/api/markets', {
        params,
      });
      setMarkets(response.data);
    } catch (err) {
      console.error(err);
      setError('시장 데이터를 불러오는 데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };
  // 지역 변경 핸들러
  const handleRegionChange = (selectedRegion, selectedDistrict) => {
    setRegion(selectedRegion);
    setDistrict(selectedDistrict);
  };
  // 지역이나 구가 변경될 때마다 시장 데이터를 가져옴
  useEffect(() => {
    fetchMarkets(region, district);
  }, [region, district]);
  if (selectedMarket) {
    return (
      <MarketDetail
        market={selectedMarket}
        goBack={() => setSelectedMarket(null)}
        restaurants={restaurants}
        error={error}
      />
    );
  }
  return (
    <div className="anyang-markets-container">
      <h1>지역별 전통시장 정보</h1>
      <RegionSelector onRegionChange={handleRegionChange} />
      {loading && <div className="loading">로딩 중...</div>}
      {error && <div className="error">{error}</div>}
      <ul className="markets-list">
        {markets.map((market, index) => (
          <li key={index} onClick={() => setSelectedMarket(market)}>
            {market.시장명}
          </li>
        ))}
      </ul>
    </div>
  );
};
// 시장 상세 정보 컴포넌트
const MarketDetail = ({ market, goBack, restaurants, error }) => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [marketError, setMarketError] = useState(null);
  useEffect(() => {
    const fetchMarketDetails = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/market-details', {
          params: {
            marketName: market.시장명,
            address: market.소재지도로명주소 || market.소재지지번주소,
            parking: market.주차장보유여부,
          },
        });
        setDetails(response.data);
      } catch (err) {
        console.error(err);
        setMarketError('해당 시장의 상세 정보를 조회할 수 없습니다. (데이터 미제공)');
      } finally {
        setLoading(false);
      }
    };
    fetchMarketDetails();
  }, [market]);
  if (loading) return <div className="loading">로딩 중...</div>;
  if (marketError) return <div className="error">{marketError}</div>;
  return (
    <div className="market-detail-container">
      <button className="back-button" onClick={goBack}>뒤로가기</button>
      <h2>{details.name}</h2>
      <p>주소: {details.address}</p>
      <p>주차장 보유 여부: {details.parking ? '예' : '아니오'}</p>
      <p>온누리상품권: {market.acceptsOnnuri ? '사용 가능' : '사용 불가'}</p>
      <h3>편의시설 보유 현황</h3>
      <ul className="facilities-list">
        <li>고객지원센터: {details.facilities.고객지원센터 ? '보유' : '미보유'}</li>
        <li>유아놀이방(어린이 놀이터): {details.facilities.유아놀이방 ? '보유' : '미보유'}</li>
        <li>고객휴게실: {details.facilities.고객휴게실 ? '보유' : '미보유'}</li>
        <li>수유실: {details.facilities.수유실 ? '보유' : '미보유'}</li>
        <li>물품보관함: {details.facilities.물품보관함 ? '보유' : '미보유'}</li>
        <li>자전거보관함: {details.facilities.자전거보관함 ? '보유' : '미보유'}</li>
      </ul>
      <h3>반경 500m 내 음식점</h3>
      <ul className="restaurants-list">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant, index) => (
            <li key={index}>
              <h4>{restaurant.name}</h4>
              <p>거리: {restaurant.distance}m</p>
              <p>전화번호: {restaurant.phone || '없음'}</p>
              {restaurant.thumbnail && (
                <img src={restaurant.thumbnail} alt={restaurant.name} className="restaurant-thumbnail" />
              )}
            </li>
          ))
        ) : (
          <p>음식점 정보를 불러오지 못했습니다.</p>
        )}
      </ul>
    </div>
  );
};
export default AnyangMarkets;