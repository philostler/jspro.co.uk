import Image from "next/image";
import { LinkButton } from "./components";

const Links = () => (
  <>
    <LinkButton href="mailto:contact@jspro.co.uk?subject=Enquiry from jspro.co.uk">
      <Image alt="Email Me" height={24} priority src="/email.png" width={32} />
    </LinkButton>
  </>
);

export { Links };
