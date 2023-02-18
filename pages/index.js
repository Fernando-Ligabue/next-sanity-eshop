import React from "react";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = ({products, bannerData}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
    {console.log(bannerData)}
      <div className="products-heading">
        <h2>Produtos mais vendidos</h2>
        <p>Auscultadores e Auriculares</p>
      </div>

      <div className="products-container">
        {products?.map((product) => <Product  key={product._id} product={product}/>)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const queryBanner = '*[_type == "banner"]';
  const bannerData = await client.fetch(queryBanner);

  return {
    props: {products, bannerData}
  };
};

export default Home;
