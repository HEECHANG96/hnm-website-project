import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from 'react-redux/es/exports';

const ProductAll = () => {

  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = () => {
    let searchQuery = query.get('q') || "";
    console.log("쿼리값은?", searchQuery);
    dispatch(productAction.getProducts(searchQuery));
  };

  // [] 비어있으면 프로젝트 시작할 때 딱 한번 호출된다!
  // query 값이 바뀔 때마다 호출을 해줘야 된다.
  useEffect(()=> {
    getProducts();
  },[query]);

  return (
    <div>
        <Container>
          <Row>
            {productList.map((item) => (
              <Col lg={3} sm={12}>
                <ProductCard item={item}/>
              </Col>
            ))}
          </Row>
        </Container>
    </div>
  )
}

export default ProductAll