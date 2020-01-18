import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

const Topics=(props)=>{
    console.log(props);  
    return (
    <div>
      <Link to={`${props.match.url}/13`}>thertiin</Link>
      <Link to={`${props.match.url}/12`}>thertiin</Link>
      <Link to={`${props.match.url}/18`}>thertiin</Link>
      <Link to={`${props.match.url}/11`}>thertiin</Link>
      <Link to={`${props.match.url}/19`}>thertiin</Link>
      <h1>topics paaage</h1>

    
    </div>
  )}
const TopicsDetailed=(props)=>{
    console.log(props);  
    return (
    <div>
      <h1>topics detailed  paaage{props.match.params.topicId}</h1>
    </div>
)}
  const HomePage=(props)=>{
    console.log(props);  
    return (

    <div>
            <Link to='/topics'>topics</Link>
      <button onClick={()=> props.history.push('/topics')}>topics</button>
      <h1>hooome paaage</h1>
    </div>
  )}
function Routing() {
  return (
    <div>
      <Route   exact path='/' component={HomePage}/>
      <Route  exact path='/topics' component={Topics}/>
      <Route path='/topics/:topicId' component={TopicsDetailed}/>
 
    </div>

  );
}

export default Routing;
