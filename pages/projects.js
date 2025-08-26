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
        <div className="flex flex-col "> 
          <div className="pt-14 font-display text-4xl font-normal text-center text-gray-800">
          <span className="text-[#795A95]">Projects </span>& <span className="text-[#795A95]">Work</span>
          </div>
          <div className="pt-3 md:pl-20 pl-10 pr-10 md:pr-20 pb-7 text-lg font-light leading-6 text-center text-gray-600">
                Below are just a select few pieces of work and projects that I&apos;ve created or participated in. 
          </div>


        </div>
        <div className="md:pl-20 pl-10 pt-10 pr-10 md:pr-20  grid grid-cols-1 sm:grid-cols-2 gap-10 text-darkpgray">

        <Link href="/projects/digital_design"><div className="flex flex-col w-full bg-tan rounded-lg ">
            <div  >
              <Image className="w-full"
                src="/db-portfolio.png"
                alt="Digital Design"
                width={1136}
                height={772}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg ">
              <div className="font-display text-xl text-neutral-600 ">
                Cross-Platform Marketing Materials
              </div>
              <div className="text-md pt-2 leading-5 text-neutral-500 pb-5 h-22 lg:h-24">
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
        <Link href="/projects/digital_print"><div className="flex flex-col w-full bg-tan rounded-lg ">
            <div  >
              <Image className="w-full"
                src="/deck_small.png"
                alt="Digital & Print Design"
                width={1136}
                height={772}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg ">
              <div className="font-display text-xl text-neutral-600 ">
                Digital Marketing Overhaul
              </div>
              <div className="text-md pt-2 leading-5 text-neutral-500 pb-5 h-22 lg:h-24">
              Developed cohesive marketing materials for a premium deck construction business, crafting landing pages, detailed project showcase collateral, and strategic ad campaigns that highlighted custom design capabilities and attracted qualified leads."

          
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
              <div className="font-display text-xl text-neutral-600 ">
                Landing Page Creation & Optimization
              </div>
              <div className="text-md pt-2 leading-5 text-neutral-500 pb-5 h-22 lg:h-24">
              Developed conversion-focused landing pages and implemented data-driven optimization strategies, with plans to test multiple variations of imagery, headlines, and layouts to maximize lead quality and overall campaign performance.

          
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
              <div className="font-display text-xl text-neutral-600 ">
              End-to-End Portfolio & Brand Design
              </div>
              <div className="text-md pt-2 leading-5 text-neutral-500 pb-5 h-22 lg:h-24">
              Created a custom portfolio website handling the entire design and development process, from early-stage wireframing and prototyping through responsive front-end coding and user experience optimization.
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
              <div className="font-display text-xl text-neutral-600 ">
                Traditional Watercolor Painting
              </div>
              <div className="text-md pt-2 leading-5 text-neutral-500 pb-5 h-18 md:h-24 lg:h-18">
                Beyond digital design work, I explore traditional watercolor techniques as a creative outlet, which informs my approach to color theory, composition, and visual storytelling in my professional projects.
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
              <div className="font-display text-xl text-neutral-600 ">
                Event Marketing Flyer Design
              </div>
              <div className="text-md pt-2 leading-5 text-neutral-500 pb-5 h-18 md:h-24 lg:h-18">
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
