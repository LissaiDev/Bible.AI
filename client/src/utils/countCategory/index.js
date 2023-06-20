export default (data) => {
let [nrPersonagens, nrMilagres, nrTemas] = [0, 0, 0];
  data.map(item => {
    if (item.category === "Personagem") {
      nrPersonagens++;
    }
    if (item.category === "Milagre") {
      nrMilagres++;
    }
    if (item.category === "Tema") {
      nrTemas++;
    }
  });
    
  return {
    personagens: nrPersonagens,
    milagres: nrMilagres,
    tema: nrTemas
  };
};
