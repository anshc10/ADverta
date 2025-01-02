export interface HomeServiceTestimonial {
  name: string;
  company: string;
  role: string;
  image: string;
  content: string;
  industry: string;
  location: string;
  metrics: {
    leadIncrease: string;
    costReduction: string;
    conversionRate: string;
  };
}