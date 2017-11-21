import React from "react";
import styled from "styled-components";

//sources
import logo from "./Header/logo.svg";
import search from "./Header/search.svg";
import arrowMenu from "./Header/arrowMenu.svg";
import "../index.css";

//styled-component
const Wrapper = styled.div``;

const FixedContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 11;
`;

const OffsetContainer = styled.div`
  height: 80px;
  margin-bottom: 40px;
`;

const Header = styled.header`
  background-color: #fff;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;

  box-sizing: border-box;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
`;

const Logo = styled.img`height: 31px;`;

const Link = styled.a``;

const ArrowMenu = styled.button`
  border: none;
  padding-top: 30px;

  background-color: inherit;
  background-image: url(${arrowMenu});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 10px 5px;

  @media (min-width: 991px) {
    display: none;
  }
`;

const Search = styled.input`
  width: calc(100% - 60px);

  font-family: "Circular Air Book", "Arial", sans-serif;

  padding-left: 53px;
  padding-top: 14px;
  padding-bottom: 14px;

  border: 0.5px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-shadow: 1px 1px 4px rgba(72, 72, 72, 0.08);

  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 16px center;
  background-size: 20px 20px;

  font-size: 16px;

  @media (min-width: 991px) {
    padding-left: 53px;
    width: 100%;
  }
`;

const Button = styled.button`
  display: none;
  color: #383838;
  font-family: "Circular Air Book", "Arial", sans-serif;

  @media (min-width: 991px) {
    display: inline-block;
    border: none;
    background-color: inherit;
    font-size: 14px;
    padding-right: ${props => (props.lastbutton ? "0" : "16px")};
  }
`;

export default function() {
  return (
    <Wrapper>
      <FixedContainer>
        <Header>
          <div className="container">
            <div className="row middle-xs start-xs">
              <div className="col-xs-3 col-sm-2 col-md-1 col-lg-1">
                <Link href="#">
                  <Logo alt="Logo" src={logo} />
                  <ArrowMenu />
                </Link>
              </div>

              <div className="col-xs-9 col-md-7 col-lg-4 ">
                <Search placeholder="Try “Miami”" />
              </div>
              <div className="hidden-md col-md-offset-0 col-lg-offset-3 col-lg-4">
                <Button>Become a host</Button>
                <Button>Help</Button>
                <Button>Sign Up</Button>
                <Button lastbutton>Log In</Button>
              </div>
            </div>
          </div>
        </Header>
      </FixedContainer>

      <OffsetContainer />
    </Wrapper>
  );
}
