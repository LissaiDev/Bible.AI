const filterData = (text, data) => {
  if (text === "Personagem" || text === "Milagre" || text === "Tema") {
    return data.filter((item) =>
      item.category.toLowerCase().includes(text.toLowerCase())
    );
  }
  return data.filter((item) =>
    item.title.toLowerCase().includes(text.toLowerCase())
  );
};

export default filterData;
