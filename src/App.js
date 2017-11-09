import React, { Component } from "react";
import styled from "styled-components";
import "normalize.css";
import "flexboxgrid2";

import logo from "./logo.svg";
import search from "./search.svg";

import homes from "./exploreHomes.svg";
import experiences from "./exploreExperiences.svg";
import restaurants from "./exploreRestaurants.svg";

import experience1 from "./experiencePic1.svg";
import experience2 from "./experiencePic2.svg";
import experience3 from "./experiencePic3.svg";
import experience4 from "./experiencePic4.svg";

import righticon from "./iconright.svg";
import star from "./star.svg";

import home1 from "./home1.svg";
import home2 from "./home2.svg";
import home3 from "./home3.svg";

import restaurant1 from "./restaurant1.svg";
import restaurant2 from "./restaurant2.svg";
import restaurant3 from "./restaurant3.svg";
import restaurant4 from "./restaurant4.svg";

import city1 from "./destination1.svg";
import city2 from "./destination2.svg";
import city3 from "./destination3.svg";
import city4 from "./destination4.svg";
import city5 from "./destination5.svg";
import city6 from "./destination6.svg";

import Footer from "./Footer.js";

import NextPage from "./NextPage.js";

// import Header from "./Header";
// import Content from "./Content";
import "./App.css";
import "./index.css";
import "./fonts.css";

const Flex = styled.div`
  display: flex;
  flex-wrap: ${props => (props.nowrap ? "nowrap" : "wrap")};
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.header`
  padding-top: 16px;
  padding-bottom: 16px;
  box-sizing: border-box;
  width: 100%;
  box-shadow: 0 0.5px rgba(72, 72, 72, 0.3);
  margin-bottom: 48px;
`;
const Logo = styled.img`height: 31px;`;
const Search = styled.input`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 53px;
  font-size: 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-shadow: 1px 2px 4px rgba(196, 196, 196, 1);
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 12px center;
  background-size: 20px 20px;
`;

const Button = styled.button`
  border: none;
  background-color: inherit;
  font-size: 14px;
  padding-right: ${props => (props.lastbutton ? "0" : "16px")};
`;

const Main = styled.main``;

const ExploreAirbnb = styled.section`margin-bottom: 48px;`;
const ExploreCard = styled.div`
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
`;
const ExploreImg = styled.img`
  width: 96px;
  height: 100%;
  margin-right: 24px;
  vertical-align: bottom;
`;
const ExploreText = styled.div`
  display: inline-block;
  padding-bottom: 27px;
  font-weight: bold;
`;

const SeeAll = styled.a`
  font-size: 14px;
  color: rgba(56, 56, 56, 1);
`;
const RightIcon = styled.img``;

const Experiences = styled.section`
  margin-bottom: 45px;
  position: relative;
`;
const ExperienceCard = styled.div``;
const ExperienceImg = styled.img`height: 346px;`;
const Price = styled.div`
  display: inline-block;
  font-weight: bold;
  font-size: 15px;
  padding-right: 5px;
`;
const ExperienceName = styled.div`
  font-size: 15px;
  display: inline-block;
`;
const CardRating = styled.div`
  display: inline-block;
  margin-right: 4px;
  margin-top: 7px;
`;
const Star = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 4px;
`;
const CardReviewCounter = styled.div`
  display: inline-block;
  font-size: 12px;
`;

const Homes = styled.section`margin-bottom: 48px;`;
const HomeCard = styled.div``;
const HomeImg = styled.img`
  width: 310px;
  margin-bottom: 8px;
`; //сделать один Img c пропсами Exp, Home, etc
const HomeName = styled.div`
  font-size: 15px;
  font-weight: bold;
  display: inline-block;
`;

const RentInfo = styled.div``;
const RentType = styled.div`
  font-size: 15px;
  display: inline-block;
`;
const NumBed = styled.div`
  font-size: 15px;
  display: inline-block;
  font-weight: 300;
`;

const CardRatingCounter = styled.div`
  margin-top: 7px;
  display: inline-block;
  font-size: 12px;
`; //CardReviewCounter и CardRatingCounter одинаковы по стилю, нужно подумать
const Divider = styled.span``;
const HostType = styled.div`
  display: inline-block;
  font-size: 12px;
`;

const PopularReserve = styled.section`margin-bottom: 48px;`;
const KitchenCard = styled.div``;
const KitchenImg = styled.img`
  height: 164px;
  margin-bottom: 12px;
`;
const KitchenType = styled.div`
  font-weight: bold;
  font-size: 10px;
  margin-bottom: 2px;
`;
const KitchenName = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 4px;
`;
const AverageCheck = styled.div`
  font-size: 18px;

  font-weight: 300;
  color: rgba(56, 56, 56, 0.8);
`;

const FeaturedDestination = styled.section`margin-bottom: 64px;`;
const CityCard = styled.div``;
const CityImg = styled.img`
  height: 220px;
  margin-bottom: 8px;
`;
const CityName = styled.div`
  font-weight: bold;
  font-size: 15px;
