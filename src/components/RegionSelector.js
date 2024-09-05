import React, { useState } from 'react';
//import MarketInfo from './MarketInfo';
import '../assets/CSS/RegionSelector.css'; // 스타일링을 위한 CSS 파일

function RegionModal({ isOpen, onClose, regions, onRegionSelect, onDistrictSelect, selectedRegion, selectedDistrict, onConfirm }) {
  if (!isOpen) return null; // 모달이 열려있지 않으면 아무것도 렌더링하지 않음

  const handleModalClick = (e) => {
    e.stopPropagation(); // 클릭 이벤트가 상위 요소로 전파되는 것을 방지
  };

  const handleConfirm = () => {
    onConfirm(selectedRegion, selectedDistrict); // 선택된 정보를 부모 컴포넌트에 전달
    onClose(); // 모달 닫기
  };

  

  return (
    <div className="modal" onClick={onClose} >
      <div className="modal-content" onClick={handleModalClick}  id="regionBtn" >
        <h3>지역 선택</h3>
        <div className="region-section">
          <h4>광역시/도 선택</h4>
          <div className="region-buttons">
            {Object.keys(regions).map((region) => (
              <button
                type="button"
                key={region}
                className={selectedRegion === region ? 'selected' : ''}
                onClick={() => onRegionSelect(region)}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {selectedRegion && (
          <div className="district-section">
            <h4>시/군/구 선택</h4>
            <div className="district-buttons">
              {regions[selectedRegion].map((district) => (
                <button
                  type="button"
                  key={district}
                  className={selectedDistrict === district ? 'selected' : ''}
                  onClick={() => onDistrictSelect(district)}
                >
                  {district}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="modal-actions">
          <button id="confirmBtn" type="button" onClick={handleConfirm}>확인</button>
        </div>
      </div>
    </div>
  );
}

function RegionSelector({ onRegionChange, selectedRegion, selectedDistrict }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const regions = {
    "서울특별시": [
      "강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", 
      "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", 
      "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", 
      "종로구", "중구", "중랑구"
    ],
    "부산광역시": [
      "강서구", "금정구", "기장군", "남구", "동구", "동래구", "부산진구", "북구", 
      "사상구", "사하구", "서구", "수영구", "연제구", "영도구", "중구", "해운대구"
    ],
    "대구광역시": [
      "군위군", "남구", "달서구", "달성군", "동구", "북구", "서구", "수성구", "중구"
    ],
    "인천광역시": [
      "강화군", "계양구", "남구", "남동구", "동구", "미추홀구", "부평구", "서구",  "연수구", 
      "옹진군", "중구"
    ],
    "광주광역시": [
      "광산구", "남구", "동구", "북구", "서구"
    ],
    "대전광역시": [
      "대덕구", "동구", "서구", "유성구", "중구"
    ],
    "울산광역시": [
      "남구", "동구", "북구", "울주군", "중구"
    ],
    "세종특별시": [
      "금남면", "부강면", "전의면", "조치원읍"
    ],
    "경기도": [
      "가평군", "고양시", "과천시", "광명시","광주시", "구리시", "군포시","김포시", "남양주시", "동두천시", "부천시", "성남시", "수원시", "시흥시", "안산시", "안성시", "안양시", "양주시", "양평군", "여주시","연천군", "오산시", "용인시", "의왕시", "의정부시", "이천시", "파주시", "평택시", "포천시", "하남시", "화성시"
    ],
    "강원도": [
      "강릉시", "고성군", "동해시", "삼척시", "속초시", "양구군", "양양군", "영월군", "원주시", "인제군", "정선군", "철원군", "춘천시", "태백시", "평창군", "홍천군", "화천군", "횡성군"
    ],
    "충청북도": [
      "괴산군", "단양군", "보은군", "영동군", "옥천군", "음성군", "제천시", "증평군", "진천군", "청원군", "청주시", "충주시"
    ],
    "충청남도": [
      "계룡시", "공주시", "금산군", "논산시", "당진시", "보령시", "부여군", "서산시", "서천군", "아산시", "예산군", "천안시", "청양군", "태안군", "홍성군"
    ],
    "전라북도": [
      "고창군", "군산시", "김제시", "남원시", "무주군", "부안군", "순창군", "완주군", "익산시", "임실군", "장수군", "전주시", "정읍시", "진안군"
    ],
    "전라남도": [
      "강진군", "고흥군", "곡성군", "광양시", "구례군", "나주시", "담양군", "목포시", "무안군", "보성군", "순천시", "신안군", "여수시", "영광군", "영암군", "완도군", "장성군", "장흥군", "진도군", "함평군", "해남군", "화순군"
    ],
    "경상북도": [
      "경산시", "경주시", "고령군", "구미시", "김천시", "문경시", "봉화군", "상주시", "성주군", "안동시", "영덕군", "영양군", "영주시", "영천시", "예천군", "울릉군", "울진군", "의성군", "청도군", "청송군", "칠곡군", "포항시"
    ],
    "경상남도": [
      "거제시", "거창군", "고성군", "김해시", "남해군", "마산시", "밀양시", "사천시", "산청군", "양산시", "의령군", "진주시", "진해시", "창녕군", "창원시", "통영시", "하동군", "함안군", "함양군", "합천군"
    ],
    "제주도": [
      "제주시", "서귀포시"
    ]
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRegionSelect = (region) => {
    onRegionChange(region, ""); // 광역시/도 선택 시 시/군/구 초기화
  };

  const handleDistrictSelect = (district) => {
    onRegionChange(selectedRegion, district); // 선택된 시/군/구 전달
  };

  return (
    <div className="region-container">
      <button id="regionBtn" type="button" onClick={openModal}>지역 선택</button>

      <RegionModal
        isOpen={isModalOpen}
        onClose={closeModal}
        regions={regions}
        onRegionSelect={handleRegionSelect}
        onDistrictSelect={handleDistrictSelect}
        selectedRegion={selectedRegion}
        selectedDistrict={selectedDistrict}
        onConfirm={onRegionChange} // 부모 컴포넌트로 전달
      />
    </div>
  );
}

export default RegionSelector;
