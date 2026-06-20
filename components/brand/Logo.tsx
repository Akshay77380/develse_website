import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LOGO_WIDTH = 1024;
const LOGO_HEIGHT = 682;

type LogoProps = {
  className?: string;
  size?: "nav" | "hero" | "footer";
  href?: string | null;
};

const sizeClasses = {
  nav: "h-11 sm:h-12 w-auto max-w-[280px] sm:max-w-[340px] object-contain object-left",
  hero: "w-full max-w-2xl md:max-w-3xl h-auto object-contain object-center",
  footer: "h-12 sm:h-14 w-auto max-w-[300px] sm:max-w-[360px] object-contain object-left dark:brightness-110",
};

export function Logo({ className, size = "nav", href = "/" }: LogoProps) {
  const image = (
    <Image
      src="/logo.png"
      alt="DevElse Services Pvt Ltd"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      className={cn(sizeClasses[size], className)}
      priority={size === "nav" || size === "hero"}
      quality={100}
      unoptimized
    />
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex shrink-0 items-center" aria-label="DevElse Services home">
        {image}
      </Link>
    );
  }

  return <div className="inline-flex shrink-0 items-center justify-center w-full">{image}</div>;
}
