import { NavItem, CollectionItem, ServiceStep, Testimonial, TimelineItem, RunwayItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '/#hero' },
  { label: 'Pasarela', href: '/#runway' },
  { label: 'Campaña', href: '/#campaign' },
  { label: 'Colección', href: '/collection' },
  { label: 'Legado', href: '/#timeline' },
  { label: 'Contacto', href: '/#contact' },
];

export const COLLECTION: CollectionItem[] = [
  {
    id: 1,
    title: "Seda Nocturna",
    category: "Gala",
    imageUrl: "https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    title: "Brisa de Verano",
    category: "Casual Chic",
    imageUrl: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "Estructura Urbana",
    category: "Sastrería",
    imageUrl: "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    title: "Velo de Novia",
    category: "Nuptial",
    imageUrl: "https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export const PROCESS_STEPS: ServiceStep[] = [
  {
    id: 1,
    title: "La Cita",
    description: "Nos reunimos para descubrir tu esencia y visualizar la prenda perfecta para tu ocasión.",
    icon: "Calendar"
  },
  {
    id: 2,
    title: "Diseño y Boceto",
    description: "Traduzco tus ideas en trazos sobre papel, seleccionando las telas más nobles.",
    icon: "PenTool"
  },
  {
    id: 3,
    title: "Confección",
    description: "Cada puntada se realiza con precisión artesanal en nuestro atelier privado.",
    icon: "Scissors"
  },
  {
    id: 4,
    title: "Entrega Final",
    description: "Ajustes finales para asegurar un calce perfecto y esa sonrisa inolvidable.",
    icon: "Gift"
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "2018",
    title: "El Origen",
    description: "Aura nace en un pequeño estudio de San Telmo, con una máquina de coser antigua y una visión clara: devolver el alma a la ropa.",
    image: "https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    year: "2020",
    title: "Primera Colección",
    description: "Lanzamiento de 'Ethereal', nuestra primera línea prêt-à-porter que capturó la atención de la crítica local por su uso de sedas orgánicas.",
    image: "https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    year: "2022",
    title: "Expansión Internacional",
    description: "Nuestros diseños pisan por primera vez una pasarela en Milán, llevando la artesanía argentina al escenario global.",
    image: "https://images.pexels.com/photos/2088210/pexels-photo-2088210.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    year: "2024",
    title: "El Nuevo Atelier",
    description: "Inauguración de nuestra casa insignia, un espacio donde la moda, el arte y la arquitectura convergen.",
    image: "https://images.pexels.com/photos/374898/pexels-photo-374898.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export const RUNWAY_ITEMS: RunwayItem[] = [
  { id: 1, imageUrl: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Modelo 1" },
  { id: 2, imageUrl: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Modelo 2" },
  { id: 3, imageUrl: "https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Modelo 3" },
  { id: 4, imageUrl: "https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Modelo 4" },
  { id: 5, imageUrl: "https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Modelo 5" },
  { id: 6, imageUrl: "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Modelo 6" },
  { id: 7, imageUrl: "https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Modelo 7" },
  { id: 8, imageUrl: "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Modelo 8" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Valentina S.",
    role: "Novia",
    text: "Aura entendió exactamente lo que quería. Mi vestido no fue solo una prenda, fue una extensión de mi personalidad."
  },
  {
    id: 2,
    name: "Camila R.",
    role: "Ejecutiva",
    text: "La sastrería a medida cambió mi forma de presentarme al mundo. Elegancia sin esfuerzo."
  }
];

export const BRANDS = [
  { id: 1, name: "VOGUE", font: "font-serif" },
  { id: 2, name: "ELLE", font: "font-sans" },
  { id: 3, name: "HARPER'S BAZAAR", font: "font-serif" },
  { id: 4, name: "L'OFFICIEL", font: "font-sans" },
  { id: 5, name: "VANITY FAIR", font: "font-serif" },
  { id: 6, name: "MARIE CLAIRE", font: "font-sans" },
  { id: 7, name: "COSMOPOLITAN", font: "font-sans" },
  { id: 8, name: "GLAMOUR", font: "font-serif" },
];