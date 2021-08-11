import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "What is Arkadiko Finance?",
    answer: "Arkadiko is a decentralized, non-custodial liquidity protocol where users can collateralize their STX tokens and borrow a stablecoin called USDA. This enables you to gain increased liquidity in the form of a soft-pegged US Dollar stablecoin, while maintaining original asset exposure. Your STX tokens generate a yield, which pays back the USDA loan automatically over time. At current yields, it takes about 3 years to pay back your loan completely. No need to worry about monthly payments."
  },
  {
    question: "Is it safe to use Arkadiko?",
    answer: "In short, yes. We are using the Clarity language to build all our smart contract, which is a transparent and decidable language that gives you insight into how each transaction executes and which changes it makes. Additionally, we undergo regular security audits to make sure crucial vulnerabilities are found before the code lives on mainnet."
  },
  {
    question: "Where does my yield come from?",
    answer: "Your stablecoin yield is generated by the Stacks consensus mechanism called Proof of Transfer (PoX). You can find more info about PoX on <a class='underline' target='_blank' rel='noopener noreferrer' href='https://stacking.club'>https://stacking.club</a>",
  },
  {
    question: "How does a self-repaying loan work?",
    answer: "In order to make use of a self-repaying loan, you need to hold STX tokens. Once you have your STX tokens, you can deposit those in an Arkadiko Vault as collateral. Against the STX collateral, you will be able to borrow an amount of USDA equivalent to 25% Loan-To-Value. Your STX tokens will be stacked in Proof of Transfer, and will automatically be used to pay off the borrowed USDA.",
  },
  {
    question: "How do I use Arkadiko?",
    answer: "We are currently undergoing a security audit and are not live yet. Our mainnet launch will happen in October. Stay tuned and join our community for updates!",
  },
  {
    question: "Can I be liquidated?",
    answer: "Just like with most lending and borrowing protocols, your position can be liquidated. Make sure you always deposit sufficient collateral to keep your positions healthy.",
  },
  {
    question: "Have your contracts been audited?",
    answer: "We are currently undergoing a thorough security audit with a reputable firm. Findings will be fixed and published.",
  },
  {
    question: "What is the DIKO token and why should I HODL it?",
    answer: "DIKO is the Arkadiko Governance Token. It is used to participate in governance and can be earned through staking on the Arkadiko protocol.",
  },
  {
    question: "How can I earn DIKO tokens?",
    answer: "You can earn DIKO through our liquidity mining program once we are on mainnet. You will be able to stake LP tokens or earn DIKO by creating an Arkadiko Vault, borrowing USDA.",
  },
  {
    question: "How can I contact the team?",
    answer: "Join our community on Discord and chat with us. The Arkadiko core team is online all the time, happy to help you out with any question!",
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
                      <p className="text-base text-gray-50" dangerouslySetInnerHTML={{__html: faq.answer}} />
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
