import MainView from '@/components/AboutUs/MainView'
import OrgNeeds from '@/components/Services/OrgNeeds'
import Patented from '@/components/Services/Patented'
import { QuickConcerns } from '@/components/Services/QuickConcerns'
import { MainViewDetails } from '@/components/Utils'
import React from 'react'

const page = () => {
    const { title, description } = MainViewDetails[2]
    return (
        <div>
            <MainView title={title} description={description} />
            <OrgNeeds />
            <Patented/>
            <QuickConcerns/>
        </div>
    )
}

export default page