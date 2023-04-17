import {
    information,
    connect,
    tutorials,
    sunny_image,
    mostly_sunny_image,
    partly_cloudy_image,
    sunny_audio,
    mostly_sunny_audio,
    partly_cloudy_audio,
  } from "../assets";

  export const navLinks = [
    {
      id: "home",
      title: "शुरुआती पृष्ठ",
      link: "/",

    },
    {
      id: "tutorials",
      title: "सीखने की विधि",
      link : "/tutorials"

    },
    {
      id: "about",
      title: "हमारे बारे में",
      link : "/#about"

    },
    {
      id: "language",
      title: "Language",
    },
  ];

  const services = [
    {
        title: "लाइव मार्केट जानकारी",
        icon: information,
    },
    {
        title: "किसानों से जुड़ें",
        icon: connect,
    },
    {
        title: "उत्पादकता बढ़ाने के लिए सीखने के वीडियो",
        icon: tutorials,
    },
    
  ];

  const experiences = [
    {
      title: "दिन 1 - सिंचाई",
      company_name: "सनी",
      icon: sunny_image,
      iconBg: "#383E56",
      date: "41°C",
      audio : sunny_audio,
      points: [
        "40°C से ऊपर की तापमान में, फसलों को अच्छी तरह से तरल पानी से संतुलित रखना महत्वपूर्ण है। पानी को सुबह जल्दी या शाम को देना चाहिए ताकि अतिरिक्त वाष्पीकरण से बचा जा सके।"
      ],
    },
    {
      title: "दिन 2 - छाया और फसल की कटाई",
      company_name: "ज्यादातर धूप",
      icon: mostly_sunny_image,
      iconBg: "#E6DEDD",
      date: "40°C",
      audio : mostly_sunny_audio,
      points: [
        "सीधी धूप से संवेदनशील फसलों के लिए, आप जाल या अन्य सामग्री का उपयोग करके उन्हें धूप की तीव्र गर्मी से बचा सकते हैं।"
      ],
    },
    {
      title: "दिन 3 - तनाव मॉनिटरिंग",
      company_name: "आंशिक ढेर",
      icon: partly_cloudy_image,
      iconBg: "#383E56",
      date: "37°C",
      audio : partly_cloudy_audio,
      points: [
        "यदि कोई फसल पकी हुई हो और कटाई के लिए तैयार हो, तो तापमान बढ़ने से पहले सुबह के समय इसे कटाई करना सबसे अच्छा होगा।"
      ],
    },
];
  export{services,experiences};