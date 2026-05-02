export const getPopularProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products.json`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch popular products");
  }
  return res.json();
};
