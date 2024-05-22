import React, { useState, useContext} from "react";
import ModalCart from './ModalCart'
import Logo from "../Assets/Logo.svg"
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../ContextCart';


const Navbar = (props) => {

  const { cart } = useContext(CartContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const clearArray = (arr, func) => {
    arr.length = 0;
    return  func();
  };
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Cart", 
      icon: < ShoppingCartIcon />,
    }
  
   
  ];
  return (
    <>
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="*">Home</a>
        <a href="*">Cardápio</a>
        <a href="*">Sobre</a>
        <Button variant="contained" color="success" onClick={openModal}> < ShoppingCartIcon/></Button>
      
      
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
           
          </List>
          <Divider />
         
        </Box>
      </Drawer>
    </nav>
     <ModalCart isOpen={modalIsOpen} onClose={closeModal}>
     <h2>Sua lista de Desejos.</h2>
   
     <List>
            {cart.map((item) => (
              <ListItem key={item.id} disablePadding>
                  <ListItemText primary={item.title} />
                  <ListItemText secondary={`R$ ${item.preco},00`} />
              </ListItem>
            ))}
           
          </List>
    <Button variant="outlined" color="error" onClick={closeModal}>Fechar</Button>
     <Button onClick={()=>clearArray(cart, closeModal)}>Limpar</Button>
   </ModalCart>
    </>
  );
};

export default Navbar;