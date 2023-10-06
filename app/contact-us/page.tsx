import MainView from '@/components/AboutUs/MainView'
import ContactForm from '@/components/ContactUs/ContactForm'
import ResolveQueries from '@/components/ContactUs/ResolveQueries'
import { QuickConcerns } from '@/components/Services/QuickConcerns'
import { MainViewDetails } from '@/components/Utils'
import React from 'react'

const page = () => {
    const { title, description } = MainViewDetails[1]
    return (
        <div>
            <MainView title={title} description={description} />
            <ResolveQueries />
            <ContactForm />
            <QuickConcerns />
        </div>
    )
}

export default page