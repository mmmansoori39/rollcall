import React from "react";
import ContentLoader from "react-content-loader";

const Loadertable = (props) => {
  const random = Math.random() * (1 - 0.7) + 0.7;
  return (
    <ContentLoader
      height={30}
      width={1060}
      speed={200}
      primaryColor="#d9d9d9"
      secondaryColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="15" rx="4" ry="4" width="20" height="6.4" />
      <rect x="64" y="13" rx="6" ry="6" width={200 * random} height="12" />
      <rect x="343" y="13" rx="6" ry="6" width={60 * random} height="12" />
      <rect x="513" y="13" rx="6" ry="6" width={70 * random} height="12" />
      <rect x="683" y="13" rx="6" ry="6" width={78 * random} height="12" />
      <rect x="785" y="13" rx="6" ry="6" width={117 * random} height="12" />
      <rect x="968" y="13" rx="6" ry="6" width={83 * random} height="12" />
      <rect x="0" y="39" rx="6" ry="6" width="1060" height=".3" />
    </ContentLoader>
  );
};
export default Loadertable;
