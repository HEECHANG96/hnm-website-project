import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {

  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get('q') || "";
    console.log("쿼리값은?", searchQuery);
    let url = `https://my-json-server.typicode.com/HEECHANG96/hnm-website-project/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);  
  }

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
        <ProductCard/>
    </div>
  )
}

export default ProductAll