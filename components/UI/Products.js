
import { useCart } from ' @/context/ContextProvider';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Card, Row, Col, Button } from 'antd';
const { Meta } = Card;


const Products = ({ products }) => {

    const { cart, setCart } = useCart();
    // console.log("From Product", cart);

    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {
                products.map(product => <Col key={product._id} className="gutter-row" span={6}>
                    <Card style={{
                        textAlign: "center"
                    }} 
                        hoverable
                        cover={<img alt="example" src={product?.image} />}
                    >
                        <Meta title={product?.model} />
                        <Button style={{
                            marginTop: "10px",
                        }} type="primary" shape="round" icon={<ShoppingCartOutlined />} block onClick={() => setCart([...cart, product])}>
                            Add to cart
                        </Button>
                    </Card>
                </Col>)
            }
        </Row>
    );
};

export default Products;