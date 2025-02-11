'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Sheet ,SheetClose,SheetContent,SheetDescription,SheetHeader,SheetTitle,SheetTrigger } from './ui/sheet' 
import { sidebarLinks } from 'constants/indesx'
import { usePathname } from 'next/navigation'
import { cn } from 'lib/utils'


  
const MobileNav = ({user}:MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className='w-full maw-w-[264px]'>
      <Sheet>
      <SheetTrigger>
        <Image
        src="/icons/hamburger.svg"
        width={30}
        height={30}
        alt='menu'
        className='cursor-pointer'
        />
      </SheetTrigger>
      <SheetContent side='left' className='border-none bg-white'>
      <Link href="/" className=' flex cursor-pointer items-center gap-1 px-4'>
            <Image 
             src="/icons/logo.png"
             width={34} 
             height={34} 
             alt="Waqti logo" 
              
             />
             <h1 className='text-26 font ibm-plex-serif font-bold text-black-1'>Waqti</h1>
            </Link>
            <div className='mobilenav-sheet'>
              <SheetClose asChild>
                <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                {sidebarLinks.map((item) =>{
                const isActive = item.route === pathname || pathname.startsWith(`${item.route}/`)
                return (
                  <SheetClose asChild key={item.route}>
                    <Link 
                    href={item.route}
                    key={item.label}
                    className={cn('mobilenav-sheet_close w-full',{'bg-bank-gradient':isActive})}>
                            <Image
                             src={item.imgURL}
                             alt={item.label}
                             width={20}
                             height={20}
                             className={cn({
                                'brightness-[3] invert-0': isActive
                            })}/>
                        <p className={cn('text-16 text-semibold text-black-2',{'text-white':isActive})}>
                            {item.label}
                        </p>
                    </Link>
                  </SheetClose>
                    
                )
            })}

            USER
                </nav>
              </SheetClose>
              FOOTER
            </div>
            
      </SheetContent>
      </Sheet>
      

    </section>
  )
}

export default MobileNav