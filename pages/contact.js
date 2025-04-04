import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactParagraph from "@/components/ContactParagraph";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
    <Head>
        <title>GetCooked - Contact Us</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <ContactParagraph></ContactParagraph>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
}
