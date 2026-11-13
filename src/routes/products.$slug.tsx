import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { getProduct, products } from "@/lib/products";

const phoneNumber = "7989625040";

function ProductNotFound() {
  return (
    <main className="product-message">
      <p className="eyebrow eyebrow-dark">KT SAFETY NETS</p>
      <h1>This product page isn’t available.</h1>
      <Link to="/" hash="services">Browse all products <ArrowRight aria-hidden="true" /></Link>
    </main>
  );
}

function ProductError() {
  return (
    <main className="product-message">
      <p className="eyebrow eyebrow-dark">KT SAFETY NETS</p>
      <h1>This page couldn’t load.</h1>
      <Link to="/">Return to the home page <ArrowRight aria-hidden="true" /></Link>
    </main>
  );
}

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return product;
  },
  component: ProductPage,
  errorComponent: ProductError,
  notFoundComponent: ProductNotFound,
  head: ({ params }) => {
    const product = getProduct(params.slug);
    const title = product ? `${product.title} | KT Safety Nets` : "Product | KT Safety Nets";
    const description = product?.description ?? "Explore safety and home solutions from KT Safety Nets.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/products/${params.slug}` }],
    };
  },
});

function ProductPage() {
  const product = Route.useLoaderData();

  return (
    <div className="site-shell">
      <div className="topline">
        <span>Protection for the spaces you love</span>
        <a href={`tel:${phoneNumber}`} aria-label={`Call KT Safety Nets at ${phoneNumber}`}>
          <Phone aria-hidden="true" />
          <span>{phoneNumber}</span>
        </a>
      </div>
      <header className="site-header product-header">
        <Link className="brand" to="/" aria-label="KT Safety Nets home">
          <span className="brand-mark">KT</span>
          <span className="brand-name">SAFETY NETS<span>SECURE LIVING, OPEN VIEWS</span></span>
        </Link>
        <nav className="product-nav" aria-label="Product navigation">
          <Link to="/" hash="services"><ArrowLeft aria-hidden="true" /> All products</Link>
          <Link to="/" hash="quote">Request a quote <ArrowRight aria-hidden="true" /></Link>
        </nav>
      </header>

      <main>
        <section className="hero product-hero" aria-labelledby="product-title">
          <img className="hero-image" src={product.image} alt={product.imageAlt} width={1536} height={1024} fetchPriority="high" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow"><span /> KT SAFETY NETS · {product.title.toUpperCase()}</p>
            <h1 id="product-title">{product.title}</h1>
            <p className="hero-copy">{product.description}</p>
            <div className="hero-actions">
              <Button asChild size="lg" className="action-button">
                <Link to="/" hash="quote">Ask about this product <ArrowRight aria-hidden="true" /></Link>
              </Button>
              <Link className="text-link" to="/" hash="services"><ArrowLeft aria-hidden="true" /> Explore all products</Link>
            </div>
          </div>
          <div className="hero-caption"><span>MADE FOR YOUR SPACE</span><span>KT SAFETY NETS</span></div>
        </section>

        <section className="product-details section-wrap" aria-labelledby="product-details-title">
          <div className="product-details-heading">
            <p className="eyebrow eyebrow-dark">A SOLUTION FOR YOUR SPACE</p>
            <h2 id="product-details-title">{product.title}</h2>
          </div>
          <div className="product-details-copy">
            <p>{product.description}</p>
            <div className="product-use">
              <span>SUITED FOR</span>
              <p>{product.useCase}</p>
            </div>
            <Button asChild size="lg" className="action-button">
              <Link to="/" hash="quote">Request a quote <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </section>

        <section className="product-collection" aria-labelledby="more-products-title">
          <div className="section-wrap product-collection-inner">
            <div className="section-heading">
              <div>
                <p className="eyebrow eyebrow-dark">MORE FROM KT SAFETY NETS</p>
                <h2 id="more-products-title">Explore all <span>products.</span></h2>
              </div>
              <Link className="collection-back" to="/" hash="services">Back to home <ArrowRight aria-hidden="true" /></Link>
            </div>
            <div className="product-grid">
              {products.map((item, index) => (
                <Link className="product-grid-link" to="/products/$slug" params={{ slug: item.slug }} key={item.slug}>
                  <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="product-grid-name">{item.title}</span>
                  <ArrowRight aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer product-footer">
        <Link className="brand footer-brand" to="/" aria-label="KT Safety Nets, back to home">
          <span className="brand-mark">KT</span>
          <span className="brand-name">SAFETY NETS<span>SECURE LIVING, OPEN VIEWS</span></span>
        </Link>
        <a className="contact-email" href={`tel:${phoneNumber}`}><Phone aria-hidden="true" /> {phoneNumber}</a>
        <span className="copyright">© {new Date().getFullYear()} KT Safety Nets</span>
      </footer>
    </div>
  );
}