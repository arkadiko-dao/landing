import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "Is it safe to use Arkadiko?",
    answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, illum aperiam. Magnam reprehenderit voluptates quisquam debitis consequuntur minus assumenda voluptatibus sit, neque vero sint itaque dolores ipsum quam repellendus doloremque.",
  },
  {
    question: "Where does my yield come from?",
    answer: "",
  },
  {
    question: "How do I use Arkadiko?",
    answer: "",
  },
  {
    question: "Can I be liquidated?",
    answer: "",
  },
  {
    question: "Have your contracts been audited?",
    answer: "",
  },
  {
    question: "What is DIKO token and why should I HODL it?",
    answer: "",
  },
  {
    question: "How can I earn DIKO tokens?",
    answer: "",
  },
  {
    question: "How does a self-repaying loan work?",
    answer: "",
  },
  {
    question: "How can I contact the team?",
    answer: "",
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Faq() {
  return (
    <section id="faq" className="bg-black bg-opacity-70 relative">
      <div className="max-w-7xl mx-auto py-16 sm:py-48 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headings text-center text-3xl text-white sm:text-4xl">Frequently asked questions</h2>
          <dl className="pt-0 p-8 border rounded-lg border-gray-700 mt-8 space-y-6 divide-y divide-gray-700">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-white">
                        <span className="font-bold text-white">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-3 pr-12">
                      <p className="text-base text-gray-50">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
