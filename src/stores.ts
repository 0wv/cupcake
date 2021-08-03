import { colorByName } from './colors'
import type { Color } from './colors'
import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

export const color: Writable<Color> = writable(colorByName.get('cb-Blues (cbf)'))
export const cupcakes: Writable<Cupcake[]> = writable([])