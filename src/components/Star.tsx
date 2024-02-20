// components/Star.js

interface StarProps {
  style?: React.CSSProperties; // Use React's built-in type for CSS properties
}

const Star: React.FC<StarProps> = ({ style }) => {
  return <div className="star" style={style}></div>;
};

export default Star;
