import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RecipeParagraph from "@/components/RecipeParagraph";

export default function RecipePage() {
  return (
    <>
      <Head>
        <title>GetCooked - The Recipe Book</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <RecipeParagraph></RecipeParagraph>
      <Footer></Footer>
    </>
  );
}
