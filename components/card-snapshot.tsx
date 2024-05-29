import { Button } from '@/components/ui/button'
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar'
import {
  CalendarDaysIcon,
  EyeIcon,
  FolderIcon,
  GitForkIcon,
  StarIcon,
} from '@/lib/icons'
import Link from 'next/link'
import Image from 'next/image'
import {
  HoverCardTrigger,
  HoverCardContent,
  HoverCard,
} from '@/components/ui/hover-card'
import {
  TooltipTrigger,
  TooltipContent,
  Tooltip,
  TooltipProvider,
} from '@/components/ui/tooltip'

export function CardSnapshot() {
  return (
    <Card className="w-full max-w-sm">
      <div className="relative">
        <Image
          className="w-full rounded-t-lg object-cover"
          width={400}
          height={200}
          src="/placeholder.svg"
          alt="Picture of the project"
          style={{
            aspectRatio: '400/200',
            objectFit: 'cover',
          }}
        />
        <div className="absolute right-4 top-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="toggle bg-white/80 transition-colors hover:bg-white"
                  size="sm"
                  variant="outline"
                >
                  <GitForkIcon className="mr-2 h-4 w-4" />
                  Fork
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Fork this project on GitHub</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <CardHeader className="px-6 pt-4">
        <div className="flex justify-between">
          <CardTitle className="text-2xl font-bold">Acme Web App</CardTitle>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <StarIcon className="h-4 w-4 fill-primary" />
            <span className="font-medium">4.5</span>
            <Separator className="h-4" orientation="vertical" />
            <EyeIcon className="h-4 w-4" />
            <span className="font-medium">1.2K</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FolderIcon className="h-4 w-4" />
          <span className="font-medium">Web Development</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 px-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Lorem ipsum is placeholder text commonly used in the ands graphic,
          print, and publishing joy the industries for previewing layou and
          visual mornin
        </p>

        <div className="group flex items-center gap-4">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Avatar className="h-8 w-8 border transition-transform group-hover:scale-110">
                <AvatarImage alt="JavaScript" src="/placeholder-user.jpg" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 rounded-lg bg-white shadow-lg dark:bg-gray-950">
              <div className="flex justify-between space-x-4 p-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">JavaScript</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    JavaScript is a programming language used to add
                    interactivity and dynamic behavior to web pages.
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarDaysIcon className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Used since 1995
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Avatar className="h-8 w-8 border transition-transform group-hover:scale-110">
                <AvatarImage alt="React" src="/placeholder-user.jpg" />
                <AvatarFallback>R</AvatarFallback>
              </Avatar>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 rounded-lg bg-white shadow-lg dark:bg-gray-950">
              <div className="flex justify-between space-x-4 p-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>R</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">React</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    React is a JavaScript library for building user interfaces.
                    It is maintained by Facebook and a community of developers.
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarDaysIcon className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Used since 2013
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Avatar className="h-8 w-8 border transition-transform group-hover:scale-110">
                <AvatarImage alt="Tailwind CSS" src="/placeholder-user.jpg" />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 rounded-lg bg-white shadow-lg dark:bg-gray-950">
              <div className="flex justify-between space-x-4 p-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Tailwind CSS</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Tailwind CSS is a utility-first CSS framework for rapidly
                    building custom user interfaces.
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarDaysIcon className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Used since 2017
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Avatar className="h-8 w-8 border transition-transform group-hover:scale-110">
                <AvatarImage alt="Node.js" src="/placeholder-user.jpg" />
                <AvatarFallback>N</AvatarFallback>
              </Avatar>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 rounded-lg bg-white shadow-lg dark:bg-gray-950">
              <div className="flex justify-between space-x-4 p-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>N</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Node.js</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Node.js is a JavaScript runtime built on Chromes V8
                    JavaScript engine, allowing developers to run JavaScript on
                    the server-side.
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarDaysIcon className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Used since 2009
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex gap-4">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 hover:bg-gray-900/90"
              href="#"
            >
              Live Demo
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border bg-white px-4 py-2 text-sm font-medium hover:bg-gray-100"
              href="#"
            >
              Full Read
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
