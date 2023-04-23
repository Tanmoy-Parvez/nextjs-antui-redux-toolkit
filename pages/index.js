import RootLayout from " @/components/Layouts/RootLayout";
import Products from " @/components/UI/Products";
import { useCart } from " @/context/ContextProvider";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";


const HomePage = ({ products }) => {
  const { cart, setCart } = useCart();
  console.log("From Home Page", cart);
  // console.log(products);

  return (
    <div>
      <Badge count={cart ? cart.length : 0}>
        <Avatar shape="square" size="large">
          <ShoppingCartOutlined />
        </Avatar>

      </Badge>

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