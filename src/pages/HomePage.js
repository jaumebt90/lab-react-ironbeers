import React from 'react';
import img1 from '../assets/beers.png';
import img2 from '../assets/random-beer.png';
import img3 from '../assets/new-beer.png';
import Panel from '../components/Panel';

const panels = [
  {
    image: img1,
    name: 'All Beers',
    link: '/beers',
  },
  {
    image: img2,
    name: 'Random Beer',
    link: '/random-beer',
  },
  {
    image: img3,
    name: 'New Beer',
    link: '/new-beer',
  },
];

function HomePage() {
  return (
    <div className="HomePage">
      {panels.map((panel) => {
        return <Panel panels={panel} />;
      })}
    </div>
  );
}

export default HomePage;
