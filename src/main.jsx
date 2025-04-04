import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import App from "./App";
import Login from "./pages/Login";
import ProjectDetails from "./pages/ProjectDetails";
import ProjectsPage from "./pages/ProjectsPage";
import Our_team_Page from "./pages/Our_team_Page";
import Seo from "./pages/Seo";
import Ppc_advertising from "./pages/Ppc_advertising";
import SocialMediaMarketing from "./pages/SocialMediaMarketing";
import ContentMarketing from "./pages/ContentMarketing";
import WebAppDevelopment from "./pages/WebAppDevelopment";
import EmailMarketing from "./pages/EmailMarketing";
import Affiliate_marketing from "./pages/Affiliate_marketing";
import { ThemeProvider } from "./context/ThemeContext";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import AboutUs from "./pages/AboutUs";
import ServiceForm from "./pages/ServiceForm";
import GraphicsDesignPage from "./pages/GraphicsDesignPage";
import ContentWritingPage from "./pages/ContentWritingPage";

import OurApproachPage from "./pages/OurApproachPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="login" element={<Login />} />
            <Route path="projects/:id" element={<ProjectDetails />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="our-teams" element={<Our_team_Page />} />
            <Route path="seo" element={<Seo />} />
            <Route path="ppc-advertising" element={<Ppc_advertising />} />
            <Route path="social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="content-marketing" element={<ContentMarketing />} />
            <Route path="web-app-development" element={<WebAppDevelopment />} />
            <Route path="email-marketing" element={<EmailMarketing />} />
            <Route path="affiliate-marketing" element={<Affiliate_marketing />} />
            <Route path="about-us" element={<AboutUs/>} />
            <Route path="service-form" element={<ServiceForm/>} />
            <Route path="graphics-design" element={<GraphicsDesignPage/>} />
            <Route path="content-writing" element={<ContentWritingPage/>} />
            <Route path="our-approach" element={<OurApproachPage/>} />
           
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);