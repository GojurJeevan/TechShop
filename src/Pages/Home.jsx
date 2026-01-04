import { Banner } from "../banner/Banner";
import { SmallSlick } from "../slick/SmallSlick";
import { Categories } from "../categories/Categories";
import { Header } from "./Header";
import { Search } from "../details/Search";


export const Home = () => {

  return (
    <>
      <Header />
       <Search />
      <Banner />
      <div className="hidden md:block">
        <SmallSlick />
      </div>
      <Categories />
      <Header />
    </>
  );
};
