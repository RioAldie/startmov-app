import Explore from '@/components/home/explore';
import Hero from '@/components/home/hero';

export default function Home() {
  return (
    <main className="mb-56">
      <div className="w-full">
        <h1>Test with Jest</h1>
        <Hero />
        <Explore />
      </div>
    </main>
  );
}
