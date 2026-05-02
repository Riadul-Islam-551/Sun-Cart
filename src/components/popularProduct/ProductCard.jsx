import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { id, image, name, rating, price, description } = product;
  return (
    <Card className="group items-stretch md:flex-row bg-base-200 cursor-pointer hover:bg-base-300 transition-colors duration-200 ">
      <div className="relative h-35 w-full shrink-0 overflow-hidden rounded-2xl sm:h-30 sm:w-30">
        <Image
          alt="Cherries"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover select-none group-hover:scale-110 transition-all duration-300"
          loading="lazy"
          src={image}
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8 font-bold hover:text-warning text-xl duration-150">
            {name}
          </Card.Title>
          <Card.Description className="line-clamp-1">
            {description}
          </Card.Description>
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            {/* price of product  */}
            <span className="text-sm font-medium text-foreground">
              Price:{" "}
              <span className="font-bold hover:text-warning duration-150">
                ${price}
              </span>
            </span>
            {/* rating  of product */}
            <span className="text-xs text-muted flex justify-start items-center gap-2">
              <FaStar className="text-warning" /> {rating}
            </span>
          </div>
          <Link href={`/product/${id}`}>
            <Button className="w-full sm:w-auto">View Details</Button>
          </Link>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default ProductCard;
