import { useContext, useState } from "react";
import { MovieContext } from "../../context";
import { getImgUrl } from "../../utils/cina-rental";
import MovieDetails from "./MovieDetails";
import Rating from "./Rating";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { cartData, setCartData } = useContext(MovieContext);
  function handleModalClose() {
    setSelectedMovie(null);
    setShowModal(false);
  }
  function handleMovieSelection(movie) {
    setSelectedMovie(movie);
    setShowModal(true);
  }
  function handleAddToCart(e, movie) {
    e.stopPropagation();
    const found = cartData.find((item) => item.id === movie.id);
    if (!found) {
      setCartData([...cartData, movie]);
    } else {
      console.error(`the movie ${movie.title} is already in the cart`);
    }
  }
  return (
    <>
      {showModal && (
        <MovieDetails
          movie={selectedMovie}
          onClose={handleModalClose}
          onCartAdd={handleAddToCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <img
          className="w-full object-cover h-96"
          src={getImgUrl(movie.cover)}
          alt={movie.title}
        />
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <button
              onClick={(e) => handleAddToCart(e, movie)}
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>$100 | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
