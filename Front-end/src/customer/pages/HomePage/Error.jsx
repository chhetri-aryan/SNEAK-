import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <>

            <main className="items-center justify-center min-h-screen grid place-items-center bg-indigo-200 sm:py-32 lg:px-8 overflow-auto">
                <div className="text-center">
                    <div>
                        <div class="flex items-center justify-center">
                            <span class="relative inline-flex">
                                <h1 class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-6xl text-sky-500 transition ease-in-out duration-150 ring-1 ring-slate-900/10 dark:ring-slate-200/20" disabled="">
                                    404
                                </h1>
                                <span class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                </span>
                            </span>
                        </div>
                    </div>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn't find the page you're looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to={'/'}
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go back home
                        </Link>
                        <a href={"https://www.linkedin.com/in/aryan-chhetri/"} target="_blank" className="text-sm font-semibold text-gray-900">
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Error


//

