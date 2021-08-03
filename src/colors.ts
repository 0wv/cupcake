export interface Color {
    list: [string, string, string, string, string, string, string, string]
    type: 'diverging' | 'sequential'
}

export class Color {
    constructor (props: Partial<Color>) {
        Object.assign(this, props)
    }

    get background () {
        switch (this.type) {
            case 'diverging':
                return this.list[3]

            case 'sequential':
                return this.list[0]
        }
    }

    get text () {
        switch (this.type) {
            case 'diverging':
                return this.list[1]

            case 'sequential':
                return this.list[4]
        }
    }
}

export const colorByName: Map<string, Color> = new Map()
colorByName.set('cb-Blues (cbf)', new Color({
    list: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#084594'],
    type: 'sequential',
}))
colorByName.set('cb-BuGn (cbf)', new Color({
    list: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#005824'],
    type: 'sequential',
}))
colorByName.set('cb-BuPu (cbf)', new Color({
    list: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#6e016b'],
    type: 'sequential',
}))
colorByName.set('cb-GnBu (cbf)', new Color({
    list: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#08589e'],
    type: 'sequential',
}))
colorByName.set('cb-Greens (cbf)', new Color({
    list: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#005a32'],
    type: 'sequential',
}))
colorByName.set('cb-Greys (cbf)', new Color({
    list: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525'],
    type: 'sequential',
}))
colorByName.set('cb-OrRd (cbf)', new Color({
    list: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#990000'],
    type: 'sequential',
}))
colorByName.set('cb-Oranges (cbf)', new Color({
    list: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#8c2d04'],
    type: 'sequential',
}))
colorByName.set('cb-PuBu (cbf)', new Color({
    list: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#034e7b'],
    type: 'sequential',
}))
colorByName.set('cb-PuBuGn (cbf)', new Color({
    list: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016450'],
    type: 'sequential',
}))
colorByName.set('cb-PuRd (cbf)', new Color({
    list: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#91003f'],
    type: 'sequential',
}))
colorByName.set('cb-Purples (cbf)', new Color({
    list: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#4a1486'],
    type: 'sequential',
}))
colorByName.set('cb-RdPu (cbf)', new Color({
    list: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177'],
    type: 'sequential',
}))
colorByName.set('cb-Reds (cbf)', new Color({
    list: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#99000d'],
    type: 'sequential',
}))
colorByName.set('cb-YlGn (cbf)', new Color({
    list: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#005a32'],
    type: 'sequential',
}))
colorByName.set('cb-YlGnBu (cbf)', new Color({
    list: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#0c2c84'],
    type: 'sequential',
}))
colorByName.set('cb-YlOrBr (cbf)', new Color({
    list: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#8c2d04'],
    type: 'sequential',
}))
colorByName.set('cb-YlOrRd (cbf)', new Color({
    list: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#b10026'],
    type: 'sequential',
}))
colorByName.set('cb-BrBG (cbf)', new Color({
    list: ['#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#c7eae5', '#80cdc1', '#35978f', '#01665e'],
    type: 'diverging',
}))
colorByName.set('cb-PRGn (cbf)', new Color({
    list: ['#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837'],
    type: 'diverging',
}))
colorByName.set('cb-PiYG (cbf)', new Color({
    list: ['#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221'],
    type: 'diverging',
}))
colorByName.set('cb-PuOr (cbf)', new Color({
    list: ['#b35806', '#e08214', '#fdb863', '#fee0b6', '#d8daeb', '#b2abd2', '#8073ac', '#542788'],
    type: 'diverging',
}))
colorByName.set('cb-RdBu (cbf)', new Color({
    list: ['#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac'],
    type: 'diverging',
}))
colorByName.set('cb-RdGy (cbf)', new Color({
    list: ['#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#e0e0e0', '#bababa', '#878787', '#4d4d4d'],
    type: 'diverging',
}))
colorByName.set('cb-RdYlBu (cbf)', new Color({
    list: ['#d73027', '#f46d43', '#fdae61', '#fee090', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4'],
    type: 'diverging',
}))