import { Banner } from "../banner/Banner";
import { SmallSlick } from "../slick/SmallSlick";
import { Categories } from "../categories/Categories";
import { Header } from "./Header";
import { SignUp } from "../forms/SignUp";

export const Home = () => {

  return (
    <>
      <Header />
      <Banner />
      <div className="hidden md:block">
        <SmallSlick />
      </div>
      <Categories />
      <Header />
      <SignUp />
    </>
  );
};
