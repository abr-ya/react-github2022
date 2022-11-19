import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, About, Error404 } from "./pages";
import { AlertProvider } from "./context/AlertContext";
import Navbar from "./components/layout/Navbar";
import "./app.css";
import Footer from "./components/layout/Footer";
import { Alert } from "./components";

const App = () => (
  <AlertProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar title="githubApp" />
        <main className="container mx-auto px-3 pb-12">
          <Alert />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </AlertProvider>
);

export default App;
