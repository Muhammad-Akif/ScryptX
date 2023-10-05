import MainView from '@/components/AboutUs/MainView'
import OrgNeeds from '@/components/Services/OrgNeeds'
import { MainViewDetails } from '@/components/Utils'
import React from 'react'

const page = () => {
    const { title, description } = MainViewDetails[2]
    return (
        <div>
            <MainView title={title} description={description} />
            <OrgNeeds />
        </div>
    )
}

export default page