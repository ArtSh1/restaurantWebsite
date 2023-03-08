import React, { useState } from "react";
import { pizza } from "../../DATA";
import { Homes } from "../Home/Homes";
import { Pizza } from "../PizzaCard/Pizza";

export const HomePages = () => {
  const [items, setitems] = useState(pizza);

  return (
    <>
      <Homes />

      <Pizza items={items} title="Pizza Menu" />
    </>
  );
};
