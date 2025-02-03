

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
const root = createRoot(document.getElementById("root"));
root.render(
<LearningReasons/>

)
function Header(){
return(  <>
  <header className="header">
       <img className="img-nav" src="img/React-icon.png" alt=""  />
       <nav>
          <ul className="nav-list">  
            <li className="nav-list-item">Pricing</li>  
            <li className="nav-list-item">About</li>
            <li className="nav-list-item">Contact</li>
            </ul>  
            
       </nav>
       </header>
 </>
)
}
function MainElement (){
return(
  <main>
      <h1>Reasons to learn React</h1>
      <ol>
        <li>React is a popular library</li>
        <li>React is maintained by Meta</li>
        <li>React is used by thousands of companies</li>
        <li>React is a powerful library</li>
        <li>React is a great way to build user interfaces</li>
      </ol>
      </main>
)
}
function FooterElement (){
return(
  <footer><small>2025 All Rights Reserved</small> </footer>
)
}

 function LearningReasons(){
  return (
    <>
     <Header/> 
      <MainElement/>
      <FooterElement/>
       </>  //replacement for </Fragment>    
  )
}     