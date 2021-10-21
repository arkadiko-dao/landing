import { 
  CurrencyDollarIcon, 
  LightningBoltIcon, 
  ScaleIcon, 
  SwitchVerticalIcon 
  } from '@heroicons/react/outline'

const features = [
  {
    name: 'USDA',
    description: 'Collateralize your STX tokens and mint our stablecoin USDA, which you can use for yield farming.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'DEX',
    description:
      'Swap your favorite tokens on the Arkadiko Decentralized Exchange, all on top of the Stacks blockchain.',
    icon: SwitchVerticalIcon,
  },
  {
    name: 'Staking',
    description:
      'Stake your DIKO tokens to get rewarded. You will receive stDIKO that can be used in Governance voting.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Governance',
    description:
      'Vote on proposals. All protocol changes will run through a governance vote, e.g. to change risk parameters on Arkadiko collateral types.',
    icon: ScaleIcon,
  },
]

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-white bg-opacity-90">
      <div className="px-4 py-16 mx-auto max-w-7xl lg:px-8 sm:py-48">
        <div className="absolute hidden w-2/3 ml-32 -left-1/2 bottom-28 h-1/3 lg:block">
          <svg viewBox="0 0 200 200 " xmlns="http://www.w3.org/2000/svg">
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur="180s"
              type="rotate"
              from="0 60 60"
              to="360 60 60"
              repeatCount="indefinite" />
            <path className="text-indigo-500 opacity-85 blur-sm" fill="currentColor" d="M37,-52.9C52,-47.9,71.1,-44.5,78.2,-34.2C85.2,-23.9,80.1,-6.5,73.8,7.8C67.4,22.2,59.7,33.6,50.9,44.6C42.1,55.6,32.3,66.1,20.3,70.2C8.2,74.3,-6.1,72,-21.4,69.2C-36.7,66.4,-52.9,63.2,-58.1,52.8C-63.2,42.4,-57.3,24.9,-53.9,11.2C-50.4,-2.5,-49.5,-12.3,-46.6,-22.3C-43.7,-32.4,-38.8,-42.6,-30.7,-50.8C-22.6,-59,-11.3,-65.2,-0.2,-64.9C11,-64.7,21.9,-57.9,37,-52.9Z" transform="translate(100 100) scale(0.90) rotate(-15)" />
            <path className="text-indigo-300 blur-sm opacity-95" fill="currentColor" d="M37,-52.9C52,-47.9,71.1,-44.5,78.2,-34.2C85.2,-23.9,80.1,-6.5,73.8,7.8C67.4,22.2,59.7,33.6,50.9,44.6C42.1,55.6,32.3,66.1,20.3,70.2C8.2,74.3,-6.1,72,-21.4,69.2C-36.7,66.4,-52.9,63.2,-58.1,52.8C-63.2,42.4,-57.3,24.9,-53.9,11.2C-50.4,-2.5,-49.5,-12.3,-46.6,-22.3C-43.7,-32.4,-38.8,-42.6,-30.7,-50.8C-22.6,-59,-11.3,-65.2,-0.2,-64.9C11,-64.7,21.9,-57.9,37,-52.9Z" transform="translate(100 100) scale(0.80) rotate(15)" />
            <path className="text-indigo-700" fill="currentColor" d="M37,-52.9C52,-47.9,71.1,-44.5,78.2,-34.2C85.2,-23.9,80.1,-6.5,73.8,7.8C67.4,22.2,59.7,33.6,50.9,44.6C42.1,55.6,32.3,66.1,20.3,70.2C8.2,74.3,-6.1,72,-21.4,69.2C-36.7,66.4,-52.9,63.2,-58.1,52.8C-63.2,42.4,-57.3,24.9,-53.9,11.2C-50.4,-2.5,-49.5,-12.3,-46.6,-22.3C-43.7,-32.4,-38.8,-42.6,-30.7,-50.8C-22.6,-59,-11.3,-65.2,-0.2,-64.9C11,-64.7,21.9,-57.9,37,-52.9Z" transform="translate(100 100) scale(0.60) rotate(30)" />
          </svg>
        </div>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-16">
          <div className="lg:col-span-1">
            <p className="text-xs font-bold tracking-widest text-indigo-600 uppercase">Features</p>
            <h2 className="mt-4 text-3xl tracking-tight text-gray-900 font-headings sm:text-4xl">
              A growing suite of liquidity solutions
            </h2>
            <p className="mt-4 text-lg text-gray-700">We build state of the art open source apps to access the Arkadiko Protocol.</p>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16 sm:gap-x-12 lg:mt-0 lg:col-span-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex w-12 h-12 text-white bg-indigo-600 rounded-full bg-opacity-20">
                    <feature.icon className="absolute w-12 h-12 ml-3 -mt-4 text-indigo-800" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg font-bold leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-700">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
