import AOS from "aos";

import "aos/dist/aos.css";

export default ({ app }) => {
  app.AOS = new AOS.init({
    disable: "phone",
    startEvent: 'load' // helps with the misaligned animations;
  }); // eslint-disable-line new-cap
};
