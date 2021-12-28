import "./App.css";
import Slideshow from "../components/Shared/Slider/Slider";
import Product from "../components/Shared/Product/Product";
import Media from "../components/Shared/Social_Media_Bar/media";

function App() {
  return (
    <div className="App">
      <Slideshow />
      <Product />
      <Media></Media>
    </div>
  );
}

export default App;
