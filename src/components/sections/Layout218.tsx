type ImageProps = {
  src: string;
  alt?: string;
};

type StatsProps = {
  title: string;
  description: string;
};

type Props = {
  heading: string;
  description: string;
  image: ImageProps;
  stats: StatsProps[];
};

export type Layout218Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout218 = (props: Layout218Props) => {
  const { heading, description, image, stats } = {
    ...Layout218Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img src={image.src} className="w-full rounded-image object-cover" alt={image.alt} />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="mb-5 text-h3 font-bold md:mb-6">{heading}</h3>
            <p className="mb-6 text-medium md:mb-8">{description}</p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h3 className="mb-2 text-h2 font-bold">{stat.title}</h3>
                  <p>{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout218Defaults: Props = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
  stats: [
    {
      title: "50%",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "50%",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
};
