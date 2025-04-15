"use client";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Share = ({ articleTitle }: { articleTitle: string }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
      <TwitterShareButton url={`https://thesupermommy.co.uk/${articleTitle}`}>
        <div className="bg-blue-400 text-neutral-50 h-11 flex items-center justify-center gap-2 text-sm font-medium">
          <FaTwitter className="w-5 h-5" />
          TWITTER
        </div>
      </TwitterShareButton>
      <FacebookShareButton url={`https://thesupermommy.co.uk/${articleTitle}`}>
        <div className="bg-blue-800 text-neutral-50 h-11 flex items-center justify-center gap-2 text-sm font-medium">
          <FaFacebookF className="w-5 h-5" />
          FACEBOOK
        </div>
      </FacebookShareButton>
      <LinkedinShareButton url={`https://thesupermommy.co.uk/${articleTitle}`}>
        <div className="bg-blue-600 text-neutral-50 h-11 flex items-center justify-center gap-2 text-sm font-medium">
          <FaLinkedinIn className="w-5 h-5" />
          LINKEDIN
        </div>
      </LinkedinShareButton>
      <EmailShareButton
        url={`https://thesupermommy.co.uk/${articleTitle}`}
        title="Hey check this post"
        body="Here is the post link"
      >
        <div className="bg-neutral-700 text-neutral-50 h-11 flex items-center justify-center gap-2 text-sm font-medium">
          <MdOutlineMailOutline className="w-5 h-5" />
          EMAIL
        </div>
      </EmailShareButton>
    </div>
  );
};

export default Share;
