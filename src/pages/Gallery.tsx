'use client'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/animated-section'
import { Breadcrumb } from '@/components/breadcrumb'
import { SEO } from '@/components/seo'
import { BreadcrumbSchema } from '@/components/structured-data'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export interface GalleryItem {
  breed: string
  title: string
  image: string
  category: string
}

export const galleryItems: GalleryItem[] = [
  {
    "breed": "akita",
    "title": "Akita 2",
    "image": "/images/gallery/akita/akita-2.jpg",
    "category": "akita"
  },
  {
    "breed": "akita",
    "title": "Akita 3",
    "image": "/images/gallery/akita/akita-3.jpg",
    "category": "akita"
  },
  {
    "breed": "akita",
    "title": "Akita 5",
    "image": "/images/gallery/akita/akita-5.png",
    "category": "akita"
  },
  {
    "breed": "akita",
    "title": "Akita",
    "image": "/images/gallery/akita/akita.jpg",
    "category": "akita"
  },
  {
    "breed": "bully",
    "title": "Bully 1",
    "image": "/images/gallery/bully/bully-1.jpg",
    "category": "bully"
  },
  {
    "breed": "bully",
    "title": "Bully 2",
    "image": "/images/gallery/bully/bully-2.jpg",
    "category": "bully"
  },
  {
    "breed": "bully",
    "title": "Bully 3",
    "image": "/images/gallery/bully/bully-3.jpg",
    "category": "bully"
  },
  {
    "breed": "bully",
    "title": "Bully",
    "image": "/images/gallery/bully/bully.jpg",
    "category": "bully"
  },
  {
    "breed": "bully",
    "title": "Bully1",
    "image": "/images/gallery/bully/bully1.jpg",
    "category": "bully"
  },
  {
    "breed": "bully",
    "title": "Bully2",
    "image": "/images/gallery/bully/bully2.jpg",
    "category": "bully"
  },
  {
    "breed": "bully",
    "title": "Bully3",
    "image": "/images/gallery/bully/bully3.jpg",
    "category": "bully"
  },
  {
    "breed": "cane-corso",
    "title": "Cane Corso 1",
    "image": "/images/gallery/cane-corso/cane-corso-1.jpg",
    "category": "cane-corso"
  },
  {
    "breed": "cane-corso",
    "title": "Cane Corso 2",
    "image": "/images/gallery/cane-corso/cane-corso-2.jpeg",
    "category": "cane-corso"
  },
  {
    "breed": "cane-corso",
    "title": "Cane Corso 3",
    "image": "/images/gallery/cane-corso/cane-corso-3.jpeg",
    "category": "cane-corso"
  },
  {
    "breed": "cane-corso",
    "title": "Cane Corso 4",
    "image": "/images/gallery/cane-corso/cane-corso-4.jpeg",
    "category": "cane-corso"
  },
  {
    "breed": "cane-corso",
    "title": "Cane Corso Arcid",
    "image": "/images/gallery/cane-corso/cane-corso-arcid.jpg",
    "category": "cane-corso"
  },
  {
    "breed": "cane-corso",
    "title": "Cane Corso Big",
    "image": "/images/gallery/cane-corso/cane-corso-big.jpg",
    "category": "cane-corso"
  },
  {
    "breed": "cane-corso",
    "title": "Cane Corso Puppy",
    "image": "/images/gallery/cane-corso/cane-corso-puppy.jpg",
    "category": "cane-corso"
  },
  {
    "breed": "french-mastiff",
    "title": "French Mastiff India",
    "image": "/images/gallery/french-mastiff/french-mastiff-india.jpg",
    "category": "french-mastiff"
  },
  {
    "breed": "french-mastiff",
    "title": "French Mastiff Playing",
    "image": "/images/gallery/french-mastiff/french-mastiff-playing.jpg",
    "category": "french-mastiff"
  },
  {
    "breed": "french-mastiff",
    "title": "French Mastiff Puppies",
    "image": "/images/gallery/french-mastiff/french-mastiff-puppies.jpg",
    "category": "french-mastiff"
  },
  {
    "breed": "french-mastiff",
    "title": "French Mastiff Top",
    "image": "/images/gallery/french-mastiff/french-mastiff-top.jpg",
    "category": "french-mastiff"
  },
  {
    "breed": "french-mastiff",
    "title": "French Mastiff",
    "image": "/images/gallery/french-mastiff/french-mastiff.jpg",
    "category": "french-mastiff"
  },
  {
    "breed": "french-mastiff",
    "title": "French Mastiff1",
    "image": "/images/gallery/french-mastiff/french-mastiff1.jpg",
    "category": "french-mastiff"
  },
  {
    "breed": "french-mastiff",
    "title": "French Mastiff10",
    "image": "/images/gallery/french-mastiff/french-mastiff10.jpg",
    "category": "french-mastiff"
  },
  {
    "breed": "french-mastiff",
    "title": "French Mastiff11",
    "image": "/images/gallery/french-mastiff/french-mastiff11.jpg",
    "category": "french-mastiff"
  },
  {
    "breed": "french-mastiff",
    "title": "French Mastiff2",
    "image": "/images/gallery/french-mastiff/french-mastiff2.jpg",
    "category": "french-mastiff"
  },
  {
    "breed": "french-mastiff",
    "title": "French Mastiff3",
    "image": "/images/gallery/french-mastiff/french-mastiff3.jpg",
    "category": "french-mastiff"
  },
  {
    "breed": "french-mastiff",
    "title": "French Mastiff4",
    "image": "/images/gallery/french-mastiff/french-mastiff4.jpg",
    "category": "french-mastiff"
  },
  {
    "breed": "french-mastiff",
    "title": "French Mastiff5",
    "image": "/images/gallery/french-mastiff/french-mastiff5.jpg",
    "category": "french-mastiff"
  },
  {
    "breed": "french-mastiff",
    "title": "French Mastiff6",
    "image": "/images/gallery/french-mastiff/french-mastiff6.jpg",
    "category": "french-mastiff"
  },
  {
    "breed": "french-mastiff",
    "title": "French Mastiff7",
    "image": "/images/gallery/french-mastiff/french-mastiff7.jpg",
    "category": "french-mastiff"
  },
  {
    "breed": "french-mastiff",
    "title": "French Mastiff8",
    "image": "/images/gallery/french-mastiff/french-mastiff8.jpg",
    "category": "french-mastiff"
  },
  {
    "breed": "french-mastiff",
    "title": "French Mastiff9",
    "image": "/images/gallery/french-mastiff/french-mastiff9.jpg",
    "category": "french-mastiff"
  },
  {
    "breed": "img",
    "title": "Dog1",
    "image": "/images/gallery/img/dog1.jpg",
    "category": "img"
  },
  {
    "breed": "img",
    "title": "Dog10",
    "image": "/images/gallery/img/dog10.jpg",
    "category": "img"
  },
  {
    "breed": "img",
    "title": "Dog11",
    "image": "/images/gallery/img/dog11.jpg",
    "category": "img"
  },
  {
    "breed": "img",
    "title": "Dog12",
    "image": "/images/gallery/img/dog12.jpg",
    "category": "img"
  },
  {
    "breed": "img",
    "title": "Dog13",
    "image": "/images/gallery/img/dog13.jpg",
    "category": "img"
  },
  {
    "breed": "img",
    "title": "Dog14",
    "image": "/images/gallery/img/dog14.jpg",
    "category": "img"
  },
  {
    "breed": "img",
    "title": "Dog15",
    "image": "/images/gallery/img/dog15.jpg",
    "category": "img"
  },
  {
    "breed": "img",
    "title": "Dog16",
    "image": "/images/gallery/img/dog16.jpg",
    "category": "img"
  },
  {
    "breed": "img",
    "title": "Dog17",
    "image": "/images/gallery/img/dog17.jpg",
    "category": "img"
  },
  {
    "breed": "img",
    "title": "Dog18",
    "image": "/images/gallery/img/dog18.jpg",
    "category": "img"
  },
  {
    "breed": "img",
    "title": "Dog19",
    "image": "/images/gallery/img/dog19.jpg",
    "category": "img"
  },
  {
    "breed": "img",
    "title": "Dog2",
    "image": "/images/gallery/img/dog2.jpg",
    "category": "img"
  },
  {
    "breed": "img",
    "title": "Dog20",
    "image": "/images/gallery/img/dog20.jpg",
    "category": "img"
  },
  {
    "breed": "img",
    "title": "Dog3",
    "image": "/images/gallery/img/dog3.jpg",
    "category": "img"
  },
  {
    "breed": "img",
    "title": "Dog4",
    "image": "/images/gallery/img/dog4.jpg",
    "category": "img"
  },
  {
    "breed": "img",
    "title": "Dog5",
    "image": "/images/gallery/img/dog5.jpg",
    "category": "img"
  },
  {
    "breed": "img",
    "title": "Dog6",
    "image": "/images/gallery/img/dog6.jpg",
    "category": "img"
  },
  {
    "breed": "img",
    "title": "Dog7",
    "image": "/images/gallery/img/dog7.jpg",
    "category": "img"
  },
  {
    "breed": "img",
    "title": "Dog8",
    "image": "/images/gallery/img/dog8.jpg",
    "category": "img"
  },
  {
    "breed": "img",
    "title": "Dog9",
    "image": "/images/gallery/img/dog9.jpg",
    "category": "img"
  },
  {
    "breed": "labrador",
    "title": "Labrador 1",
    "image": "/images/gallery/labrador/labrador-1.jpg",
    "category": "labrador"
  },
  {
    "breed": "labrador",
    "title": "Labrador Cute",
    "image": "/images/gallery/labrador/labrador-cute.jpg",
    "category": "labrador"
  },
  {
    "breed": "labrador",
    "title": "Labrador India",
    "image": "/images/gallery/labrador/labrador-india.jpg",
    "category": "labrador"
  },
  {
    "breed": "labrador",
    "title": "Labrador",
    "image": "/images/gallery/labrador/labrador.jpg",
    "category": "labrador"
  },
  {
    "breed": "labrador",
    "title": "Labrador1",
    "image": "/images/gallery/labrador/labrador1.jpg",
    "category": "labrador"
  },
  {
    "breed": "labrador",
    "title": "Labrador2",
    "image": "/images/gallery/labrador/labrador2.jpg",
    "category": "labrador"
  },
  {
    "breed": "labrador",
    "title": "Labrador3",
    "image": "/images/gallery/labrador/labrador3.jpg",
    "category": "labrador"
  },
  {
    "breed": "labrador",
    "title": "Labrador4",
    "image": "/images/gallery/labrador/labrador4.jpg",
    "category": "labrador"
  },
  {
    "breed": "labrador",
    "title": "Labrador5",
    "image": "/images/gallery/labrador/labrador5.jpg",
    "category": "labrador"
  },
  {
    "breed": "labrador",
    "title": "Labrador6",
    "image": "/images/gallery/labrador/labrador6.jpg",
    "category": "labrador"
  },
  {
    "breed": "labrador",
    "title": "Labrador7",
    "image": "/images/gallery/labrador/labrador7.jpg",
    "category": "labrador"
  },
  {
    "breed": "labrador",
    "title": "Labrador8",
    "image": "/images/gallery/labrador/labrador8.jpg",
    "category": "labrador"
  },
  {
    "breed": "labrador",
    "title": "Labrador9",
    "image": "/images/gallery/labrador/labrador9.jpg",
    "category": "labrador"
  },
  {
    "breed": "saint-bernard",
    "title": "Saint Bernard 1",
    "image": "/images/gallery/saint-bernard/saint-bernard-1.jpg",
    "category": "saint-bernard"
  },
  {
    "breed": "saint-bernard",
    "title": "Saint Bernard 2",
    "image": "/images/gallery/saint-bernard/saint-bernard-2.jpg",
    "category": "saint-bernard"
  },
  {
    "breed": "saint-bernard",
    "title": "Saint Bernard Hulk",
    "image": "/images/gallery/saint-bernard/saint-bernard-hulk.jpg",
    "category": "saint-bernard"
  },
  {
    "breed": "saint-bernard",
    "title": "Saint Bernard India",
    "image": "/images/gallery/saint-bernard/saint-bernard-india.jpg",
    "category": "saint-bernard"
  },
  {
    "breed": "saint-bernard",
    "title": "Saint Bernard Puppy",
    "image": "/images/gallery/saint-bernard/saint-bernard-puppy.jpg",
    "category": "saint-bernard"
  },
  {
    "breed": "saint-bernard",
    "title": "Saint Bernard St",
    "image": "/images/gallery/saint-bernard/saint-bernard-st.jpg",
    "category": "saint-bernard"
  },
  {
    "breed": "saint-bernard",
    "title": "Saint Bernard",
    "image": "/images/gallery/saint-bernard/saint-bernard.jpg",
    "category": "saint-bernard"
  },
  {
    "breed": "saint-bernard",
    "title": "Saint Bernard1",
    "image": "/images/gallery/saint-bernard/saint-bernard1.jpg",
    "category": "saint-bernard"
  },
  {
    "breed": "saint-bernard",
    "title": "Saint Bernard10",
    "image": "/images/gallery/saint-bernard/saint-bernard10.jpg",
    "category": "saint-bernard"
  },
  {
    "breed": "saint-bernard",
    "title": "Saint Bernard11",
    "image": "/images/gallery/saint-bernard/saint-bernard11.jpg",
    "category": "saint-bernard"
  },
  {
    "breed": "saint-bernard",
    "title": "Saint Bernard12",
    "image": "/images/gallery/saint-bernard/saint-bernard12.jpg",
    "category": "saint-bernard"
  },
  {
    "breed": "saint-bernard",
    "title": "Saint Bernard13",
    "image": "/images/gallery/saint-bernard/saint-bernard13.jpg",
    "category": "saint-bernard"
  },
  {
    "breed": "saint-bernard",
    "title": "Saint Bernard14",
    "image": "/images/gallery/saint-bernard/saint-bernard14.jpg",
    "category": "saint-bernard"
  },
  {
    "breed": "saint-bernard",
    "title": "Saint Bernard15",
    "image": "/images/gallery/saint-bernard/saint-bernard15.jpg",
    "category": "saint-bernard"
  },
  {
    "breed": "saint-bernard",
    "title": "Saint Bernard16",
    "image": "/images/gallery/saint-bernard/saint-bernard16.jpg",
    "category": "saint-bernard"
  },
  {
    "breed": "saint-bernard",
    "title": "Saint Bernard2",
    "image": "/images/gallery/saint-bernard/saint-bernard2.jpg",
    "category": "saint-bernard"
  },
  {
    "breed": "saint-bernard",
    "title": "Saint Bernard3",
    "image": "/images/gallery/saint-bernard/saint-bernard3.jpg",
    "category": "saint-bernard"
  },
  {
    "breed": "saint-bernard",
    "title": "Saint Bernard4",
    "image": "/images/gallery/saint-bernard/saint-bernard4.jpg",
    "category": "saint-bernard"
  },
  {
    "breed": "saint-bernard",
    "title": "Saint Bernard5",
    "image": "/images/gallery/saint-bernard/saint-bernard5.jpg",
    "category": "saint-bernard"
  },
  {
    "breed": "saint-bernard",
    "title": "Saint Bernard6",
    "image": "/images/gallery/saint-bernard/saint-bernard6.jpg",
    "category": "saint-bernard"
  },
  {
    "breed": "saint-bernard",
    "title": "Saint Bernard7",
    "image": "/images/gallery/saint-bernard/saint-bernard7.jpg",
    "category": "saint-bernard"
  },
  {
    "breed": "saint-bernard",
    "title": "Saint Bernard8",
    "image": "/images/gallery/saint-bernard/saint-bernard8.jpg",
    "category": "saint-bernard"
  },
  {
    "breed": "saint-bernard",
    "title": "Saint Bernard9",
    "image": "/images/gallery/saint-bernard/saint-bernard9.jpg",
    "category": "saint-bernard"
  },
  {
    "breed": "saint-bernard",
    "title": "San Bernard Puppy",
    "image": "/images/gallery/saint-bernard/san-bernard-puppy.jpg",
    "category": "saint-bernard"
  },
  {
    "breed": "saint-bernard",
    "title": "St Bernard's Puppy",
    "image": "/images/gallery/saint-bernard/st-bernard's-puppy.jpg",
    "category": "saint-bernard"
  },
  {
    "breed": "siberian-husky",
    "title": "Husky 1",
    "image": "/images/gallery/siberian-husky/husky-1.jpg",
    "category": "siberian-husky"
  },
  {
    "breed": "siberian-husky",
    "title": "Husky Jordan",
    "image": "/images/gallery/siberian-husky/husky-jordan.jpg",
    "category": "siberian-husky"
  },
  {
    "breed": "siberian-husky",
    "title": "Husky",
    "image": "/images/gallery/siberian-husky/husky.jpg",
    "category": "siberian-husky"
  },
  {
    "breed": "siberian-husky",
    "title": "Husky1",
    "image": "/images/gallery/siberian-husky/husky1.jpg",
    "category": "siberian-husky"
  },
  {
    "breed": "siberian-husky",
    "title": "Husky2",
    "image": "/images/gallery/siberian-husky/husky2.jpg",
    "category": "siberian-husky"
  },
  {
    "breed": "siberian-husky",
    "title": "Husky3",
    "image": "/images/gallery/siberian-husky/husky3.jpg",
    "category": "siberian-husky"
  },
  {
    "breed": "siberian-husky",
    "title": "Husky4",
    "image": "/images/gallery/siberian-husky/husky4.jpg",
    "category": "siberian-husky"
  },
  {
    "breed": "siberian-husky",
    "title": "Husky5",
    "image": "/images/gallery/siberian-husky/husky5.jpg",
    "category": "siberian-husky"
  },
  {
    "breed": "siberian-husky",
    "title": "Husky7",
    "image": "/images/gallery/siberian-husky/husky7.jpg",
    "category": "siberian-husky"
  },
  {
    "breed": "siberian-husky",
    "title": "Husky8",
    "image": "/images/gallery/siberian-husky/husky8.jpg",
    "category": "siberian-husky"
  },
  {
    "breed": "siberian-husky",
    "title": "Husky9",
    "image": "/images/gallery/siberian-husky/husky9.jpg",
    "category": "siberian-husky"
  },
  {
    "breed": "siberian-husky",
    "title": "Siberian Husky 1",
    "image": "/images/gallery/siberian-husky/siberian-husky-1.jpg",
    "category": "siberian-husky"
  },
  {
    "breed": "siberian-husky",
    "title": "Siberian Husky 2",
    "image": "/images/gallery/siberian-husky/siberian-husky-2.jpg",
    "category": "siberian-husky"
  },
  {
    "breed": "siberian-husky",
    "title": "Siberian Husky 3",
    "image": "/images/gallery/siberian-husky/siberian-husky-3.jpg",
    "category": "siberian-husky"
  },
  {
    "breed": "siberian-husky",
    "title": "Siberian Husky Pup",
    "image": "/images/gallery/siberian-husky/siberian-husky-pup.jpg",
    "category": "siberian-husky"
  },
  {
    "breed": "up",
    "title": "Best Dog",
    "image": "/images/gallery/up/best-dog.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "Dsc 0042",
    "image": "/images/gallery/up/dsc-0042.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "Dsc 0043",
    "image": "/images/gallery/up/dsc-0043.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "Dsc 0044",
    "image": "/images/gallery/up/dsc-0044.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "Dsc 0045",
    "image": "/images/gallery/up/dsc-0045.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "Dsc 0046",
    "image": "/images/gallery/up/dsc-0046.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "Dsc 0047",
    "image": "/images/gallery/up/dsc-0047.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "Dsc 0048",
    "image": "/images/gallery/up/dsc-0048.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "Dsc 0049",
    "image": "/images/gallery/up/dsc-0049.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "Dsc 0052",
    "image": "/images/gallery/up/dsc-0052.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "Dsc 0053",
    "image": "/images/gallery/up/dsc-0053.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "Dsc 0054",
    "image": "/images/gallery/up/dsc-0054.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "Dsc 0055",
    "image": "/images/gallery/up/dsc-0055.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "Dsc 0056",
    "image": "/images/gallery/up/dsc-0056.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "Dsc 0057",
    "image": "/images/gallery/up/dsc-0057.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "Dsc 0071",
    "image": "/images/gallery/up/dsc-0071.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "Dsc 0072",
    "image": "/images/gallery/up/dsc-0072.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "Dsc 0073",
    "image": "/images/gallery/up/dsc-0073.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "Dsc 0074",
    "image": "/images/gallery/up/dsc-0074.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "Dsc 0075",
    "image": "/images/gallery/up/dsc-0075.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "Dsc 0076",
    "image": "/images/gallery/up/dsc-0076.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "Dsc 0081",
    "image": "/images/gallery/up/dsc-0081.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "F1",
    "image": "/images/gallery/up/f1.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "F2",
    "image": "/images/gallery/up/f2.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "F4",
    "image": "/images/gallery/up/f4.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "F5",
    "image": "/images/gallery/up/f5.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "F6",
    "image": "/images/gallery/up/f6.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "Up",
    "image": "/images/gallery/up/up.png",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "Up1",
    "image": "/images/gallery/up/up1.jpg",
    "category": "up"
  },
  {
    "breed": "up",
    "title": "Up2",
    "image": "/images/gallery/up/up2.jpg",
    "category": "up"
  }
]

