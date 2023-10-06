import MainView from '@/components/AboutUs/MainView'
import ResolveQueries from '@/components/ContactUs/ResolveQueries'
import { MainViewDetails } from '@/components/Utils'
import React from 'react'

const page = () => {
    const { title, description } = MainViewDetails[1]
    return (
        <div>
            <MainView title={title} description={description} />
            <ResolveQueries />
        </div>
    )
}

export default page