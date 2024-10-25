export interface Stat {
    id: string
    value: number
    label: string
    prefix?: string
    suffix?: string
    description: string
    icon: string
    trend?: {
      value: number
      isPositive: boolean
      description: string
    }
    color: string
  }