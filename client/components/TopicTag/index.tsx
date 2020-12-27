import Link from "next/link";
import styles from "./TopicTag.module.scss";

interface Props {
  name: string;
  route: string;
}

export default function TopicTag({ name, route }: Props) {
  return (
    <Link href={route}>
      <button className={styles.root} key={name}>
        {name}
      </button>
    </Link>
  );
}
