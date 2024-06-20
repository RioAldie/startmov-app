import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface navLinkProps {
  path: string;
  name: string;
  setActive: (active: boolean) => void;
}
const Navlink = (props: navLinkProps) => {
  const router = usePathname();
  const { path, name, setActive } = props;

  const linkStyle = {
    active:
      'block p-2 text-white bg-green-700 rounded md:bg-neutral-800 md:text-green-700 md:dark:text-green-500',
    notActive:
      'block p-2 text-gray-400  rounded hover:md:bg-neutral-800 hover:md:text-green-700 hover:md:dark:text-green-500',
  };
  return (
    <li>
      <Link
        href={path}
        onClick={() => setActive(false)}
        className={
          router === path ? linkStyle.active : linkStyle.notActive
        }
        aria-current="page">
        {name}
      </Link>
    </li>
  );
};

export default Navlink;
