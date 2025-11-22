import { useState } from "react";
import MovieList from "./components/cina/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { MovieContext } from "./context";

function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <main>
          <div className="container mx-auto grid lg:grid-cols-[218px_1fr] gap-14">
            <SideBar />

            <MovieList />
          </div>
        </main>
        <Footer />
      </MovieContext.Provider>
    </>
  );
}

export default App;
