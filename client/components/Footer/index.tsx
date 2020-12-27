import React from "react";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  TwitterIcon,
} from "../Icons";
import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.root}>
      <div className={styles.footer__navbar}>
        <div>
          <p className={styles.quote}>"Be most excellent to each other."</p>
          <p>{`© ${currentYear} Nathan Thomas`}</p>
        </div>
        <nav>
          <div className={styles.icon}>
            <a href="https://github.com/nwthomas">
              <GitHubIcon theme="dark" />
            </a>
          </div>
          <div className={styles.icon}>
            <a href="https://www.instagram.com/nwthomas/">
              <InstagramIcon theme="dark" />
            </a>
          </div>
          <div className={styles.icon}>
            <a href="https://www.linkedin.com/in/nwthomas-dev/">
              <LinkedInIcon theme="dark" />
            </a>
          </div>
          <div className={styles.icon}>
            <a href="https://twitter.com/nwthomas_">
              <TwitterIcon theme="dark" />
            </a>
          </div>
          <Link href="/contact">
            <div className={styles.icon}>
              <MailIcon theme="dark" />
            </div>
          </Link>
        </nav>
      </div>
    </footer>
  );
}
