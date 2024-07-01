'use client'
import BlogItem from "@/components/BlogItem";
import BlogList from "@/components/BlogList";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      {/* <BlogItem/> */}
      <BlogList/>
    </main>
  );
}
