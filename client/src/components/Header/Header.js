import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row m-4 d-flex align-items-center justify-content-center">
        <Link to="/">
          <button type="button" class="btn btn-primary">
            Home
          </button>
        </Link>
        <Link to="/external-catalog">
          <button type="button" class="btn btn-primary">
            External Catalog
          </button>
        </Link>

        <Link to="/catalog">
          <button type="button" class="btn btn-primary">
            Catalog
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
