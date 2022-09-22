import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="md:py-10 md:px-12 w-screen flex flex-col h-screen py-6 px-8">
      <Header />

      {/* This will be the main container. For now have added a dummy div element */}
      <div className="flex-grow"></div>

      <Footer />
    </div>
  );
}

export default App;
