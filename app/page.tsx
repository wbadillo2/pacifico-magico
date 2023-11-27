
import '@/app/ui/home-style.css'
import Home from './components/home';
import HotelCard from './components/HotelCard';
import '@/app/ui/cards.css'

const hotels = [
  // Primer hotel (el que ya tienes)
  {
    id: 1,
    name: "Hotel playa dubai",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
    pricePerNight: 100000,
    location: "Playa huina",
    distance: 3.5,
    images: [
      '/assets/images/489158365.jpg',
      '/assets/images/489159295.jpg',
      '/assets/images/489159472.jpg',
    ],
    ranking: 3.9,
  },

  // Segundo hotel
  {
    id: 2,
    name: "Hotel playa sol",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
    pricePerNight: 120000,
    location: "Playa sol",
    distance: 4.5,
    images: [
      '/assets/images/sol-1.webp  ',
      '/assets/images/sol-2.webp',
      '/assets/images/sol-3.webp',
    ],
    ranking: 4.2,
  },

  // Tercer hotel
  {
    id: 3,
    name: "Hotel playa luna",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
    pricePerNight: 150000,
    location: "Playa luna",
    distance: 5.5,
    images: [
      '/assets/images/luna-1.webp',
      '/assets/images/luna-2.webp',
      '/assets/images/luna-3.webp',
    ],
    ranking: 4.7,
  },

  // Tercer hotel
  {
    id: 3,
    name: "Hotel playa luna",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
    pricePerNight: 150000,
    location: "Playa luna",
    distance: 5.5,
    images: [
      '/assets/images/luna-1.webp',
      '/assets/images/luna-2.webp',
      '/assets/images/luna-3.webp',
    ],
    ranking: 4.7,
  },
];


const Page: React.FC = () => {
  return (
    <main className="snap-y snap-mandatory relative w-full overflow-auto h-screen">
      <div className='snap-center'>
        <Home />
      </div>

      <div className='snap-center'>
        <section className='bg-white min-h-screen w-full'>
            <h3 className="text-center pt-24 text-2xl ">HOTELES</h3>
          <div className="cards-container mx-auto px-6 py-10 w-full gap-4" >
            {hotels.map((hotel) => {
              return <HotelCard key={hotel.id} hotel={hotel} />;
            })}
          </div>
        </section>
      </div>

    </main>
  );
}

export default Page