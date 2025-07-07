import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
       
      <main className="min-h-screen p-4">
       
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}
export default App;