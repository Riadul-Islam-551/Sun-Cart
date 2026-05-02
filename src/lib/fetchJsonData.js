export const getProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products.json`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch popular products");
  }
  return res.json();
};

export const getSkinCareTips = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/skinCare.json`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch skin care tips");
  }
  return res.json();
};
