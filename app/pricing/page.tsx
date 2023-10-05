import MainView from '@/components/AboutUs/MainView'
import { MainViewDetails } from '@/components/Utils'
import React from 'react'

const page = () => {
    const { title, description } = MainViewDetails[3]
    return (
        <div>
            <MainView title={title} description={description} />
        </div>
    )
}

export default page