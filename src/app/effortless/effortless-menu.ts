import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  
  {
    title: 'Page 1',
    icon: 'home-outline',
    link: '/effortless/page1',
    home: true,
  },
  {
    title: 'Page 2',
    icon: 'person',
    link: '/effortless/page2',
  },
  {
    title: 'Page 3',
    icon: 'people',
    link: '/effortless/page3',
  },
  {
    title: 'Pages',
    icon: 'settings',
    children: [
      {
        title: 'Sub page 1',
        link: '/effortless/page1/subpage1',
      },
      {
        title: 'Sub page 2',
        link: '/effortless/page1/subpage2',
      },
      {
        title: 'Sub page 3',
        link: '/effortless/page1/subpage3',
      },
    ],
  },
  {
    title: 'Login',
    icon: 'shield-outline',
    link: '/auth/login',
    hidden: false,
    expanded: false,
  },
];
