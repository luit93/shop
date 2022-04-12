import './App.css';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div class="app-body">
    <Layout >
      <ProductPage/>
      
    </Layout>
  
     
       
   </div>
       
    
  );
}

export default App;
