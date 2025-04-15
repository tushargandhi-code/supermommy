import Outbrain from "@/components/outbrain";
import Form from "./form";

export const metadata = {
  title: "Contact",
  description: "",
  openGraph: {
    url: "/contact",
    title: "Contact",
    description: "",
    images: ["/meta.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact",
    description: "",
    images: ["/meta.png"],
  },
};

const Page = () => {
  return (
    <div className="container mt-4 sm:mt-6 md:mt-8 lg:mt-10 mb-20">
      <h1 className="text-center text-3xl lg:text-4xl xl:text-5xl leading-[1.4] lg:leading-[1.4] xl:leading-[1.3] mx-auto">
        Get In Touch!
      </h1>
      <p className="text-center lg:text-lg font-medium mx-auto mt-3">
        Complete the form below to reach us
      </p>
      <Form />
      <div className="flex flex-col items-center justify-center text-center gap-y-2 text-neutral-700">
        <p className="font-semibold">or email us</p>
        <p className="text-lg">contact@thesupermommy.co.uk</p>
      </div>
      <aside className="mt-12">
        <div className="OUTBRAIN" data-widget-id="GS_1"></div>
      </aside>
      <Outbrain />
    </div>
  );
};

export default Page;
