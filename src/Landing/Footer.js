import React from "react";
import styled from "styled-components";
import "./flexgrid.css";

//sources
import arrowdown from "./Footer/arrow-down.svg";
import logo from "./Footer/logo.svg";
import facebook from "./Footer/facebook.svg";
import twitter from "./Footer/twitter.svg";
import instagram from "./Footer/instagram.svg";

//styled-components
const Footer = styled.footer`box-shadow: 0 -0.5px rgba(72, 72, 72, 0.3);`;

const About = styled.section`
  padding-top: 48px;
  padding-bottom: 48px;
`;

const Select = styled.select`
  font-family: "Circular Air", "Arial", sans-serif;
  color: #383838;
  padding: 12px 0px 12px 8px;
  font-size: 12px;
  display: inline-block;
  width: 100%;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  background-image: url(${arrowdown});
  background-repeat: no-repeat;
  background-size: 11px 6px;
  background-position: 95% center;
  background-color: #fff;
  appearance: none;

  &::-ms-expand {
    display: none;
  }

  @media (min-width: 768px) {
    display: block;
    font-size: 15px;
    width: 100%;
    margin-bottom: 16px;
    background-size: 15px 8px;
    padding: 13px 0px 15px 8px;
  }

  @media (min-width: 991px) {
    font-size: 18px;
    padding: 12px 0px 13px 16px;
  }
`;

const Option = styled.option`
  font-family: "Circular Air", "Arial", sans-serif;
  font-size: 12px;
  color: rgba(56, 56, 56, 1);

  @media (min-width: 768px) {
    font-size: 15px;
  }

  @media (min-width: 991px) {
    font-size: 18px;
  }
`;

const SiteLang = styled(Select)`@media (min-width: 768px) {margin-right: 0;}`;

const SiteCurrency = styled(Select)``;

const H3 = styled.h3`
  margin-top: 0;
  margin-bottom: 21px;

  font-size: 12px;
  font-family: "Circular Air", "Arial", sans-serif;
  font-weight: bold;
  color: #383838;

  @media (min-width: 991px) {
    font-size: 15px;
    margin-bottom: 17px;
  }
`;

const Link = styled.a`
  font-family: "Circular Air Book", "Arial", sans-serif;
  display: ${props => (props.block ? "block" : "inline-block")};
  margin-bottom: ${props => (props.block ? "14px" : "0")};
  font-size: 12px;
  color: #636363;

  @media (min-width: 991px) {
    font-size: 15px;
    margin-bottom: 11px;
  }
`;

const Info = styled.section`
  padding-top: 16px;
  padding-bottom: 16px;
  border-top: 1px solid rgba(72, 72, 72, 0.1);

  @media (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 44px;
  }

  @media (min-width: 991px) {
    padding-bottom: 35px;
  }
`;

const Trademark = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-right: 0;
    margin-bottom: 0;
  }
`;

const Logo = styled.img`
  width: 20px;
  height: 21px;
  margin-right: 12px;
  margin-left: 0;
`;

const Copyright = styled.div`
  display: inline-block;
  font-size: 12px;
  color: #636363;
  font-family: "Circular Air Book", "Arial", sans-serif;

  @media (min-width: 768px) {
    margin-right: 0;
  }

  @media (min-width: 991px) {
    font-size: 15px;
  }
`;

// Please, God, forgive me for this naming. its 10 am...I know when that hotline bling

const Addition = styled.div`
  display: block;
  margin-left: 8px;

  @media (min-width: 768px) {
    display: inline-block;
    font-size: 12px;
    margin-left: 0;
  }

  @media (min-width: 991px) {
    font-size: 15px;
  }
`;

const Terms = styled(Link)`
  margin-right: 12px;
  padding-bottom: 5px;

  &:nth-child(3) {
    margin-right: 14px;
  }

  @media (min-width: 768px) {
    margin-right: 16px;

    &:nth-child(3) {
      margin-right: 27px;
    }
  }
`;

const SocialMedia = styled.div`display: inline-block;`;

const SocialLink = styled(Link)`
  margin-right: 10px;

  &:nth-child(3) {
    margin-right: 0;
  }

  @media (min-width: 768px) {
    margin-right: 12px;

    &:nth-child(3) {
      margin-right: 0px;
    }
  }
`;

const Social = styled.img`
  width: 16px;
  height: 16px;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

//footer
export default function() {
  return (
    <Footer>
      <div className="container">
        <About>
          <div className="row">
            <div className="col-xs-12 col-md-3">
              <div className="row">
                <div className="col-xs-6 col-md-12">
                  <SiteLang>
                    <Option value="English">English</Option>
                  </SiteLang>
                </div>

                <div className="col-xs-6 col-md-12">
                  <SiteCurrency>
                    <Option value="United States Dollar">
                      United States Dollar
                    </Option>
                  </SiteCurrency>
                </div>
              </div>
            </div>

            <div className="hidden-xs hidden-sm col-xs-offset-0 col-md-offset-1 col-md-2">
              <H3>Airbnb</H3>
              <Link block href="">
                About us
              </Link>
              <Link block href="">
                Careers
              </Link>
              <Link block href="">
                Press
              </Link>
              <Link block href="">
                Policies
              </Link>
              <Link block href="">
                Help
              </Link>
              <Link block href="">
                Diversity & Belonging
              </Link>
            </div>

            <div className="hidden-xs hidden-sm col-xs-offset-0 col-md-offset-1 col-md-2">
              <H3>Discover</H3>
              <Link block href="">
                Trust & Safety
              </Link>
              <Link block href="">
                Travel Credit
              </Link>
              <Link block href="">
                Gift Cards
              </Link>
              <Link block href="">
                Airbnb Citizen
              </Link>
              <Link block href="">
                Business Travel
              </Link>
              <Link block href="">
                Guidebooks
              </Link>
              <Link block href="">
                Airbnbmag
              </Link>
            </div>

            <div className="hidden-xs hidden-sm col-xs-offset-0 col-md-offset-1 col-md-2">
              <H3>Hosting</H3>
              <Link block href="">
                Why Host
              </Link>
              <Link block href="">
                Hospitality
              </Link>
              <Link block href="">
                Responsible Hosting
              </Link>
              <Link block href="">
                Community Center
              </Link>
            </div>
          </div>
        </About>

        <Info>
          <div className="row middle-md">
            <div className="col-xs-12 col-md-2 col-lg-2">
              <Trademark>
                <Logo src={logo} />
                <Copyright>© Airbnb Inc.</Copyright>
              </Trademark>
            </div>

            <div className="col-xs-12 col-md-offset-5 col-md-5 col-lg-offset-6 col-lg-4">
              <div className="row middle-xs end-md ">
                <Addition>
                  <Terms href="">Terms</Terms>
                  <Terms href="">Privacy</Terms>
                  <Terms href="">Site map</Terms>
                </Addition>

                <SocialMedia>
                  <SocialLink>
                    <Social src={facebook} />
                  </SocialLink>
                  <SocialLink>
                    <Social src={twitter} />
                  </SocialLink>
                  <SocialLink>
                    <Social src={instagram} />
                  </SocialLink>
                </SocialMedia>
              </div>
            </div>
          </div>
        </Info>
      </div>
    </Footer>
  );
}
