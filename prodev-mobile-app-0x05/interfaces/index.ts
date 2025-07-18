export interface PropertyListingProps {
  propertyName: string,
      location: {
        street: string,
        city: string,
        country: string
      },
      rate: number,
      currency: string,
      amount: number,
      favorite: boolean
}
