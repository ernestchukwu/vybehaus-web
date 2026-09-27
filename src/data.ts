export type EventItem = {
  id: string; title: string; category: string; date: string; shortDate: string; time: string;
  venue: string; city: string; country: string; price: number; image: string; organiser: string;
  attendees: number; tag?: string; description: string; ticketMode?: 'tickets'|'interest';
}

export const events: EventItem[] = [
  {
    id:'albania-takeover-2027', title:'Albania Takeover ’27', category:'Destination',
    date:'17–19 September 2027', shortDate:'17–19 SEP', time:'Three nights · Full programme TBA',
    venue:'Albanian Riviera', city:'Albanian Riviera', country:'Albania', price:0,
    organiser:'VYBEHAUS Collective', attendees:427, tag:'Priority list open', ticketMode:'interest',
    image:'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1800&q=90',
    description:'Three nights. One coast. All VYBE. A destination nightlife experience bringing Afrobeats, Amapiano, global DJs, beach energy and culture to the Albanian Riviera — created for people who travel for the moment and stay for the memory.'
  },
  { id:'midnight-garden', title:'Midnight Garden: R&B After Dark', category:'Nightlife', date:'Saturday, 10 October 2026', shortDate:'10 OCT', time:'9:00 PM – 2:00 AM', venue:'The Level', city:'Nottingham', country:'United Kingdom', price:22, organiser:'VYBEHAUS Collective', attendees:318, tag:'Almost gone', image:'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1400&q=85', description:'A late-night room of slow-burn R&B, neo-soul and future classics. Immersive light, a tightly curated crowd and selectors who know exactly when to let the record breathe.' },
  { id:'afro-rooftop', title:'Afro Rooftop: Golden Hour Sessions', category:'Music', date:'Sunday, 11 October 2026', shortDate:'11 OCT', time:'4:00 PM – 10:00 PM', venue:'Skyline Terrace', city:'Nottingham', country:'United Kingdom', price:18, organiser:'VYBEHAUS Collective', attendees:243, tag:'Trending', image:'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1400&q=85', description:'Afrobeats, amapiano and golden-hour energy above the city. DJs, cocktails, street-food pop-ups and a sunset made for the group chat.' },
  { id:'warehouse', title:'Warehouse 002: House / Garage', category:'Nightlife', date:'Saturday, 31 October 2026', shortDate:'31 OCT', time:'10:00 PM – 4:00 AM', venue:'Secret Warehouse', city:'Birmingham', country:'United Kingdom', price:26, organiser:'VYBEHAUS Collective', attendees:688, tag:'Hot ticket', image:'https://images.unsplash.com/photo-1571266028243-d220c9c3b2d2?auto=format&fit=crop&w=1400&q=85', description:'A stripped-back warehouse session for house, UKG and left-field club sounds. Location revealed to ticket holders 24 hours before doors.' },
  { id:'summer-rooftop', title:'VYBEHAUS Summer Social', category:'Music', date:'Saturday, 12 June 2027', shortDate:'12 JUN', time:'3:00 PM – 11:00 PM', venue:'Rooftop TBA', city:'London', country:'United Kingdom', price:28, organiser:'VYBEHAUS Collective', attendees:205, tag:'First release', image:'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85', description:'A long summer afternoon moving from golden-hour Afrobeats into Amapiano and global club sounds after dark.' },
  { id:'white-party', title:'The White Party', category:'Nightlife', date:'Saturday, 7 August 2027', shortDate:'07 AUG', time:'8:00 PM – 3:00 AM', venue:'Venue TBA', city:'Manchester', country:'United Kingdom', price:30, organiser:'VYBEHAUS Collective', attendees:172, tag:'Coming soon', image:'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85', description:'A dress-up, show-up kind of night. All-white looks, premium production and a soundtrack built for a full room.' }
]

export const categories = ['All','Destination','Music','Nightlife']
