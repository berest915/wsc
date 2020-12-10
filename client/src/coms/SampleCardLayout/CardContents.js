import cardZero from "../../images/cards/card-zero.png";
import cardFive from "../../images/cards/card-five.png";

export const CardContents = [
  {
    cardIndex: "1",
    padTop: "58px",
    padBtm: "0",
    bgColor: "#d0e9ea",
    comContentDiv: {
      order: "1",
      title: "WhatsApp Business App",
      a1: "WhatsApp Business ",
      a2: "WhatsApp Business API.",
      p1:
        "is a free to download app that was built with the small business owner in mind. Create a catalog to showcase your products and services. Connect with your customers easily by using tools to automate, sort and quickly respond to messages.",
      p2:
        "WhatsApp can also help medium and large businesses provide customer support and deliver important notifications to customers. Learn more about ",
      minorTitle: null,
    },
    comImageDiv: {
      order: "2",
      srcImage: cardZero,
      posImage: "relative",
    },
  },
  {
    cardIndex: "2",
    padTop: "40px",
    padBtm: "70px",
    bgColor: "#edf8f5",
    comContentDiv: {
      order: "2",
      title: "Security by Default",
      a1: null,
      a2: null,
      p1:
        "Some of your most personal moments are shared on WhatsApp, which is why we built end-to-end encryption into the latest versions of our app. When end-to-end encrypted, your messages and calls are secured so only you and the person you're communicating with can read or listen to them, and nobody in between, not even WhatsApp.",
      p2: null,
      minorTitle: "END-TO-END ENCRYPTION",
    },
    comImageDiv: {
      order: "1",
      srcImage: cardFive,
      posImage: null,
    },
  },
];
