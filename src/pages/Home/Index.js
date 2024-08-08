import { useState } from "react";
import Banner from "../../components/Banner/Index";
import Card from "../../components/Card/Index";
import Category, {categories, filterCategory} from "../../components/Category/Index";
import Container from "../../components/Container/Index";
import Footer from "../../components/Footer/Index";
import Header from "../../components/Header/Index";
import Carousel from "../../components/Carousel/Index";


function Home() {
  return (
    <>
      <Header /> 
      <Banner imagem={"NikeAirMaxBranco"} />      
      <Container>  
          { categories.map((category, index) => 
              <Category CategoryName={category} key={index}>
                <Carousel>
                  {
                      filterCategory(index).map((video) =>
                      <Card id={video.id} key={video.id} />)
                  }                            
                  </Carousel>
              </Category>
            )
          }
      </Container>  
      <Footer />
    </>
  );
}

export default Home;
