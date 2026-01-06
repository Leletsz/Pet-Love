//npx json-server --watch db.json --port 3000
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { api } from "../../services/api";
import background from "../../assets/background.png";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export interface ProductsProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}
export function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const { addItemCart } = useContext(CartContext);

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (err) {
        console.log("Erro ao carregar os produtos = " + err);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  if (loading) {
    return (
      <h1 className="text-center text-white text-3xl my-8">
        Carregando produtos...
      </h1>
    );
  }

  function handleAddCartItem(product: ProductsProps) {
    addItemCart(product);
    console.log("boa");
    toast.success("Produto adicionado!");
  }
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <section
        className={`w-full text-center flex rounded-2xl items-center justify-start min-h-screen bg-cover bg-center bg-no-repeat relative md:bg-left  `}
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          WebkitMaskImage:
            "linear-gradient(  black 20%, black 80%, transparent 100%)",
        }}
      >
        <div className="text-left ml-20">
          <h1 className="text-5xl font-bold font-diff text-white py-6">
            Cuidado e <strong className="text-primary">Amor</strong> para seu
            Pet
          </h1>
          <a
            href="#products"
            className="scroll-smooth border-none max-w-54 flex gap-2 items-center font-diff font-bold cursor-pointer rounded-3xl  px-3 py-1.5 bg-primary text-white"
          >
            Conhecer Produtos
            <IoIosArrowForward />
          </a>
        </div>
      </section>

      <main className="w-full max-w-7xl mx-auto px-4 text-center ">
        <h1 className="text-3xl flex gap-2 font-bold items-center justify-center font-diff text-white py-6">
          Nossos produtos{" "}
          <span className="flex font-light text-xl ">
            ({products.length} produtos)
          </span>
        </h1>

        <div
          id="products"
          className="max-h-screen grid gap-4 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 "
        >
          {products.map((product) => (
            <section
              key={product.id}
              className="p-1 border mb-4 border-purpleDark rounded-lg w-full"
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

                <button
                  onClick={() => handleAddCartItem(product)}
                  className="bg-primaryLight p-1 rounded cursor-pointer"
                >
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
