import React, { useContext } from 'react';
import Head from "next/head";
import Link from "next/link";
import { Store } from "@/utils/Store";

export default function Layout({ title, children }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  return (
    <>
      <Head>
        <title>{title ? title + "- The bozz site " : "Bozz"}</title>
        <meta name="yes" content="dab daby dy dabby dap" />
        <link rel="icon" href="/favicon.io"></link>
      </Head>

      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
              <h1 className="text-lg font-bold">Site Bozz</h1>
            </Link>
            <div>
              <Link href="/cart">
                <span className="p-2">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </span>
                  )}
                </span>
              </Link>
              <Link href="/login">
                <span className="p-2">Login</span>
              </Link>
            </div>
          </nav>
        </header>

        <main className="container m-auto mt-4 px-4">{children}</main>

        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright @ 2023 Mi3</p>
        </footer>
      </div>
    </>
  );
}
