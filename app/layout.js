import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.thedailygrind.example"),
  title: {
    default: "The Daily Grind Café | Good Coffee, Slow Moments",
    template: "%s | The Daily Grind Café"
  },
  description: "A neighbourhood café for thoughtfully brewed coffee, fresh plates and unhurried moments. Explore our menu, story and visit details.",
  applicationName: "The Daily Grind Café",
  openGraph: {
    title: "The Daily Grind Café",
    description: "Good coffee. Fresh food. Slow moments.",
    type: "website",
    locale: "en_IN",
    siteName: "The Daily Grind Café"
  },
  twitter: {
    card: "summary_large_image",
    title: "The Daily Grind Café",
    description: "Good coffee. Fresh food. Slow moments."
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
