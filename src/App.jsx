import { useState } from "react";
import LeadGrid from "./components/layout";
import "./assets/sass/App.scss";
import "./assets/sass/Responsive.scss";
import "@mantine/core/styles.css";
// import "./assets/background/bg_website.png";
import { MantineProvider } from "@mantine/core";
function App() {
  return (
    <MantineProvider>
        <LeadGrid />
    </MantineProvider>
  );
}

export default App;