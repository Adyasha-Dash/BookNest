import React from "react";
import Banner from "../Components/Banner";
import BestSellerBooks from "../Components/BestSellerBooks";
import FavBook from "../Components/FavBook";
import PromoBanner from "../Components/PromoBanner";
import OtherBook from "../Components/OtherBook";
import Review from "../Components/Review";


export default function Home() {
  return (
    <>
      <Banner />
      <BestSellerBooks />
      <FavBook />
      <PromoBanner />
      <OtherBook />
      <Review />
    </>
  );
}
