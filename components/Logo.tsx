"use client";

import LogoImage from "@logos/black/black.2e8db712.svg";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
    return (
        <Link href="/" prefetch={false} className="overflow-hidden">
            <div className="flex items-center w-72 h-14">
                <AspectRatio
                    ratio={16 / 9}
                    className="flex items-center justify-center"
                />
                <Image
                    priority
                    src={LogoImage}
                    alt="logo"
                    className="dark:filter dark:invert"
                    // width={30}
                    // height={30}
                />

                <AspectRatio />
            </div>
        </Link>
    );
};

export default Logo;
