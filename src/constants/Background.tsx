import Star from '../components/Star';

const Background = () => {
  const numberOfStars = 50; // Adjust based on desired density

  const generateStars = (): JSX.Element[] => {
    let stars = [];

    for (let i = 0; i < numberOfStars; i++) {
      // Randomize start positions and movement directions
      const startX = 50; // Start from the center
      const startY = 50;
      const endX = Math.random() * 90; // End anywhere on the screen
      const endY = Math.random() * 90;

      const style: React.CSSProperties = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationName: 'expandOutwards',
        animationDuration: `${Math.random() * 1 + 2}s`, // Between 2 and 5 seconds
        animationDelay: `${Math.random() * 5}s`, // Up to 5 seconds delay
        animationFillMode: 'forwards', // Keep the stars at their end state
        transform: `translate(${endX - startX}vw, ${
          endY - startY
        }vh) scale(0.5)`, // Initial transform
      };
      stars.push(<Star key={i} style={style} />);
    }
    return stars;
  };

  return (
    <div className="h-full w-full bg-black fixed inset-0 z-0 object-cover bg-blend-overlay">
      {generateStars()}
    </div>
  );
};

export default Background;
