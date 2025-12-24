import Card from "./Card";

const Boxes = () => {

    const creators = [
  {
    id: 1,
    fullName: "Emelia Kerr",
    designation: "Motion Designer",
    badge: "Jitter Expert",
    extraBadgeCount: 6,
    rating: 4.9,
    earned: "$35k+",
    ratePerHour: "$45/hr",
    profileImage: "https://i.pinimg.com/736x/c4/ee/1e/c4ee1e8a63ad02db5faf5827d4fcc083.jpg",
    isSaved: false,
    ctaText: "Get In Touch"
  },
  {
    id: 2,
    fullName: "Lily Singh",
    designation: "UI/UX Designer",
    badge: "Figma Pro",
    extraBadgeCount: 4,
    rating: 4.8,
    earned: "$42k+",
    ratePerHour: "$55/hr",
    profileImage: "https://i.pinimg.com/736x/83/76/f5/8376f5961a80760e48829247a82074d0.jpg",
    isSaved: true,
    ctaText: "Get In Touch"
  },
  {
    id: 3,
    fullName: "Lana Reddy",
    designation: "Frontend Developer",
    badge: "React Specialist",
    extraBadgeCount: 5,
    rating: 4.7,
    earned: "$50k+",
    ratePerHour: "$60/hr",
    profileImage: "https://i.pinimg.com/736x/00/bd/0c/00bd0cf5885dea991c9f73b0ce05be84.jpg",
    isSaved: false,
    ctaText: "Get In Touch"
  },
  {
    id: 4,
    fullName: "Emily Chen",
    designation: "Product Designer",
    badge: "Design Systems",
    extraBadgeCount: 3,
    rating: 4.9,
    earned: "$38k+",
    ratePerHour: "$50/hr",
    profileImage: "https://i.pinimg.com/736x/b8/9d/69/b89d693363d08597c90c15c91c7e3ab5.jpg",
    isSaved: false,
    ctaText: "Get In Touch"
  },
  {
    id: 5,
    fullName: "Grace Hayden",
    designation: "UI Animator",
    badge: "Micro Interactions",
    extraBadgeCount: 7,
    rating: 4.8,
    earned: "$46k+",
    ratePerHour: "$58/hr",
    profileImage: "https://i.pinimg.com/736x/90/5f/fe/905ffe096f8a58d020df15081e8d582a.jpg",
    isSaved: true,
    ctaText: "Get In Touch"
  },
  {
    id: 6,
    fullName: "Ryan Patel",
    designation: "Visual Designer",
    badge: "Branding Expert",
    extraBadgeCount: 7,
    rating: 4.6,
    earned: "$29k+",
    ratePerHour: "$40/hr",
    profileImage: "https://i.pinimg.com/1200x/af/eb/2e/afeb2ea725e9ee215e6c09c7a0290a83.jpg",
    isSaved: true,
    ctaText: "Get In Touch"
  }
];

  return (
    <div className="flex gap-20 flex-wrap p-10 bg-black w-full items-center justify-center">
      {creators.map((elem) => {
        return <Card key={elem.id} props={elem} />
      })}
    </div>
  )
}

export default Boxes
