import { Button } from "antd";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen ">
        <div className="text-center ">
          <h2 className="text-4xl font-bold mb-2">Press Here For Login</h2>

          <Link href="/login">
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
