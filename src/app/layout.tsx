import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import OfferSlider from "@/components/shared/offerSlider/OfferSlider";
import ResponsiveMenu from "@/components/shared/navbar/ResponsiveMenu";
import ReduxProvider from "@/components/reduxProvider/ReduxProvider";
import "react-toastify/dist/ReactToastify.css";
import YourCart from "@/components/yourcart/YourCart";
import NextTopLoader from "nextjs-toploader";
import SiteModal from "@/components/siteModal/SiteModal";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";
import TokenProvider from "@/components/AuthProvider/TokenProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rollie",
  description: "Generated by create next app",
};

// data fetching
async function getData() {
  let topCategory = await (
    await fetch(
      `${process.env.BASE_URL}/api/category/top-category/${process.env.GROUP_ID}`,
      {
        next: { revalidate: 300 },
      }
    )
  ).json();
  let PrimaryCategory = await (
    await fetch(
      `${process.env.BASE_URL}/api/category/get-all-primary-category/${process.env.GROUP_ID}`,
      {
        next: { revalidate: 300 },
      }
    )
  ).json();
  let websiteInfo = await (
    await fetch(
      `${process.env.BASE_URL}/api/group-information/${process.env.GROUP_ID}`,
      {
        next: { revalidate: 300 },
      }
    )
  ).json();

  return { topCategory, PrimaryCategory, websiteInfo };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // topCategory
  const { topCategory, PrimaryCategory, websiteInfo }: any = await getData();
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>
        <NextTopLoader />
        <AuthProvider>
          <ReduxProvider>
            <TokenProvider>
              <OfferSlider />
              <Navbar
                websiteInfo={websiteInfo}
                topCategory={topCategory.topCategories}
                primaryCategories={PrimaryCategory.primaryCategories}
              />
              {children}
              <Footer websiteInfo={websiteInfo.data} />
              <ResponsiveMenu></ResponsiveMenu>
              <YourCart></YourCart>
              <SiteModal></SiteModal>
            </TokenProvider>
          </ReduxProvider>
          <Toaster position="top-center" reverseOrder={false} />
        </AuthProvider>
      </body>
    </html>
  );
}
