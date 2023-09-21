import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './components/NotFound';
import MainLayout from './layouts/MainLayouts';
import ProductDetails from './components/ProductDetails';
import CartTable from './components/CartTable';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path: "/products/:productID",
    element: <MainLayout mode="light"><ProductDetails /></MainLayout>
  },
  {
    path: "/cart",
    element: <MainLayout mode="light"><CartTable /></MainLayout>
  }
], {basename: "/stickerShop"});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);