import Image from "next/image"
// import { getAllProducts } from "@/lib/actions"
import ProductCard from "@/components/ProductCard"
import Searchbar from "@/components/Searchbar";
import HeroCarousel from "@/components/HeroCarousel";


const Home = async () => {
  const allProducts: any[] = [
  {
    _id: "1",
    title: "Apple iPhone 16 Pro Max",
    image:require("../public/assets/images/hero-1.svg"),
    category: "Smartphones",
    currency: "$",
    currentPrice: 1199,
  },
  {
    _id: "2",
    title: "Sony WH-1000XM5 Headphones",
    image: require("../public/assets/images/hero-2.svg"),
    category: "Audio",
    currency: "$",
    currentPrice: 399,
  },
  {
    _id: "3",
    title: "Apple MacBook Pro M4",
    image:require("../public/assets/images/hero-3.svg"),
    category: "Laptops",
    currency: "$",
    currentPrice: 1999,
  },
  {
    _id: "4",
    title: "Samsung Galaxy S25 Ultra",
    image:require("../public/assets/images/hero-4.svg"),
    category: "Smartphones",
    currency: "$",
    currentPrice: 1299,
  },
];

  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center"> 
            <p className="flex gap-2 text-md font-medium text-red-500">
              Smart Shopping Starts Here:
              <Image 
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>

            <h1 className="mt-4 text-6xl leading-[72px] font-bold tracking-[-1.2px] text-gray-900">
              Unleash the Power of
              <span className="text-red-600"> ShopSmart</span>
            </h1>

            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
            </p>
            <Searchbar />
          </div>
          <HeroCarousel/>
        </div>
      </section>

      <section className="flex flex-col gap-10 px-6 md:px-20 py-24">
        <h2 className="text-secondary text-[32px] font-semibold">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home