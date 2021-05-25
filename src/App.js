import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Routes from './Routes';

import { getCategoriesList } from './services/cocktailsApi';


function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getCategoriesList();
      setCategories(response);
    }
    fetchData();
  }, []);

  return (
    <Router>
      <Header categories={categories} />
      <Layout>
        <Routes />
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
