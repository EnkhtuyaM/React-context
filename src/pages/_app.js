import "@/styles/globals.css";

import ThemeProvider from "@/components/context/ThemeContext";
import { QuestionProvider } from "@/components/context/QuestionContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <QuestionProvider>
        <Component {...pageProps} />
      </QuestionProvider>
    </ThemeProvider>
  );
}
