
import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

// Create your atoms and derivatives
export const textAtom = atom('hello')
export const uppercaseAtom = atom(
  (get) => get(textAtom).toUpperCase()
)
export const countAtom = atom(0)


export const todoTitle = atom('')
export const listTodo = atom<{ title: string; isComplete: boolean }[]>([]);

export const countryAtom = atom('Japan')

export const citiesAtom = atom(['Tokyo', 'Kyoto', 'Osaka'])

export const animeAtom = atom([
  {
    title: 'Ghost in the Shell',
    year: 1995,
    watched: true
  },
  {
    title: 'Serial Experiments Lain',
    year: 1998,
    watched: false
  }
])
export const darkModeAtom = atomWithStorage('darkMode', false)
