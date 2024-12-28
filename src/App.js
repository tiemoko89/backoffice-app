import logo from './logo.svg';
import './App.css';
import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, Categorie, Creercategorie, Creerproduit, Creerstock, Home, Login, MainLayout, Produit, Stock } from './pages';

function App() {

  const routers = useMemo(() =>createBrowserRouter([
    {
      path:'/',
      element:<Login />
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/dashboard',
      element:<MainLayout/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'liste-des-produits',
          element:<Produit/>
        },
        {
          path:'creer-produit',
          element:<Creerproduit/>
        },
        {
          path:'liste-des-categories',
          element:<Categorie/>
        },
        {
          path:'creer-categorie',
          element:<Creercategorie/>
        },
        {
          path:'liste-des-stocks',
          element:<Stock/>
        },
        {
          path:'creer-stock',
          element:<Creerstock/>
        }

      ]
    },
  ]),[])
  return (
    <div className="App">
      <RouterProvider router={routers}/>

    </div>
  );
}

export default App;
