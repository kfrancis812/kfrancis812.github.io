import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Roboto } from '@next/font/google'
import { Oswald } from '@next/font/google'
import {Footer} from "../../components/Footer";
import {MobileMenuButton} from "../../components/Navigation";


const roboto = Roboto({ subsets: ['latin'], weight: ['300'] })
const oswald = Oswald({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My Brand: Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <main className="flex flex-col">
      <MobileMenuButton/>
        <div className="flex flex-col">
          <div className="pt-14 font-display text-4xl font-normal text-center text-gray-800">
            My Brand: Business Cards
          </div>
          <div className="pt-3 md:pl-20 pl-10 pr-10 md:pr-20 pb-7 text-lg font-light leading-6 text-center text-gray-600">
          Designed my logo, brand and style guides for my portfolio and buisness cards.
          </div>
          <div className="md:pl-20 pl-10  pr-10 md:pr-20">
            <div className="w-full bg-tan rounded-lg ">
              <Image className="w-full"
                src="/business_card_lg_v3.png"
                alt="Business Cards"
                width={5000}
                height={3000}

              />
            </div>

          </div>

        </div>
        <div className="flex flex-row justify-between text-sm pb-20 pt-20 md:pl-20 pl-10 pr-10 md:pr-20">
          <div className="flex flex-col flex-1">
            <div className="flex flex-row items-center">
              <div className="h-0.5 w-5 bg-[#D9D9D9]">
              </div>
              <div className="font-display text-3xl font-normal pl-2 text-gray-800">
                Overview
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-between">
              <div className="flex flex-col pt-5 md:w-6/12 pr-5">
                <div className="font-display text-lg text-gray-800">
                  Project Description
                </div>
                <div className="font-light text-base pt-2 leading-5 text-gray-600">
                Before I created my portfolio and business cards I needed to create a logo, branding, and colors.
                   </div>
              </div>
              <div className="flex flex-col pt-5 md:w-6/12 md:pl-5">
                <div className="font-display text-lg text-gray-800">
                  The Problem & Current Situation
                </div>
                <div className="font-light text-base pt-2 leading-5 text-gray-600">
                This was a complete redesign so I had a blank slate to start from. 
                   </div>

              </div>
            </div>
          </div>

        </div>
        <div className="flex flex-col flex-1 pb-20 pt-20 md:pl-20 pl-10 pr-10 md:pr-20 bg-[#FAF7F4]">
          <div className="flex flex-row items-center">
            <div className="h-0.5 w-5 bg-[#D9D9D9]">
            </div>
            <div className="font-display text-3xl font-normal pl-2 text-gray-800">
              The Solution
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-between">
            <div className="flex flex-col pt-5 pr-5">
              <div className="font-display text-lg text-gray-800">
                The Process
              </div>
              <div className="font-light text-base pt-2 leading-5 text-gray-600">
                First I started by creating a moodboard of colors and logo inspiration. From there I played around with different fonts for the logo and color schemes. Once I nailed down a logo and color scheme I started desiginging my business cards.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-10 pb-10">
            <div className="pt-10  bg-[#F0E8EB] rounded-lg p-5  w-full">
              <Image className="w-full"
                src="/logo_v3.png"
                alt="Logos"
                width={400}
                height={618}
                priority
              />
            </div>

            <div className="pt-5 bg-[#F0E8EB] rounded-lg col-span-2 p-5 w-full ">
              <Image className="w-full drop-shadow-md  "
                src="/business_cards_process.png"
                alt="Business Card Process"
                width={721}
                height={618}
                priority
              />
            </div>



          </div>







          <div className="flex flex-row flex-wrap justify-between">
            <div className="flex flex-col pt-5 md:w-6/12 pr-5">
              <div className="font-display text-lg text-gray-800">
                The Results
              </div>
              <div className="font-light text-base pt-2 leading-5 text-gray-600">
                I have a logo, brand, and color scheme for any of my personal projects.</div>
            </div>
            <div className="flex flex-col pt-5 md:w-6/12 md:pl-5">
              <div className="font-display text-lg">
                What I did/didn’t do
              </div>
              <div className="font-light text-base pt-2 leading-5 text-gray-600">
                For this project I designed all the assets from the logo to business cards.
                </div>

            </div>
          </div>

        </div>
        <div className="flex flex-row items-center pt-20 md:pl-20 pl-10 pr-10 md:pr-20 ">
          <div className="h-0.5 w-5 bg-[#D9D9D9]">
          </div>
          <div className="font-display text-3xl font-normal pl-2 text-gray-800">
            Check out another project
          </div>
        </div>
        <div className="md:pl-20 pl-10 pt-10 pr-10 md:pr-20  grid grid-cols-1 sm:grid-cols-2 gap-10 text-darkpgray pb-24">
        <Link href="/projects/landingpage"><div className="flex flex-col w-full bg-tan rounded-lg ">
            <div  >
              <Image className="w-full"
                src="/landingpage_small.png"
                alt="Landing Page"
                width={568}
                height={365}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg ">
              <div className="font-display text-xl text-neutral-600">
                Landing Page Creation & Optimization
              </div>
              <div className="text-md pt-2 leading-5 text-neutral-500 pb-5 ">
              Created landing pages and optimized pages by a/b testing images, headlines, and layout to optimize leads and conversions.</div>
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
            <div >
              <Image className="w-full"
                src="/portfolio_mockup_sm_final.png"
                alt="Portfolio"
                width={1136}
                height={772}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg">
              <div className="font-display text-xl text-neutral-600">
                My Brand: Portfolio
              </div>
              <div className="text-md pt-2 leading-5 text-neutral-500 pb-5 ">
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


        </div>
        <Footer/>



      </main>

    </>
  )
}
