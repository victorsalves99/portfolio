const certificates = () => {
  certificatesList.map(({ title, institution, img }) => {
    createCard(img, title, institution);
  });
};

const createCard = (image, titulo, p) => {
  const certificate = document.querySelector(".certificates");
  console.log(certificate);
  const containerCertificate = document.createElement("div");
  containerCertificate.classList.add("certificate");
  const anchor = document.createElement("a");
  anchor.setAttribute("download", "");
  anchor.href = `${image}`;
  const img = document.createElement("img");
  img.src = `${image}`;
  const title = document.createElement("h3");
  title.innerText = `${titulo}`;
  const paragraph = document.createElement("p");
  paragraph.innerText = `${p}`;
  anchor.append(img, title, paragraph);
  containerCertificate.append(anchor);
  certificate.appendChild(containerCertificate);
};

const certificatesList = [
  {
    title: "PYTHON 3 - MUNDO 1",
    institution: "CURSO EM VÍDEO",
    img: "../../img/certificates/python-m1.jpg",
  },
  {
    title: "PYTHON 3 - MUNDO 2",
    institution: "CURSO EM VÍDEO",
    img: "../../img/certificates/python-m2.jpg",
  },
  {
    title: "ALGORITIMO",
    institution: "CURSO EM VÍDEO",
    img: "../../img/certificates/algoritmo.jpg",
  },
  {
    title: "JAVASCRIPT",
    institution: "CURSO EM VÍDEO",
    img: "../../img/certificates/javascript.jpg",
  },
  {
    title: "MARKETING DIGITAL",
    institution: "CURSO EM VÍDEO",
    img: "../../img/certificates/marketing.jpg",
  },
  {
    title: "HTML5 E CSS3:MÓDULO 1 ",
    institution: "CURSO EM VÍDEO",
    img: "../../img/certificates/htmlcss-m1.jpg",
  },
  {
    title: "BASES NUMÉRICAS",
    institution: "CURSO EM VÍDEO",
    img: "../../img/certificates/base-numerica.jpg",
  },
  {
    title: "HTML5",
    institution: "ONEBITCODE",
    img: "../../img/certificates/HTML.jpg",
  },
  {
    title: "CSS 3",
    institution: "ONEBITCODE",
    img: "../../img/certificates/CSS.jpg",
  },
  {
    title: "jAVASCRIPT-BASE",
    institution: "ONEBITCODE",
    img: "../../img/certificates/javaScript-base.jpg",
  },
  {
    title: "jAVASCRIPT-DOM",
    institution: "ONEBITCODE",
    img: "../../img/certificates/javaScript-DOM.jpg",
  },
  {
    title: "jAVASCRIPT-MODERNO",
    institution: "ONEBITCODE",
    img: "../../img/certificates/javaScript-moderno.jpg",
  },
  {
    title: "jAVASCRIPT-OB",
    institution: "ONEBITCODE",
    img: "../../img/certificates/javaScript-ob.jpg",
  },
];
