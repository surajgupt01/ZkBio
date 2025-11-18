"use client";
import Head from "./components/Head";
import Cards from "./components/Cards";
import useModalStore from "./store/useModalStore";
import Modal from "./components/Modal";

export default function Home() {
  const { isOn, FAQ } = useModalStore();

  return (
    <div className="relative flex flex-col  items-center min-h-screen w-full">
      {(isOn || FAQ)  && <Modal />}
      <div className="lg:max-w-[1200px] w-full  h-auto flex flex-col p-5">
        <Head />

        <Cards />
      </div>
    </div>
  );
}
