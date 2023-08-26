import React from 'react'
import Text from './Text'

const Contact = () => {
    return (
        <section className="py-12 bg-gray-950">
            <div className="container flex flex-col mx-auto lg:flex-row">
                <div className='bg-gray-500 aspect-square lg:w-1/2 m-4'>
                    <img className="object-cover w-full h-full" src='https://source.unsplash.com/random/640x480' />
                </div>
                <div className="flex flex-col w-full p-6 lg:w-1/2 md:p-8 lg:p-12 self-center">
                    <Text size='display'>Want More Info?</Text>
                    <Text size='md' className="mt-4 mb-8">Contact us if you have questions regarding the event.</Text>
                    <button className="self-start px-10 py-3 text-lg font-medium bg-gray-100 text-gray-900">Contact Us</button>
                </div>
            </div>
        </section>
    )
}

export default Contact