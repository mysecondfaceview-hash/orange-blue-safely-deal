import Header from "@/components/Header";
import Products from "@/components/Products";
import CTA from "@/components/CTA";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Products />
      <CTA />
    </div>
  );
};

export default ProductsPage;