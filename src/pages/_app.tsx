//Este archivo es para reaprovechar una estructura previa entre todas las páginas de la app
import "../styles/global.css";

import { ChallengesProvider } from "../contexts/ChallengesContext";
import React, { useState } from "react";

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
