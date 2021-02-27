import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Routes } from "./Routes/Routes";

function App() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          width: "100vw",
          minHeight: "75vh",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
