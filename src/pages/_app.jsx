import Header from "@/components/Header"
import "@/styles/globals.css"
import clsx from "clsx"
import { Inter } from "next/font/google"

// eslint-disable-next-line new-cap
const inter = Inter({ subsets: ["latin"] })

export default function App({ Component, pageProps }) {
  return (
    <main className={clsx("flex flex-col dark:text-white", inter.className)}>
      <Header />
      <section>
        <div className="mx-auto max-w-7xl p-4">
          <Component {...pageProps} />
        </div>
      </section>
    </main>
  )
}
