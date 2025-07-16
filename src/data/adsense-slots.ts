export interface AdSlot {
  id: string;
  name: string;
  slotId: string;
  format: string;
  size?: {
    width: number;
    height: number;
  };
  responsive: boolean;
}

export const adSlots: AdSlot[] = [
  {
    id: 'header-banner',
    name: 'Header Banner',
    slotId: '3137758017', // display_horizontal
    format: 'auto',
    responsive: true,
  },
  {
    id: 'header-banner-mobile',
    name: 'Header Banner Mobile',
    slotId: '3137758017', // display_horizontal
    format: 'auto',
    responsive: true,
  },
  {
    id: 'sidebar-ad-1',
    name: 'Sidebar Ad 1',
    slotId: '4175507517', // display_vertical
    format: 'auto',
    responsive: true,
  },
  {
    id: 'sidebar-ad-2',
    name: 'Sidebar Ad 2',
    slotId: '4175507517', // display_vertical
    format: 'auto',
    responsive: true,
  },
  {
    id: 'content-ad-1',
    name: 'Content Ad 1',
    slotId: '4431777949', // Display_responsive_square
    format: 'auto',
    responsive: true,
  },
  {
    id: 'content-ad-2',
    name: 'Content Ad 2',
    slotId: '4431777949', // Display_responsive_square
    format: 'auto',
    responsive: true,
  },
  {
    id: 'content-ad-3',
    name: 'Content Ad 3',
    slotId: '3137758017', // display_horizontal
    format: 'auto',
    responsive: true,
  },
  {
    id: 'mobile-footer-ad',
    name: 'Mobile Footer Ad',
    slotId: '3137758017', // display_horizontal
    format: 'auto',
    responsive: true,
  },
  {
    id: 'in-feed-ad-1',
    name: 'In-Feed Ad 1',
    slotId: '3637571023', // Auto ads relaxed
    format: 'autorelaxed',
    responsive: true,
  },
  {
    id: 'in-feed-ad-2',
    name: 'In-Feed Ad 2',
    slotId: '2324489353', // Auto ads relaxed
    format: 'autorelaxed',
    responsive: true,
  },
];

export const getAdSlot = (id: string): AdSlot | undefined => {
  return adSlots.find(slot => slot.id === id);
};

export const ADSENSE_CLIENT_ID = 'ca-pub-5635114711353420';