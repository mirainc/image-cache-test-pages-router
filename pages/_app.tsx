import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Reload the page to check for an updated image.
  useEffect(() => {
    setTimeout(() => {
      router.reload();
    }, 5000);
  }, [router]);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24 bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/image1.jpg")' }}
    ></main>
  );
}
