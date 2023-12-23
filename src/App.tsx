import { useState } from "react";
import "./App.css";
import "@radix-ui/themes/styles.css";
import Dashboard from "./views/dashboard";
import { Theme } from "@radix-ui/themes";

function App() {
  return (
    <>
      <Theme
        accentColor="mint"
        grayColor="gray"
        panelBackground="solid"
        scaling="100%"
        radius="full"
        appearance="inherit"
      >
        <Dashboard />
      </Theme>
    </>
  );
}

export default App;
