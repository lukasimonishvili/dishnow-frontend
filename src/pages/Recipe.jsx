import Styled from "styled-components";
import { useState, useEffect } from "react";
import RecipeSlider from "../components/RecipeSlier";
import { useLanguage } from "../contexts/languageContext.jsx";
import langData from "../assets/lang.json";

const StyledRecipe = Styled.div`
    width: 760px;
    padding-top: 55px;
    margin: 0 auto;

    @media screen and (max-width: 820px) {
        width: 100%;
        padding: 0 30px;
    }

    & > h2 {
        font-family: 'Space Grotesk';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 41px;
        color: #1F1D1B;
        margin-bottom: 16px;
    }

    & > h4 {
        margin-top: 40px;
        margin-bottom: 16px;
        font-family: 'Space Grotesk';
        font-style: normal;
        font-weight: 500;
        font-size: 26px;
        line-height: 33px;
        color: #1F1D1B;
    }

    & > p {
        font-family: 'Space Grotesk';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 29px;
        color: #1F1D1B;
        margin-bottom: 40px;
    }
`;

const StyledCategory = Styled.span`
    padding: 4px 8px;
    background: rgba(31, 29, 27, 0.15);
    border-radius: 1000px;
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #1F1D1B;
`;

const StyledIngredients = Styled.ul`
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    color: #1F1D1B;
    padding-left: 30px;
`;

const Recipe = () => {
  const { language } = useLanguage();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const recipeFromDB = {
      id: 1,
      nameEN: "Simple delicious beef tacos",
      nameES: "Tacos de res simples y deliciosos",
      nameCA: "Tacs de vedella simples i deliciosos",
      category: {
        id: 1,
        nameEN: "Italian",
        nameES: "Italiano",
        nameCA: "Italià",
      },
      ingredients: [
        {
          id: 1,
          nameEN: "1 Slice onion",
          nameES: "1 rodaja de cebolla",
          nameCA: "1 rodanxa de ceba",
        },
        {
          id: 2,
          nameEN: "0.5 kg pasta",
          nameES: "0,5 kg de pasta",
          nameCA: "0,5 kg de pasta",
        },
        {
          id: 3,
          nameEN: "3 slices bacon",
          nameES: "3 lonchas de bacon",
          nameCA: "3 llesques de bacon",
        },
        {
          id: 4,
          nameEN: "salt",
          nameES: "sal",
          nameCA: "sal",
        },
        {
          id: 5,
          nameEN: "water",
          nameES: "agua",
          nameCA: "aigua",
        },
      ],
      descriptionEN: `In a kitchen mixer add peppers,garlic,laos,ginger,koenjit and the koenjit and blend to a paste. 
        Take the paste and rub it into the beef. Take the beef and santen and bring to a softboilboil. 
        Add the salamleaves and lemongrass(bruised) and simmer on low for 2 hours. Taste add optional lomboks and salt and simmer 1 more hour stirring occasionally. 
        When the liquid has evaporated and oil floats to the top and the meat is goldenbrown its done.
        Toast the coconut flakes and stir it into the stew.
        During the cooling down the meat will soak up the liquid we rehydrate this with the pineapple juice`,
      descriptionES: `En una batidora de cocina, añade pimientos, ajo, laos, jengibre y koenjit, y tritura hasta obtener una pasta.
        Unta la pasta sobre la carne de res. Coloca la carne y el santen en una olla y lleva a ebullición suave.
        Añade las hojas de salam y la hierba de limón machacada, y deja cocer a fuego lento durante 2 horas. Prueba y añade, si lo deseas, lomboks y sal. Cocina a fuego lento 1 hora más, removiendo ocasionalmente.
        Cuando el líquido se haya evaporado, el aceite suba a la superficie y la carne esté dorada, estará lista.
        Tuesta las hojuelas de coco y mézclalas en el guiso.
        Durante el enfriado, la carne absorberá el líquido restante — vuelve a hidratarla con el jugo de piña antes de servir.`,
      descriptionCA: `En una batedora de cuina, afegeix pebrots, all, laos, gingebre i koenjit, i tritura fins a obtenir una pasta.
        Unta la pasta sobre la carn de vedella. Posa la carn i el santen en una olla i porta-ho a ebullició suau.
        Afegeix les fulles de salam i la citronel·la aixafada, i deixa coure a foc lent durant 2 hores. Tasta i afegeix, si vols, lomboks i sal. Cou a foc lent 1 hora més, remenant de tant en tant.
        Quan el líquid s’hagi evaporat, l’oli suri a la superfície i la carn estigui daurada, ja estarà llesta.
        Torra les escates de coco i barreja-les al guisat.
        Durant el refredament, la carn absorbirà el líquid restant — rehidrata-la amb el suc de pinya abans de servir.`,
      photos: [
        "https://www.vincenzosplate.com/wp-content/uploads/2021/01/spaghetti-carbonara.png",
        "https://cdn6.recetasdeescandalo.com/wp-content/uploads/2015/02/Espaguetis-a-la-carbonara.-Receta-tradicional-1.jpg",
        "https://skinnyspatula.com/wp-content/uploads/2020/09/Carbonara-di-Mare4-720x405.jpg",
      ],
      status: "APPROVED",
    };

    setRecipe(recipeFromDB);
  }, []);

  return (
    <StyledRecipe>
      <h2>{recipe && recipe["name" + language]}</h2>
      <StyledCategory>
        {recipe && recipe.category["name" + language]}
      </StyledCategory>
      <RecipeSlider photos={recipe ? recipe.photos : []} />
      <h4>{langData[language].ingredients}</h4>
      <StyledIngredients>
        {recipe &&
          recipe.ingredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient["name" + language]}</li>
          ))}
      </StyledIngredients>
      <h4>{langData[language].description}</h4>
      <p>{recipe && recipe["description" + language]}</p>
    </StyledRecipe>
  );
};

export default Recipe;
