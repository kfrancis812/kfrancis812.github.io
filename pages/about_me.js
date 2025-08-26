import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Roboto } from '@next/font/google'
import { Oswald } from '@next/font/google'
import {Footer} from "../components/Footer";
import {MobileMenuButton} from "../components/Navigation";

const roboto = Roboto({ subsets: ['latin'], weight: ['300'] })
const oswald = Oswald({ subsets: ['latin'] })

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>Kristin Francis</title>
        <meta name="description" content="Kristin Francis Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <main className="flex flex-col">
      <MobileMenuButton/>
        <div className="flex flex-col">
          <div className="pt-14 font-display text-4xl font-normal text-center text-gray-800">
            About <span className="text-[#795A95]">Me </span>
          </div>
          <div className="pt-3 md:pl-20 pl-10 pr-10 md:pr-20 pb-7 text-lg font-light leading-6 text-gray-600 text-center">
          I’m a marketing professional with over ten years of experience who loves working with tech, design, and optimizing. My aim is to always focus on the data without sacrificing the aesthetics.

          </div>
          <div className="md:pl-20 pl-10  pr-10 md:pr-20">
            <div className="w-full bg-gradient-to-tr from-tan to-vlightpurple rounded-lg ">  <Image className="w-full"
                src="/about_me_4.png"
                alt="Flyer"
                width={5000}
                height={3000}

              />
            </div>

          </div>

        </div>
        <div className="flex flex-row justify-between text-sm pb-16 pt-10 md:pl-20 pl-10 pr-10 md:pr-20">
          <div className="flex flex-col flex-1">
            <div className="flex flex-row flex-wrap justify-between">
              <div className="flex flex-col pt-5 pr-5">
              <div className="flex flex-row items-center">
            <div className="h-0.5 w-5 bg-[#D9D9D9]">
            </div>
            <div className="font-display text-2xl font-normal pl-2 text-gray-800 ">
            My <span className="text-darkpurple">Background</span>
            </div>
          </div>
                <div className="font-light text-base pt-5 leading-6 text-gray-600">
                Throughout my decade-long career, I've partnered with B2B and B2C companies to build and optimize their marketing ecosystems. From managing complex tech stacks and analyzing campaign performance to developing creative assets and streamlining processes, I thrive on solving multifaceted marketing challenges.
                </div>
              </div>
              <div className="font-light text-base pt-5 leading-6 text-gray-600">
              My experience spans the full marketing spectrum—starting in design and expanding into event management, email marketing, demand generation, and marketing operations. Working primarily with agile, smaller teams has given me the versatility to adapt quickly and contribute across diverse marketing functions.
              </div>
              <div className="font-light text-base pt-5 leading-6 text-gray-600">
              I'm based in Louisville, Kentucky, where I live with my husband and our fur-babies. When I'm not optimizing campaigns or planning out designs, you'll find me traveling, hiking, reading, working on puzzles, playing ultimate frisbee, or spending time with my cats.
              </div>

            
            </div>
            <div className="flex flex-row  pt-10 pb-10 ">
          <Link target="_blank" href="https://www.linkedin.com/in/kristin-francis/"><button className="pt-2 pb-2 pr-8 pl-8 rounded-full font-display bg-golden text-[#262626] hover:bg-ltgolden tracking-wide">VIEW FULL RESUME ON LINKEDIN</button></Link>
        </div>
          </div>

        </div>
        <div className="flex flex-col flex-1 pb-20  md:pl-20 pl-10 pr-10 md:pr-20">
          <div className="flex flex-row items-center">
            <div className="h-0.5 w-5 bg-[#D9D9D9]">
            </div>
            <div className="font-display text-2xl font-normal pl-2 text-gray-800">
            My <span className="text-darkpurple">Specialities</span>
            </div>
          </div>
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-4 ">
                <div className="pt-5 flex flex-col w-full bg-tan rounded-lg p-5">
                  <div className="font-display text-neutral-600 text-lg">
                    Marketing & Marketing Operations
                  </div>
                  <div className="text-sm pt-2 leading-5 text-neutral--800">
                    From campaign setup and tool implementation to performance analysis and optimization strategies, I help businesses build marketing systems that scale and deliver measurable results.
                  </div>
                </div>
                <div className="pt-5 flex flex-col w-full bg-tan rounded-lg p-5 text-darkpgray">
                  <div className="font-display text-neutral-600 text-lg">
                    User Experience & Design
                  </div>
                  <div className="text-sm pt-2 leading-5 text-neutral-800">
                   I create compelling visual experiences and intuitive user journeys that drive engagement, conversions, and revenue growth through thoughtful design and strategic thinking.
                  </div>

                </div>
                <div className="pt-5 flex flex-col w-full bg-tan rounded-lg p-5 text-darkpgray">
                  <div className="font-display text-neutral-600 text-lg">
                    Organization & Process Creation
                  </div>
                  <div className="text-sm pt-2 leading-5 text-neutral-800">
                    I excel at identifying inefficiencies and creating streamlined workflows. By analyzing current processes and gathering team feedback, I develop solutions that improve productivity and outcomes.
                  </div>

                </div>
              </div>
        

        </div>
        <div>
        <div className="flex flex-col flex-1 pb-20 pt-5  md:pl-20 pl-10 pr-10 md:pr-20 bg-[#F0E8EB]">
          <div className="pt-14 font-display text-4xl font-normal text-center text-gray-800">
          Interest <span className="text-[#795A95]">peaked?</span> 🤩 
          </div>
          <div className="pt-3 md:pl-20 pl-10 pr-10 md:pr-20 pb-7 text-lg font-light leading-6 text-center text-gray-700">
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
