import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { DropdownButton, Dropdown, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../redux/actions/productAction';

const ProductDetail = () => {
  
  let {id} = useParams();
  const product = useSelector((state) => state.product.selectedItem);
  const dispatch = useDispatch();

  const getProductDetail = () => {
   dispatch(productAction.getProductDetail(id));
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