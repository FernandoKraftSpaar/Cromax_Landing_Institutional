import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredProduct } from '../../content/home';

export function FeaturedProduct() {
  const product = featuredProduct;

  return (
    <section className="bg-neutralbg py-24">
      <div className="container-cromax grid items-center gap-12 md:grid-cols-2">
        <div className="rounded-[2.5rem] bg-white p-4 shadow-xl">
          <img src='/Cromax_Landing_Institutional/images/lehft.png' alt="LogoLehft" />
        </div>
      
        <div>
          <span className="font-display text-sm font-bold uppercase tracking-widest text-cromax">
            {product.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-section-title font-bold text-black">
            {product.name}
          </h2>
          <p className="mt-6 text-body-lg font-medium text-neutral-600">{product.description}</p>
          <Link
            to={product.ctaPath}
            className="mt-8 inline-flex items-center gap-2 font-display text-subtitle font-bold text-cromax transition-all hover:gap-4"
          >
            {product.ctaLabel} <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