const filters = [
  { value: 'all', label: 'All Dogs' },
  { value: 'cane-corso', label: 'Cane Corso' },
  { value: 'siberian-husky', label: 'Siberian Husky' },
  { value: 'saint-bernard', label: 'Saint Bernard' },
  // { value: 'akita', label: 'Akita' },
  { value: 'bully', label: 'Bully' },
  { value: 'french-mastiff', label: 'French Mastiff' },
  { value: 'labrador', label: 'Labrador' },
  { value: 'up', label: 'Kennel Updates' },
  { value: 'img', label: 'Kennel Life' },
]

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredItems =
    selectedFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedFilter)

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null))
    }
  }

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null))
    }
  }

  return (
    <div className="bg-background text-foreground">
      <SEO
        title="Ashoka Kennel Gallery - Happy Puppies & Dogs Photos"
        description="Browse the photo gallery of Ashoka Kennel, featuring purebred Cane Corso, Siberian Husky, and Saint Bernard puppies and adult dogs."
        keywords="dog gallery India, Cane Corso photos, Siberian Husky pictures, Saint Bernard images, Ashoka Kennel dogs"
      />
      <BreadcrumbSchema
        items={[
          { label: 'Home', url: '/' },
          { label: 'Gallery', url: '/gallery' },
        ]}
      />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Browse our collection of beautiful dogs and happy families from Ashoka Kennel
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Interactive Sliding Category Filter */}
      <section className="py-8 sticky top-20 z-30 bg-background/95 backdrop-blur border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((filter) => {
              const isSelected = selectedFilter === filter.value
              return (
                <button
                  key={filter.value}
                  onClick={() => setSelectedFilter(filter.value)}
                  className={`relative px-5 py-2.5 rounded-full font-bold text-sm transition-colors duration-300 ${
                    isSelected ? 'text-white' : 'text-foreground/80 hover:text-primary'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-primary rounded-full shadow-md shadow-primary/20 z-[-1]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {filter.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid with layout transition animation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={`${item.title}-${item.image}-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightboxIndex(idx)}
                  className="group bg-white border border-border/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1.5"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/Top.jpg'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white font-semibold text-xs bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm">
                        {item.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 bg-card">
                    <h3 className="text-base font-bold group-hover:text-primary transition-colors leading-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1.5 capitalize">
                      {item.breed.replace('-', ' ')}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">No images found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX / SLIDESHOW MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center backdrop-blur-sm p-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 text-white border border-white/10 hover:bg-white/20 hover:scale-105 transition-all"
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            {/* Slider Content Wrapper */}
            <div className="relative max-w-5xl w-full flex items-center justify-center">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 z-50 p-3 rounded-full bg-white/10 text-white border border-white/10 hover:bg-white/20 hover:scale-105 transition-all md:block"
                aria-label="Previous Image"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Image Details */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col items-center max-w-[90vw]"
              >
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-h-[75vh] max-w-full object-contain rounded-2xl border border-white/10 shadow-2xl bg-black"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/Top.jpg'
                  }}
                />
                
                {/* Details Footer */}
                <div className="mt-4 text-center">
                  <h4 className="text-white font-extrabold text-lg tracking-tight">
                    {filteredItems[lightboxIndex].title}
                  </h4>
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider mt-1 block">
                    {filteredItems[lightboxIndex].category.replace('-', ' ')}
                  </span>
                </div>
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 z-50 p-3 rounded-full bg-white/10 text-white border border-white/10 hover:bg-white/20 hover:scale-105 transition-all md:block"
                aria-label="Next Image"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Indicator Dot Counters */}
            <div className="absolute bottom-6 flex items-center gap-1.5 text-white/55 text-sm font-semibold">
              <span>{lightboxIndex + 1}</span> / <span>{filteredItems.length}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">Experience Ashoka Kennel</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Our gallery showcases the beautiful dogs we have had the pleasure of breeding and the
              happy moments they create with their families.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Would you like to meet any of these wonderful companions in person? Get in touch with
              us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/breeds"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                View Breeds
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
