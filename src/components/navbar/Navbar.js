import logo from "../../assets/logo.png";
import "./Navbar.css";
import LanguageIcon from "@mui/icons-material/Language";
import BasicMenu from "./ProfileMenu";
import MobileSearchBar from "../MobileSearchBar";

function Header() {
  return (
    <div className="navbar ">
      <img src={logo} alt="logo" className="navbar-logo" />
      <div className="nav-menu bg-white">
        <div className="nav-menu-text nav-menu-text-active">Buy</div>
        <div className="nav-menu-text">Rent</div>
        <div className="nav-menu-text">Sell</div>
        <div className="nav-menu-text">Agent</div>
      </div>
      <div className="profile-container">
        <div className="language">
          <LanguageIcon sx={{ fontSize: "1.3rem" }} />
        </div>
        <div className="profile-div">
          <BasicMenu />
        </div>
      </div>
      <MobileSearchBar />
    </div>
  );
}

export default Header;
