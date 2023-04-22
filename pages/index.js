import RootLayout from " @/components/Layouts/RootLayout";
import Products from " @/components/UI/Products";


const HomePage = ({ products }) => {

  console.log(products);

  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  return {
    props: {
      products: data
    }
  }

}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}