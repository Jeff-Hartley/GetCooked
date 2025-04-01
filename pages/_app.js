import "@/styles/globals.css";
import { FavoritesProvider } from "@/components/FavoritesContext";


export default function App({ Component, pageProps }) {
  return (
    <FavoritesProvider>
      <Component {...pageProps} />
    </FavoritesProvider>
  );
}
