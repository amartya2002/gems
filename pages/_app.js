import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
// import '@/stules/sidebar.module.css'
// import '@components/NewSidebar/assets/css/styles.css';

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
