import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://thesupermommy.co.uk"),
  title: { default: "TheSuperMommy", template: `%s | TheSuperMommy` },
  description: "",
  openGraph: {
    url: "/",
    title: "TheSuperMommy",
    description: "",
    images: ["/meta.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "TheSuperMommy",
    description: "",
    images: ["/meta.png"],
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-K1CFN179QT" />
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-K1CFN179QT");
        `}
      </Script>
      <Script id="taboola-main">
        {`
         window._taboola = window._taboola || [];
         _taboola.push({article:'auto'});
         !function (e, f, u, i) {
           if (!document.getElementById(i)){
             e.async = 1;
             e.src = u;
             e.id = i;
             f.parentNode.insertBefore(e, f);
           }
         }(document.createElement('script'),
         document.getElementsByTagName('script')[0],
         '//cdn.taboola.com/libtrc/adnimationnew-network/loader.js',
         'tb_loader_script');
         if(window.performance && typeof window.performance.mark == 'function')
           {window.performance.mark('tbl_ic');}
        `}
      </Script>
      {/* <Script src="https://adncdnend.azureedge.net/adnimation/kamleshkumari.js"></Script> */}

      <body>
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
          <Header />
          {children}
          <Footer />
        </div>
        <ToastContainer
          toastStyle={{ minHeight: "auto" }}
          className="text-sm font-semibold"
          position="bottom-right"
          closeButton={false}
          autoClose={2000}
          limit={3}
        />
      </body>
    </html>
  );
};

export default RootLayout;
