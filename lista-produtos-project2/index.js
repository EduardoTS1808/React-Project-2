import express from "express"
import cors from "cors"
import bodyParser from "body-parser";

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())


app.use(bodyParser.urlencoded({ extended: true }));

//nada

const port = process.env.PORT || 3002




const listaPresentes = [ 
    
    
 
    
    
    {id:13,
       title:'Carne Suína Assada',  
       content: 'Ao ponto, com batata, tomate, coento e molho. Perfeita para você.',
         src:'./imagens/img-1.jpg',
         preco: 49 ,
          
        },
    {id:14,
       title:'Lincuiça Toscana Bovina Assada',  
       content: 'Ao ponto, com batata, tomate, coento e molho. Perfeita para você.',
         src:'./imagens/img-2.jpg',
         preco: 35 ,
          
        },
    {id:15,
       title:'Camarão com Legumes',  
       content: 'Ao ponto, com batata, tomate, coento e molho. Perfeita para você.',
         src:'./imagens/img-3.jpg',
         preco: 67 ,
          
        },
    {id:16,
       title:'Torta de Frango',  
       content: 'Com porção de arroz, legumes e molho. Perfeita para você. ',
       src:'./imagens/img-4.png',
         preco: 58 ,
          
        },
    {id:17,
       title:'Asa de Frango Assada',  
       content: 'Ao ponto, com batata, tomate, coento e molho. Perfeita para você..',
       src:'./imagens/img-5.png',
         preco: 43 ,
          
        },
    {id:18,
       title:'Lombo Bovina Assada',  
       content: 'Ao ponto, com batata, tomate, coento e molho. Perfeita para você.',
       src:'./imagens/img-6.png',
         preco: 89 ,
          
        },
    {id:19,
       title:'Filé Bovina Assada',  
       content: 'Ao ponto, com batata, tomate, coento e molho + porção de arroz e feijão. Perfeita para você.',
       src:'./imagens/img-7.png',
         preco: 110 ,
          
        },
    {id:34,
       title:'Espetinho de Costela Bovina',  
       content: 'Ao ponto, com batata, tomate, coento e molho + Porção de Baião. Perfeita para você.',
       src:'./imagens/img-8.png',
         preco: 32 ,
          
        },
    {id:43,
      title:'Espetinho de Picanha Bovina',  
      content: 'Ao ponto, com batata, tomate, coento e molho + Porção de Baião. Perfeita para você.',
       src:'./imagens/img-9.png',
         preco: 59 ,
          
        },
    {id:48,
       title:'Macarronada com Tomate',  
       content: 'Macarram espagete ao molho de tomate com ervas do campo. Perfeito para você.',
       src:'./imagens/img-10.png',
         preco: 23,
          
        },
 
    
   
    
    
    
]

app.get('/', (req,res)=>{
  return res.json('servidor rodando...')
})
app.get('/lista', (req, res) => {
  res.json(listaPresentes)
});


app.delete('/lista/:id',  (req,res)=>{
  const {id} = req.params;
  
const itemRomovido =  listaPresentes.find((e) => e.id == id)
const index = listaPresentes.indexOf(itemRomovido)
listaPresentes.splice(index, 1)


  res.send(res.status(204).json("ok"));
 
})




app.listen(port, () => {
  console.log('Servidor rodando na porta 3002');
});

