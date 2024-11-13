import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import './index.css'
function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Form />
      </div>
      <Footer />
    </>
  );
}

export default App;
