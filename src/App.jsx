import MovieList from "./components/cina/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto grid lg:grid-cols-[218px_1fr] gap-14">
          <SideBar />

          <MovieList />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
