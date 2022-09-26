import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AvatarGenerator from "./components/AvatarGenerator";

function App() {
  return (
    <div className="md:py-10 md:px-12 h-screen flex flex-col py-6 px-8 container mx-auto justify-between">
      <Header />

      {/* This will be the main container. For now have added a dummy div element */}
      <AvatarGenerator />

      <Footer />
    </div>
  )
};

export default App;