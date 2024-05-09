import  React,{useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import  Card  from './Card';
import axios from 'axios';

export default function AlignItemsList() {

    
    
    const port = 'http://localhost:3002/lista';

                    
    const [objeto, setObjeto] = useState([])
  


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
    <Box  >
        <h1> Cardapio</h1><br/>

            <Grid container  >
                    {objeto.map((item) => (
            <Grid >
            <Card  key={item.id} title={item.title} cardImage={item.src} preco={item.preco}  content={item.content } /> 
            </Grid>
            ))}
          </Grid>
        </Box>
      );

    

}
