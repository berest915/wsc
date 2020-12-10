import cardOne from "../../../images/cards/card-one.png";
import cardTwo from "../../../images/cards/card-two.png";
import cardThree from "../../../images/cards/card-three.png";
import cardFour from "../../../images/cards/card-four.png";
import cardFive from "../../../images/cards/card-five.png";
import cardSix from "../../../images/cards/card-six.png";
import cardSeven from "../../../images/cards/card-seven.png";
import cardEight from "../../../images/cards/card-eight.png";

const ordiArray = [
  // 1st
  {
    mansoryIndex: "1",
    padTop: "58px",
    padBottom: "34px",
    bgColor: "#faf7eb",
    comBrickContent: {
      order: "1",
      minorTitle: "TEXTS",
      title: "Simple, Reliable Messaging",
      p:
        "Message your friends and family for free*. WhatsApp uses your phone's Internet connection to send messages so you can avoid SMS fees.",
    },
    comBrickImage: {
      order: "2",
      srcImage: cardOne,
    },
    comBrickCaption: {
      order: "3",
      caption: "* Data charges may apply. Contact your provider for details.",
    },
  },
  // 2nd
  {
    mansoryIndex: "2",
    padTop: "58px",
    padBottom: "52px",
    bgColor: "#d0e9ea",
    comBrickContent: {
      order: "1",
      minorTitle: "GROUP CHAT",
      title: "Groups to keep in touch",
      p:
        "Keep in touch with the groups of people that matter the most, like your family or coworkers. With group chats, you can share messages, photos, and videos with up to 256 people at once. You can also name your group, mute or customize notifications, and more.",
    },
    comBrickImage: {
      order: "2",
      srcImage: cardTwo,
    },
    comBrickCaption: {
      order: null,
      caption: null,
    },
  },
  // 3rd
  {
    mansoryIndex: "3",
    padTop: "58px",
    padBottom: "0",
    bgColor: "#f4f9fc",
    comBrickContent: {
      order: "1",
      minorTitle: "WHATSAPP ON WEB AND DESKTOP",
      title: "Keep the Conversation Going",
      p:
        "With WhatsApp on the web and desktop, you can seamlessly sync all of your chats to your computer so that you can chat on whatever device is most convenient for you. Download the desktop app or visit web.whatsapp.com to get started.",
    },
    comBrickImage: {
      order: "2",
      srcImage: cardThree,
    },
    comBrickCaption: {
      order: null,
      caption: null,
    },
  },
  // 4th
  {
    mansoryIndex: "4",
    padTop: "58px",
    padBottom: "0",
    bgColor: "#d0e9ea",
    comBrickContent: {
      order: "1",
      minorTitle: "WHATSAPP VOICE AND VIDEO CALLS",
      title: "Speak Freely",
      p:
        "With voice calls, you can talk to your friends and family for free*, even if they're in another country. And with free* video calls, you can have face-to-face conversations for when voice or text just isn't enough. WhatsApp voice and video calls use your phone's Internet connection, instead of your cell plan's voice minutes, so you don't have to worry about expensive calling charges.",
    },
    comBrickImage: {
      order: "3",
      srcImage: cardFour,
    },
    comBrickCaption: {
      order: "2",
      caption: "* Data charges may apply. Contact your provider for details.",
    },
  },
  // 5th
  {
    mansoryIndex: "5",
    padTop: "40px",
    padBottom: "70px",
    bgColor: "#edf8f5",
    comBrickContent: {
      order: "2",
      minorTitle: "END-TO-END ENCRYPTION",
      title: "Security by Default",
      p:
        "Some of your most personal moments are shared on WhatsApp, which is why we built end-to-end encryption into the latest versions of our app. When end-to-end encrypted, your messages and calls are secured so only you and the person you're communicating with can read or listen to them, and nobody in between, not even WhatsApp.",
    },
    comBrickImage: {
      order: "1",
      srcImage: cardFive,
    },
    comBrickCaption: {
      order: null,
      caption: null,
    },
  },
  // 6th
  {
    mansoryIndex: "6",
    padTop: "0",
    padBottom: "52px",
    bgColor: "#faf7eb",
    comBrickContent: {
      order: "2",
      minorTitle: "PHOTOS AND VIDEOS",
      title: "Share Moments that Matter",
      p:
        "Send photos and videos on WhatsApp instantly. You can even capture the moments that matter to you most with a built-in camera. With WhatsApp, photos and videos send quickly even if you're on a slow connection.",
    },
    comBrickImage: {
      order: "1",
      srcImage: cardSix,
    },
    comBrickCaption: {
      order: null,
      caption: null,
    },
  },
  // 7th
  {
    mansoryIndex: "7",
    padTop: "0",
    padBottom: "70px",
    bgColor: "#d0e9ea",
    comBrickContent: {
      order: "2",
      minorTitle: "VOICE MESSAGES",
      title: "Say What's On Your Mind",
      p:
        "Sometimes, your voice says it all. With just one tap you can record a Voice Message, perfect for a quick hello or a longer story.",
    },
    comBrickImage: {
      order: "1",
      srcImage: cardSeven,
    },
    comBrickCaption: {
      order: null,
      caption: null,
    },
  },
  // 8th
  {
    mansoryIndex: "8",
    padTop: "58px",
    padBottom: "0",
    bgColor: "#faf7eb",
    comBrickContent: {
      order: "1",
      minorTitle: "DOCUMENTS",
      title: "Document Sharing Made Easy",
      p:
        "Send PDFs, documents, spreadsheets, slideshows and more, without the hassle of email or file sharing apps. You can send documents up to 100 MB, so it's easy to get what you need over to who you want.",
    },
    comBrickImage: {
      order: "2",
      srcImage: cardEight,
    },
    comBrickCaption: {
      order: null,
      caption: null,
    },
  },
];

const MansoriesProps = [
  ordiArray[0],
  ordiArray[3],
  ordiArray[5],
  ordiArray[1],
  ordiArray[7],
  ordiArray[2],
  ordiArray[6],
  ordiArray[4],
];

export default MansoriesProps;
