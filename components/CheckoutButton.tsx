"use client";

import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";

function CheckoutButton() {
    const { data: session } = useSession();
    const [loading, setLoading] = useState(false);

    const createCheckSession = async () => {
        if (!session?.user.id) return;
        // push a document into firetore db
        setLoading(true);

        const docRef = await addDoc(
            collection(db, "customers", session.user.id, "checkout_sessions"),
            {
                price: "price_100998KDJTc6FlwiIL3eBoYQ",
                success_url: window.location.origin,
                cancel_url: window.location.origin,
            }
        );
        //... stripe extention on fiebase will create a checkout session
        // redirect user to checkout page
    };

    return (
        <div className="flex flex-col space-y-2">
            {/* if subscribed show me the user is subcribed */}
            <button
                onClick={() => createCheckSession()}
                className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80 disabled:bg-indigo-600/50 disabled:cursor-default"
            >
                Sign Up
            </button>
        </div>
    );
}

export default CheckoutButton;
