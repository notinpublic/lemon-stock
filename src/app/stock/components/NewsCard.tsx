import { News } from "@/app/types";

export default function NewsCard({ props }: { props: News[] }) {
  return (
    <div className="m-4 h-auto w-auto rounded-xl border-2 border-yellow-100 p-4">
      <p className="text-yellow-100">News</p>
      {props.map((entry: News) => {
        return (
          <div key={entry.id}>
            <p>{entry.title}</p>
            <p>{entry.date}</p>
            <p>{entry.details}</p>
          </div>
        );
      })}
    </div>
  );
}
