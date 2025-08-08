import Styled from "styled-components";
import { useState } from "react";
import { useLanguage } from "../contexts/languageContext.jsx";
import langData from "../assets/lang.json";
import Carousel from "../components/Carousel.jsx";

const Recipes = () => {
    var images_list = [
        "https://images.unsplash.com/photo-1601050690597-564c6f95c352",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        "https://images.unsplash.com/photo-1551218808-94e220e084d2",
        "https://images.unsplash.com/photo-1585238342028-3e5fa0569fbd",
        "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
        "https://images.unsplash.com/photo-1589307004391-28d92f71199e",
        "https://images.unsplash.com/photo-1512058564366-c9e3e0464f1b",
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
        "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9",
        "https://images.unsplash.com/photo-1613145992201-e46b1544e28e"
    ];

    var top_subtitles = [
        "Quick & Easy",
        "Comfort Food",
        "Family Favorite",
        "Light & Fresh",
        "Bold Flavors",
        "Vegan Delight",
        "Sweet & Simple",
        "Dinner Classic",
        "Spicy Touch",
        "Healthy Pick"
    ];

    var images_titles = [
        "Avocado Toast",
        "Mac and Cheese",
        "Chicken Tacos",
        "Quinoa Salad",
        "Spicy Ramen",
        "Vegan Curry",
        "Chocolate Cake",
        "Grilled Steak",
        "Chili Con Carne",
        "Greek Yogurt Bowl"
    ];

    var bottom_subtittles = [
        "Ready in 5 minutes",
        "Cheesy goodness",
        "Perfect for Tuesdays",
        "Refreshing and healthy",
        "Taste of Asia",
        "Plant-based power",
        "For your sweet tooth",
        "Classic BBQ style",
        "Mexican classic",
        "Protein-packed breakfast"
    ];

    const recipes_simulation = [
        {
            descritionEN: "A fast and delicious avocado toast perfect for breakfast.",
            descritionES: "Una tostada de aguacate rápida y deliciosa para el desayuno.",
            descritionCA: "Una torrada d’alvocat ràpida i deliciosa per esmorzar.",
            nameEN: "Avocado Toast",
            nameES: "Tostada de Aguacate",
            nameCA: "Torrada d’Alvocat",
            photos: ["https://images.unsplash.com/photo-1601050690597-564c6f95c352"]
        },
        {
            descritionEN: "Classic mac and cheese with rich cheddar sauce.",
            descritionES: "Macarrones con queso clásicos y salsa de cheddar.",
            descritionCA: "Macarrons amb formatge clàssics i salsa de cheddar.",
            nameEN: "Mac and Cheese",
            nameES: "Macarrones con Queso",
            nameCA: "Macarrons amb Formatge",
            photos: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836"]
        },
        {
            descritionEN: "Juicy chicken tacos with fresh salsa.",
            descritionES: "Tacos de pollo jugosos con salsa fresca.",
            descritionCA: "Tacs de pollastre sucosos amb salsa fresca.",
            nameEN: "Chicken Tacos",
            nameES: "Tacos de Pollo",
            nameCA: "Tacs de Pollastre",
            photos: ["https://images.unsplash.com/photo-1551218808-94e220e084d2"]
        },
        {
            descritionEN: "A colorful quinoa salad with veggies and herbs.",
            descritionES: "Ensalada de quinoa colorida con verduras y hierbas.",
            descritionCA: "Amanida de quinoa acolorida amb verdures i herbes.",
            nameEN: "Quinoa Salad",
            nameES: "Ensalada de Quinoa",
            nameCA: "Amanida de Quinoa",
            photos: ["https://images.unsplash.com/photo-1585238342028-3e5fa0569fbd"]
        },
        {
            descritionEN: "Hot and spicy ramen with a punch of flavor.",
            descritionES: "Ramen picante con un golpe de sabor.",
            descritionCA: "Ramen picant amb un cop de sabor.",
            nameEN: "Spicy Ramen",
            nameES: "Ramen Picante",
            nameCA: "Ramen Picant",
            photos: ["https://images.unsplash.com/photo-1627308595229-7830a5c91f9f"]
        },
        {
            descritionEN: "Hearty vegan curry full of spices and vegetables.",
            descritionES: "Curry vegano abundante lleno de especias y verduras.",
            descritionCA: "Curry vegà abundant ple d’espècies i verdures.",
            nameEN: "Vegan Curry",
            nameES: "Curry Vegano",
            nameCA: "Curry Vegà",
            photos: ["https://images.unsplash.com/photo-1589307004391-28d92f71199e"]
        },
        {
            descritionEN: "Moist chocolate cake topped with ganache.",
            descritionES: "Pastel de chocolate húmedo con ganache.",
            descritionCA: "Pastís de xocolata humit amb ganache.",
            nameEN: "Chocolate Cake",
            nameES: "Pastel de Chocolate",
            nameCA: "Pastís de Xocolata",
            photos: ["https://images.unsplash.com/photo-1512058564366-c9e3e0464f1b"]
        },
        {
            descritionEN: "Juicy grilled steak with herbs and butter.",
            descritionES: "Filete a la parrilla jugoso con hierbas y mantequilla.",
            descritionCA: "Filet a la graella suculent amb herbes i mantega.",
            nameEN: "Grilled Steak",
            nameES: "Filete a la Parrilla",
            nameCA: "Filet a la Graella",
            photos: ["https://images.unsplash.com/photo-1565958011703-44f9829ba187"]
        },
        {
            descritionEN: "Hearty chili con carne with beans and spice.",
            descritionES: "Chili con carne abundante con frijoles y especias.",
            descritionCA: "Chili amb carn abundant amb fesols i espècies.",
            nameEN: "Chili Con Carne",
            nameES: "Chili con Carne",
            nameCA: "Chili amb Carn",
            photos: ["https://images.unsplash.com/photo-1499028344343-cd173ffc68a9"]
        },
        {
            descritionEN: "Greek yogurt bowl with fruits and nuts.",
            descritionES: "Bol de yogur griego con frutas y nueces.",
            descritionCA: "Bol de iogurt grec amb fruita i nous.",
            nameEN: "Greek Yogurt Bowl",
            nameES: "Bol de Yogur Griego",
            nameCA: "Bol de Iogurt Grec",
            photos: ["https://images.unsplash.com/photo-1613145992201-e46b1544e28e"]
        }
    ];






    return <>
        <Carousel top_subtitles={top_subtitles} images_titles={images_titles} images_list={images_list} bottom_subtittles={bottom_subtittles}></Carousel>
    </>

}

export default Recipes;