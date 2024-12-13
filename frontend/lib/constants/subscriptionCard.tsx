interface SubscriptionCard {
  id: number;
  title: string;
  price: string;
  details: string[];
  btn: string;
}

const subscriptionCard: SubscriptionCard[] = [
  {
    id: 1,
    title: "Basic Plan",
    price: "EGP 350",
    details: [
      "Personalized Diet Plan",
      "Access to blog articles",
      "Access to timeline",
    ],
    btn: "Join Now",
  },
  {
    id: 2,
    title: "Premium Plan",
    price: "EGP 750",
    details: [
      "Personalized Diet Plan",
      "Access to blog articles",
      "Access to timeline",
      "Chat with coaches",
      "24/7 Support",
    ],
    btn: "Join Now",
  },
  {
    id: 3,
    title: "Advanced Plan",
    price: "EGP 900",
    details: [
      "Personalized Diet Plan",
      "Access to blog articles",
      "Access to timeline",
      "Chat with coaches",
      "24/7 Support",
      "Video streaming with coaches",
    ],
    btn: "Join Now",
  },
];

export default subscriptionCard;
