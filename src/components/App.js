
import React from "react";
import './../styles/App.css';
import Header from "./Header";
import Child from "./Child";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Header/>
        <Child/>
        <Footer/>
    </div>
  )
}

export default App
