import Image from 'next/image'
import imageHero from '@/public/home-1.png'
import Search from '@/components/Search'

export default function Home() {
  return (
    <main>
      <section className='h-[calc(100vh+140px)] 2xl:h-[800px] w-full relative bg-[#F5F5F5]'>
        <div className='py-[150px] container'>
          <div className='max-w-[600px]'>
            <span className='bg-[#F8F9FE] text-main/80 px-6 py-3'>
              REAL ESTATE
            </span>
            <h1 className='mt-8 text-title text-[64px] font-semibold leading-[74px]'>
              Let's hunt for your dream residence
            </h1>
            <p className='mt-6 text-[#73788C]'>
              Explore our range of beautiful properties with the addition of
              separate accommodation suitable for you.
            </p>
          </div>
          <div className='mt-16'>
            <Search />
          </div>
        </div>
        <Image
          src={imageHero}
          className='absolute right-0 bottom-0 w-[600px] h-fit z-0'
        />
      </section>
    </main>
  )
}
