import React from "react";
import styled from "styled-components";
import "normalize.css";
import "flexboxgrid2";
import "./index.css";
import arrowdown from "./Footer/arrow-down.svg";
import logo from "./Footer/logo.svg";
import facebook from "./Footer/facebook.svg";
import twitter from "./Footer/twitter.svg";
import instagram from "./Footer/instagram.svg";

export const Footer = styled.footer`
  box-shadow: 0 -0.5px rgba(72, 72, 72, 0.3);
`;

const About = styled.section`
  padding-top: 48px;
  padding-bottom: 48px;
`;
const Select = styled.select`
  display: block;
  width: 100%;
  margin-bottom: 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  background-image: url(${arrowdown});
  background-repeat: no-repeat;
  background-size: 15px 8px;
  background-position: 197px center;
  /*for firefox*/
  -moz-appearance: none;
  /*for chrome*/
  -webkit-appearance: none;
  {SiteLang}::-ms-expand {
    display: none;
  }
`;

const Option = styled.option`
padding: 12px; 0px; 13px 16px;
font-size: 18px;
font-weight: 300;
color:rgba(56, 56, 56, 1);`;

const SiteLang = styled(Select)``;

const SiteCurrency = styled(Select)``;

const H3 = styled.h3`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 15px;
  font-weight: bold;
`;

const Link = styled.a`
  display: ${props => (props.block ? "block" : "inline-block")};
  margin-bottom: ${props => (props.block ? "8px" : "0")};
  font-size: 15px;
  color: rgba(56, 56, 56, 1);
`;

const Info = styled.section`border-top: 1px solid rgba(72, 72, 72, 0.2);`;

const Inline = styled.div`display: inline-block;`;

const Logo = styled.img`
  width: 20px;
  height: 21px;
  margin-right: 12px;
  margin-left: 12px;
`;

const Copyright = styled.span`
  font-size: 15px;
  color: rgba(56, 56, 56, 1);
`;
// Please, God, forgive me for this naming. its 8 am...
const Addition = styled(Inline)`padding-left: 480px;`;
const Terms = styled(Link)`margin-right: 16px;`;

const SocialMedia = styled(Inline)``;

const SocialLink = styled(Link)`margin-right: 12px;`;
const Social = styled.img`
  width: 24px;
  height: 24px;
`;

export default function() {
  return (
    <Footer>
      <div className="container">
        <About>
          <div className="row">
            <div className="col-lg-3">
              <SiteLang>
                <Option value="English">English</Option>
              </SiteLang>
              <SiteCurrency>
                <Option value="United States Dollar">
                  United States Dollar
                </Option>
              </SiteCurrency>
            </div>

            <div className="col-lg-1" />

            <div className="col-lg-2">
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

            <div className="col-lg-1" />

            <div className="col-lg-2">
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

            <div className="col-lg-1" />

            <div className="col-lg-2">
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
          <div className="row between-lg middle-lg">
            <Inline>
              <Logo src={logo} />
              <Copyright>© Airbnb Inc.</Copyright>
            </Inline>
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
        </Info>
      </div>
    </Footer>
  );
}
