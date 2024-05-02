import { Button } from "antd";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="text-center ">
        <h2 className="text-4xl font-bold mb-2">The Page is Not Found!!!</h2>
        <p className="text-2xl font-semibold  mb-2">
          Could not find requested resource
        </p>

        <h1 className="text-xl font-medium  mb-2">
          Click Here For Return Home
        </h1>

        <Link href="/">
          <Button>Home</Button>
        </Link>
      </div>
    </div>
  );
}
