// src/components/StackedCards.js
import React, { useEffect, useRef, useState } from 'react';

const StackedCards = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const stackAreaRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const proportion = stackAreaRef.current.getBoundingClientRect().top / window.innerHeight;
      if (proportion <= 0) {
        const n = cardsRef.current.length;
        let index = Math.ceil((proportion * n) / 2);
        index = Math.abs(index) - 1;
        setActiveIndex(index);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const rotateCards = () => {
      let angle = 0;
      cardsRef.current.forEach((card, i) => {
        if (i <= activeIndex) {
          card.style.transform = `translate(-50%, -120vh) rotate(-48deg)`;
        } else {
          card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
          angle -= 10;
        }
      });
    };

    rotateCards();
  }, [activeIndex]);

  return (
    <div id="stackedcards" className="center">
      <div className="stack-area" ref={stackAreaRef}>
        <div className="left">
          <div className="title">Our Features</div>
          <div id="stackedcards" className="sub-title">
            Explore our easy-to-use real estate platform with detailed listings, 
            virtual tours, and expert guidance. We simplify buying, selling, and 
            renting, ensuring a smooth experience from start to finish.
            <br />
            <button>See More Details</button>
          </div>
        </div>
        <div className="right">
          <div className="cards">
            {[...Array(4).keys()].map(i => (
              <div
                key={i}
                className={`card ${i <= activeIndex ? 'active' : ''}`}
                ref={el => cardsRef.current[i] = el}
              >
                <div className="sub">{['Simplified', 'Boost Productivity', 'Facilitated learning', 'Support'][i]}</div>
                <div className="content">{['Easy listings and expert support', 'Streamline transactions and save time', 'Easy-to-follow guides and resources', 'Now its 24/7 support'][i]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackedCards;
