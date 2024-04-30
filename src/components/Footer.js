import React from "react";
import { ADDRESS, EMAIL, LIVE_URL, SITE_NAME } from "../constants/constant";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer class="footer">
      <div class="footer-inner">
        <div class="address">
          <span>{ADDRESS}</span>
          <span>{EMAIL}</span>
        </div>
        <div class="soc">
          <SocialLinks />
        </div>
      </div>
      <hr></hr>
      <div class="cp">
        Copyright © 2023 &nbsp;
        {SITE_NAME} &nbsp;&nbsp;| {LIVE_URL}
        {/* Digital Agency | Powered by Digital Agency  */}
      </div>
    </footer>
  );
}

export default Footer;
