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
        <title>                Digital Marketing Overhaul
</title>
        <meta name="description" content="Bridal Show Flyer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <main className="flex flex-col">
      <MobileMenuButton/>
        <div className="flex flex-col">
          <div className="pt-14 font-display text-4xl font-normal text-center text-gray-800">
                Digital Marketing Overhaul
          </div>
          <div className="pt-3 md:pl-20 pl-10 pr-10 md:pr-20 pb-7 text-lg font-light leading-6 text-center text-gray-600">
              Developed cohesive marketing materials for a premium deck construction business, crafting landing pages, detailed project showcase collateral, and strategic ad campaigns that highlighted custom design capabilities and attracted qualified leads."

          </div>
          <div className="md:pl-20 pl-10  pr-10 md:pr-20">
            <div className="w-full bg-gradient-to-tr from-tan to-vlightpurple ">  <Image className="w-full"
                src="/deck_large.png"
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
A premium deck construction company needed to refresh their existing marketing materials and improve lead generation.                    </div>
              </div>
              <div className="flex flex-col pt-5 md:w-6/12 md:pl-5 text-gray-600">
                <div className="font-display text-lg text-gray-800">
                  The Request
                </div>
                <div className="font-light text-base pt-2 leading-5 text-gray-600">
They required updated landing pages, refreshed project portfolios, and new advertising materials that would better showcase their craftsmanship and attract qualified homeowners planning outdoor renovation projects.
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
I created an enhanced marketing approach that built upon their existing brand foundation while elevating their market positioning. The process started with analyzing their current materials and target customer demographics, then developing an updated visual approach that better communicated quality and expertise.              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-10 pb-10 ">
            <div className="pt-5 w-full bg-[#F0E8EB] rounded-lg p-5 snap-center">
              <Image
                src="/deck_left.jpg"
                alt="Digital Brainstorming"
                width={721}
                height={618}
                priority
              />
            </div>
            <div className="pt-5 w-full bg-[#F0E8EB] rounded-lg p-5 snap-center">
              <Image
                src="/deck_right.jpg"
                alt="Digital Brainstorming"
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
The refreshed marketing materials created a more professional and cohesive brand presence across all touchpoints. The updated designs better showcased the company's work quality and expertise, supporting their positioning in the premium market segment.
            </div>
            </div>
            <div className="flex flex-col pt-5 md:w-6/12 md:pl-5">
              <div className="font-display text-lg text-gray-800">
                What I did/didn’t do
              </div>
              <div className="font-light text-base pt-2 leading-5 text-gray-600">
               What I Did

  <ul className="list-disc list-inside font-light text-base pt-2 leading-6 text-gray-600">
    <li>Landing page design and user experience optimization</li>
    <li>Multi-page sales collateral layout and design</li>
    <li>Digital and print advertisement creation</li>
    <li>Brand visual consistency across all materials</li>
  </ul>


  <div className="list-disc list-inside font-light text-base pt-2 leading-6 text-gray-600">
    What I Didn’t Do
  </div>
  <ul className="list-disc list-inside font-light text-base pt-2 leading-6 text-gray-600">
    <li>Copywriting (collaborated with existing sales messaging)</li>
    <li>Website development/coding</li>
    <li>Photography (worked with client-provided project images)</li>
    <li>Advertising campaign management and media buying</li>
  </ul>

               
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
        <div className="md:pl-20 pl-10 pt-10 pr-10 md:pr-20 pb-20 grid grid-cols-1 sm:grid-cols-2 gap-10 text-darkpgray">
        <Link href="/projects/landingpage"><div className="flex flex-col w-full bg-tan rounded-lg ">
            <div  >
              <Image className="w-full"
                src="/db-portfolio.png"
                alt="Digital Design"
                width={568}
                height={365}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg ">
              <div className="font-display text-xl text-neutral-600">
                Cross-Platform Marketing Materials
              </div>
              <div className="text-md pt-2 leading-5 text-neutral-500 pb-5">
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
          <Link href="/projects/portfolio"><div className="flex flex-col w-full bg-tan rounded-lg ">
            <div >
              <Image className="w-full"
                src="/bridal_show_small_2.png"
                alt="Bridal Show"
                width={1136}
                height={772}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg">
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
