
import '@/app/ui/home-style.css'

import Link from 'next/link';
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 ">
      <section className=' relative z-0 w-full h-screen flex justify-center align-middle items-center flex-col gap-8'>
        <div className='text-right w-1/2 text-8xl font-bold text-white b'>
          <span>Vive la mágia del pacífico </span>
        </div>
        <div className='flex flex-row justify-between items-center rounded-full w-1/2 px-6 py-4 bg-white'>
          <span className='text-lime-800 text-2xl'>
            Pregunta por los planes
          </span>
          <Link href="/plans" className='rounded-full px-4 py-2 border-2  bg-lime-600 text-white'>Ver planes</Link>
        </div>
      </section>
    </main>
  );
}