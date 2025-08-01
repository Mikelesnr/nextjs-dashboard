import { Inter, Lusitana, Merriweather } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["italic"],
});
