import React from "react";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import UserButton from "./UserButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { log } from "console";
import Link from "next/link";
import { MessagesSquareIcon } from "lucide-react";

async function Header() {
    const session = await getServerSession(authOptions);
    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
            <nav className="flex flex-col sm:flex-row items-center p-5 pt-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
                <Logo />

                <div className="flex-1 flex items-center justify-end space-x-4">
                    {/* LanguageSelect */}

                    {session ? (
                        <>
                            <Link href={"/chat"} prefetch={false}>
                                <MessagesSquareIcon className="text-black dark:text-white" />
                            </Link>
                        </>
                    ) : (
                        <Link href="/pricing">Pricing</Link>
                    )}

                    <DarkModeToggle />

                    <UserButton />
                </div>
            </nav>

            {/* Upgrade Banner */}
        </header>
    );
}

export default Header;
