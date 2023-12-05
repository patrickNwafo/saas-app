"use client";

import { MessageSquarePlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const CreateChatButton = () => {
    const router = useRouter();

    const createNewChat = async () => {
        // all the logic here...

        router.push(`/chat/abc}`);
    };
    return (
        <Button onClick={createNewChat} variant={"ghost"}>
            <MessageSquarePlusIcon />
        </Button>
    );
};

export default CreateChatButton;
