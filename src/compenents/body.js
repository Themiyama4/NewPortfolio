import React from 'react';
import Typed from 'typed.js';

function MyBody() {
  
  const Mywords = [
    "Im Web developer",
    "App developer",
    "Ui Designer"
]


  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [Mywords[0], Mywords[1], Mywords[2]],
      typeSpeed: 100,
      smartBackspace: true,
      shuffle: false,
      loop: true,
      backSpeed: 40,
      backDelay: 800,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="Typed">
      <span ref={el} />
    </div>
  );
}

export default MyBody;