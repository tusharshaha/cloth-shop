interface MenuItem {
  title: string,
  link: string,
}

export interface TNavlinks extends MenuItem {
  subList?: MenuItem[]
}

export const navlinks: TNavlinks[] = [
  {
    title: 'Home',
    link: '',
    subList: [
      { title: 'Home 1', link: '' },
      { title: 'Home 1', link: '' },
      { title: 'Home 1', link: '' },
      { title: 'Home 2', link: '' }
    ]
  },
  { title: 'Blogs', link: '' },
  { title: 'Shop', link: '' },
  { title: 'About Us', link: '' }
];