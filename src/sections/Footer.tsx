import { ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-20 font-normal">
      <div className="bg-blue-light h-[180px] flex justify-between items-center rounded-3xl mx-4 md:mx-auto w-[60%] mb-16 font-dm-sans">
        <div className="flex items-center justify-between p-8 md:p-12 w-full">
          <div className="text-white font-normal">
            STILL HAVE
            <br />
            DOUBTS?
          </div>
          <div className="text-white text-2xl md:text-4xl font-medium">Contact us</div>
          <a 
            href="#contact" 
            className="bg-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ArrowRight className="h-5 w-5 text-blue-light" />
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-8 w-[90%] font-dm-sans">
        <div className="mb-8">
            <img src="/logo-footer.png" alt="Logo" className='block h-[52px]' />
        </div>
        <hr className='w-[260px] opacity-50' />
        <br />
        <div className="flex justify-between">
          <div>
            <h4 className="text-sm text-blue-light mb-2 underline">Address</h4>
            <p className="text-sm text-blue-light">
              1875 Mission St Ste 103 #450<br />
              San Francisco, CA 94103
            </p>
          </div>
          
          <div>
            <h4 className="text-sm text-blue-light mb-2 underline">Email</h4>
            <a href="mailto:finance@mobileengine.ai" className="text-sm text-blue-light underline hover:text-blue-light">
              finance@mobileengine.ai
            </a>
          </div>
          
          <div>
            <h4 className="text-sm text-blue-light mb-2 underline">Telephone</h4>
            <a href="tel:650-695-6005" className="text-sm text-blue-light hover:text-blue-light">
              650-695-6005
            </a>
          </div>
          
          <div>
            <h4 className="text-sm text-blue-light mb-2 underline">Social</h4>
            <div className="flex space-x-2">
              <a href="#" className="text-blue-light hover:text-blue-dark border-blue-light border-1 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-blue-light hover:text-blue-dark border-blue-light border-1 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-light py-3">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white text-sm mb-2 md:mb-0">
            © 2023 MobileServices LLC
          </div>
          <div className="flex space-x-6">
            <a href="/terms" className="text-white text-sm hover:underline">
              Terms & Conditions
            </a>
            <a href="/privacy" className="text-white text-sm hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

