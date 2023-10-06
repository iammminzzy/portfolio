import Link from "next/link";

import Header from "../components/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Link href="/users">Link</Link>
    </>
  );
}
