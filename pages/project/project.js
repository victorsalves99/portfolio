const buttom = document.querySelectorAll(".btn-category");
buttom.forEach((buttom) => {
  buttom.addEventListener("click", (ev) => {
    document.querySelectorAll(".btn-category").forEach((item) => {
      item.classList.remove("active");
    });

    console.log(document.querySelector(".procjects"));
    document.querySelector(".procjects").innerText = "";

    ev.target.classList.add("active");
    if (ev.target.id === "my-project") {
      const myProject = projetos.filter(
        (projeto) => projeto.cartegory === "myproject"
      );
      myProject.forEach(
        ({ path, title, description, tecnology, linkCodigo, linkSite }) => {
          CriarProjeto(
            path,
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
        (projeto) => projeto.cartegory === "coursesproject"
      );
      coureseProject.forEach(
        ({ path, title, description, tecnology, linkCodigo, linkSite }) => {
          CriarProjeto(
            path,
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
        ({ path, title, description, tecnology, linkCodigo, linkSite }) => {
          CriarProjeto(
            path,
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
    ({ path, title, description, tecnology, linkCodigo, linkSite }) => {
      CriarProjeto(path, title, description, tecnology, linkCodigo, linkSite);
    }
  );
};

const CriarProjeto = (
  path,
  title,
  description,
  tecnology,
  linkCodigo,
  linkSite
) => {
  const projects = document.querySelector(".procjects");

  const project = document.createElement("div");
  project.classList.add("project");

  const ImgProject = document.createElement("div");
  ImgProject.classList.add("img-project");
  ImgProject.style.backgroundImage = `url(${path})`;

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

  project.append(ImgProject, ContainerDescricao);

  projects.appendChild(project);
};

const projetos = [
  {
    path: "../../img/img-projects/consultasGithub.jpg",
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
];
