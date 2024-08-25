"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Suspense } from "react";
import { Home } from "react-feather";
import StockCard from "./components/StockCard";
import stocks from "../source-data/stocks.json";
import news from "../source-data/news.json";

function StockOverview() {
  const searchParams = useSearchParams();
  const type = searchParams.get("symbol");
  const stock = stocks.find(({ symbol }) => symbol === type);
  return (
    <Suspense>
      <main className="flex min-h-screen flex-col items-center justify-between bg-blue-900 p-24">
        <div className="fixed left-4 top-4">
          <Link href={"../"}>
            <Home size={30} className="text-yellow-200 hover:text-white" />
          </Link>
        </div>
        {stock ? (
          <StockCard props={{ stock: stock, news: news }} />
        ) : (
          <p>error</p>
        )}
      </main>
    </Suspense>
  );
}

export default function SuspenseHelper() {
  return (
    <Suspense>
      <StockOverview />
    </Suspense>
  );
}
