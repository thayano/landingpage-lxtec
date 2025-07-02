import Link from 'next/link';

type FooterLinks = {
  title: string;
  description?: string;
  src?: string;
  children?: FooterLinks[];
};

type LinkListProps = {
  links: FooterLinks[];
};

export const LinkList = (props: LinkListProps) => {
  return (
    <>
      {props.links.map(item => (
        <div key={item.title} className="text-start">
          {item.src
            ? (
                <Link href={item.src} className="text-sm">{item.title}</Link>
              )
            : (
                <>
                  <span>{item.title}</span>
                  <article className="text-xs text-muted-foreground">
                    {item.description}
                  </article>
                </>
              )}
          {item.children && (
            <LinkList links={item.children} />
          )}
        </div>
      ))}
    </>
  );
};
