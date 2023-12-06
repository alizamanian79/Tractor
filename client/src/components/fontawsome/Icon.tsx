import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';

interface IconProps {
  icon: IconProp;
  color?: string;
  size?: string;
  margin?: string;
  mouseOverColor?: string;
}

const Icon: React.FC<IconProps> = ({ icon, color, size, margin, mouseOverColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };

  const style = {
    color: isHovered ? (mouseOverColor || color || 'black') : (color || 'black'),
    fontSize: size || '1rem',
    margin: margin || '0px',
    transition: 'color 0.3s',
    cursor: 'pointer',
  };

  return (
    <FontAwesomeIcon
      icon={icon}
      style={style}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
    />
  );
};

export default Icon;