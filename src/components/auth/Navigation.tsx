import Link from 'next/link';

type Props = {
  href1: string;
  href2: string;
  link1: string;
  link2: string;
};

export const Navigation = ({ link1, link2, href1, href2 }: Props) => {
  console.log(href1, href2);
  return (
    <div className="flex justify-between mt-2">
      <Link href={href1} className="text-blue-500">
        {link1}
      </Link>
      <Link href={href2} className="text-blue-500">
        {link2}
      </Link>
    </div>
  );
};
