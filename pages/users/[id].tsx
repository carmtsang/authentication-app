import { useRouter } from "next/router";
import Head from "next/head";

export default function User() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title></title>
      </Head>
      <h1>Hello {id}</h1>
    </>
  );
}
