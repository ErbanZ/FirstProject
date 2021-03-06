import React from 'react';

interface Iprops {
  name: string;
  city?: string;
}

const LinkToMap: React.FunctionComponent<Iprops> = ({
  name,
  city = '510100', // city of number
}) => {
  return (
    <a
      // 高德地图
      href={`https://www.amap.com/search?query=${name}&city=${city}`}
      target="_blank"
      rel="nofollow me noopener noreferrer"
    >
      {name}
    </a>
  );
};

export default LinkToMap;
