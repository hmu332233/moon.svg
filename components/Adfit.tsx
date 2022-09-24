import React, { useEffect } from 'react';

type Props = {};

function Adfit({}: Props) {
  useEffect(() => {
    if (!document.getElementById('KakaoAdfit')) {
      const scriptKakaoJS = document.createElement('script');
      scriptKakaoJS.id = 'KakaoAdfit';
      scriptKakaoJS.src = 'https://t1.daumcdn.net/kas/static/ba.min.js';
      scriptKakaoJS.async = true;
      document.body.appendChild(scriptKakaoJS);
    }
  }, []);
  return (
    <ins
      className="kakao_ad_area"
      style={{ display: 'none' }}
      data-ad-unit="DAN-q1keAjXt91SqPkXm"
      data-ad-width="250"
      data-ad-height="250"
    />
  );
}

export default Adfit;
