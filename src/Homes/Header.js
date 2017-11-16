import React from "react";
import styled from "styled-components";

//sources
import logo from "./Header/logo.svg";
import search from "./Header/search.svg";
import arrowMenu from "./Header/arrowMenu.svg";

//components
import Filter from "./Filter";

//styled-component
const Wrapper = styled.div``;

const FixedContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 11;
`;

const OffsetContainer = styled.div`height: 140px;`;

const Header = styled.header`
  background-color: #fff;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
`;

const Link = styled.a``;

const Logo = styled.img`height: 31px;`;

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

  padding-left: 40px;
  padding-top: 12px;
  padding-bottom: 12px;

  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-shadow: 1px 2px 4px rgba(196, 196, 196, 1);

  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 12px center;
  background-size: 20px 20px;

  font-size: 16px;
  font-family: "Circular Air Book", "Arial", sans-serif;

  @media (min-width: 991px) {
    padding-left: 53px;
    width: 100%;
  }
`;

const Button = styled.button`
  display: none;
  font-family: "Circular Air", "Arial", sans-serif;

  @media (min-width: 991px) {
    display: inline-block;
    border: none;
    background-color: inherit;
    font-size: 14px;
    padding-right: ${props => (props.lastbutton ? "0" : "16px")};
  }
`;

//Homes Header
export default function() {
  return (
    <Wrapper>
      <FixedContainer>
        <Header>
          <div className="container">
            <div className="row middle-xs start-xs">
              <div className="col-xs-3 col-sm-2 col-md-1 col-lg-1">
                <Link href="../">
                  <Logo alt="Logo" src={logo} />
                  <ArrowMenu />
                </Link>
              </div>

              <div className="col-xs-9 col-md-7 col-lg-5 ">
                <Search placeholder="Anywhere  ·  Homes" />
              </div>

              <div className="hidden-md col-md-offset-0 col-lg-offset-2 col-lg-4">
                <Button>Become a host</Button>
                <Button>Help</Button>
                <Button>Sign Up</Button>
                <Button lastbutton>Log In</Button>
              </div>
            </div>
          </div>
        </Header>
        <Filter />
      </FixedContainer>

      <OffsetContainer />
    </Wrapper>
  );
}
