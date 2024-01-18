import type { NextComponentType } from "next";

import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillLinkedin
} from "../Misc/Icons.collection";
 import { Icon } from "../Misc/Icon.component";

const Contact: NextComponentType = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        {/* <Icon icon={<AiOutlineGithub />} url="https://github.com/bharathreddyza" /> */}

        <Icon
          icon={<AiOutlineTwitter />}
          url="https://twitter.com/bharathza"
        />
{/* <Icon icon={<AiFillLinkedin />} url="https://www.linkedin.com/in/bharathreddy2/" /> */}

<Icon icon={<MdEmail />} url="mailto:bharath@foklore.com" />

      </div>
    </div>
  );
};

export default Contact;
