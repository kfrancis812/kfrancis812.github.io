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
        <title>Landing Page Creation & Optimization</title>
        <meta name="description" content="Landing Page Creation & Optimization" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <main className="flex flex-col">
      <MobileMenuButton/>
        <div className="flex flex-col">
          <div className="pt-14 font-display text-4xl font-normal text-center text-gray-800">
            Landing Page Creation & Optimization
          </div>
          <div className="pt-3 md:pl-20 pl-10 pr-10 md:pr-20 pb-7 text-lg font-light leading-6 text-center text-gray-600">
            Created landing pages and optimized pages by a/b testing images, headlines, and layout to optimize leads and conversions.
          </div>
          <div className="md:pl-20 pl-10  pr-10 md:pr-20">
            <div className="w-full bg-gradient-to-tr from-tan to-vlightpurple rounded-lg ">
              <Image className="w-full"
                src="/landingpage_mockup.png"
                alt="Landing Page"
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
                  For the past ten years, I&apos;ve created landing pages with tools such as unbounce and wordpress. Then optimized the pages by a/b testings copy, images, and layout. Recently I&apos;ve started desiging pages from scratch as seen above.</div>
                  </div>
              <div className="flex flex-col pt-5 md:w-6/12 md:pl-5">
                <div className="font-display text-lg text-gray-800" >
                  The Problem & Current Situation
                </div>
                <div className="font-light text-base pt-2 leading-5 text-gray-600">
                Unfortunately, I don&apos;t have a lot of samples of my work that I can share so I decided to design a few landing pages as examples. </div>

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
               To start, I create a moodboard for inspiration and lo-fidelty wireframes or drawings. Then I begin designing the mobile version of the landing page to ensure the design will work for mobile. Then I work on the desktop version and continue to make tweaks and adjustments.        </div>
          
              <div className="font-light text-base pt-2 leading-5 text-gray-600">
               When optimizing, I start by reviewing the performance of the pages such as click rate, click through rate, and conversion rate. I identify areas for opportunity and start setting up tests.       
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-10 pb-10 ">
            <div className=" w-full bg-[#F0E8EB] rounded-lg snap-center">
              <Image
                src="/cat_rescue.png"
                alt="Landing Page 1"
                width={721}
                height={618}
                priority
              />
            </div>
            <div className=" w-full bg-[#F0E8EB] rounded-lg snap-center">
              <Image
                src="/bikeshop_mockup.png"
                alt="Landing Page 2"
                width={721}
                height={618}
                priority
              />
            </div>
            <div className="w-full bg-[#F0E8EB] rounded-lg snap-center">
              <Image
                src="/travelagency_V2.png"
                alt="Landing Page 3"
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
              Throughout my career I&apos;ve created numerous landing pages and many more tests on the landing pages. Improving performance such as click through rate and conversion rate.</div>
            </div>
            <div className="flex flex-col pt-5 md:w-6/12 md:pl-5">
              <div className="font-display text-lg text-gray-800">
                What I did/didn&apos;t do
              </div>
              <div className="font-light text-base pt-2 leading-5 text-gray-600">
              The design on this page are pages I designed for this portfolio, they are not live pages and haven&apos;t been tested.</div>

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
        <div className="md:pl-20 pl-10 pt-10 pr-10 md:pr-20  pb-20 grid grid-cols-1 sm:grid-cols-2 gap-10 text-darkpgray">
        <Link href="/projects/portfolio"><div className="flex flex-col w-full bg-tan rounded-lg ">
            <div >
              <Image className="w-full"
                src="/db-portfolio.png"
                alt="Digital Design"
                width={1136}
                height={772}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg">
              <div className="font-display text-xl text-neutral-600">
              Cross-Platform Marketing Materials
              </div>
              <div className="text-md pt-2 leading-5 text-neutral-500 pb-5 ">
              Designed integrated marketing assets for a popular arcade-restaurant chain, crafting everything from eye-catching social posts and targeted ads to promotional emails and event flyers that captured the brand's energetic, family-friendly atmosphere.
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
          <Link href="/projects/flyer"><div className="flex flex-col w-full bg-tan rounded-lg mt-16 -mt-0">
            <div>
              <Image className="w-full"
                src="/bridal_show_small_2.png"
                alt="Bridal Show Flyer"
                width={568}
                height={365}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg ">
              <div className="font-display text-xl text-neutral-600">
                Event Marketing Flyer Design
              </div>
              <div className="text-md pt-2 leading-5 text-neutral-500 pb-5 ">
                Created a compelling event flyer that effectively explained the service process and included strategic calls-to-action to convert event attendees into qualified website visitors and potential clients.
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
