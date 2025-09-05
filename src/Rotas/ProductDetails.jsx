import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../Componentes/Data/ProductsData.js";
import { FaStar, FaRegStar } from "react-icons/fa";

import { useCart } from '../context/CartContext.jsx';
import { usePopup } from "../context/PopUpContext.js";

import ProductForm from "../Componentes/Form/ProductForm.js";
import { ProductGrid } from "../Componentes/ProductGrid/ProductGrid.jsx";
import getRelatedProducts from '../Componentes/Utils/RelatedProducts/getRelatedProducts.jsx';

export default function ProductDetails() {
    const alertFrete = () => alert("Não é possível calcular o frete, pois a compra de produtos está indisponível no momento.")
    const { productId } = useParams();

    const product = useMemo(() => {
        return productsData.find((p) => p.id === productId);
    }, [productId]);

    const { addToCart } = useCart();

    const { openPopup } = usePopup();

    const handleBuyNow = () => {
        openPopup(
            <ProductForm 
                title="Compra Indisponível"
                formOrigin={`Produto: ${product.name}`} 
            />
        );
    };


    const [mainImage, setMainImage] = useState(
        product ? product.imagePath : null
    );

    // Calcula os produtos relacionados com useMemo para otimização
    const relatedProducts = useMemo(() => {
        if (!product) {
            return [];
        }
        return getRelatedProducts(product, productsData, 4);
    }, [product]);

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">
                    Produto não encontrado
                </h1>
                <p className="text-lg text-gray-700">
                    O produto que você está procurando não existe.
                </p>
                <Link to="/produtos" className="mt-6 text-blue-600 hover:underline">
                    Voltar para a lista de produtos
                </Link>
                <p>{`ID do produto: ${productId}`}</p>
            </div>
        );
    }

    if (!mainImage && product.imagePath) {
        setMainImage(product.imagePath);
    }

    return (
        <div className="flex max-w-7xl justify-center items-center mx-4 lg:mx-8 flex-col pt-32 lg:pt-38">
            <div className="grid grid-cols-1 justify-between lg:grid-cols-2 w-full mx-auto gap-4">
                <div className="flex w-full flex-col md:flex-row-reverse items-start md:gap-3">
                    <div className="w-full lg:w-[70%] h-[400px] md:h-[500px] lg:max-h-90 border-2 border-gray-200 flex justify-center items-center p-4 relative overflow-hidden">
                        <img
                            src={mainImage}
                            alt={product.name}
                            className="
                            block m-auto max-w-full max-h-full object-contain
                            transition-transform duration-300 ease-in-out transform hover:scale-150 cursor-zoom-in
                            "
                        />
                    </div>

                    {product.imageGallery && product.imageGallery.length > 1 && (
                        <div className="w-full md:w-[25%] lg:w-full lg:max-w-[18%] mt-4 md:mt-0">
                            <div className="flex flex-row md:flex-col gap-4 lg:gap-3 h-full">
                                {product.imageGallery.map((image, index) => {
                                    return (
                                        <div
                                            key={index}
                                            onClick={() => setMainImage(image)}
                                            className={`
                        border-2 border-gray-200
                        w-1/4 md:w-full
                        cursor-pointer flex h-[100px] md:h-[110px] lg:max-h-[80px] justify-center items-center p-1
                        ${image === mainImage
                                                    ? "border-secondary-color"
                                                    : "hover:border-secondary-color"
                                                }
                        `}
                                        >
                                            <img
                                                src={image}
                                                alt={product.name}
                                                className="block m-auto w-auto max-w-full max-h-full object-contain"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-bold mb-0 mt-0">{product.fullName}</h2>
                        <div className="flex text-lg flex-row items-center">
                            <p className="mr-1">4.0</p>
                            <div className="flex w-full flex-row items-center gap-0.5 after:w-full after:bg-gray-200 after:h-0.5 after:ml-1">
                                <FaStar className="inline text-yellow-500" />
                                <FaStar className="inline text-yellow-500" />
                                <FaStar className="inline text-yellow-500" />
                                <FaStar className="inline text-yellow-500" />
                                <FaRegStar className="inline text-yellow-500" />
                            </div>
                        </div>
                        <p className="text-xl lg:text-2xl font-bold text-secondary-color mt-2">
                            R$ {product.price.toFixed(2).replace(".", ",")}
                        </p>
                    </div>
                        <div className="flex w-full flex-col text-sm lg:text-md gap-2 mt-4 after:w-full after:bg-gray-200 after:h-0.5 after:col-span-2 after:mt-4">
                            <p className="w-full col-span-2 mb-4">Estoque disponível: Até 10 unidades</p>
                            <div className="flex gap-2 font-medium">
                                <button onClick={handleBuyNow} className="bg-black w-auto text-white px-5 py-2 rounded-md hover:bg-secondary-color transition">
                                    Comprar Agora
                                </button>
                                <button onClick={() => addToCart(product)} className="bg-gray-200 text-gray-800 px-5 py-2 rounded-md hover:bg-gray-300 transition">
                                    Adicionar ao carrinho
                                </button>
                            </div>
                        </div>
                        <div>
                            <p className="my-2">Calcular Frete:</p>
                            <div>
                                <input
                                    type="text"
                                    className="border-2 border-gray-200 p-2 rounded-l-2xl placeholder:font-light"
                                    placeholder="Digite seu CEP"
                                />
                                <button onClick={alertFrete} className="bg-black border border-black text-white px-4 py-2 rounded-r-2xl cursor-pointer">
                                    Calcular
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-8">
                    <h4 className="text-xl font-semibold mt-8">Descrição do produto: </h4>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                    {product.details && (
                        <ul className="list-disc list-inside mt-2 ml-8">
                            {product.details.map((detail, index) => (
                                <li key={index} className="text-gray-600 text-[1rem] mt-2">
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    )}
                    {product.included && (
                        <>
                            <p className="text-md mt-2 font-semibold ">Incluso: </p>
                            <ul className="list-disc list-inside mt-2 ml-8">
                                {product.included.map((item, index) => (
                                    <li key={index} className="text-gray-600 text-[1rem] mt-2">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                    <h4 className="text-xl font-semibold mt-8">
                        Especificações Técnicas:
                    </h4>
                    {product.technicalDetails && product.technicalDetails.length > 0 && (
                        <table className="min-w-full lg:mb-8 border-collapse border border-gray-200 mt-4">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border font-semibold border-gray-200 p-2 text-left">
                                        Característica
                                    </th>
                                    <th className="border font-semibold border-gray-200 p-2 text-left">
                                        Detalhe
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.technicalDetails.map((detail, index) => (
                                    <tr className="text-gray-700" key={index}>
                                        <td className="border border-gray-200 p-2">
                                            {detail.characteristic}
                                        </td>
                                        <td className="border border-gray-200 p-2">
                                            {detail.detail}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
                <div>
                    <h4 className="font-semibold text-xl">Você também pode se interessar por:</h4>
                    <ProductGrid className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" products={relatedProducts} />
                </div>
            </div>
    );
}
