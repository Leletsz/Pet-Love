import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

export function Cart() {
  const { cart, total, addItemCart, removeItemCart } = useContext(CartContext);
  return (
    <div>
      <h1 className="text-center font-bold py-5 text-3xl">
        Carrinho de compras
      </h1>
      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <p className="font-medium">Ops... seu carrinho está vazio</p>
          <Link
            className="bg-slate-600 my-3 p-1 px-3 text-white font-medium rounded "
            to={"/"}
          >
            Acessar Produtos
          </Link>
        </div>
      )}
      <main className="w-full max-w-7xl px-3 pt-24 mb-8 mx-auto">
        {cart.map((item) => (
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <section className="w-full">
              <article key={item.id} className="border-b  py-2.5 ">
                <div className="flex items-center sm:items-start">
                  <img
                    className=" rounded-lg w-20"
                    src="https://sujeitoprogramador.com/wp-content/uploads/2023/06/racao1.png"
                  ></img>
                  <div className="w-full sm:flex justify-between sm:gap-4">
                    <div className="px-2">
                      <h2 className="text-2xl ">
                        Ração Royal Canin Medium Ageing 15kg
                      </h2>
                      <p className="text-left text-green-300">Em estoque</p>
                    </div>
                    <div className="text-3xl sm:text-right">
                      <span>R$ 475,99</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center  gap-3">
                  <div className="flex border rounded-2xl gap-6">
                    <button
                      onClick={() => addItemCart}
                      className="cursor-pointer px-1.5 rounded text-white font-medium flex items-center justify-center"
                    >
                      +
                    </button>
                    1
                    <button
                      onClick={() => removeItemCart}
                      className="cursor-pointer px-1.5 rounded text-white font-medium flex items-center justify-center"
                    >
                      -
                    </button>
                  </div>

                  <button className="cursor-pointer border rounded-2xl py-1 px-3 text-red-500">
                    Excluir
                  </button>
                </div>
              </article>
            </section>
            <section className="flex flex-col w-full md:max-w-xs rounded-md border border-gray-200 shadow max-h-fit p-4">
              <h2 className="text-2xl">Resumo da compra</h2>
              <p className="mb-3">Produtos ({cart.length})</p>
              <div className="py-2 flex justify-between">
                <span className="font-bold text-2xl ">Total</span>
                <span className="font-bold text-2xl ">{total}</span>
              </div>

              <button className="mt-4 bg-primary text-white py-2 rounded cursor-pointer">
                Comprar agora
              </button>
            </section>
          </div>
        ))}
      </main>
    </div>
  );
}
