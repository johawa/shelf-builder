//Move Camlock Screws + Show CloseUp Animation
import React, { useState, useLayoutEffect } from "react";
import CloseUpAnimation from "./CloseUpAnimation/index";
import { isInbetween, isZero, isOne } from "../../lib/helperfunctions";
import { scrollStore } from "../../store/store";
import { lerp } from "../../lib/helperfunctions";
// TODO move Camlock Screws

// CloseUp Animation
function Step7Components() {
  const { state } = scrollStore();
  const sf7 = state.sf7;
  const sf8 = state.sf8;

  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    if (isInbetween(sf7) || isInbetween(sf8)) {
      setIsVisible(true);
    } else if (isZero(sf7)) {
      setIsVisible(false);
    } else if (isOne(sf8)) {
      setIsVisible(false);
    }
  }, [sf7, sf8]);

  return <CloseUpAnimation visible={isVisible}></CloseUpAnimation>;
}

function Step7Animations() {
  const { state } = scrollStore();
  const sf7 = state.sf7;
  const sf7InterpolatedPosition = lerp(0.08, 0, sf7);

  return { sf7InterpolatedPosition };
}

export { Step7Components, Step7Animations };
