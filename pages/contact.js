import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Roboto } from '@next/font/google'
import { Oswald } from '@next/font/google'
import {Footer} from "../components/Footer";
import {MobileMenuButton} from "../components/Navigation";



const roboto = Roboto({ subsets: ['latin'], weight: ['300'] })
const oswald = Oswald({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Kristin Francis</title>
        <meta name="description" content="Kristin Francis Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <main className="flex flex-col w-full">
      <MobileMenuButton/>
        <div className="flex flex-row flex-wrap justify-between text-sm">
            <div className="flex flex-col md:w-6/12 pb-10 md:pb-20 ">
              <div className="pt-20 md:pl-20 pl-10 font-display text-4xl font-normal text-gray-800">
                Interest <span className="text-[#795A95]"> peaked?</span> 🤩

              </div>
              <div className="pt-3 md:pl-20 pl-10 pr-10 text-xl font-light leading-7 text-gray-600">
              Let&apos;s make something special. Whether it&apos;s creating a process or desiging a user experience, I&apos;m ready to dive in and help solve problems and optimize.

              </div>
              <div className="md:pl-20 pl-10 pt-5 flex flex-row">
                <Link href="mailto:kristinfrancisdesign@gmail.com"><button className="pt-2 pb-2 pr-8 pl-8 rounded-full font-display bg-golden text-[#262626] hover:bg-ltgolden tracking-wide">EMAIL ME</button></Link>
                <Link target="_blank" href="https://www.linkedin.com/in/kristin-francis/"><button className="ml-5 pt-2 pb-2 pr-8 pl-8 rounded-full font-display bg-coral text-[#262626] hover:bg-ltcoral tracking-wide">CONNECT ON LINKEDIN</button></Link>
              </div>
            </div>
            <div className="pr-10 md:w-6/12 pl-10 md:pt-16 md:pb-80 pb-10">

              <Image
                src="/contact_lizard_v3.png"
                alt="Kristin Francis"
                width={600}
                height={640}

              />


            </div>
          </div>
        
          <Footer/>
        


      </main>

    </>
  )
}
