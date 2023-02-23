import Image from 'next/image'
import Link from 'next/link'
import { BsFillInfoSquareFill } from 'react-icons/bs'
import { FaEuroSign,FaHeadphones } from 'react-icons/fa'
import { HiCalendar } from 'react-icons/hi2'
import { SiGooglemaps } from 'react-icons/si'

const MyLoader = () => {
  return ('')
}


const Featured = () => {
  return (
    <>
    <div className="mx-auto mb-30  h-screen justify-center">
      <Image
        className="h-76 w-full md:rounded-xl object-cover  md:h-auto"
        src='./lowlands.jpg'
        loader={MyLoader}
        unoptimized={true}
        width={1024}
        height={800}
        alt="lowlands"
      />
      <div className="flexflex-col justify-between mx-2 md:mx-0 p-2 leading-normal">
          <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight text-emerald-500 md:text-3xl">
          A Campingflight to Lowlands Paradise 2023 
          </h5>

        <hr />


          <div className="flex flex-row mt-5 hover:text-blue-500">
          <Link href="https://goo.gl/maps/8JqMA7k5bLFqDqsA6" target="_blank"><div className='flex flex-row'>
            <SiGooglemaps className="mt-1 mr-2 h-5 w-5 content-center text-emerald-500" />
            Biddinghuizen
            </div>
            </Link>
          </div>

        <div className="mt-5 flex flex-row">
          <HiCalendar className="align-center mt-0.5 mr-1 h-6 w-6 content-center items-center text-emerald-500" />{' '}
          18 - 19 - 20 August 2023
          <div className="ml-2 flex flex-col">12:00 - 00:00</div>
        </div>

        <div className="mt-5 flex flex-row text-xl">
          <BsFillInfoSquareFill className="mt-1 mr-2 h-5 w-5 content-center text-emerald-500" />
        </div>

        <div className="flex max-w-3xl ml-6 flex-row">Lowlands is an annual music and performing arts festival held in the Netherlands. It takes place in the middle of August and lasts for three days. The festival features a wide variety of music, including rock, pop, hip-hop, electronic, folk, jazz, and world music. It also features comedy acts, theater performances, art installations, and other activities. Lowlands has been held since 1993 and is one of the largest festivals in the Netherlands. It attracts over 55,000 visitors each year from all over Europe.</div>

        <div className="mt-5 flex font-semibold flex-row">
          <FaHeadphones className="mr-2 h-5 w-5 content-center text-emerald-500" />
 TBA
        </div>

        <div className="mt-10 flex flex-row mb-20">
          <div className="flex flex-grow items-center  justify-start text-xl">
            <FaEuroSign className='mr-2 h-5 w-5 content-center text-emerald-500' /> 300
          </div>

          <div className="flex justify-end">
            <button className="rounded-full bg-emerald-500 px-6 py-2 text-white hover:bg-emerald-600">
              <Link href="https://lowlands.nl/" target="_blank">
                Get Tickets
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>



{/* Open Air  */}



    <div className="mx-auto mb-30 h-screen justify-center">
      <Image
        className="h-76 w-full md:rounded-xl object-cover  md:h-auto"
        src='./aoa.jpg'
        loader={MyLoader}
        unoptimized={true}
        width={1024}
        height={800}
        alt="openair"
      />
      <div className="flexflex-col justify-between mx-2 md:mx-0 p-2 leading-normal">
          <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight text-purple-500 md:text-3xl">
            Amsterdam Open Air 2023 - Gaasperpark
          </h5>

        <hr />


          <div className="flex flex-row mt-5 hover:text-blue-500">
          <Link href="https://goo.gl/maps/8ibcfxgTJnn9xAiZ9" target="_blank"><div className='flex flex-row'>
            <SiGooglemaps className="mt-1 mr-2 h-5 w-5 content-center text-purple-500" />
            Gaasperpark, Amsterdam
            </div>
            </Link>
          </div>

        <div className="mt-5 flex flex-row">
          <HiCalendar className="align-center mt-0.5 mr-1 h-6 w-6 content-center items-center text-purple-500" />{' '}
          3 - 4 June 2023
          <div className="ml-2 flex flex-col">12:00 - 23:00</div>
        </div>

        <div className="mt-5 flex flex-row text-xl">
          <BsFillInfoSquareFill className="mt-1 mr-2 h-5 w-5 content-center text-purple-500" />
        </div>

        <div className="flex max-w-3xl ml-6 flex-row">Every year, in the first weekend of June, a collaboration of friends takes place in Amsterdam&apos;s Gaasperpark. A selection of Amsterdam&apos;s hottest promoters join-up to create a fashion forward festival that reflects the nightlife and art culture in our capital city, being a platform for local talent. Along with a culinary festival kitchen, creative collectives and a cosy four day camping, the visitors experience a weekend full of creativity, friendship and musical expression at Amsterdam Open Air.</div>

        <div className="mt-5 flex font-semibold flex-row">
          <FaHeadphones className="mr-2 h-5 w-5 content-center text-purple-500" />
          Astra Club,
          Claude,
          De Jeugd Van Tegenwoordig,
          Dj Daisy,
          Froukje,
          Kilimanjaro,
          Luuk van Dijk,
          Sim—oj
          and many more...
        </div>

        <div className="mt-10 flex flex-row mb-20">
          <div className="flex flex-grow items-center  justify-start text-xl">
            <FaEuroSign className='mr-2 h-5 w-5 content-center text-purple-500' /> 80 - 120
          </div>

          <div className="flex justify-end">
            <button className="rounded-full bg-purple-500 px-6 py-2 text-white hover:bg-purple-600">
              <Link href="https://www.amsterdamopenair.nl/" target="_blank">
                Get Tickets
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>

{/* Mystic Garden */}

    <div className="mx-auto mb-30 mt-10 h-screen justify-center">
      <Image
        className="h-76 w-full md:rounded-xl object-cover  md:h-auto"
        src='./mysticgarden.jpg'
        loader={MyLoader}
        unoptimized={true}
        width={1024}
        height={800}
        alt="openair"
      />
      <div className="flexflex-col justify-between mx-2 md:mx-0 p-2 leading-normal">
          <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight text-green-500 md:text-3xl">
            Mystic Garden Festival 2023
          </h5>

        <hr />


          <div className="flex flex-row mt-5 hover:text-blue-500">
          <Link href="https://goo.gl/maps/W6aT7ZFuxwsSeKPY6" target="_blank"><div className='flex flex-row'>
            <SiGooglemaps className="mt-1 mr-2 h-5 w-5 content-center text-green-500" />
            Sloterpark, Amsterdam
            </div>
            </Link>
          </div>

        <div className="mt-5 flex flex-row">
          <HiCalendar className="align-center mt-0.5 mr-1 h-6 w-6 content-center items-center text-green-500" />{' '}
          17 June 2023
          <div className="ml-2 flex flex-col">15:00 - 02:00</div>
        </div>

        <div className="mt-5 flex flex-row text-xl">
          <BsFillInfoSquareFill className="mt-1 mr-2 h-5 w-5 content-center text-green-500" />
        </div>

        <div className="flex max-w-3xl ml-6 flex-row">🌺 𝐌𝐘𝐒𝐓𝐈𝐂 𝐆𝐀𝐑𝐃𝐄𝐍 𝐅𝐄𝐒𝐓𝐈𝐕𝐀𝐋
          Above all expectations, we sold out all tickets for Mystic Garden Festival within the pre-registration phase. 🍄
          We thank you for your loyalty to us and we can&apos;t wait to dance together in the Mystic Gardens on June 17th. 🌿
          ➢➢➢➢➢➢➢➢➢➢➢
          It begins with the sound of far-off music echoing through the woods, the drums lightly beating, and the violin tune. The heart of the forest calls you towards it.
          Mystic Garden invites those who hear her call to step through her Gates. An enchanted world brimming with magical creatures, breathtaking decor, and world-class DJs awaits you!
          Come discover Mystic Garden Festival!
          </div>

        <div className="mt-5 flex font-semibold flex-row">
          <FaHeadphones className="mr-2 h-5 w-5 content-center text-green-500" />
          Layton Giordani
          Mitch de Klein
          Olympe
          Teenage Mutants
          Township Rebellion
          Volar
          and many more...
        </div>

        <div className="mt-10 flex flex-row mb-20">
          <div className="flex flex-grow items-center  justify-start text-xl">
            <FaEuroSign className='mr-2 h-5 w-5 content-center text-green-500' /> 75 - 120
          </div>

          <div className="flex justify-end">
            <button className="rounded-full bg-green-500 px-6 py-2 text-white hover:bg-green-600">
              <Link href="https://mysticgardenfestival.nl/mystic-garden-festival-zomer-2023/?fbclid=IwAR0lzIn-I-pc9q_k_e4aJKoMNWdjEgWdQ1tB4JHteqmtKtebFts0bH18eBE" target="_blank">
                Get Tickets
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>


{/* Loveland */}

    <div className="mx-auto mt-10 h-screen justify-center">
      <Image
        className="h-76 w-full md:rounded-xl object-cover  md:h-auto"
        src='./loveland.jpg'
        loader={MyLoader}
        unoptimized={true}
        width={1024}
        height={800}
        alt="openair"
      />
      <div className="flexflex-col justify-between mx-2 md:mx-0 p-2 leading-normal">
          <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight text-cyan-500 md:text-3xl">
            Loveland Festival 2023
          </h5>

        <hr />


          <div className="flex flex-row mt-5 hover:text-cyan-500">
          <Link href="https://goo.gl/maps/W6aT7ZFuxwsSeKPY6" target="_blank"><div className='flex flex-row'>
            <SiGooglemaps className="mt-1 mr-2 h-5 w-5 content-center text-cyan-500" />
            Sloterpark, Amsterdam
            </div>
            </Link>
          </div>

        <div className="mt-5 flex flex-row">
          <HiCalendar className="align-center mt-0.5 mr-1 h-6 w-6 content-center items-center text-cyan-500" />{' '}
          12 August 2023
          <div className="ml-2 flex flex-col">12:00 - 23:00</div>
        </div>

        <div className="mt-5 flex flex-row text-xl">
          <BsFillInfoSquareFill className="mt-1 mr-2 h-5 w-5 content-center text-cyan-500" />
        </div>

        <div className="flex max-w-3xl ml-6 flex-row"> Loveland Festival 2023 is an electronic music festival held in the Netherlands. It takes place in the city of Amsterdam and features some of the biggest names in electronic music. The festival has been running since 1995 and has grown to become one of the most popular festivals in Europe. It features a wide range of genres, from house and techno to drum & bass, dubstep, and more. The festival also includes art installations, live performances, and interactive experiences.</div>

        <div className="mt-5 flex font-semibold flex-row">
          <FaHeadphones className="mr-2 h-12 w-12 content-center text-cyan-500" />
          • Abstract Division
          • Adam Beyer
          • Âme DJ
          • Anfisa Letyago
          • Anouschka
          • Ben Klock
          • Black Coffee
          • Carmen Lisa
          • Chris Liebing
          • Chris Stussy
          • Christian Smith
          • DAF
          • Dam Swindle
          • Depth over Distance
          • Dixon
          • Dubfire
          • Egbert LIVE
          • Eric Prydz
          • GHEIST
          • Guy J
          • Hernan Cattaneo & Nick Warren
          • Hollt
          • Honey Dijon 
          and many more
        </div>

        <div className="mt-10 flex flex-row mb-20">
          <div className="flex flex-grow items-center  justify-start text-xl">
            <FaEuroSign className='mr-2 h-5 w-5 content-center text-cyan-500' /> 89,50
          </div>

          <div className="flex justify-end">
            <button className="rounded-full bg-cyan-500 px-6 py-2 text-white hover:bg-cyan-600">
              <Link href="https://loveland.nl/festival/tickets/?fbclid=IwAR2YV-e9xz21aCfgyyDlYH9_z7Lxz2ngR5kloxGiQH2A3pqAQje2skeoaYk" target="_blank">
                Get Tickets
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Featured
