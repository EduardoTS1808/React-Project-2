import  React,{useState, useEffect, useContext} from 'react';
import { CartContext } from '../ContextCart';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import  Card  from './Card';
import axios from 'axios';

export default function ItemsList() {

    
    
    const port = 'http://localhost:3002/lista';

                    
    const [objeto, setObjeto] = useState([])
    const { addToCart } = useContext(CartContext);


    const serverLista = async () =>{
        const timestamp = Date.now(); 
   try{
    const {data} = await axios.get(`${port}?timestamp=${timestamp}`);
    setObjeto(data)
   } catch (error) {
        console.log(error)
   }
    }

    
    useEffect(()=>{
             
        serverLista()
        
    }, []) 



      return (
    <Box  sx={{marginTop:'60px', position:'relative'}} >
        <h1 className="primary-heading">
         Cardápio
          </h1>

            <Grid container  >
                    {objeto.map((item) => (
            <Grid >
            <Card
              key={item.id} 
              title={item.title} 
              cardImage={item.src}
               preco={item.preco} 
              addCarrim={()=>addToCart(item)}
                 content={item.content }
                  /> 
            </Grid>
            ))}
          </Grid>
        </Box>
      );

    

}
