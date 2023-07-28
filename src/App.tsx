import Header from "./components/atoms/Header";
import MovieCatalogue from "./components/organisms/MovieCatalogue";
// import { MovieProvider } from "./context/MovieCtx";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      {/* <MovieProvider> */}
      <Header />
      <MovieCatalogue />
      {/* </MovieProvider> */}
    </div>
  );
}

export default App;
