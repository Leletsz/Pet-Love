import { IoIosArrowForward } from "react-icons/io";
import img from "../../assets/Pet & Love.png";
import { useState } from "react";
export function Home() {
  const [load, setLoad] = useState(true);
  return (
    <div>
      <main className="w-full max-w-7xl mx-auto px-4 text-center ">
        <section className=" w-full text-center flex  items-center justify-center min-h-screen ">
          <div>
            <h1 className="text-5xl font-bold font-diff text-white py-6">
              Cuidado e <strong className="text-primary">Amor</strong> para seu
              Pet
            </h1>
            <button
              onClick={() => setLoad(false)}
              className="border-none flex gap-2 items-center font-diff font-bold cursor-pointer rounded-3xl  px-3 py-1.5 bg-primary text-white"
            >
              Conhecer Produtos
              <IoIosArrowForward />
            </button>
          </div>

          <section>
            <img src={img} alt="" />
          </section>
        </section>

        <h1 className="text-3xl flex gap-2 font-bold items-center justify-center font-diff text-white py-6">
          Nossos produtos{" "}
          <h2 className="flex font-light text-xl ">(7 produtos)</h2>
        </h1>

        <div
          id="products"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5 "
        >
          <section className=" p-4">
            <img
              src="https://sujeitoprogramador.com/wp-content/uploads/2023/06/racao1.png"
              alt=""
              className="w-full rounded-lg max-h-72 mb-2 object-cover"
            />
          </section>
          <section className=" p-4">
            <img
              src="https://sujeitoprogramador.com/wp-content/uploads/2023/06/racao1.png"
              alt=""
              className="w-full rounded-lg max-h-72 mb-2 object-cover"
            />
          </section>
          <section className=" p-4">
            <img
              src="https://sujeitoprogramador.com/wp-content/uploads/2023/06/racao1.png"
              alt=""
              className="w-full rounded-lg max-h-72 mb-2 object-cover"
            />
          </section>
          <section className=" p-4">
            <img
              src="https://sujeitoprogramador.com/wp-content/uploads/2023/06/racao1.png"
              alt=""
              className="w-full rounded-lg max-h-72 mb-2 object-cover"
            />
          </section>
          <section className=" p-4">
            <img
              src="https://sujeitoprogramador.com/wp-content/uploads/2023/06/racao1.png"
              alt=""
              className="w-full rounded-lg max-h-72 mb-2 object-cover"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
