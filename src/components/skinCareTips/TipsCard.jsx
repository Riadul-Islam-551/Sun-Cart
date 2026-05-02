import { Card } from "@heroui/react";
import React from "react";

const TipsCard = ({ tip }) => {
  const { title, description } = tip;
  return (
    <div>
      <Card className="h-full border border-gray-200" variant="default">
        <Card.Header>
          <Card.Title className="font-bold text-lg mb-3 text-shadow-sky-800">{title}</Card.Title>
          <Card.Description>
            {description}
          </Card.Description>
        </Card.Header>
      </Card>
    </div>
  );
};

export default TipsCard;
