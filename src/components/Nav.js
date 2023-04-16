import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span>
          <Link to="/">All Product</Link>
        </span>
        <MDBBtn color="light">
          <Link to="/wishlist">Wishlist</Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}
