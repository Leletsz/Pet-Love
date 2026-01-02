import { IoIosArrowForward } from "react-icons/io";
import img from "../../assets/Pet & Love.png";
import { useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { api } from "../../services/api";

interface ProductsProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}
export function Home() {
  //const [load, setLoad] = useState(true);
  const [products, setProducts] = useState<ProductsProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }
    getProducts();
  }, []);

  return (
    <div>
      <main className="w-full max-w-7xl mx-auto px-4 text-center ">
        <section className=" w-full text-center flex  items-center justify-center min-h-screen ">
          <div>
            <h1 className="text-5xl font-bold font-diff text-white py-6">
              Cuidado e <strong className="text-primary">Amor</strong> para seu
              Pet
            </h1>
            <button className="border-none flex gap-2 items-center font-diff font-bold cursor-pointer rounded-3xl  px-3 py-1.5 bg-primary text-white">
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
          className="grid gap-4 mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 "
        >
          {products.map((product) => (
            <section
              key={product.id}
              className="p-1 border border-purpleDark rounded-lg w-full"
            >
              <img
                src={product.cover}
                alt=""
                className="w-full rounded-lg max-h-72 object-cover"
              />
              <p className="text-white font-medium mt-1 mb-2">
                {product.title}
              </p>
              <div className="flex items-center justify-center gap-3 ">
                <strong className="text-white text-3xl">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>

                <button className="bg-primaryLight p-1 rounded cursor-pointer">
                  <BsCartPlus size={20} color="#FFF" />
                </button>
              </div>
              <p className="text-zinc-400">Em até 2x de R$ 122,50 sem juros</p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
