import { notFound } from "next/navigation";
import { foods } from "@/data/foods";
import ProductDetailScreen from "@/screens/ProductDetailScreen";

interface FoodDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function FoodDetailPage({ params }: FoodDetailPageProps) {
  const { id } = await params;
  const food = foods.find((f) => f.id === id);
  if (!food) notFound();
  return <ProductDetailScreen food={food} />;
}

export function generateStaticParams() {
  return foods.map((f) => ({ id: f.id }));
}
