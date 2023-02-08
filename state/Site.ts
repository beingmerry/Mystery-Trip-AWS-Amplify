import {create} from 'zustand'

interface SidebarState {
  open: boolean;
}

export const useSidebarState = create<SidebarState>(set =>  {
  
})