import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="30" y="9" rx="0" ry="0" width="0" height="2" />
    <circle cx="138" cy="121" r="102" />
    <rect x="0" y="255" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="300" rx="10" ry="10" width="280" height="78" />
    <rect x="1" y="396" rx="10" ry="10" width="95" height="30" />
    <rect x="129" y="386" rx="20" ry="20" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
