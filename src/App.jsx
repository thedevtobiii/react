

// import { createRoot } from 'react-dom/client'
// const root = createRoot(document.getElementById('root'))
// root.render(
 
//    <TemporaryName/>
// )
// // root.render can not render 2 element side by side, needs a parent element

// function TemporaryName(){
//  return (  
//    <main>
//  <img src="img/React-icon.png" width="40px" alt='React Logo' />
//  <h1>Fun Facts about React js</h1>
//  <ul>
//    <li>Was first released in 2013</li>
//    <li>was originally created by Jordan Walke</li>
//    <li>Has over 200k stars on Github</li>
//    <li>Is maintained by Meta</li>
//    <li>Powers thousands of enterprise app, including mobile apps</li>
//  </ul>
// </main>

//  )
// }

import { createRoot } from "react-dom/client";
import { Fragment } from "react"; //
import Header from "../Header";  
import MainElement from "../mainel";
import FooterElement from "../footer";

const root = createRoot(document.getElementById("root"));
root.render(
<LearningReasons/>
)  

 function LearningReasons(){
  return (
    <>
     <Header/> 
      <MainElement/>
      <FooterElement/>
       </>  //replacement for </Fragment>    
  )
}     