import React from 'react';

function Hits() {
  return (
    <a href="https://hits.seeyoufarm.com">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fmoon-phase.vercel.app&count_bg=%2365C3C8&title_bg=%23291334&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"
        alt="hits"
      />
    </a>
  );
}

export default Hits;
