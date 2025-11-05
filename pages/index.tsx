import type { NextPage } from 'next';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Home: NextPage = () => {
  const handleClick = () => alert('Button clicked!');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Welcome to ALX Listing App</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="Modern Apartment"
          description="2 beds, 2 baths in city center"
          image="/assets/house1.jpg"
        />
        <Card
          title="Cozy Cottage"
          description="1 bed, 1 bath surrounded by nature"
          image="/assets/house2.jpg"
        />
        <Card
          title="Luxury Villa"
          description="5 beds, 4 baths with pool"
          image="/assets/house3.jpg"
        />
      </div>

      <div className="mt-6">
        <Button label="Book Now" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Home;
