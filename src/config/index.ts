export const users = [
    { id: 1, name: "Mark", email: "mark@mail.com", points: 40, time_record: "01:26" },
    { id: 2, name: "Jacob", email: "jacob@mail.com", points: 30, time_record: "01:30" },
    { id: 3, name: "Larry", email: "larry@mail.com", points: 20, time_record: "01:35" },
];

import tucanoImg from '../assets/img/tucano.jpg'
import botoImg from '../assets/img/boto.jpg'
import jabutiImg from '../assets/img/jabuti.jpg'
import araraImg from '../assets/img/arara-azul.jpg'
import pirarucuImg from '../assets/img/pirarucu.jpg'
import oncaImg from '../assets/img/onca.jpg'


export const animals = [
    {
        id: 1,
        name: "onça",
        scientific_name: "panthera onca",
        animal_class: "Mamífero",
        risk_of_extinction: "Baixo",
        image: oncaImg,
        description:
            "A onça-pintada é o maior felino das Américas e o terceiro maior do mundo, depois do tigre e do leão. É um animal solitário, territorialista e carnívoro.",
    },
    {
        id: 2,
        name: "tucano",
        scientific_name: "ramphastos toco",
        animal_class: "Ave",
        risk_of_extinction: "Médio",
        image: tucanoImg,
        description:
            "O tucano é uma ave conhecida por seu bico grande e colorido. Vive em florestas tropicais, e alimenta-se de frutas, insetos e, ocasionalmente, de pequenos vertebrados.",
    },
    {
        id: 3,
        name: "boto-cor-de-rosa",
        scientific_name: "inia geoffrensis",
        animal_class: "Mamífero",
        risk_of_extinction: "Alto",
        image: botoImg,
        description:
            "O boto-cor-de-rosa é um mamífero aquático encontrado na região amazônica. É conhecido por sua coloração rosada e é o maior golfinho de água doce do mundo.",
    },
    {
        id: 4,
        name: "jabuti",
        scientific_name: "chelonoidis denticulata",
        animal_class: "Réptil",
        risk_of_extinction: "Médio",
        image: jabutiImg,
        description:
            "O jabuti é um réptil que possui carapaça óssea, e pode viver por muitos anos. É um animal lento e herbívoro, podendo viver tanto em florestas quanto em áreas abertas.",
    },
    {
        id: 5,
        name: "arara-azul",
        scientific_name: "anodorhynchus hyacinthinus",
        animal_class: "Ave",
        risk_of_extinction: "Alto",
        image: araraImg,
        description:
            "A arara-azul é uma ave vistosa e barulhenta, conhecida por suas penas azuis brilhantes e seu bico forte. Vive em áreas de floresta tropical e tem uma dieta variada que inclui frutas, nozes e sementes.",
    },
    {
        id: 6,
        name: "pirarucu",
        scientific_name: "arapaima gigas",
        animal_class: "Peixe",
        risk_of_extinction: "Baixo",
        image: pirarucuImg,
        description:
            "O pirarucu é um dos maiores peixes de água doce do mundo, podendo atingir até 3 metros de comprimento. É nativo da Amazônia e tem uma dieta carnívora, alimentando-se de outros peixes e até mesmo de pequenos animais.",
    },
];

export const games = [
    {
        id: 1,
        title: "Animais Variados",
        difficulty: "Fácil",
        link: "/jogos/variados",
    },
    {
        id: 2,
        title: "Mamíferos",
        difficulty: "Médio",
        link: "/jogos/variados",
    },
    {
        id: 3,
        title: "Animais Aquáticos",
        difficulty: "Difícil",
        link: "/jogos/variados",
    },
    {
        id: 4,
        title: "Aves",
        difficulty: "Difícil",
        link: "/jogos/variados",
    },
    {
        id: 5,
        title: "Répteis",
        difficulty: "Médio",
        link: "/jogos/variados",
    },
    {
        id: 6,
        title: "Anfíbios",
        difficulty: "Médio",
        link: "/jogos/variados",
    },
    {
        id: 7,
        title: "Invertebrados",
        difficulty: "Difícil",
        link: "/jogos/variados",
    },
    {
        id: 8,
        title: "Animais de Estimação",
        difficulty: "Fácil",
        link: "/jogos/variados",
    },
    {
        id: 9,
        title: "Animais Selvagens",
        difficulty: "Difícil",
        link: "/jogos/variados",
    },
    {
        id: 10,
        title: "Animais Noturnos",
        difficulty: "Médio",
        link: "/jogos/variados",
    },
    {
        id: 11,
        title: "Insetos",
        difficulty: "Fácil",
        link: "/jogos/variados",
    },
];