import React from "react";
import styled from "styled-components";
import "normalize.css";
import "flexboxgrid2";

import logo from "./Header/logo.svg";
import search from "./Header/search.svg";

export const Header = styled.header`
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

export default function() {
  return (
    <Header>
      <div className="container">
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
  );
}
