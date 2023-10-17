import Head from "next/head";
import {
  HeartIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react";
import SlidingCarousel from "~/components/SlidingCarousel";
import CodeCTA from "~/components/CodeCTA";

export default function Home() {
  return (
    <>
      <Head>
        <title>Code Shop</title>
        <meta name="description" content="code shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex place-content-start items-center bg-[#231f20] px-4 text-white">
        <div className="logo max-h-full max-w-full ">
          <img src="./logo.png" className="h-20 w-20" />
        </div>
        <div className="aside-except-logo flex flex-grow place-content-evenly pt-2">
          <div className="navlinks  hidden gap-x-6 font-bold sm:flex">
            {/* Hide on small screens */}
            <div className="navlink">Home</div>
            <div className="navlink">Category</div>
            <div className="navlink">My Orders</div>
            <div className="navlink">More</div>
          </div>
          <div className="search-flex  hidden sm:flex">
            {/* Hide on small screens */}
            <div className="logo pr-2">
              <SearchIcon />
            </div>
            <div className="input">
              <input
                className="rounded-full placeholder:pl-2"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="extra-icons flex gap-x-2">
          <div className="user">
            <UserIcon />
          </div>
          <div className="wishlist">
            <HeartIcon />
          </div>
          <div className="cart">
            <ShoppingCartIcon />
          </div>
        </div>
      </div>

      <SlidingCarousel />
      <CodeCTA />
    </>
  );
}
