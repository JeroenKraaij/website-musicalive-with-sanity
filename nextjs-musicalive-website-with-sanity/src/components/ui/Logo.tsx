
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils/clsx";

type LogoProps = {
    size?: "sm" | "md" | "lg";
    href?: string;
    className?: string;
    src?: string;
    alt?: string;
};

const sizeMap = {
    sm: "h-6 w-auto",
    md: "h-8 w-auto",
    lg: "h-12 w-auto",
};

export default function Logo({ size = "md", href, className, src, alt = "Logo" }: LogoProps) {
    const classes = cn(sizeMap[size], className);

    const logoContent = src ? (
        <Image src={src} alt={alt} width={160} height={60} className={classes} priority />
    ) : (
        <span className={cn("font-bold tracking-tight", className)}>
      Music<span className="text-teal-700">a</span>live
    </span>
    );

    return href ? <Link href={href}>{logoContent}</Link> : logoContent;
}
