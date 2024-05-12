import React, {useState} from 'react';
import {Typography, Button, Modal, Box, IconButton,  List, ListItem, ListItemText } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import { BsCart2 } from "react-icons/bs";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const listaItem = {
  display: 'Block',
  bgcolor: '#f0b55db8',
  border: '1x solid #000',
  
};

export default function CarrinhoModal(props) {

  const listaFavorita =[props.lista];

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Button onClick={handleOpen}> 
      <BsCart2 className="navbar-cart-icon"  />
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Sua lista de Desejos
          </Typography>
          <div>
            {/* {
              listaFavorita.map(item => {
                <div key={item.id} sx={listaItem}>
                <h5>{item.title}</h5>
                <span>{item.preco}</span>
                </div>
              })
            } */}
            
    <List sx={listaItem}>
      {[1, 2, 3].map((value) => (
        <ListItem
          key={value}
          disableGutters
          secondaryAction={
            <IconButton aria-label="comment">
              <CommentIcon />
            </IconButton>
          }
        >
          <ListItemText primary={`Line item ${value}`} />
        </ListItem>
      ))}
    </List>

          </div>
          
                 <p sx={{color:'red'}}>click fora para fechar carrinho.</p>
                  </Box>

      </Modal>
    </div>
  );
}







