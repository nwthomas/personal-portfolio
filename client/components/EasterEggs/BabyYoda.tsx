import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function BabyYodaEasterEgg() {
  return (
    <RootStyles>
      <div>
        <Image
          alt="Baby Yoda"
          draggable={false}
          height={200}
          quality={100}
          src="/baby-yoda.png"
          width={200}
        />
      </div>
    </RootStyles>
  );
}

const RootStyles = styled.div`
  display: none;

  @media only screen and (min-width: 600px) {
    bottom: 0;
    display: flex;
    height: 150px;
    left: 0;
    overflow: hidden;
    position: fixed;
    width: 150px;

    > div {
      transition: 0.3s ease-in-out;
      transform: rotate(30deg) translate(0px, 180px);
    }

    &:hover {
      > div {
        transform: rotate(30deg) translate(-5px, 30px);
      }
    }
  }
`;
