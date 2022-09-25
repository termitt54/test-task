import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import "./styles/index.scss";
import { Content } from "./components/Content";
import { useState } from "react";
import { Footer } from "./components/Footer";

function App() {
  const cards = [
    {
      id: 1,
      img: "",
      title:
        'Традиция исполнения якутского традиционного кругового танца "осуохай"',
      geoposition: "Сахалинская область",
    },
    {
      id: 2,
      img: "",
      title: "Технология изготовления вологодского кружева",
      geoposition: "Вологодская область",
    },
    {
      id: 3,
      img: "",
      title: "Технология плетения и декорирования изделий из бересты. ",
      geoposition: "Вологодская область",
    },
    {
      id: 4,
      img: "",
      title: "Технология изготовления обрядовой и бытовой выпечки",
      geoposition: "Волгоградская область",
    },
    {
      id: 5,
      img: "",
      title: "Нивхский праздник П’ИТУЛ (праздник обновления природы) ",
      geoposition: "Сахалинская область",
    },
    {
      id: 6,
      img: "",
      title: "Технология изготовления глиняной игрушки ",
      geoposition: "Липецкая область",
    },
    {
      id: 7,
      img: "",
      title: "Жатвенные обряды северных районов Смоленщины",
      geoposition: "Смоленская область",
    },
    {
      id: 8,
      img: "",
      title:
        'Традиция исполнения якутского традиционного кругового танца "осуохай"',
      geoposition: "Сахалинская область",
    },
    {
      id: 9,
      img: "",
      title:
        'Традиция исполнения якутского традиционного кругового танца "осуохай"',
      geoposition: "Сахалинская область",
    },
    {
      id: 10,
      img: "",
      title:
        'Традиция исполнения якутского традиционного кругового танца "осуохай"',
      geoposition: "Сахалинская область",
    },
    {
      id: 11,
      img: "",
      title:
        'Традиция исполнения якутского традиционного кругового танца "осуохай"',
      geoposition: "Сахалинская область",
    },
    {
      id: 12,
      img: "",
      title:
        'Традиция исполнения якутского традиционного кругового танца "осуохай"',
      geoposition: "Сахалинская область",
    },
  ];
  const [card, setCard] = useState(cards);
  const [searchCard, setSearchCard] = useState("");
  const [filterRegion, setFilterRegion] = useState("");

  const onSearch = () => {
    const search = cards.filter((item) => {
      return filterRegion === "Все регионы"
        ? item.title.toLowerCase().includes(searchCard.toLowerCase()) && cards
        : item.title.toLowerCase().includes(searchCard.toLowerCase()) &&
            item.geoposition.includes(filterRegion);
    });
    setCard(search);
  };

  return (
    <div className="App">
      <Navigation />
      <Header />
      <Content
        onSearch={onSearch}
        card={card}
        searchCard={searchCard}
        setSearchCard={setSearchCard}
        filterRegion={filterRegion}
        setFilterRegion={setFilterRegion}
      />
      <Footer />
    </div>
  );
}

export default App;
