import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.root}>
      <div className={styles.navbar}>
        <Link href="/">
          <h1 className={styles.title}>n</h1>
        </Link>
        <div>
          <div className={styles.theme__icon}>
            <Image
              alt="Light mode button"
              draggable={false}
              height={30}
              quality={100}
              src="/sun.svg"
              width={30}
            />
          </div>
          <nav className={styles.navbar__links}>
            <Link href="/about">About</Link>
            <Link href="/posts">Posts</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
