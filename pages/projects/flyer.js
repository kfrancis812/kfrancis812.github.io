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
        <title>Flyer</title>
        <meta name="description" content="Bridal Show Flyer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <main className="flex flex-col">
      <MobileMenuButton/>
        <div className="flex flex-col">
          <div className="pt-14 font-display text-4xl font-normal text-center text-gray-800">
            Bridal Show Flyer
          </div>
          <div className="pt-3 md:pl-20 pl-10 pr-10 md:pr-20 pb-7 text-lg font-light leading-6 text-center text-gray-600">
            Designed a flyer for a bridal show to explain how the service worked and drive traffic to the website post event.

          </div>
          <div className="md:pl-20 pl-10  pr-10 md:pr-20">
            <div className="w-full bg-gradient-to-tr from-tan to-vlightpurple ">  <Image className="w-full"
                src="/bridal_show_large.png"
                alt="Flyer"
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
                  An online platform where customers can rent menswears without visiting a store. This platform allows you to easily rent formalwear by entering a few measurements.                    </div>
              </div>
              <div className="flex flex-col pt-5 md:w-6/12 md:pl-5 text-gray-600">
                <div className="font-display text-lg text-gray-800">
                  The Request
                </div>
                <div className="font-light text-base pt-2 leading-5 text-gray-600">
                  The company was attending an event to collect leads. The goal was to create a flyer to help drive conversions and traffic back to the website post event.

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
                With this project the first task was to go through our collection of photos to find some that would work for this project. After that I started designing the flyer and making the edits needed to the photos. 
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-10 pb-10 ">
            <div className="pt-5 w-full bg-[#F0E8EB] rounded-lg p-5 snap-center">
              <Image
                src="/bridal-flyer-front.jpg"
                alt="Bridal Show Flyer Mockup Front"
                width={721}
                height={618}
                priority
              />
            </div>
            <div className="pt-5 w-full bg-[#F0E8EB] rounded-lg p-5 snap-center">
              <Image
                src="/bridal-flyer_back.jpg"
                alt="Bridal Show Flyer Mockup Back"
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
                The show was a success and we took this flyer to many other shows! We made tweaks along the way to optimize the design and process.</div>
            </div>
            <div className="flex flex-col pt-5 md:w-6/12 md:pl-5">
              <div className="font-display text-lg text-gray-800">
                What I did/didn’t do
              </div>
              <div className="font-light text-base pt-2 leading-5 text-gray-600">
               I designed the piece from a blank slate. I didn&apos;t take the photos or write out the copy.</div>

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
        <div className="md:pl-20 pl-10 pt-10 pr-10 md:pr-20 pb-20 grid grid-cols-1 sm:grid-cols-2 gap-10 text-darkpgray">
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
              <div className="text-md pt-2 leading-5 text-neutral-500 pb-5">
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
