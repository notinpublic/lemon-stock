import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-blue-900 p-24">
      <p className="text-2xl text-yellow-100">lemon stock</p>

      <Link href={"/available-stocks"}>
        <p className="text-xl font-bold text-yellow-200 hover:text-yellow-500">
          stocks
        </p>
      </Link>
      <div className="h-96 w-96">
        <Image
          src="https://media3.giphy.com/media/COaCSTLx5XaG9sNMa6/giphy.gif?cid=6c09b952smixo68ha4nvcfhvzqpevlihx09wthel84b47sf0&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
          alt="Lemon"
          width={500}
          height={500}
        />
      </div>
    </main>
  );
}
