import { create } from 'zustand'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import { Trip } from '../types/Trip'

type TripsState = {
  trips: Trip[]
  addTrip: (destination: string) => void
  removeTrip: (id: number) => void
}

export const useTripsState = create<TripsState>(set => ({
  trips: [],
  // write code for adding a trip and removing a trip from an array using zustand
  addTrip: (destination: string) => {
    set(state => ({
      trips: [...state.trips, { id: Math.random() * 100, destination } as Trip]
    }))
  },
  removeTrip: (id: number) => {
    set(state => ({
      trips: state.trips.filter(t => t.id !== id)
    }))
  }
}))

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('TripsStore', useTripsState)
}
