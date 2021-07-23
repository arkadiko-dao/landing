import { 
  CodeIcon, 
  GiftIcon, 
  DocumentTextIcon, 
  } from '@heroicons/react/outline'

const resources = [
  {
    name: 'GitHub',
    link: 'https://github.com/arkadiko-dao/arkadiko',
    icon: CodeIcon,
    btnClasses: 'bg-indigo-500 hover:bg-indigo-700'
  },
  {
    name: 'Documentation',
    link: 'https://docs.arkadiko.finance/',
    icon: DocumentTextIcon,
    btnClasses: 'bg-indigo-600 hover:bg-indigo-800'
  },
  {
    name: 'Bug Bounty',
    link: 'https://github.com/arkadiko-dao/arkadiko/blob/master/SECURITY.md',
    icon: GiftIcon,
    btnClasses: 'bg-indigo-700 hover:bg-indigo-900'
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).sort().join(' ')
}

export default function Developers() {
  return (
    <section id="developers" className="relative py-16 sm:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
            <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                <div className="relative h-96 object-cover object-center rounded-3xl shadow-2xl overflow-hidden">
                  <div className="absolute scroll-bg" style={{
                    height: '350%',
                    width: '200%',
                    top: '-25%',
                    left: '-100%',
                    backgroundImage: 'url(/clarity.png)',
                    backgroundSize: 'cover'}} />
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-gray-100 bg-opacity-80 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
            <div className="absolute bottom-full transform translate-y-1/3 -translate-x-2/3 right-0">
              <img src="/shape-pyramid.png" width="150" height="150" />
            </div>               
            <div className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2">
              <img src="/shape-thorus.png" width="125" height="125" />
            </div>
            <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold font-headings bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-800">
                Develop on the new financial standard
              </h2>
              <p className="text-lg text-gray-700">
                We believe in building in the open and transparency. <br/>
                Contribute to the future of finance on Stacks/Bitcoin.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-800 space-y-3 sm:space-y-0 sm:space-x-3">
                {resources.map((resource) => (
                  <div key={resource.name} className="rounded-md shadow relative group overflow-hidden">
                    <resource.icon className="absolute top-1/2 group-hover:left-0 transform -translate-x-16 -translate-y-1/2 transition duration-500 opacity-0 group-hover:-translate-x-0 group-hover:opacity-20 text-white block h-12 w-12 ml-2" aria-hidden="true" />
                    <a href={resource.link} className={classNames(
                      resource.btnClasses,
                      'w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10 focus:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}>
                      {resource.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
