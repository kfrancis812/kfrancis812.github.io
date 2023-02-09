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
        <title>Projects</title>
        <meta name="description" content="Projects & Work" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <main className="flex flex-col">
      <MobileMenuButton/>
        <div className="flex flex-col">
          <div className="pt-14 font-display text-4xl font-normal text-center text-gray-800">
          <span className="text-[#795A95]">Projects </span>& <span className="text-[#795A95]">Work</span>
          </div>
          <div className="pt-3 md:pl-20 pl-10 pr-10 md:pr-20 pb-7 text-lg font-light leading-6 text-center text-gray-600">
                Below are just a select few pieces of work and projects that I&apos;ve created or participated in. 
          </div>


        </div>
        <div className="md:pl-20 pl-10 pt-10 pr-10 md:pr-20  grid grid-cols-1 sm:grid-cols-2 gap-10 text-darkpgray">
        <Link href="/projects/landingpage"><div className="flex flex-col w-full bg-tan rounded-lg ">
            <div  >
              <Image className="w-full"
                src="/landingpage_small.png"
                alt="Landing Page"
                width={1136}
                height={772}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg ">
              <div className="font-display text-lg text-neutral-600 ">
                Landing Page Creation & Optimization
              </div>
              <div className="text-sm pt-2 leading-5 text-neutral-500 pb-5 h-22 lg:h-24">
              Created landing pages and optimized pages by a/b testing images, headlines, and layout to optimize leads and conversions.
          
              </div>
              <div className="self-end flex flex-row pt-2 pb-2  pl-6">
              <button className="pr-1 font-display text-coral text-[16px]  self-end tracking-wide">LEARN MORE</button>
              <div className="pt-[3px]">
              <Image 
                src="/arrow_circle_right.png"
                alt="Arrow"
                width={20}
                height={20}

              />
            </div>
              </div>
            </div>
          </div></Link>
          <Link href="/projects/portfolio"><div className="flex flex-col w-full bg-tan rounded-lg ">
            <div  >
              <Image className="w-full"
                src="/portfolio_mockup_sm_final.png"
                alt="Landing Page"
                width={1136}
                height={772}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg ">
              <div className="font-display text-lg text-neutral-600 ">
              My Brand: Portfolio
              </div>
              <div className="text-sm pt-2 leading-5 text-neutral-500 pb-5 h-22 lg:h-24">
              Designed my portfolio from start to finish. Starting with lo-fi protoypes to coding the final website. 
              </div>
              <div className="self-end flex flex-row pt-2 pb-2  pl-6">
              <button className="pr-1 font-display text-coral text-[16px]  self-end tracking-wide">LEARN MORE</button>
              <div className="pt-[3px]">
              <Image 
                src="/arrow_circle_right.png"
                alt="Arrow"
                width={20}
                height={20}

              />
            </div>
              </div>
            </div>
          </div></Link>
          

          <Link href="/projects/watercolor"><div className="flex flex-col w-full bg-tan rounded-lg ">
            <div>
              <Image className="w-full"
                src="/cat-watercolor-2.png"
                alt="Landing Page"
                width={1136}
                height={772}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg ">
              <div className="font-display text-lg text-neutral-600 ">
                Traditional Watercolor Painting
              </div>
              <div className="text-sm pt-2 leading-5 text-neutral-500 pb-5 h-18 md:h-24 lg:h-18">
                Along with graphic design and user experience, I enjoy watercolor painting in my spare time.
              </div>
              <div className="self-end flex flex-row pt-2 pb-2  pl-6">
              <button className="pr-1 font-display text-coral text-[16px]  self-end tracking-wide">LEARN MORE</button>
              <div className="pt-[3px]">
              <Image 
                src="/arrow_circle_right.png"
                alt="Arrow"
                width={20}
                height={20}

              />
            </div>
              </div>
            </div>
          </div></Link>
          <Link href="/projects/flyer"><div className="flex flex-col w-full bg-tan rounded-lg">
            <div>
              <Image className="w-full"
                src="/bridal_show_small_2.png"
                alt="Bridal Show Flyer"
                width={1136}
                height={772}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg ">
              <div className="font-display text-lg text-neutral-600 ">
                Bridal Show Flyer
              </div>
              <div className="text-sm pt-2 leading-5 text-neutral-500 pb-5 h-18 md:h-24 lg:h-18">
                Designed a flyer for a bridal show to show how the service worked and drive traffic to the website post event.
              </div>
              <div className="self-end flex flex-row pt-2 pb-2  pl-6">
              <button className="pr-1 font-display text-coral text-[16px]  self-end tracking-wide">LEARN MORE</button>
              <div className="pt-[3px]">
              <Image 
                src="/arrow_circle_right.png"
                alt="Arrow"
                width={20}
                height={20}

              />
            </div>
              </div>
            </div>
          </div></Link>
          <Link href="/projects/business_cards"><div className="flex flex-col w-full bg-tan rounded-lg">
            <div>
              <Image className="w-full"
                src="/business_cards_sm.png"
                alt="Business Cards"
                width={1136}
                height={772}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg ">
              <div className="font-display text-lg text-neutral-600 ">
                My Brand: Business Cards
              </div>
              <div className="text-sm pt-2 leading-5 text-neutral-500 pb-5 h-18 md:h-24 lg:h-18">
              Designed my logo, brand and style guides for my portfolio and buisness cards.

              </div>
              <div className="self-end flex flex-row pt-2 pb-2  pl-6">
              <button className="pr-1 font-display text-coral text-[16px]  self-end tracking-wide">LEARN MORE</button>
              <div className="pt-[3px]">
              <Image 
                src="/arrow_circle_right.png"
                alt="Arrow"
                width={20}
                height={20}

              />
            </div>
              </div>
            </div>
          </div></Link>
          
        </div>

        <div className="pt-40">
        <div className="flex flex-col flex-1 pb-20 pt-5  md:pl-20 pl-10 pr-10 md:pr-20 bg-[#F0E8EB]">
          <div className="pt-14 font-display text-4xl font-normal text-center">
          Interest <span className="text-[#795A95]">peaked?</span> 🤩 
          </div>
          <div className="pt-3 md:pl-20 pl-10 pr-10 md:pr-20 pb-7 text-lg font-light leading-6 text-center">
          Let’s make something special. 
          </div>
          <div className="self-center">
          <Link href="/contact"><button className="pt-2 pb-2 pr-8 pl-8 rounded-full font-display bg-golden text-[#262626] hover:bg-ltgolden tracking-wide">CONTACT ME</button></Link>
          </div>
        </div>
          
        </div>




        


        <Footer/>



      </main>

    </>
  )
}
