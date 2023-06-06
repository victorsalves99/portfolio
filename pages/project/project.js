const buttom = document.querySelectorAll(".btn-category");
buttom.forEach((buttom) => {
  buttom.addEventListener("click", (ev) => {
    document.querySelectorAll(".btn-category").forEach((item) => {
      item.classList.remove("active");
    });
    document.querySelector(".procjects").innerText = "";

    ev.target.classList.add("active");
    if (ev.target.id === "my-project") {
      const myProject = projetos.filter(
        (projeto) => projeto.cartegory === "myproject"
      );
      myProject.forEach(
        ({  title, description, tecnology, linkCodigo, linkSite }) => {
          CriarProjeto(
            title,
            description,
            tecnology,
            linkCodigo,
            linkSite
          );
        }
      );
    } else if (ev.target.id === "course-project") {
      const coureseProject = projetos.filter(
        (projeto) => projeto.cartegory === "courseProject"
      );
      coureseProject.forEach(
        ({ title, description, tecnology, linkCodigo, linkSite }) => {
          CriarProjeto(
            title,
            description,
            tecnology,
            linkCodigo,
            linkSite
          );
        }
      );
    } else {
      projetos.forEach(
        ({  title, description, tecnology, linkCodigo, linkSite }) => {
          CriarProjeto(
            title,
            description,
            tecnology,
            linkCodigo,
            linkSite
          );
        }
      );
    }
  });
});
const technologies = () => {
  projetos.map(
    ({ title, description, tecnology, linkCodigo, linkSite }) => {
      CriarProjeto( title, description, tecnology, linkCodigo, linkSite);
    }
  );
};

const CriarProjeto = (
  title,
  description,
  tecnology,
  linkCodigo,
  linkSite
) => {
  const projects = document.querySelector(".procjects");

  const project = document.createElement("div");
  project.classList.add("project");

  const iframeProject = document.createElement("iframe");
  iframeProject.classList.add("iframe-project");
  iframeProject.setAttribute("src",`${linkSite}`)
  // iframeProject.setAttribute("scrolling",`no`)


  const ContainerDescricao = document.createElement("div");
  ContainerDescricao.classList.add("description-project");

  const titulo = document.createElement("h3");
  titulo.innerText = `${title}`;

  const descricao = document.createElement("p");
  descricao.innerText = `${description}`;

  const containerTecnologias = document.createElement("div");
  containerTecnologias.classList.add("technologies");

  tecnology.map((tecnologia) => {
    const item = document.createElement("i");
    item.className = `bx bxl-${tecnologia.name}`;
    containerTecnologias.append(item);
  });

  const BotaoProjeto = document.createElement("div");
  BotaoProjeto.classList.add("btn-project");

  const BtnCodigo = document.createElement("button");

  const AncoraCodigo = document.createElement("a");
  AncoraCodigo.setAttribute("target", "_blank");
  AncoraCodigo.href = `${linkCodigo}`;
  AncoraCodigo.innerText = `Codigo`;

  BtnCodigo.append(AncoraCodigo);

  const BtnSite = document.createElement("button");

  const AncoraSite = document.createElement("a");
  AncoraSite.setAttribute("target", "_blank");
  AncoraSite.href = `${linkSite}`;
  AncoraSite.innerText = `Site`;

  BtnSite.append(AncoraSite);

  BotaoProjeto.append(BtnCodigo, BtnSite);

  ContainerDescricao.append(
    titulo,
    descricao,
    containerTecnologias,
    BotaoProjeto
  );

  project.append(iframeProject, ContainerDescricao);

  projects.appendChild(project);
};

