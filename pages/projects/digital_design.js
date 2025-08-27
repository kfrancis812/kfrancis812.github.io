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
  Cross-Platform Marketing Materials
          </div>
          <div className="pt-3 md:pl-20 pl-10 pr-10 md:pr-20 pb-7 text-lg font-light leading-6 text-center text-gray-600">
              Designed integrated marketing assets for a popular arcade-restaurant chain, crafting everything from eye-catching social posts and targeted ads to promotional emails and event flyers that captured the brand's energetic, family-friendly atmosphere.

          </div>
          <div className="md:pl-20 pl-10  pr-10 md:pr-20">
            <div className="w-full bg-gradient-to-tr from-tan to-vlightpurple ">  <Image className="w-full"
                src="/db-portfolio-large.png"
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
                  The client needed a cohesive set of marketing materials to promote seasonal events, new menu items, and special promotions across multiple channels. 
                  </div>
              </div>
              <div className="flex flex-col pt-5 md:w-6/12 md:pl-5 text-gray-600">
                <div className="font-display text-lg text-gray-800">
                  The Request
                </div>
                <div className="font-light text-base pt-2 leading-5 text-gray-600">
They wanted to maintain brand consistency while creating fresh, engaging content that would resonate with their diverse audience of families, young adults, and birthday party hosts.
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
                I developed an integrated marketing approach that balanced the brand's high-energy arcade atmosphere with their family-dining appeal. The process began with analyzing their existing brand guidelines and target audience segments, then creating a flexible design system that could adapt across digital and print formats.
For social media, I designed vibrant, action-packed posts featuring bold typography and dynamic layouts that would stand out in crowded feeds. Email campaigns focused on clear hierarchy and compelling calls-to-action, while print flyers emphasized eye-catching visuals and essential event information for quick scanning.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-10 pb-10 ">
            <div className="pt-5 w-full bg-[#F0E8EB] rounded-lg p-5 snap-center">
              <Image
                src="/db_left-mockup.jpg"
                alt="Digital Brainstorming"
                width={721}
                height={618}
                priority
              />
            </div>
            <div className="pt-5 w-full bg-[#F0E8EB] rounded-lg p-5 snap-center">
              <Image
                src="/db_right-mockup.jpg"
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
                The campaign successfully increased social media engagement by maintaining visual consistency across all touchpoints while allowing each piece to serve its specific purpose. The integrated approach helped reinforce brand recognition and created a seamless experience whether customers encountered the brand online or in-person.

                </div>
            </div>
            <div className="flex flex-col pt-5 md:w-6/12 md:pl-5">
              <div className="font-display text-lg text-gray-800">
                What I did/didn’t do
              </div>
              <div className="font-light text-base pt-2 leading-5 text-gray-600">
               What I Did

  <ul className="list-disc list-inside font-light text-base pt-2 leading-6 text-gray-600">
    <li>Visual design for all marketing materials</li>
    <li>Adaptation of brand guidelines across multiple formats</li>
    <li>Content layout and typography optimization</li>
    <li>Color palette and imagery selection</li>
  </ul>


  <div className="list-disc list-inside font-light text-base pt-2 leading-6 text-gray-600">
    What I Didn’t Do
  </div>
  <ul className="list-disc list-inside font-light text-base pt-2 leading-6 text-gray-600">
    <li>Copywriting (worked with existing brand copy)</li>
    <li>Photography (utilized provided brand assets)</li>
    <li>Campaign strategy development</li>
    <li>Performance analytics and measurement</li>
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
        <Link href="/projects/digital_design"><div className="flex flex-col w-full bg-tan rounded-lg ">
            <div  >
              <Image className="w-full"
             src="/deck_small.png"
                alt="Digital & Print Design"
                width={568}
                height={365}

              />
            </div>
            <div className="flex flex-col bg-[#F3EDF8] pt-5 pr-7 pl-7 pb-5 rounded-b-lg ">
              <div className="font-display text-xl text-neutral-600">
                Digital Marketing Overhaul
              </div>
              <div className="text-md pt-2 leading-5 text-neutral-500 pb-5">
              Developed cohesive marketing materials for a premium deck construction business, crafting landing pages, detailed project showcase collateral, and strategic ad campaigns that highlighted custom design capabilities and attracted qualified leads.
          
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
                End-to-End Portfolio & Brand Design
              </div>
              <div className="text-md pt-2 leading-5 text-neutral-500 pb-5 ">
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


        </div>
        <Footer/>



      </main>

    </>
  )
}
