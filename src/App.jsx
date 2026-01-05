import "./App.css";
import { Footer } from "./footer/Footer";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <AppRouter />
      <Footer />
    </div>
  );
};
