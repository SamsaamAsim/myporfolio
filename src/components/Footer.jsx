import React, {useRef} from 'react'
import {AiFillHeart} from 'react-icons/ai'
import emailjs from '@emailjs/browser';
import toast,{Toaster} from 'react-hot-toast'

const Footer = () => {
    const formRef = useRef()
    console.log(formRef);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_rvi8eki', 'template_3f3d9tm', formRef.current, 'SY5HGXTEJ-ClYvilC')
          .then(() => {
             toast.success('Your message have been sent!')
          }, (error) => {
             toast.error('Your message cannot be sent!')
          });
      };
  return (
    <div id="contact">
      <Toaster/>
        <footer className="bg-gray-900">
        <div className="max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <strong className="block text-xl font-medium text-center text-white sm:text-3xl">
             Want to contact me? Send me a message!
            </strong>
            <form className="mt-6" ref={formRef} onSubmit={sendEmail}>
            <div className="relative max-w-lg">
                <label className="sr-only" htmlFor="email"> Name </label>
                <input className="w-full p-4 pr-16 text-sm font-medium bg-white border-none rounded-full" id="email" type="text" placeholder="Name" name='from_name' />
               
              </div>
              <div className="relative max-w-lg my-2">
                <label className="sr-only" htmlFor="email"> Email </label>
                <input className="w-full p-4 pr-16 text-sm font-medium bg-white border-none rounded-full" id="email" type="email" placeholder="Email" name='from_email' />
               
              </div>
              <div className="relative max-w-lg my-2">
              <label className="sr-only" htmlFor="email"> Message </label>
                <input className="w-full p-4 pr-16 text-sm font-medium bg-white border-none rounded-full" id="email" type="text" placeholder="Message" name='message' />
                <button className="absolute top-1/2 right-1.5 -translate-y-1/2 rounded-full bg-blue-600 p-3 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-blue-700" type="submit">
                  Send
                </button>               
              </div>
            </form>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-16 lg:grid-cols-2 lg:gap-32">
            <div className="max-w-sm mx-auto lg:max-w-none">
              <p className="mt-4 text-center text-white lg:text-left lg:text-lg">
              I will provide you good quality work and responsive Web and App i have great experience in development.
              </p>
              <div className="flex justify-center gap-4 mt-6 text-gray-300 lg:justify-start">
                <a className="transition hover:opacity-75" href="https://www.facebook.com/profile.php?id=100010968785083" target="_blank" rel="noreferrer">
                  <span className="sr-only"> Facebook </span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a className="transition hover:opacity-75" href="https://www.instagram.com/itz_samsaam" target="_blank" rel="noreferrer">
                  <span className="sr-only"> Instagram </span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
            
                <a className="transition hover:opacity-75" href="https://github.com/SamsaamAsim" target="_blank" rel="noreferrer">
                  <span className="sr-only"> GitHub </span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
             
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-1 lg:text-left">
              <div>
                <strong className="text-sm font-bold tracking-wide text-white uppercase">
                  Services
                </strong>
                <nav className="flex flex-col mt-6 space-y-1 text-gray-400">
                  <a className="transition hover:text-white" href="#place"> React JS Development </a>
                  <a className="transition hover:text-white" href="#place"> Full Stack Development </a>
                  <a className="transition hover:text-white" href="#place">
                  Java Native App.

                  </a>
                  <a className="transition hover:text-white" href="#place">
                    C++.

                  </a>
                  <a className="transition hover:text-white" href="#place">
                  App Developer

                  </a>
                  <a className="transition hover:text-white" href="#place">
                  Cross Platform Development.


                  </a>
                </nav>
              </div>
           
            </div>
          </div>
          <div className="pt-8 mt-16 border-t border-white/10 mx-auto w-full flex items-center justify-center">
            <p className="text-xs leading-relaxed text-center text-gray-300">
              © Samsaam Asim 2022. All rights reserved.
              <br />
              Created with
              <div className='inline-flex '>
              <AiFillHeart className='text-red-600 mx-2'/> and 
              React
              </div>
            </p>
          </div>
        </div>
      </footer>
      
    </div>
  )
}

export default Footer
