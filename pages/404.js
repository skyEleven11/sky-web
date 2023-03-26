import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Container } from "react-bootstrap";


export default function FourOhFour() {
    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            router.push("/")
        }, 2500)
    },[])

  return (
    <>
      <Head>
        <title>Sky Eleven Trading Solutions</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Container className="content-cont w-100 h-100 d-flex justify-content-center aling-items-center">
      <Image
            src="/images/404_Img.png"
            alt="404 Images"
            width="642"
            height="440"
            className="mt-5"
          />
      </Container>
    </>
  );
}
