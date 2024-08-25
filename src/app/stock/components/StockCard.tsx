import { Stock } from "@/app/types";
import Image from "next/image";
import NewsCard from "./NewsCard";
import { News } from "@/app/types";

export type StockCardProps = {
  stock: Stock;
  news: News[];
};

export default function StockCard({ props }: { props: StockCardProps }) {
  return (
    <div className="h-screen w-screen p-20">
      <div className="flex items-end">
        <p className="px-2 text-2xl font-semibold text-yellow-100">
          {props.stock.symbol}
        </p>
        <p className="text-xl text-yellow-100">{props.stock.name}</p>
      </div>
      <div className="grid grid-cols-[70%,30%]">
        <div className="m-4 h-auto w-auto rounded-xl border-2 border-yellow-100 p-4">
          <Image
            src="https://static.vecteezy.com/system/resources/thumbnails/022/659/642/small/3d-growth-stock-diagram-financial-graph-isolated-on-transparent-background-business-candlestick-chart-investment-market-trade-exchange-analysis-and-economy-finance-report-png.png"
            alt="Sample stock image"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full"
          />
        </div>
        <NewsCard props={props.news} />
      </div>
    </div>
  );
}
