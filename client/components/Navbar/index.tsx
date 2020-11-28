import * as React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { flattenStyles } from "../StyleSheet/utils";

export default function Navbar() {
  return (
    <div className={styles.root}>
      <div className={flattenStyles(styles.navbar, styles.maxWidth)}>
        <h1>Nathan Thomas</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/posts">Posts</Link>
        </nav>
      </div>
    </div>
  );
}
