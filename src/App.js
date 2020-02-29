import React from 'react';
import './App.css';
import { Card, Container, Image, Button} from 'semantic-ui-react'

const miroslavLox = [
  {name: "Конверт кохання",price: 300,img: 'https://scontent.fiev21-2.fna.fbcdn.net/v/t45.5328-0/p180x540/67456847_1914036358697012_1514340262376112128_n.jpg?_nc_cat=107&_nc_oc=AQnc49cwncQvGSIrtWFo10HSpR3mT22TTlvn4gvC8q-mv9-KPBy40eaf9aTnyuxHXIk&_nc_ht=scontent.fiev21-2.fna&_nc_tp=6&oh=07450940850791ca7a6bee8a907bc2d4&oe=5ECD8EB9'},
  {name: "Червона пристрасть",price: 300,img: 'https://scontent.fiev21-2.fna.fbcdn.net/v/t45.5328-0/p180x540/66676065_2390887247692581_5803679145468624896_n.jpg?_nc_cat=107&_nc_oc=AQlBwArbE4PQrgCOamBsJNwq8HUjpwtJ-rYjYNkJmibqZS3iEAyGWJc18mWNV7HNVfg&_nc_ht=scontent.fiev21-2.fna&_nc_tp=6&oh=cdbee77c3ac70599e94e5ab79b616a51&oe=5EFFBCF0'},
  {name: "Букет роз з бантом та сердечками",price: 300,img: 'https://scontent.fiev21-2.fna.fbcdn.net/v/t45.5328-4/c2.82.476.476a/p480x480/64404796_1724296167674105_7254646095945400320_n.jpg?_nc_cat=102&_nc_oc=AQk9Q1ncRBWoYehM3Q7dmCfjqgvgF6Aq-s_x8lq8-cUPwQlMCUaKBsXWrI4E4oUaKsU&_nc_ht=scontent.fiev21-2.fna&oh=96d596ba95731c261ae0549f1c8dd3a9&oe=5EFE9FDF'}
];
const App = () =>{
  return (
    <div>
       <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
  
      <Card.Group itemsPerRow={3} >
    {miroslavLox.map(den=>
      <Card> 
      
      <Card.Content>
      <Card.Header>{den.name}</Card.Header>
      <Image src= {den.img} />
      
      </Card.Content>
      <h2>{den.price}грн</h2>
      <Button  color='green' onClick={()=>alert('Наш менеджер звяжеться з вами найближчим часом')}>Купити</Button> 
      </Card>  
)}
</Card.Group>
</div>
 
  )
}

export default App;