`;

const Aside = styled.aside`
  position: absolute;
  right: 30px;
  top: 250px;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <div className="container ">
            <div className="row middle-lg">
              <div className="col-lg-1">
                <a href="">
                  <Logo alt="Logo" src={logo} />
                </a>
              </div>
              <div className="col-lg-5">
                <Search placeholder="Try “Miami”" />
              </div>
              <div className="col-lg-2" />
              <div className="col-lg-4">
                <Button>Become a host</Button>
                <Button>Help</Button>
                <Button>Sign Up</Button>
                <Button lastbutton>Log In</Button>
              </div>
            </div>
          </div>
        </Header>

        <Main>
          <div className="container">
            <ExploreAirbnb>
              <h1>Explore Airbnb</h1>

              <div className="row">
                <div className="col-lg-4">
                  <a href="">
                    <ExploreCard>
                      <ExploreImg alt="Homes" src={homes} />
                      <ExploreText>Homes</ExploreText>
                    </ExploreCard>
                  </a>
                </div>

                <div className="col-lg-4">
                  <a href="">
                    <ExploreCard>
                      <ExploreImg alt="Experiences" src={experiences} />
                      <ExploreText>Experiences</ExploreText>
                    </ExploreCard>
                  </a>
                </div>

                <div className="col-lg-4">
                  <a href="">
                    <ExploreCard>
                      <ExploreImg alt="Restaurants" src={restaurants} />
                      <ExploreText>Restaurants</ExploreText>
                    </ExploreCard>
                  </a>
                </div>
              </div>
            </ExploreAirbnb>

            <Experiences>
              <Flex nowrap>
                <h2>Experiences</h2>
                <SeeAll>
                  See all <RightIcon src={righticon} alt="Right Icon" />
                </SeeAll>
              </Flex>
              <div className="row">
                <div className="col-lg-3">
                  <a href="">
                    <ExperienceCard>
                      <ExperienceImg src={experience1} />

                      <div>
                        <Price>$29</Price>
                        <ExperienceName>Forest therapy</ExperienceName>
                      </div>

                      <CardRating>
                        <Star src={star} />
                        <Star src={star} />
                        <Star src={star} />
                        <Star src={star} />
                        <Star src={star} />
                      </CardRating>
                      <CardReviewCounter>44 reviews</CardReviewCounter>
                    </ExperienceCard>
                  </a>
                </div>

                <div className="col-lg-3">
                  <a href="">
                    <ExperienceCard>
                      <ExperienceImg src={experience2} />

                      <div>
                        <Price>$69</Price>
                        <ExperienceName>Whale Watching</ExperienceName>
                      </div>

                      <CardRating>
                        <Star src={star} />
                        <Star src={star} />
                        <Star src={star} />
                        <Star src={star} />
                        <Star src={star} />
                      </CardRating>
                      <CardReviewCounter>46 reviews</CardReviewCounter>
                    </ExperienceCard>
                  </a>
                </div>

                <div className="col-lg-3">
                  <a href="">
                    <ExperienceCard>
                      <ExperienceImg src={experience3} />

                      <div>
                        <Price>$69</Price>
                        <ExperienceName>
                          Table Mountain Summit, Cable Car Down
                        </ExperienceName>
                      </div>

                      <CardRating>
                        <Star src={star} />
                        <Star src={star} />
                        <Star src={star} />
                        <Star src={star} />
                        <Star src={star} />
                      </CardRating>
                      <CardReviewCounter>44 reviews</CardReviewCounter>
                    </ExperienceCard>
                  </a>
                </div>

                <div className="col-lg-3">
                  <a href="">
                    <ExperienceCard>
                      <ExperienceImg src={experience4} />

                      <div>
                        <Price>$50</Price>
                        <ExperienceName>Salsa Night</ExperienceName>
                      </div>

                      <CardRating>
                        <Star src={star} />
                        <Star src={star} />
                        <Star src={star} />
                        <Star src={star} />
                        <Star src={star} />
                      </CardRating>
                      <CardReviewCounter>44 reviews</CardReviewCounter>
                    </ExperienceCard>
                  </a>
                </div>
              </div>
              <Aside>
                <NextPage />
              </Aside>
            </Experiences>

            <Homes>
              <Flex nowrap>
                <h2>Homes</h2>
                <SeeAll>
                  See all <RightIcon src={righticon} alt="Right Icon" />
                </SeeAll>
              </Flex>
              <div className="row">
                <div className="col-lg-4">
                  <a href="">
                    <HomeCard>
                      <HomeImg src={home1} />

                      <div>
                        <Price>$82</Price>
                        <HomeName>La Salentina, see, nature & relax</HomeName>
                      </div>
                      <RentInfo>
                        <RentType>Entire House</RentType>
                        <Divider>·</Divider>
                        <NumBed>9 beds</NumBed>
                      </RentInfo>
                      <div>
                        <CardRating>
                          <Star src={star} />
                          <Star src={star} />
                          <Star src={star} />
                          <Star src={star} />
                          <Star src={star} />
                        </CardRating>
                        <CardRatingCounter>97</CardRatingCounter>
                        <Divider>·</Divider>
                        <HostType>Superhost</HostType>
                      </div>
                    </HomeCard>
                  </a>
                </div>

                <div className="col-lg-4">
                  <a href="">
                    <HomeCard>
                      <HomeImg src={home2} />

                      <div>
                        <Price>$82</Price>
                        <HomeName>
                          Your private 3 bedr. riad and exclusi…
                        </HomeName>
                      </div>
                      <RentInfo>
                        <RentType>Entire House</RentType>
                        <Divider>·</Divider>
                        <NumBed>5 beds</NumBed>
                      </RentInfo>
                      <div>
                        <CardRating>
                          <Star src={star} />
                          <Star src={star} />
                          <Star src={star} />
                          <Star src={star} />
                          <Star src={star} />
                        </CardRating>
                        <CardRatingCounter>161</CardRatingCounter>
                        <Divider>·</Divider>
                        <HostType>Superhost</HostType>
                      </div>
                    </HomeCard>
                  </a>
                </div>

                <div className="col-lg-4">
                  <a href="">
                    <HomeCard>
                      <HomeImg src={home3} />

                      <div>
                        <Price>$200</Price>
                        <HomeName>Dreamy Tropical Tree House</HomeName>
                      </div>
                      <RentInfo>
                        <RentType>Entire treehouse</RentType>
                        <Divider>·</Divider>
                        <NumBed> bed</NumBed>
                      </RentInfo>
                      <div>
                        <CardRating>
                          <Star src={star} />
                          <Star src={star} />
                          <Star src={star} />
                          <Star src={star} />
                          <Star src={star} />
                        </CardRating>
                        <CardRatingCounter>364</CardRatingCounter>
                        <Divider>·</Divider>
                        <HostType>Superhost</HostType>
                      </div>
                    </HomeCard>
                  </a>
                </div>
              </div>
            </Homes>

            <PopularReserve>
              <Flex nowrap>
                <h2>Popular reservations around the world</h2>
                <SeeAll>
                  See all <RightIcon src={righticon} alt="Right Icon" />
                </SeeAll>
              </Flex>
              <div className="row">
                <div className="col-lg-3">
                  <a href="">
                    <KitchenCard>
                      <KitchenImg src={restaurant1} />

                      <KitchenType>Speakeasy</KitchenType>
                      <KitchenName>Chumley’s</KitchenName>

                      <AverageCheck>About $60 per person</AverageCheck>
                    </KitchenCard>
                  </a>
                </div>

                <div className="col-lg-3">
                  <a href="">
                    <KitchenCard>
                      <KitchenImg src={restaurant2} />

                      <KitchenType>Korean gastropub</KitchenType>
                      <KitchenName>Hanjan</KitchenName>

                      <AverageCheck>About $50 per person</AverageCheck>
                    </KitchenCard>
                  </a>
                </div>

                <div className="col-lg-3">
                  <a href="">
                    <KitchenCard>
                      <KitchenImg src={restaurant3} />

                      <KitchenType>German american</KitchenType>
                      <KitchenName>Prime Meats</KitchenName>

                      <AverageCheck>About $55 per person</AverageCheck>
                    </KitchenCard>
                  </a>
                </div>

                <div className="col-lg-3">
                  <a href="">
                    <KitchenCard>
                      <KitchenImg src={restaurant4} />

                      <KitchenType>Fine seafood</KitchenType>
                      <KitchenName>Seaprice</KitchenName>

                      <AverageCheck>About $70 per person</AverageCheck>
                    </KitchenCard>
                  </a>
                </div>
              </div>
            </PopularReserve>

            <FeaturedDestination>
              <h2>Featured destinations</h2>
              <div className="row">
                <div className="col-lg-2">
                  <a href="">
                    <CityCard>
                      <CityImg src={city1} />
                      <CityName>Paris</CityName>
                    </CityCard>
                  </a>
                </div>
                <div className="col-lg-2">
                  <a href="">
                    <CityCard>
                      <CityImg src={city2} />
                      <CityName>Miami</CityName>
                    </CityCard>
                  </a>
                </div>
                <div className="col-lg-2">
                  <a href="">
                    <CityCard>
                      <CityImg src={city3} />
                      <CityName>Tokyo</CityName>
                    </CityCard>
                  </a>
                </div>
                <div className="col-lg-2">
                  <a href="">
                    <CityCard>
                      <CityImg src={city4} />
                      <CityName>Cape town</CityName>
                    </CityCard>
                  </a>
                </div>
                <div className="col-lg-2">
                  <a href="">
                    <CityCard>
                      <CityImg src={city5} />
                      <CityName>Seoul</CityName>
                    </CityCard>
                  </a>
                </div>
                <div className="col-lg-2">
                  <a href="">
                    <CityCard>
                      <CityImg src={city6} />
                      <CityName>Los Angeles</CityName>
                    </CityCard>
                  </a>
                </div>
              </div>
            </FeaturedDestination>
          </div>
        </Main>

        <Footer />
      </div>
    );
  }
}

export default App;
