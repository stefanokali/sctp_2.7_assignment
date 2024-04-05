import Product from './components/Product'
import { ProductProvider } from './context/ProductContext';
import { ModeProvider } from './context/ModeContext';
import './App.css';
import { EditProvider } from './context/EditContext';

function App() {
  return (
    <div className="App">
      <ModeProvider>
        <ProductProvider>
          <EditProvider>
            <Product />
          </EditProvider>
        </ProductProvider>
      </ModeProvider>
    </div>     
  );
}


export default App;
