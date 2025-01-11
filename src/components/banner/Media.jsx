import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss ,SiNodedotjs ,SiMongodb ,SiExpress, SiMysql, SiUpwork } from "react-icons/si";
const Media = () => {
  return (
    <div className="lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="mb-3 flex gap-4">
          <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/adham-said-0448231bb/">
                <FaLinkedinIn />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.upwork.com/nx/find-work/best-matches">
                <SiUpwork />
              </a>
            </span>

            <span className="bannerIcon">
              <a href="https://www.facebook.com/profile.php?id=100006384692138&locale=ar_AR">
                <FaFacebookF />
              </a>
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>

          </div>
        </div>

        <div className='pt-2'>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
            <span className="bannerIcon">
              <SiMysql />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
          </div>
        </div>


      </div>
  )
}

export default Media