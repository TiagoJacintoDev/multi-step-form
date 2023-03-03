import ArcadeIcon from './assets/icon-arcade.svg'
import AdvancedIcon from './assets/icon-advanced.svg'
import ProIcon from './assets/icon-pro.svg'

export const planTypes = [
  { name: 'arcade', image: ArcadeIcon, pricePerMonth: 9 },
  { name: 'advanced', image: AdvancedIcon, pricePerMonth: 12 },
  { name: 'pro', image: ProIcon, pricePerMonth: 15 },
]

export const addOns = [
  {
    name: 'Online service',
    description: 'Access to multiplayer games',
    pricePerMonth: 1,
  },
  {
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    pricePerMonth: 2,
  },
  {
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    pricePerMonth: 2,
  },
]
