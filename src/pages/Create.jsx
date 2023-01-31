import React, { useState } from "react";

import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/ui/Common-section/CommonSection";
// import img from "../assets/images/img-01.jpg";
// import avatar from "../assets/images/ava-01.png";
import { useFirestore } from "../hooks/useFirestore";
import web3 from "../web3/web3";
import "../styles/create-item.css";

// const item = {
//   id: "01",
//   title: "Guard",
//   desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
//   imgUrl: img,
//   creator: "Trista Francis",
//   creatorImg: avatar,
//   currentBid: 7.89,
// };

const Create = () => {
  const { addDocument, response } = useFirestore("nfts");
  const [imgError, setImgError] = useState();
  const [img, setImg] = useState();
  const [creating, setCreating] = useState();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [price, setPrice] = useState();
  const [ownerName, setOwnerName] = useState();
// const imgerror=imgError;
console.log(imgError);
// ?

  const handleFileChange = (e) => {
    setImg(null);
    let selected = e.target.files[0];

    if (!selected) {
      setImgError("Please select a file");
      return;
    }
    if (!selected.type.includes("image")) {
      setImgError("Selected file must be an image");
      return;
    }
    if (selected.size > 100000000) {
      setImgError("Image file size must be less than 1MB");
      return;
    }

    setImgError(null);
    setImg(selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCreating(true);
    const accounts = await web3.eth.getAccounts();
    const nft = {
      title: title,
      desc: desc,
      price: price,
      ownerName:ownerName,
      owner: accounts[0],
    };

    await addDocument(nft, img);
    console.log(response);
    if (!response.error) {
      setCreating(false);

      // clear form here or navigate if necessary
    }
  };
  return (
    <>
      <CommonSection title="Create Item" />

      <section>
        <Container>
          <Row>
            <Col lg="1" md="1" sm="2">
              {/* <h5 className="mb-4 text-light">Preview Item</h5>
              <NftCard item={item} /> */}
            </Col>

            <Col lg="10" md="10" sm="12">
              <div className="create__item">
                <form onSubmit={handleSubmit}>
                <div className="form__input">
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder="Enter title" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Owner Name</label>
                    <input type="text" placeholder="Enter Owner Name" value={ownerName} onChange={(e)=>{setOwnerName(e.target.value)}} />
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Price</label>
                    <input
                    value={price} onChange={(e)=>{setPrice(e.target.value)}}
                      type="number"
                      placeholder="Enter price for one item (ETH)"
                    />
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Upload File</label>
                    <input
                      onChange={(e) => {
                        handleFileChange(e);
                      }}
                      type="file"
                      className="upload__input"
                    />
                  </div>

                  

                  {/* <div className="form__input">
                    <label htmlFor="">Minimum Bid</label>
                    <input type="number" placeholder="Enter minimum bid" />
                  </div>

                  <div className=" d-flex align-items-center gap-4">
                    <div className="form__input w-50">
                      <label htmlFor="">Starting Date</label>
                      <input type="date" />
                    </div>

                    <div className="form__input w-50">
                      <label htmlFor="">Expiration Date</label>
                      <input type="date" />
                    </div>
                  </div> */}

                  

                  <div className="form__input">
                    <label htmlFor="">Description</label>
                    <textarea
                    value={desc} onChange={(e)=>{setDesc(e.target.value)}}
                      name=""
                      id=""
                      rows="7"
                      placeholder="Enter description"
                      className="w-100"
                    ></textarea>
                  </div>
                  <button
                    disabled={creating}
                    className="bid__btn d-flex align-items-center gap-1"

                    // onClick={() => setShowModal(true)}
                    // onClick={async () => {
                    //   const accounts = await web3.eth.getAccounts();
                    //   await NFTDeGallery.methods.purchaseNFT("0x4e4D26d87c2D0FaA6ef9b600ae138360E85DB3FE").send({
                    //     from: accounts[0],
                    //     value: web3.utils.toWei(String(0.0001), "ether"),
                    //   });
                    // }}
                  >
                    <i class="ri-shopping-bag-line"></i>{" "}
                    {creating ? "Creating" : "Create"}
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Create;
