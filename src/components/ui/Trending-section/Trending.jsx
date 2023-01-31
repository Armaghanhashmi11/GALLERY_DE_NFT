import React from "react";
import { Container, Row, Col } from "reactstrap";

// import { NFT__DATA } from "../../../assets/data/data";
import "./trending.css";

import NftCard from "../Nft-card/NftCard";

import { useCollection } from "../../../hooks/useCollection";

const Trending = () => {
  const { documents, error } = useCollection("nfts");
  console.log(documents);
  return (
    <section>
      {error && <p className="error">{error}</p>}
      {!error && !documents && <h1>Loading...</h1>}
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h3 className="trending__title">Trending</h3>
          </Col>

          {documents && documents.slice(0, 4).map((item) => (
            <Col lg="3" md="4" sm="6" key={item.id} className="mb-4">
              <NftCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Trending;
