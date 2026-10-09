import { products as all } from "../data/products";
import ProductCard from "./ProductCard";
import { Stagger } from "./Motion";

export default function ProductGrid({ items = all, numbered = true }) {
  return (
    <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8" s={0.1}>
      {items.map((p) => (
        <ProductCard key={p.slug} product={p} index={numbered ? all.indexOf(p) : undefined} />
      ))}
    </Stagger>
  );
}
