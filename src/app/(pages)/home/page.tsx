import Link from "next/link"
import { siteConfig } from "@/configs/site"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { CopyNpmCommandButton } from "@/components/custom/copy-button"
import {
  Drawalog,
  DrawalogBody,
  DrawalogContent,
  DrawalogDescription,
  DrawalogFooter,
  DrawalogHeader,
  DrawalogTitle,
  DrawalogTrigger,
} from "@/components/custom/drawalog"
import TextDecryption from "@/components/custom/text-decryption"
import { ThemeSwitcher } from "@/components/custom/theme-switcher"
import { Icons } from "@/components/icons/icons"

function HomePage() {
  return (
    <>
      <div className="container flex h-full max-w-[64rem] flex-col items-center justify-center gap-4 text-center">
        <Icons.logo className="h-20 w-20" />
        <TextDecryption
          targetText={siteConfig.name}
          className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl"
        />
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {siteConfig.description}
        </p>
        <div className="flex gap-2">
          <GetStartModal />
          <ThemeSwitcher />
        </div>
      </div>
    </>
  )
}

export default HomePage

function GetStartModal() {
  return (
    <Drawalog>
      <DrawalogTrigger asChild>
        <Button>Get Started</Button>
      </DrawalogTrigger>
      <DrawalogContent>
        <DrawalogHeader>
          <DrawalogTitle>Get Started</DrawalogTitle>
          <DrawalogDescription>
            Learn how to get started with {siteConfig.name}
          </DrawalogDescription>
        </DrawalogHeader>
        <DrawalogBody className="space-y-4 pb-4 text-center text-sm sm:pb-0 sm:text-left">
          <p>
            To create a new project using {siteConfig.name}, run the following
            command:
          </p>
          <CopyCommand />

          <p>
            For more information, check out the official documentation or visit
            the Github repository.
          </p>
        </DrawalogBody>
        <DrawalogFooter>
          <Link
            href={`${siteConfig.links.docs}`}
            target="_blank"
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Documentation
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            className={cn(buttonVariants({ size: "default" }))}
          >
            Github
          </Link>
        </DrawalogFooter>
      </DrawalogContent>
    </Drawalog>
  )
}

function CopyCommand() {
  const npm =
    "npx create-next-app -e https://github.com/THEALIFHAKER1/NEXT-INITIATE"
  return (
    <div className="relative">
      <pre
        className={cn("overflow-x-auto rounded-lg border bg-foreground/10 p-4")}
      >
        <div className="select-text text-wrap text-left">{npm}</div>
      </pre>
      <CopyNpmCommandButton
        commands={{
          npm: npm,
          yarn: "yarn create next-app -e https://github.com/THEALIFHAKER1/NEXT-INITIATE",
          pnpm: "pnpx create-next-app -e https://github.com/THEALIFHAKER1/NEXT-INITIATE",
          bun: "bun create next-app -e https://github.com/THEALIFHAKER1/NEXT-INITIATE",
        }}
        className={cn("absolute right-4 top-7")}
      />
    </div>
  )
}
