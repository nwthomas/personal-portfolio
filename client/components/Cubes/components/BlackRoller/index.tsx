import React, { useEffect, useState } from "react";
import SCENE from "./constants";
import styles from "./BlackRoller.module.scss";

const SPE_USES_PREVIEW_IMAGE = false;
const ASSET_LIST = {
  fonts: [],
  images: [],
  models: [],
  animations: [],
};

export default function BlackRoller() {
  //   const runtime = new SpeRuntime(SCENE, ASSET_LIST);
  //   runtime.run();
  console.log({ window });
  return <canvas className={styles.root} id="canvas3d"></canvas>;
}
