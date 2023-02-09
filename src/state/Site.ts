import { create } from 'zustand'
import { mountStoreDevtool } from 'simple-zustand-devtools'

type SidebarState = {
  open: boolean
  toggleSidebar: () => void
}

type DarkModeState = {
  darkMode: boolean
  toggleDarkMode: () => void
}

type LoggedInState = {
  loggedIn: boolean
  login: () => void
  logout: () => void
}

export const useSidebarState = create<SidebarState>((set) => ({
  open: false,
  toggleSidebar: () => set((state) => ({ open:!state.open })),
}))

export const useDarkModeState = create<DarkModeState>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode:!state.darkMode })),
}))


export const useLoggedInState = create<LoggedInState>((set) => ({
  loggedIn: false,
  login: () => set((state) => ({ loggedIn: true })),
  logout: () => set((state) => ({ loggedIn: false })),
}))

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('SidebarStore', useSidebarState)
  mountStoreDevtool('DarkModeStore', useDarkModeState)
  mountStoreDevtool('LoggedInStore', useLoggedInState)
}