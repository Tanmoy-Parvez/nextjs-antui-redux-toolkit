import { Card, Row, Col } from 'antd';
const { Meta } = Card;


const Products = ({ products }) => {
    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {
                products.map(product => <Col key={product._id} className="gutter-row" span={6}>
                    <Card
                        hoverable
                        cover={<img alt="example" src={product?.image} />}
                    >
                        <Meta title={product?.model} description="www.instagram.com" />
                    </Card>
                </Col>)
            }
        </Row>
    );
};

export default Products;