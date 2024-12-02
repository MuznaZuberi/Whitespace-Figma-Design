import Header from "./header/page";
import Hero from "./hero/page";
import Project from "./project management/page";
import TeamWork from "./work together/page";
import Extension from "./extension/page";
import Customise from "./customise/page";
import Pricing_List from "./pricing list/page";
import Slide from "./slide/page";
import FavouriteApps from "./favourite apps/page";
import ClientsReviews from "./clients reviews/page";
import Footer from "./footer/page";

export default function Home() {
  return (

  <div>
  	<Header/>
  	<Hero/>
  	<Project/>
  	<TeamWork/>
  	<Extension/>
  	<Customise/>
    <Pricing_List/>
    <Slide/>
    <FavouriteApps/>
    <ClientsReviews/>
    <Footer/>
  </div>

  	);
}