import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { DropdownButton, Dropdown, Button } from 'react-bootstrap';
const ProductDetail = () => {
  
  let {id} = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/HEECHANG96/hnm-website-project/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  },[])
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img}/>
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div>{product?.choice}</div>
          <div className="size-button">
          <DropdownButton id="dropdown-basic-button" title="사이즈 선택">
          <Dropdown.Item href="#/action-1">S</Dropdown.Item>
          <Dropdown.Item href="#/action-2">M</Dropdown.Item>
          <Dropdown.Item href="#/action-3">L</Dropdown.Item>
          </DropdownButton>
          </div>
          <div className="d-grid gap-2">
          <Button variant="dark" size="lg">
              추가
          </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail