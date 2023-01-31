import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import NftCard from "../Nft-card/NftCard";

import "./live-auction.css";
import { useCollection } from "../../../hooks/useCollection";

const LiveAuction = () => {
  const { documents, error } = useCollection("nfts");
  console.log(documents);
  return (
    
    <section>
      <Container>
      {error && <p className="error">{error}</p>}
      {!error && !documents && <h1>Loading...</h1>}
        <Row>
          <Col lg="12" className="mb-5">
            <div className="live__auction__top d-flex align-items-center justify-content-between ">
              <h3>Live Auction</h3>
              <span>
                <Link to="/market">Explore more</Link>
              </span>
            </div>
          </Col>

          {documents && documents.slice(0, 8).map((item) => (
            <Col lg="3" md="4" sm="6" key={item.id} className="mb-4">
              <NftCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LiveAuction;
