import React from "react";
import Card from "./Card";

const CardList = () => {
  const cards = [
    {
      image:
        "https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg",
      description: "This is the first card description.",
    },
    {
      image: "https://jooinn.com/images/lonely-tree-reflection-3.jpg",
      description: "This is the second card description.",
    },
    {
      image:
        "https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg",
      description: "This is the third card description.",
    },
    {
      image:
        "https://th.bing.com/th/id/R.13820971a962ffbeb63a8fef36185b16?rik=vZ3lu%2blbhy6jxw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f03%2f10%2f319576-photography-landscape-nature-water-grass-trees-plants-sunrise-lake.jpg&ehk=6WS2p9KknQa9F%2bgAH16n44NReuUyS2rzXah2zy7kiAw%3d&risl=&pid=ImgRaw&r=0",
      description: "This is the fourth card description.",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <Card key={index} image={card.image} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
