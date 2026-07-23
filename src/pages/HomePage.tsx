import { Hero } from '../components/home/Hero';
import { IntroPillars } from '../components/home/IntroPillars';
import { DiagnosticFlow } from '../components/home/DiagnosticFlow';
import { FeaturedProduct } from '../components/home/FeaturedProduct';

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroPillars />
      <DiagnosticFlow />
      <FeaturedProduct />
    </>
  );
}
