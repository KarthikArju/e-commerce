"use client";

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { IoIosSearch } from "react-icons/io";
import { FaBoxOpen } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoMdHeart } from "react-icons/io";
import { Container, Offcanvas } from "react-bootstrap";
import { IoCartSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";



const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  borderRadius: 4,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "white",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "45ch",
    },
  },
}));

export default function HeaderLg() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error"></Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <FaBoxOpen />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        ></IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Container>
            <Toolbar>
          
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "block", sm: "block" } }}
              >
                <img
                  className="img-fluid py-2"
                  src="/assets/Logo.png"
                  style={{ width: "95px", cursor: "pointer" }}
                />
              </Typography>
              <div className="lg-Search d-none d-sm-block">
                <Search>
                  <SearchIconWrapper>
                    <IoIosSearch style={{ color: "#F5F5F5" }} />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search What u like...."
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </div>
           

              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <ul className="header-ul">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Blog</li>
                </ul>
           
         
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                   href="/Pages/cart"
                >
                  <Badge badgeContent={17} color="error">
                    <IoMdHeart className="head-Icon" style={{color:"#000"}}/>
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                  href="/Pages/cart"
                >
                  <Badge badgeContent={18}  color="error">
                    <IoCartSharp   className="head-Icon"  style={{color:"#000"}}/>
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  className="position-relative"
                  color="inherit"
                >
                  <CgProfile className="head-Icon"  style={{color:"#000"}}/>
                </IconButton>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleShow}
                  color="inherit"
                >
                  <RxHamburgerMenu style={{ color: "#000" }} />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      <div>
        <Offcanvas show={show}>
          <Offcanvas.Header
            closeButton
            onClick={handleClose}
            style={{ marginTop: "90px" }}
          >
            <Offcanvas.Title style={{ fontWeight: 700 }}>
              {" "}
              <div className="lg-Search md-search">
                <Search>
                  <SearchIconWrapper>
                    <IoIosSearch style={{ color: "#D357A7" }} />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search What u like...."
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div
              className="px-3 pb-3 sm-sidebar"
              style={{ backgroundColor: "#fff", borderRadius: "20px" }}
            >
              <ul className="px-0 mobile-ul">
                <li>
                  {" "}
                  <a className="mobile-menu">Home</a>
                </li>
                <li>
                  {" "}
                  <a className="mobile-menu">About</a>
                </li>
                <li>
                  {" "}
                  <a className="mobile-menu">Contact Us</a>
                </li>
                <li>
                  {" "}
                  <a className="mobile-menu">Blog</a>
                </li>
                <li>
                  {" "}
                  <a className="mobile-menu">Favour</a>
                </li>
                <li>
                  {" "}
                  <a className="mobile-menu">Profile</a>
                </li>
              </ul>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}
