import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getByTitle } from '@testing-library/react';

function App() {
  
  const[nayoks , setNayoks] = useState([])

  useEffect(()=> {
    
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => setNayoks(data.results))

  },[])

  return (
    <div className="App">
       <MovieCounter></MovieCounter>
      {
        nayoks.map(nayok => <Nayok name ={nayok.name.title + " "+ nayok.name.first +" "+ nayok.name.last} gender={nayok.gender} country ={nayok.location.country} city ={nayok.location.city} img ={nayok.picture.large}></Nayok>)
      }
     
    </div>
  );
}
function MovieCounter(){
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick = { () => setCount(count + 1)}>ADD MOVIE</button>
      <h4>The Number Of Movie: {count}</h4>
      <MovieDisplay count = {count}></MovieDisplay>
      <MovieDisplay count = {count}></MovieDisplay>
      <MovieDisplay count = {count + 10}></MovieDisplay>
      <MovieDisplay count = {count} ></MovieDisplay>
    </div>
  )
}

function MovieDisplay (props){
  return <h4>Movie I have acted : {props.count}</h4>
}

function  Nayok (props){
  console.log(props)
  const nayokStyle = {
    border : '2px solid blue',
    margin: '5px',
    padding: '5px',
    width : '300px',
    height: '400px',
    float: 'left'
    

  }

  return (
    <div style = { nayokStyle }>
      <div>
       <h4>Name: {props.name} </h4>
       <h4>Gender: {props.gender}</h4>
       <img src={props.img} alt=""/>
       <p>Country: {props.country}</p> <p>City: {props.city}</p>
      </div>
    </div>
  )
}

export default App;
