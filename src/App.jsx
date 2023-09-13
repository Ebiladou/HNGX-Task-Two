import { Routes, Route } from "react-router-dom";
import "./App.css";
import MovieDetails from "./pages/MovieDetails";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
    </>
  );
}
export default App;
