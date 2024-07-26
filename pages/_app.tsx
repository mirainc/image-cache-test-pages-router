import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import image3 from "../public/image3.jpg";
import image7 from "../public/image7.jpg";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Reload the page to check for an updated image.
  useEffect(() => {
    setTimeout(() => {
      router.reload();
    }, 5000);
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-8">
      <div
        className="flex-1 w-full bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/image1.jpg)` }}
      ></div>
      <div
        className="flex-1 w-full bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/image4.jpg)` }}
      ></div>
      {/* <div
        className="flex-1 w-full bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image3.src})` }}
      ></div>
      <div
        className="flex-1 w-full bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image7.src})` }}
      ></div> */}
    </main>
  );
}
