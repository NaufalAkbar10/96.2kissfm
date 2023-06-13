import Image from 'next/image'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '96.2 Kiss FM',
  description: 'The Real Interactive Radio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="nav primaryColor py-3 mt-14 rounded-xl mb-28">
          <div className="flex justify-between items-center mx-32">
            <div className="logo relative h-16 w-60">
              <Image src={'/assets/images/logo.png'} alt='logo' fill
                style={{ objectFit: "cover" }} />
            </div>
            <div className="items text-lg text-white font-bold flex gap-20">
              <Link href={'/profile'}>Profile</Link>
              <Link href={'/profile'}>Charts</Link>
              <Link href={'/profile'}>Contact Us</Link></div>
          </div>
        </nav>
        {children}
        <footer className='primaryColor grid grid-cols-5 gap-4 py-12 px-32 mt-28'>
          <div className="brand">
            <div className="logo relative h-12 w-48">
              <Image src={'/assets/images/logo.png'} alt='logo' fill
                style={{ objectFit: "cover" }} />
            </div>
            <h5 className='secondaryColor text-sm w-fit rounded-md mt-2 py-1 px-4 text-white'>THE REAL INTERACTIVE RADIO</h5>
          </div>
          <div className="calendar relative w-80 h-80">
            <Image src={'/assets/images/calendar.png'} alt='calendar' fill
              style={{ objectFit: "cover" }} />
          </div>
        </footer>
      </body>
    </html>
  )
}
