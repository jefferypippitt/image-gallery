'use client'

import { GithubIcon, MenuIcon, MountainIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList
} from './ui/navigation-menu'

export default function Navbar() {
  return (
    <header className='container flex h-20 w-full shrink-0 items-center px-4 md:px-6'>
      <Sheet>
        <SheetTrigger asChild>
          <Button className='lg:hidden' size='icon' variant='outline'>
            <MenuIcon className='h-6 w-6' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <div className='grid gap-2 py-6'>
            <Link
              className='flex w-full items-center py-2 text-lg font-semibold text-muted-foreground transition-colors hover:text-foreground'
              href='/'
            >
              Home
            </Link>
            <Link
              className='flex w-full items-center py-2 text-lg font-semibold text-muted-foreground transition-colors hover:text-foreground'
              href='/about'
            >
              About
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      <NavigationMenu className='hidden lg:flex'>
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              className='group m-4 inline-flex h-9 w-max items-center justify-center rounded-md'
              href='/'
            >
              Home
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className='group m-4 inline-flex h-9 w-max items-center justify-center rounded-md'
              href='/about'
            >
              About
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
