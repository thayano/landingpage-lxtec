export const CTABanner = (props: {
  title: string;
  description: string;
  buttons: React.ReactNode;
}) => (
  <div className="rounded-xl px-6 py-10 text-center">
    <div className="px-8 text-[3rem] font-bold text-primary-foreground">
      {props.title}
    </div>

    <div className="text-3xl font-bold text-primary-foreground">
      {props.description}
    </div>

    <div className="mt-6">{props.buttons}</div>
  </div>
);
