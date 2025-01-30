import React, { StrictMode } from 'react';  // Added StrictMode import here
import { createRoot } from 'react-dom/client';  // Correct import for createRoot
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';  // Fixed imports
import App from './App.jsx';
import './index.css';
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact us/Contact.jsx';
import User from './components/User/User.jsx';
import GitHub from './components/GitHub/GitHub.jsx';
import Github, { githubInfoLoader } from './components/GitHub/GitHub.jsx';
// Define the router with routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact us" element={<Contact />} />
      <Route path="User/:userid" element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
      )
  )


// Rendering the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
