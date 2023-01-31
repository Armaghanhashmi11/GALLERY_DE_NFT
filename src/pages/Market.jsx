import React, { useState } from "react";

import CommonSection from "../components/ui/Common-section/CommonSection";

import NftCard from "../components/ui/Nft-card/NftCard";

import { NFT__DATA } from "../assets/data/data";

import { Container, Row, Col } from "reactstrap";

import "../styles/market.css";
import { useCollection } from "../hooks/useCollection";

const Market = () => {
  const { documents, error } = useCollection("nfts");
  console.log(documents);
  const [data, setData] = useState(documents);

  const handleCategory = () => {};

  const handleItems = () => {};

  // ====== SORTING DATA BY HIGH, MID, LOW RATE =========
  const handleSort = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "all") {
      const filterData = documents.filter((item) => item.price >= 0);

      setData(filterData);
    }

    if (filterValue === "high") {
      const filterData = documents.filter((item) => item.price >= 0.009);

      setData(filterData);
    }

    if (filterValue === "mid") {
      const filterData = documents.filter(
        (item) => item.price >= 0.002 && item.price < 0.004
      );

      setData(filterData);
    }

    if (filterValue === "low") {
      const filterData = documents.filter(
        (item) => item.price >= 0.001 && item.price < 0.003
      );

      setData(filterData);
    }
  };
  
  return (
    <>
      <CommonSection title={"MarketPlace"} />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="market__product__filter d-flex align-items-center justify-content-between">
                <div className="filter__left d-flex align-items-center gap-5">
                  <div className="all__category__filter">
                    <select onChange={handleCategory}>
                      <option>All Categories</option>
                      <option value="art">Art</option>
                      <option value="music">Music</option>
                      <option value="domain-name">Domain Name</option>
                      <option value="virtual-world">Virtual World</option>
                      <option value="trending-card">Trending Cards</option>
                    </select>
                  </div>

                  <div className="all__items__filter">
                    <select onChange={handleItems}>
                      <option>All Items</option>
                      <option value="single-item">Single Item</option>
                      <option value="bundle">Bundle</option>
                    </select>
                  </div>
                </div>

                <div className="filter__right">
                  <select onChange={handleSort}>
                    <option value="all">Sort By</option>
                    <option value="all">All</option>
                    <option value="high">High Rate</option>
                    <option value="mid">Mid Rate</option>
                    <option value="low">Low Rate</option>
                  </select>
                </div>
              </div>
            </Col>
            {error && <p className="error">{error}</p>}
            {!error && !documents && <h1>Loading...</h1>}
            {data?.map((item) => (
            <Col lg="3" md="4" sm="6" key={item.id} className="mb-4">
              <NftCard item={item} />
            </Col>
          ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Market;
