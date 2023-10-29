import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="30" y="9" rx="0" ry="0" width="0" height="2" />
    <circle cx="139" cy="121" r="123" />
    <rect x="0" y="255" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="296" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="415" rx="10" ry="10" width="95" height="30" />
    <rect x="126" y="405" rx="20" ry="20" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