const projetos = [
  {
    title: "OneBitX",
    description:
      "Site criado pela OneBitCode com referencia na SpaceX",
    tecnology:[
      {
        name: "html5",
      },
      {
        name: "css3",
      },
      {
        name: "bootstrap",
      },
      {
        name: "sass",
      },
    ],
    linkCodigo: "https://github.com/victorsalves99/onibitX",
    linkSite: "https://victorsalves99.github.io/onibitX/",
    cartegory: "courseProject",
  },
  {
    title: "Consulta Cep",
    description:
      "Aplicação web para fazer consulta de cep",
    tecnology:[
      {
        name: "html5",
      },
      {
        name: "css3",
      },
      {
        name: "javascript",
      },
    ],
    linkCodigo: "https://github.com/victorsalves99/buscador-cep",
    linkSite: "https://victorsalves99.github.io/buscador-cep/",
    cartegory: "myproject",
  },
  {
    title: "Imovi",
    description:
      "Site criado pela canal do Youtube Hora de codar sobre casas planejadas.",
    tecnology:[
      {
        name: "html5",
      },
      {
        name: "css3",
      },
      {
        name: "bootstrap",
      },
    ],
    linkCodigo: "https://github.com/victorsalves99/iMov",
    linkSite: "https://victorsalves99.github.io/iMov/",
    cartegory: "courseProject",
  },
  {
    title: "Jogo do Mario",
    description:
      "jogo criado pelo canal do Youtube manual do Dev, Um jogo simples do Super Mario Bros",
    tecnology:[
      {
        name: "html5",
      },
      {
        name: "css3",
      },
      {
        name: "javascript",
      },
    ],
    linkCodigo: "https://github.com/victorsalves99/jogo-do-mario",
    linkSite: "https://victorsalves99.github.io/jogo-do-mario/",
    cartegory: "courseProject",
  },
  {
    title: "Loterica",
    description:
      "Aplicação simples para sortear números  de jogos da loteria",
    tecnology:[
      {
        name: "html5",
      },
      {
        name: "css3",
      },
      {
        name: "javascript",
      },
    ],
    linkCodigo: "https://github.com/victorsalves99/loterica",
    linkSite: "https://victorsalves99.github.io/loterica/",
    cartegory: "myproject",
  },
  {
    title: "Catalogo de Pokemons",
    description:
      "Um catalogo com 500 pokemons para conhecelos",
    tecnology:[
      {
        name: "html5",
      },
      {
        name: "css3",
      },
      {
        name: "javascript",
      },
      {
        name: "react",
      },
      {
        name: "sass",
      },
    ],
    linkCodigo: "https://github.com/victorsalves99/catalogo-pokemon",
    linkSite: "https://catalogo-pokemon.vercel.app/",
    cartegory: "myproject",
  },
  {
    title: "Consultas Github",
    description:
      "Aplicação web para fazer consultas a usuarios e  repositorios  do Github ",
    tecnology:[
      {
        name: "html5",
      },
      {
        name: "css3",
      },
      {
        name: "javascript",
      },
    ],
    linkCodigo: "https://github.com/victorsalves99/consutasGithub",
    linkSite: "https://victorsalves99.github.io/consutasGithub/",
    cartegory: "myproject",
  },
  {
    title: "Silvinhas Doces",
    description:
      "Site web de uma confeitaria de bolos e Doces ",
    tecnology:[
      {
        name: "html5",
      },
      {
        name: "css3",
      },
      {
        name: "javascript",
      },
      {
        name: "bootstrap",
      },
      {
        name: "sass",
      },
      {
        name: "react",
      },
    ],
    linkCodigo: "https://github.com/victorsalves99/silvinha",
    linkSite: "https://silvinhadoces-f9l91xdlt-victorsalves99.vercel.app/",
    cartegory: "myproject",
  },
  {
    title: "Esportes",
    description:
      "Site criado pela OneBitCode, feito para informar mais sobre os esportes ",
    tecnology:[
      {
        name: "html5",
      },
      {
        name: "css3",
      }
    ],
    linkCodigo: "https://github.com/victorsalves99/esporte",
    linkSite: "https://victorsalves99.github.io/esporte/",
    cartegory: "courseProject",
  },
  {
    title: "Cordel",
    description:
      "Site criado pelo Curso em Video, que retrata um poema ",
    tecnology:[
      {
        name: "html5",
      },
      {
        name: "css3",
      }
    ],
    linkCodigo: "https://github.com/victorsalves99/cordel",
    linkSite: "https://victorsalves99.github.io/cordel/",
    cartegory: "courseProject",
  },
  {
    title: "Android",
    description:
      "Site criado pelo Curso em Video, que fala sobre a Historia do Android.",
    tecnology:[
      {
        name: "html5",
      },
      {
        name: "css3",
      }
    ],
    linkCodigo: "https://github.com/victorsalves99/projeto-android",
    linkSite: "https://victorsalves99.github.io/projeto-android/",
    cartegory: "courseProject",
  },
  
];
