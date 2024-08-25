import Link from "next/link";
import { Stock } from "../types";
import stocks from "../source-data/stocks.json";

export const StockEntry = ({ props }: { props: Stock }) => {
  return (
    <Link
      href={{
        pathname: "./stock",
        query: { symbol: `${props.symbol}` },
      }}
    >
      <p className="text-xl font-bold text-yellow-200 hover:text-yellow-500">
        {props.name}
      </p>
    </Link>
  );
};

export default function AvailableStocks() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-blue-900 p-24">
      <p className="text-2xl text-yellow-100">Available Stocks</p>
      {stocks.map((stock: Stock) => {
        return <StockEntry props={stock} key={stock.name} />;
      })}
    </main>
  );
}
