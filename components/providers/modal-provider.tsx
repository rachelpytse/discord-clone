'use client'

import { CreateServerlModal } from "@/components/modals/create-server-modal"
import { useEffect, useState } from "react"
import { InviteModal } from "@/components/modals/invite-modal"
import { EditServerlModal } from "@/components/modals/edit-server-modal"
import { MembersModal } from "@/components/modals/members-modal"
import { CreateChannellModal } from "@/components/modals/create-channel-modal"
import { LeaveServerModal } from "@/components/modals/leave-server-modal"
import { DeleteServerModal } from "@/components/modals/delete-server-modal"

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    },[])

    if(!isMounted) {
        return null
    }
    
    return(
        <>
            <CreateServerlModal/>
            <InviteModal/>
            <EditServerlModal/>
            <MembersModal/>
            <CreateChannellModal/>
            <LeaveServerModal/>
            <DeleteServerModal/>
        </>
    )
}