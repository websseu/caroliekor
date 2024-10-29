import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "칼로리 정보 허브",
  description: "다양한 음식과 음료의 칼로리 및 영양 정보를 제공합니다.",
  keywords: [
    "칼로리 정보",
    "영양 성분",
    "음식 칼로리",
    "음료 칼로리",
    "다이어트 정보",
  ],
  openGraph: {
    title: "칼로리 정보 허브",
    description: "음식과 음료에 대한 칼로리 및 영양 데이터의 종합 정보 사이트",
    url: "https://fontkor.vercel.app/",
    siteName: "칼로리 정보 허브",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 800,
        height: 600,
        alt: "칼로리 정보 허브 배너 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <Header />
        {children}
      </body>
    </html>
  );
}
