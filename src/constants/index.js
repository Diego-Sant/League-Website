import {
    aurelion,
    aurelionDT,
    aurelionPP,
    aurelionSA,
    aurelionSC,
    aurelionTS,
    highlightEighthVideo,
    highlightEleventhVideo,
    highlightFifthVideo,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightNinethVideo,
    highlightSecondVideo,
    highlightSeventhVideo,
    highlightSixthVideo,
    highlightTenthVideo,
    highlightThirdVideo,
    highlightThirteenthVideo,
    highlightTwelfthVideo,
    irelia,
    ireliaAV,
    ireliaLG,
    ireliaLN,
    ireliaPP,
    ireliaSA,
    pyke,
    riven,
    rivenCB,
    rivenEL,
    rivenEV,
    rivenPQ,
    rivenSA,
    senna,
    volibear,
  } from "../utils";
  
  export const navLists = ['O JOGO', 'CAMPEÕES', 'NOTÍCIAS', 'NOTAS DAS ATUALIZAÇÕES', 'COMUNIDADE', 'ESPORTS', 'UNIVERSO', 'SUPORTE', 'MAIS']
  
  export const highlightsSlides = [
    {
      id: 1,
      textLists: [ "Zed", "O Mestre das Sombras", "Assassino" ],
      video: highlightFirstVideo,
      videoDuration: 12.9,
    },
    {
      id: 2,
      textLists: ["Yasuo", "O Imperdoável", "Duelista"],
      video: highlightSecondVideo,
      videoDuration: 15.8,
    },
    {
      id: 3,
      textLists: [ "Syndra", "A Soberana Sombria", "Maga obliteradora" ],
      video: highlightThirdVideo,
      videoDuration: 12.9,
    },
    {
      id: 4,
      textLists: ["Swain", "O Grande General Noxiano", "Mago de batalha"],
      video: highlightFourthVideo,
      videoDuration: 11.7,
    },
    {
      id: 5,
      textLists: ["Vel'Koz", "O Olho do Vazio", "Mago de artilharia"],
      video: highlightFifthVideo,
      videoDuration: 11.8,
    },
    {
      id: 6,
      textLists: ["Illaoi", "A Sacerdotisa Cráquem", "Colosso"],
      video: highlightSixthVideo,
      videoDuration: 14.8,
    },
    {
      id: 7,
      textLists: ["Warwick", "A Ira Desimpedida de Zaun", "Lutador de investida"],
      video: highlightSeventhVideo,
      videoDuration: 14.3,
    },
    {
      id: 8,
      textLists: ["Caitlyn", "A Xerife de Piltover", "Atiradora"],
      video: highlightEighthVideo,
      videoDuration: 9.4,
    },
    {
      id: 9,
      textLists: ["Bardo", "O Protetor Andarilho", "Encantador"],
      video: highlightNinethVideo,
      videoDuration: 18.9,
    },
    {
      id: 10,
      textLists: ["Anivia", "A Criofênix", "Disruptora"],
      video: highlightTenthVideo,
      videoDuration: 10.4,
    },
    {
      id: 11,
      textLists: ["Leona", "A Alvorada Radiante", "Vanguarda"],
      video: highlightEleventhVideo,
      videoDuration: 13.2,
    },
    {
      id: 12,
      textLists: ["Braum", "O Coração de Freljord", "Protetor"],
      video: highlightTwelfthVideo,
      videoDuration: 12.1,
    },
    {
      id: 13,
      textLists: ["Azir", "O Imperador das Areias", "Especialista"],
      video: highlightThirteenthVideo,
      videoDuration: 18.9,
    },
  ];
  
  export const models = [
    {
      id: 1,
      title: "Irelia",
      color: ["#972540"],
      img: ireliaSA,
      type: "image",
      character: 'irelia'
    },
    {
      id: 2,
      title: "Irelia Lâminas Gélidas",
      color: ["#5b8ae0"],
      video: ireliaLG,
      type: "video",
      character: 'irelia'
    },
    {
      id: 3,
      title: "Irelia Aviadora",
      color: ["#efcf8c"],
      video: ireliaAV,
      type: "video",
      character: 'irelia'
    },
    {
      id: 4,
      title: "Irelia Lâminas Noturnas",
      color: ["#1a1818"],
      video: ireliaLN,
      type: "video",
      character: 'irelia'
    },
    {
      id: 5,
      title: "PROJETO: Irelia de Prestígio",
      color: ["#e5e4ea"],
      video: ireliaPP,
      type: "video",
      character: 'irelia'
    },
    {
      id: 6,
      title: "Aurelion Sol",
      color: ["#263097"],
      img: aurelionSA,
      type: "image",
      character: 'aurelion'
    },
    {
      id: 7,
      title: "Aurelion Sol Senhor das Cinzas",
      color: ["#5c381c"],
      video: aurelionSC,
      type: "video",
      character: 'aurelion'
    },
    {
      id: 8,
      title: "Aurelion Sol Dragão da Tormenta",
      color: ["#4ddfff"],
      video: aurelionDT,
      type: "video",
      character: 'aurelion'
    },
    {
      id: 9,
      title: "Aurelion Sol Tinta Sombria",
      color: ["#d92aa7"],
      video: aurelionTS,
      type: "video",
      character: 'aurelion'
    },
    {
      id: 10,
      title: "Aurelion Sol Protetor de Porcelana",
      color: ["#f1eee6"],
      video: aurelionPP,
      type: "video",
      character: 'aurelion'
    },
    {
      id: 11,
      title: "Riven",
      color: ["#5bc96a"],
      img: rivenSA,
      type: "image",
      character: 'riven'
    },
    {
      id: 12,
      title: "Riven Emissária da Luz",
      color: ["#47ecff"],
      video: rivenEL,
      type: "video",
      character: 'riven'
    },
    {
      id: 13,
      title: "Riven Coelha de Batalha Prime",
      color: ["#3f5929"],
      video: rivenCB,
      type: "video",
      character: 'riven'
    },
    {
      id: 14,
      title: "Riven Espada Valorosa de Prestígio",
      color: ["#b28d59"],
      video: rivenEV,
      type: "video",
      character: 'riven'
    },
    {
      id: 15,
      title: "Riven Pacto Quebrado",
      color: ["#e14549"],
      video: rivenPQ,
      type: "video",
      character: 'riven'
    },
    {
      id: 16,
      title: "Pyke",
      color: ["#163537"],
      character: 'pyke'
    },
    {
      id: 17,
      title: "Pyke Lua Sangrenta",
      color: ["#fe3137"],
      character: 'pyke'
    },
    {
      id: 18,
      title: "Pyke PsyOps",
      color: ["#393a59"],
      character: 'pyke'
    },
    {
      id: 19,
      title: "Pyke Guerreiro das Cinzas",
      color: ["#dfe1f6"],
      character: 'pyke'
    },
    {
      id: 20,
      title: "Pyke Soul Fighter de Prestígio",
      color: ["#e9a528"],
      character: 'pyke'
    },
    {
      id: 21,
      title: "Volibear",
      color: ["#dee7f4"],
      character: 'volibear'
    },
    {
      id: 22,
      title: "Volibear Senhor do Trovão",
      color: ["#2d2838"],
      character: 'volibear'
    },
    {
      id: 23,
      title: "Volibear Dragão da Dualidade de Prestígio",
      color: ["#ec6381"],
      character: 'volibear'
    },
    {
      id: 24,
      title: "Volibear Tinta Sombria",
      color: ["#e77e2d"],
      character: 'volibear'
    },
    {
      id: 25,
      title: "Volibear Nevasca do Ártico",
      color: ["#687cb6"],
      character: 'volibear'
    },
    {
      id: 26,
      title: "Senna",
      color: ["#9cdee0"],
      character: 'senna'
    },
    {
      id: 27,
      title: "Senna True Damage de Prestígio",
      color: ["#dbe4ee"],
      character: 'senna'
    },
    {
      id: 28,
      title: "Senna Eclipse Lunar de Prestígio",
      color: ["#5e51ad"],
      character: 'senna'
    },
    {
      id: 29,
      title: "Senna Feiticeira",
      color: ["#eb5cf4"],
      character: 'senna'
    },
    {
      id: 30,
      title: "Senna Benção do Inverno",
      color: ["#52d6fd"],
      character: 'senna'
    },
  ];
  
  export const characters = [
    { img: irelia, value: "irelia" },
    { img: aurelion, value: "aurelion" },
    { img: riven, value: "riven" },
    { img: pyke, value: "pyke" },
    { img: volibear, value: "volibear" },
    { img: senna, value: "senna" },
  ];
  
  export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];