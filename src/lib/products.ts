import balconyImage from "@/assets/kts-balcony-net.jpg";
import cricketImage from "@/assets/kts-cricket-net.jpg";
import installationImage from "@/assets/kts-installation.jpg";

export const products = [
  {
    slug: "balcony-safety-nets",
    title: "Balcony safety nets",
    description: "An added layer of protection for balconies, windows and open spaces.",
    useCase: "For balconies, windows and open areas at home or in a building.",
    kind: "home",
    image: balconyImage,
    imageAlt: "A bright apartment balcony fitted with a safety net",
  },
  {
    slug: "childrens-safety-nets",
    title: "Children’s safety nets",
    description: "Help make high-rise living feel more at ease for the whole family.",
    useCase: "For families looking to add protection around balconies, windows and open spaces.",
    kind: "family",
    image: balconyImage,
    imageAlt: "A balcony with protective safety netting",
  },
  {
    slug: "bird-protection-nets",
    title: "Bird protection nets",
    description: "Help keep balconies and building openings cleaner and bird-free.",
    useCase: "For balconies, windows and building openings where bird access is a concern.",
    kind: "bird",
    image: balconyImage,
    imageAlt: "An apartment balcony protected with netting",
  },
  {
    slug: "cricket-practice-nets",
    title: "Cricket practice nets",
    description: "Enclosed netting for focused practice at home, school or club.",
    useCase: "For cricket practice areas at home, school or a club.",
    kind: "sport",
    image: cricketImage,
    imageAlt: "Cricket practice area enclosed with protective sports netting",
  },
  {
    slug: "duct-area-nets",
    title: "Duct area nets",
    description: "Cover open shafts and ducts while keeping air moving through.",
    useCase: "For open duct and shaft areas in residential or commercial buildings.",
    kind: "building",
    image: installationImage,
    imageAlt: "Safety net installation in a building",
  },
  {
    slug: "invisible-grills",
    title: "Invisible grills",
    description: "A subtle, open-feeling option for added window and balcony safety.",
    useCase: "For windows and balconies where an open view is important.",
    kind: "lines",
    image: balconyImage,
    imageAlt: "An open balcony with a clear view",
  },
  {
    slug: "coconut-safety-nets",
    title: "Coconut safety nets",
    description: "Protective netting around coconut trees can help catch falling coconuts before they reach nearby areas.",
    useCase: "For coconut trees near homes, walkways or other areas people use.",
    kind: "bird",
    image: installationImage,
    imageAlt: "Safety netting installation",
  },
  {
    slug: "bamboo-blinds",
    title: "Bamboo blinds",
    description: "Natural shade and privacy for balconies and other outdoor spaces.",
    useCase: "For balconies and outdoor areas where added shade and privacy are wanted.",
    kind: "home",
    image: balconyImage,
    imageAlt: "A sunlit balcony with open views",
  },
  {
    slug: "glass-safety-nets",
    title: "Glass safety nets",
    description: "An added layer of protection around glass balconies and windows while keeping an open appearance.",
    useCase: "For glass balconies, windows and other open areas.",
    kind: "lines",
    image: balconyImage,
    imageAlt: "A bright glass-fronted balcony with an open view",
  },
] as const;

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}