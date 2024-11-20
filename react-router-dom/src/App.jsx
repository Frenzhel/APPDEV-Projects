import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import KeyboardDocumentation from './KeyboardDocumentation';
import SetupInstructions from './SetupInstructions';
import UseKeyboard from './UseKeyboard';
import Troubleshooting from './Troubleshooting';
import Maintenance from './Maintenance';
import WarrantySupport from './WarrantySupport';
import Footer from './Footer';
import './index.css'

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/keyboard-doc" element={<KeyboardDocumentation />} />
          <Route path="/setup-instructions" element={<SetupInstructions />} />
          <Route path="/use-keyboard" element={<UseKeyboard />} />
          <Route path="/troubleshooting" element={<Troubleshooting />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/warranty-support" element={<WarrantySupport />} />
        </Routes>
      </div>
    </Router>
  )
}