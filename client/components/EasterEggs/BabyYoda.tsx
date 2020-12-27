import React from "react";
import Image from "next/image";
import styles from "./BabyYoda.module.scss";

export default function BabyYodaEasterEgg() {
  return (
    <div className={styles.root}>
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
    </div>
  );
}
