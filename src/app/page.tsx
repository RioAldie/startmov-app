import Explore from '@/components/home/explore';
import Hero from '@/components/home/hero';

export default function Home() {
  return (
    <main className="mb-56">
      <div className="w-full">
        <Hero />
        <Explore />
      </div>
    </main>
  );
}
