import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.thedailygrind.example"),
  title: {
    default: "The Daily Grind Café | Good Coffee, Good Company",
    template: "%s | The Daily Grind Café"
  },
  description: "Thoughtful coffee, comforting food and a little space to slow down at The Daily Grind Café in Kolkata.",
  applicationName: "The Daily Grind Café",
  openGraph: {
    title: "The Daily Grind Café",
    description: "Good coffee. Good company.",
    type: "website",
    locale: "en_IN",
    siteName: "The Daily Grind Café"
  },
  twitter: {
    card: "summary_large_image",
    title: "The Daily Grind Café",
    description: "Good coffee. Good company."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
