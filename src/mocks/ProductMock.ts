
import { IProduct } from "@schemas/index";

const products: IProduct[] = [
  // MEALS
  {
    sku: "prawn-spaghetti",

    category: "meals",

    name: "Prawn Spaghetti",
    description: "try the popular lemon and chilli prawn linguine or stir up a spicy Spanish seafood spaghetti.",
    image: "assets/dishes/dish1.jpg",

    price: 25.50,
    previousPrice: 33.50,

    suggested: false,
    special: true,

    calories: 503,
    servingPeople: 2,
    portionSize: 500,
    unitType: "g",

    ingredients: [
      "Cloves garlic",
      "Dried red chillies",
      "Peeled raw prawns",
      "Wineglass white wine",
      "Handfuls of rocket"
    ],

    maxAdditionals: 3,
    additionals: [
      {
        name: "extra king prawns",
        description: "2 pieces",
        price: 2,
        quantity: 0,
        limit: 3
      },
      {
        name: "parmesan cheese",
        description: "contianer with 15g",
        price: 1,
        quantity: 0,
        limit: 5
      }
    ],

    reviews: {
      totalRating: 40,
      totalReviews: 10,
      rating1: 0,
      rating2: 1,
      rating3: 2,
      rating4: 3,
      rating5: 4
    },

    quantity: 1

  },
  {
    sku: "chilli-prawn-linguine",

    category: "meals",

    name: "Chilli Prawn Linguine",
    description: "An elegant, low-fat seafood dish, perfect for mid-week entertaining, very light and stylish.",
    image: "assets/dishes/dish2.jpg",

    price: 18,
    previousPrice: 23,

    suggested: true,
    special: false,

    calories: 333,
    servingPeople: 1,
    portionSize: 300,
    unitType: "g",

    ingredients: [
      "Cloves garlic",
      "Raw king prawns",
      "Cherry tomatoes",
      "Fresh basil leaves",
      "Handfuls of rocket"
    ],

    maxAdditionals: 3,
    additionals: [
      {
        name: "mixed salad leaves",
        description: "50g of salads",
        price: 8,
        quantity: 0,
        limit: 2
      },
      {
        name: "parmesan cheese",
        description: "contianer with 15g",
        price: 1,
        quantity: 0,
        limit: 5
      }
    ],

    reviews: {
      totalRating: 69,
      totalReviews: 15,
      rating1: 0,
      rating2: 0,
      rating3: 1,
      rating4: 4,
      rating5: 10
    },

    quantity: 1

  },
  {
    sku: "eggplant-lasagna",

    category: "meals",

    name: "Eggplant Lasagna",
    description: "Healthy vegetable eggplant lasagna that’s full of cheesy goodness, without the pasta.",
    image: "assets/dishes/dish3.jpg",

    price: 14.20,
    previousPrice: 0,

    suggested: false,
    special: false,

    calories: 150,
    servingPeople: 1,
    portionSize: 250,
    unitType: "g",

    ingredients: [
      "Large fresh eggplants",
      "Shredded mozzarella cheese",
      "Cherry tomatoes",
      "Fresh peas",
      "Italian seasoning"
    ],

    maxAdditionals: 3,
    additionals: [
      {
        name: "toasted bread",
        description: "a sliced bread",
        price: 3,
        quantity: 0,
        limit: 2
      },
      {
        name: "parmesan cheese",
        description: "contianer with 15g",
        price: 1,
        quantity: 0,
        limit: 5
      }
    ],

    reviews: {
      totalRating: 56,
      totalReviews: 14,
      rating1: 0,
      rating2: 1,
      rating3: 3,
      rating4: 5,
      rating5: 5
    },

    quantity: 1

  },
  {
    sku: "hump-steak",

    category: "meals",

    name: "Hump Steak",
    description: "Cooked low and slow beef hump with onions, a very rich and fatty meat.",
    image: "assets/dishes/dish4.jpg",

    price: 24,
    previousPrice: 0,

    suggested: true,
    special: false,

    calories: 520,
    servingPeople: 1,
    portionSize: 300,
    unitType: "g",

    ingredients: [
      "Lemon-pepper seasoning",
      "Cups onion",
      "Green olive paste",
      "Cider vinegar",
      "Rock salt"
    ],

    maxAdditionals: 3,
    additionals: [
      {
        name: "white rice",
        description: "portion for 1 person",
        price: 6,
        quantity: 0,
        limit: 2
      },
      {
        name: "rosted potato",
        description: "side contains 100g",
        price: 4,
        quantity: 0,
        limit: 2
      }
    ],

    reviews: {
      totalRating: 186,
      totalReviews: 46,
      rating1: 1,
      rating2: 5,
      rating3: 5,
      rating4: 15,
      rating5: 20
    },

    quantity: 1

  },
  {
    sku: "lamb-cutlets",

    category: "meals",

    name: "Lamb Cutlets",
    description: "Succulent barbecued lamb cutlets with a spicy marinade make for a mouth-watering.",
    image: "assets/dishes/dish5.jpg",

    price: 32.50,
    previousPrice: 0,

    suggested: false,
    special: false,

    calories: 425,
    servingPeople: 1,
    portionSize: 250,
    unitType: "g",

    ingredients: [
      "Sweet paprika",
      "Cayenne pepper",
      "Garlic cloves",
      "Coriander leaves",
      "Ground cumin"
    ],

    maxAdditionals: 3,
    additionals: [
      {
        name: "white rice",
        description: "portion for 1 person",
        price: 6,
        quantity: 0,
        limit: 2
      },
      {
        name: "green salad",
        description: "100g of selected leaves",
        price: 5,
        quantity: 0,
        limit: 2
      }
    ],

    reviews: {
      totalRating: 243,
      totalReviews: 55,
      rating1: 1,
      rating2: 0,
      rating3: 4,
      rating4: 20,
      rating5: 30
    },

    quantity: 1

  },
  // SALAD
  {
    sku: "tahini-cauliflower",

    category: "salads",

    name: "Tahini Cauliflower",
    description: "Tahini is just a peanut butter, but made with sesame seeds instead of peanuts.",
    image: "assets/dishes/dish6.jpg",

    price: 22.10,
    previousPrice: 30,

    suggested: false,
    special: false,

    calories: 120,
    servingPeople: 1,
    portionSize: 200,
    unitType: "g",

    ingredients: [
      "Lemon tahini dressing",
      "Fresh green peas",
      "Sweet red onions",
      "Integral rice",
      "Parsley leaves"
    ],

    maxAdditionals: 3,
    additionals: [
      {
        name: "creamy cheese sauce",
        description: "salad dressing",
        price: 2,
        quantity: 0,
        limit: 3
      },
      {
        name: "green salad",
        description: "100g of selected leaves",
        price: 5,
        quantity: 0,
        limit: 2
      }
    ],

    reviews: {
      totalRating: 75,
      totalReviews: 17,
      rating1: 0,
      rating2: 1,
      rating3: 1,
      rating4: 4,
      rating5: 10
    },

    quantity: 1

  },
  {
    sku: "pasta-salad",

    category: "salads",

    name: "Pasta Salad",
    description: "Fresh and pasta salad packed with crisp vegetables, fresh mozzarella, and tossed with a simple homemade dressing.",
    image: "assets/dishes/dish7.jpg",

    price: 10,
    previousPrice: 12.50,

    suggested: false,
    special: true,

    calories: 100,
    servingPeople: 1,
    portionSize: 180,
    unitType: "g",

    ingredients: [
      "Mozzarella cheese",
      "Flavorful Extras",
      "Halved cherry tomatoes",
      "Fresh parsley and basil",
      "Thinly sliced zucchini "
    ],

    maxAdditionals: 3,
    additionals: [
      {
        name: "creamy cheese sauce",
        description: "salad dressing",
        price: 2,
        quantity: 0,
        limit: 3
      },
      {
        name: "mixed olives",
        description: "portion of olives",
        price: 3,
        quantity: 0,
        limit: 2
      }
    ],

    reviews: {
      totalRating: 47,
      totalReviews: 12,
      rating1: 2,
      rating2: 0,
      rating3: 1,
      rating4: 3,
      rating5: 6
    },

    quantity: 1

  },
  {
    sku: "ribbon-mixed",

    category: "salads",

    name: "Ribbon Mixed",
    description: "A vibrant summer salad with fresh and health ingredients accompanied by seasoning.",
    image: "assets/dishes/dish8.jpg",

    price: 8.80,
    previousPrice: 0,

    suggested: true,
    special: false,

    calories: 110,
    servingPeople: 1,
    portionSize: 120,
    unitType: "g",

    ingredients: [
      "Cherry tomatoes",
      "Sauteed mushrooms",
      "Lebanese cucumber",
      "Sweet red onions",
      "Yellow pepper"
    ],

    maxAdditionals: 3,
    additionals: [
      {
        name: "nuts and seeds",
        description: "100g of health seeds",
        price: 1.50,
        quantity: 0,
        limit: 3
      },
      {
        name: "mixed olives",
        description: "portion of olives",
        price: 3,
        quantity: 0,
        limit: 2
      }
    ],

    reviews: {
      totalRating: 201,
      totalReviews: 56,
      rating1: 1,
      rating2: 5,
      rating3: 10,
      rating4: 15,
      rating5: 20
    },

    quantity: 1

  },
  {
    sku: "summer-radish",

    category: "salads",

    name: "Summer Radish",
    description: "Well mixed health salad with whisk olive oil, vinegar, sugar, garlic and dill.",
    image: "assets/dishes/dish9.jpg",

    price: 11.20,
    previousPrice: 0,

    suggested: false,
    special: false,

    calories: 85,
    servingPeople: 1,
    portionSize: 188,
    unitType: "g",

    ingredients: [
      "Sliced radishes",
      "Sliced red onion",
      "Lebanese cucumber",
      "White wine vinegar",
      "Chopped fresh dill"
    ],

    maxAdditionals: 3,
    additionals: [
      {
        name: "green olive dressing",
        description: "flavorful boost",
        price: 2,
        quantity: 0,
        limit: 3
      },
      {
        name: "garlic bread",
        description: "a bread basket",
        price: 4.50,
        quantity: 0,
        limit: 2
      }
    ],

    reviews: {
      totalRating: 80,
      totalReviews: 20,
      rating1: 2,
      rating2: 1,
      rating3: 2,
      rating4: 5,
      rating5: 10
    },

    quantity: 1

  },
  {
    sku: "spinach-persimmon",

    category: "salads",

    name: "Spinach and Persimmon",
    description: "Sweet persimmon balances out the tartness that you get from the pomegranate arils and creamy goat cheese.",
    image: "assets/dishes/dish10.jpg",

    price: 14.10,
    previousPrice: 17,

    suggested: false,
    special: false,

    calories: 110,
    servingPeople: 1,
    portionSize: 230,
    unitType: "g",

    ingredients: [
      "Fuyu persimmon",
      "Chopped spinach",
      "Pomegranate seeds",
      "Goat cheese, crumbled",
      "Sliced almonds"
    ],

    maxAdditionals: 3,
    additionals: [
      {
        name: "dijon mustard",
        description: "mustard of France",
        price: 3.50,
        quantity: 0,
        limit: 1
      },
      {
        name: "extra almonds",
        description: "25g sliced",
        price: 3,
        quantity: 0,
        limit: 2
      }
    ],

    reviews: {
      totalRating: 76,
      totalReviews: 20,
      rating1: 1,
      rating2: 2,
      rating3: 5,
      rating4: 4,
      rating5: 8
    },

    quantity: 1

  },
  // BURGERS
  {
    sku: "double-rump-steak",

    category: "burgers",

    name: "Double Rump Steak",
    description: "The classic homemade beef burger gives you delicious taste, packed with onions and herbs for extra flavour.",
    image: "assets/dishes/dish11.jpg",

    price: 18.99,
    previousPrice: 25,

    suggested: false,
    special: true,

    calories: 650,
    servingPeople: 1,
    portionSize: 420,
    unitType: "g",

    ingredients: [
      "Rump Steak",
      "Red onions",
      "Cheddar cheese",
      "Pickled cucumber",
      "Special mayonnaise sauce"
    ],

    maxAdditionals: 3,
    additionals: [
      {
        name: "french fries",
        description: "a potato pack",
        price: 4,
        quantity: 0,
        limit: 3
      },
      {
        name: "extra bacon",
        description: "3 slices",
        price: 3,
        quantity: 0,
        limit: 2
      }
    ],

    reviews: {
      totalRating: 345,
      totalReviews: 75,
      rating1: 0,
      rating2: 0,
      rating3: 5,
      rating4: 20,
      rating5: 50
    },

    quantity: 1

  },
  {
    sku: "barbecue-burger",

    category: "burgers",

    name: "Barbecue Burger",
    description: "Top fresh brioche buns with thinly sliced barbecued steak, parmesan dressing, rocket and grilled tomatoes.",
    image: "assets/dishes/dish12.jpg",

    price: 18.99,
    previousPrice: 0,

    suggested: true,
    special: false,

    calories: 540,
    servingPeople: 1,
    portionSize: 380,
    unitType: "g",

    ingredients: [
      "Rump Steak",
      "Grilled tomatoes",
      "Rocket leaves",
      "Vinaigrette",
      "Special mustard sauce"
    ],

    maxAdditionals: 3,
    additionals: [
      {
        name: "fried polenta",
        description: "a polenta pack",
        price: 5,
        quantity: 0,
        limit: 3
      },
      {
        name: "lebanese pickles",
        description: "mixed colorful pickles",
        price: 4.50,
        quantity: 0,
        limit: 2
      }
    ],

    reviews: {
      totalRating: 186,
      totalReviews: 41,
      rating1: 1,
      rating2: 0,
      rating3: 5,
      rating4: 5,
      rating5: 30
    },

    quantity: 1

  },
  {
    sku: "portobello-mushroom",

    category: "burgers",

    name: "Portobello Mushroom",
    description: "The steak of veggie burgers. Serve on a bun with lettuce, tomato, and aioli sauce.",
    image: "assets/dishes/dish13.jpg",

    price: 19.45,
    previousPrice: 0,

    suggested: false,
    special: false,

    calories: 415,
    servingPeople: 1,
    portionSize: 290,
    unitType: "g",

    ingredients: [
      "Portobello mushroom caps",
      "Balsamic vinegar",
      "Dried basil",
      "Minced garlic",
      "Provolone cheese"
    ],

    maxAdditionals: 3,
    additionals: [
      {
        name: "oven-roasted chips",
        description: "a chips pack",
        price: 6.20,
        quantity: 0,
        limit: 3
      },
      {
        name: "vinaigrette salad",
        description: "bowl with 50g",
        price: 1,
        quantity: 0,
        limit: 2
      }
    ],

    reviews: {
      totalRating: 115,
      totalReviews: 36,
      rating1: 2,
      rating2: 4,
      rating3: 5,
      rating4: 20,
      rating5: 5
    },

    quantity: 1

  },
  {
    sku: "egg-sandwich",

    category: "burgers",

    name: "Egg Sandwich",
    description: "Enjoy a toasted whole-grain bagel with basil pesto, lettuce, tomato and cheese.",
    image: "assets/dishes/dish14.jpg",

    price: 8.20,
    previousPrice: 0,

    suggested: false,
    special: false,

    calories: 312,
    servingPeople: 1,
    portionSize: 190,
    unitType: "g",

    ingredients: [
      "Whole-grain bagel",
      "Hard boiled egg, sliced",
      "Leaf lettuce",
      "Slices tomato",
      "Provolone cheese"
    ],

    maxAdditionals: 3,
    additionals: [
      {
        name: "spicy dipping sauce",
        description: "small cup",
        price: 1,
        quantity: 0,
        limit: 3
      },
      {
        name: "mozzarella sticks",
        description: "3 units",
        price: 2.50,
        quantity: 0,
        limit: 2
      }
    ],

    reviews: {
      totalRating: 103,
      totalReviews: 23,
      rating1: 0,
      rating2: 1,
      rating3: 2,
      rating4: 5,
      rating5: 15
    },

    quantity: 1

  },
  {
    sku: "tofu-mushroom",

    category: "burgers",

    name: "Tofu & Mushroom",
    description: "This tofu and shroom burger is healthy and packs a flavour-punch.",
    image: "assets/dishes/dish15.jpg",

    price: 11.15,
    previousPrice: 14,

    suggested: false,
    special: true,

    calories: 250,
    servingPeople: 1,
    portionSize: 230,
    unitType: "g",

    ingredients: [
      "Large flat mushrooms",
      "Moroccan seasoning",
      "Baby rocket leaves",
      "Lebanese cucumbers",
      "Mint leaves"
    ],

    maxAdditionals: 3,
    additionals: [
      {
        name: "veggie nuggets",
        description: "5 pieces",
        price: 3.50,
        quantity: 0,
        limit: 3
      },
      {
        name: "garlic dipping sauce",
        description: "snmall cup",
        price: 1,
        quantity: 0,
        limit: 2
      }
    ],

    reviews: {
      totalRating: 94,
      totalReviews: 20,
      rating1: 0,
      rating2: 0,
      rating3: 1,
      rating4: 4,
      rating5: 15
    },

    quantity: 1

  },
  // DRINKS
  {
    sku: "tomato-juice",

    category: "drinks",

    name: "Tomato Juice",
    description: "Ripest tomatoes with sugar will balance the natural acidity of the fruit.",
    image: "assets/dishes/dish16.jpg",

    price: 7.60,
    previousPrice: 0,

    suggested: false,
    special: false,

    calories: 140,
    servingPeople: 1,
    portionSize: 600,
    unitType: "ml",

    ingredients: [
      "Garden tomatoes",
      "Chopped celery with leaves",
      "Pinch black pepper",
      "Chopped onion",
      "Mint leaves"
    ],

    maxAdditionals: 3,
    additionals: [
      {
        name: "spinach and kale",
        description: "extra flavor",
        price: 2,
        quantity: 0,
        limit: 1
      },
      {
        name: "ground flaxseed",
        description: "3g of protein",
        price: 3,
        quantity: 0,
        limit: 2
      }
    ],

    reviews: {
      totalRating: 68,
      totalReviews: 15,
      rating1: 0,
      rating2: 0,
      rating3: 2,
      rating4: 3,
      rating5: 10
    },

    quantity: 1

  },
  {
    sku: "red-fruit-juice",

    category: "drinks",

    name: "Red Fruit Juice",
    description: "The cactus pear gives the juice a wonderful aroma and a mixed of flavors with red fruits.",
    image: "assets/dishes/dish17.jpg",

    price: 15.35,
    previousPrice: 0,

    suggested: true,
    special: false,

    calories: 140,
    servingPeople: 1,
    portionSize: 600,
    unitType: "ml",

    ingredients: [
      "Strawberries",
      "Cactus pears",
      "Fresh cranberries",
      "Raspberries",
      "Red grapefruit juice"
    ],

    maxAdditionals: 3,
    additionals: [
      {
        name: "condensed milk",
        description: "add sweet flavor",
        price: 1,
        quantity: 0,
        limit: 1
      },
      {
        name: "ground flax seed",
        description: "3g of protein",
        price: 3,
        quantity: 0,
        limit: 2
      }
    ],

    reviews: {
      totalRating: 68,
      totalReviews: 15,
      rating1: 0,
      rating2: 0,
      rating3: 2,
      rating4: 3,
      rating5: 10
    },

    quantity: 1

  },
  {
    sku: "guarana-soft-drink",

    category: "drinks",

    name: "Guarana Soft Drink",
    description: "The cactus pear gives the juice a wonderful aroma and a mixed of flavors with red fruits.",
    image: "assets/dishes/dish18.jpg",

    price: 3.50,
    previousPrice: 0,

    suggested: false,
    special: false,

    calories: 620,
    servingPeople: 1,
    portionSize: 1,
    unitType: "und",

    ingredients: [
      "Carbonated water",
      "Guarana extract",
      "Flavoring and caramel color",
      "Potassium sorbate"
    ],

    maxAdditionals: 2,
    additionals: [
      {
        name: "ice cubes",
        description: "cup with ices",
        price: 0,
        quantity: 0,
        limit: 1
      },
      {
        name: "straw",
        description: "plastic straw",
        price: 0,
        quantity: 0,
        limit: 1
      }
    ],

    reviews: {
      totalRating: 70,
      totalReviews: 15,
      rating1: 0,
      rating2: 0,
      rating3: 0,
      rating4: 5,
      rating5: 10
    },

    quantity: 1

  },
  {
    sku: "enery-green-juice",

    category: "drinks",

    name: "Energy Green Juice",
    description: "The cactus pear gives the juice a wonderful aroma and a mixed of flavors with red fruits.",
    image: "assets/dishes/dish19.jpg",

    price: 10,
    previousPrice: 13,

    suggested: false,
    special: true,

    calories: 202,
    servingPeople: 1,
    portionSize: 450,
    unitType: "ml",

    ingredients: [
      "Fresh avocado",
      "Green adn red apples",
      "Flax seeds",
      "Brown sugar"
    ],

    maxAdditionals: 2,
    additionals: [
      {
        name: "condensed milk",
        description: "add sweet flavor",
        price: 1,
        quantity: 0,
        limit: 1
      },
      {
        name: "lemon juice",
        description: "mix of flavor",
        price: 0.50,
        quantity: 0,
        limit: 1
      }
    ],

    reviews: {
      totalRating: 90,
      totalReviews: 20,
      rating1: 0,
      rating2: 0,
      rating3: 0,
      rating4: 10,
      rating5: 10
    },

    quantity: 1

  },
  {
    sku: "acai-smoothie",

    category: "drinks",

    name: "Acai Smoothie",
    description: "A perfect smoothie for fanatics who love the classic strawberry with banana.",
    image: "assets/dishes/dish20.jpg",

    price: 18.40,
    previousPrice: 25,

    suggested: true,
    special: false,

    calories: 202,
    servingPeople: 1,
    portionSize: 450,
    unitType: "ml",

    ingredients: [
      "Frozen acai purée",
      "Almond milk",
      "Frozen blueberries",
      "Fresh bananas",
      "Greek yogurt"
    ],

    maxAdditionals: 2,
    additionals: [
      {
        name: "honey",
        description: "extra sugar flavor",
        price: 2,
        quantity: 0,
        limit: 1
      },
      {
        name: "maple syrup",
        description: "extra sugar flavor",
        price: 1,
        quantity: 0,
        limit: 1
      }
    ],

    reviews: {
      totalRating: 183,
      totalReviews: 40,
      rating1: 0,
      rating2: 2,
      rating3: 3,
      rating4: 5,
      rating5: 30
    },

    quantity: 1

  },
  // DESSERT
  {
    sku: "chocolate-cake",

    category: "dessert",

    name: "Chocolate Cake",
    description: "This is a rich and moist chocolate cake prepared with vainilla essence.",
    image: "assets/dishes/dish21.jpg",

    price: 10,
    previousPrice: 13,

    suggested: false,
    special: false,

    calories: 720,
    servingPeople: 1,
    portionSize: 1,
    unitType: "ea",

    ingredients: [
      "Unsweetened cocoa powder",
      "Almond milk",
      "Eggs",
      "Vanilla extract",
      "Chocolate bar"
    ],

    maxAdditionals: 5,
    additionals: [
      {
        name: "short coffee",
        description: "espresso machine",
        price: 4,
        quantity: 0,
        limit: 3
      },
      {
        name: "sparkling water",
        description: "bottle of 300ml",
        price: 2.50,
        quantity: 0,
        limit: 3
      }
    ],

    reviews: {
      totalRating: 140,
      totalReviews: 30,
      rating1: 0,
      rating2: 0,
      rating3: 0,
      rating4: 10,
      rating5: 20
    },

    quantity: 1

  },
  {
    sku: "creamy-mousse",

    category: "dessert",

    name: "Creamy Mousse",
    description: "Creamy mousse folds in the Strawberries just before serving.",
    image: "assets/dishes/dish22.jpg",

    price: 15.20,
    previousPrice: 0,

    suggested: false,
    special: false,

    calories: 540,
    servingPeople: 2,
    portionSize: 1,
    unitType: "ea",

    ingredients: [
      "Strawberries",
      "Almond milk",
      "Brown sugar",
      "Vanilla extract",
      "Cream"
    ],

    maxAdditionals: 5,
    additionals: [
      {
        name: "cherry juice",
        description: "turned out amazingly well",
        price: 3,
        quantity: 0,
        limit: 2
      },
      {
        name: "chantilly",
        description: "cover the dessert",
        price: 1,
        quantity: 0,
        limit: 3
      }
    ],

    reviews: {
      totalRating: 132,
      totalReviews: 28,
      rating1: 0,
      rating2: 1,
      rating3: 0,
      rating4: 5,
      rating5: 22
    },

    quantity: 1

  },
  {
    sku: "caramelized-banana",

    category: "dessert",

    name: "Caramelized Banana",
    description: "This is the perfect sweet banana topping to be eaten in moderation and on special occasions.",
    image: "assets/dishes/dish23.jpg",

    price: 18,
    previousPrice: 0,

    suggested: false,
    special: false,

    calories: 422,
    servingPeople: 2,
    portionSize: 1,
    unitType: "ea",

    ingredients: [
      "Sliced bananas",
      "Granulated sugar",
      "Sprinkle with cinnamon",
      "Condensed milk"
    ],

    maxAdditionals: 5,
    additionals: [
      {
        name: "cinnamon",
        description: "pinch of sweet",
        price: 1,
        quantity: 0,
        limit: 2
      },
      {
        name: "chocolate sticks",
        description: "3 sticks",
        price: 3,
        quantity: 0,
        limit: 3
      }
    ],

    reviews: {
      totalRating: 67,
      totalReviews: 15,
      rating1: 1,
      rating2: 0,
      rating3: 0,
      rating4: 4,
      rating5: 10
    },

    quantity: 1

  },
  {
    sku: "cheesecake",

    category: "dessert",

    name: "Cheesecake",
    description: "This is a classic New York style cheesecake with a graham cracker crust and high sides.",
    image: "assets/dishes/dish24.jpg",

    price: 14.60,
    previousPrice: 20,

    suggested: true,
    special: false,

    calories: 380,
    servingPeople: 1,
    portionSize: 1,
    unitType: "ea",

    ingredients: [
      "Eggs",
      "Vanilla extract",
      "Almond milk",
      "Heavy whipping cream",
      "Fresh raspberries"
    ],

    maxAdditionals: 6,
    additionals: [
      {
        name: "short coffee",
        description: "espresso machine",
        price: 4,
        quantity: 0,
        limit: 3
      },
      {
        name: "sparkling water",
        description: "bottle of 300ml",
        price: 2.50,
        quantity: 0,
        limit: 3
      }
    ],

    reviews: {
      totalRating: 206,
      totalReviews: 46,
      rating1: 1,
      rating2: 0,
      rating3: 5,
      rating4: 10,
      rating5: 30
    },

    quantity: 1

  },
  {
    sku: "dutch-pie",

    category: "dessert",

    name: "Dutch Pie",
    description: "You can enjoy a nice slice of this delicious cake with coffee or as a special dessert.",
    image: "assets/dishes/dish25.jpg",

    price: 12.20,
    previousPrice: 0,

    suggested: false,
    special: true,

    calories: 410,
    servingPeople: 1,
    portionSize: 1,
    unitType: "ea",

    ingredients: [
      "Honey flavored graham crackers",
      "Sweet condensed milk",
      "Almond milk",
      "Dark chocolate",
      "Heavy cream"
    ],

    maxAdditionals: 6,
    additionals: [
      {
        name: "short coffee",
        description: "espresso machine",
        price: 4,
        quantity: 0,
        limit: 3
      },
      {
        name: "sparkling water",
        description: "bottle of 300ml",
        price: 2.50,
        quantity: 0,
        limit: 3
      }
    ],

    reviews: {
      totalRating: 88,
      totalReviews: 22,
      rating1: 1,
      rating2: 1,
      rating3: 5,
      rating4: 5,
      rating5: 10
    },

    quantity: 1

  },
  // SNACKS
  {
    sku: "fries-cheddar",

    category: "snacks",

    name: "Fries and Cheddar",
    description: "These are crispy french fries topped of melted cheese and smoky bacon.",
    image: "assets/dishes/dish26.jpg",

    price: 25.10,
    previousPrice: 0,

    suggested: false,
    special: false,

    calories: 513,
    servingPeople: 3,
    portionSize: 500,
    unitType: "g",

    ingredients: [
      "Crispy fries",
      "Cheese cheddar",
      "Smoky bacon",
      "Fresh herbst",
      "Pinch of pepper and salt"
    ],

    maxAdditionals: 6,
    additionals: [
      {
        name: "spicy mayo",
        description: "dipping sauce",
        price: 2,
        quantity: 0,
        limit: 3
      },
      {
        name: "grated cheese",
        description: "15g of cheese",
        price: 2.50,
        quantity: 0,
        limit: 3
      }
    ],

    reviews: {
      totalRating: 120,
      totalReviews: 27,
      rating1: 1,
      rating2: 1,
      rating3: 3,
      rating4: 2,
      rating5: 20
    },

    quantity: 1

  },
  {
    sku: "fried-chicken",

    category: "snacks",

    name: "Fried Chicken",
    description: "Crispy, juicy and perfectly seasoned, this really is the best fried chicken.",
    image: "assets/dishes/dish27.jpg",

    price: 33.65,
    previousPrice: 0,

    suggested: false,
    special: true,

    calories: 621,
    servingPeople: 2,
    portionSize: 350,
    unitType: "g",

    ingredients: [
      "Lemon juice",
      "Coriander and parsley",
      "Garlic powder",
      "Dried thyme",
      "Pinch of pepper and salt"
    ],

    maxAdditionals: 6,
    additionals: [
      {
        name: "spicy mayo",
        description: "dipping sauce",
        price: 2,
        quantity: 0,
        limit: 3
      },
      {
        name: "black olives sauce",
        description: "dipping sauce",
        price: 1.50,
        quantity: 0,
        limit: 3
      }
    ],

    reviews: {
      totalRating: 295,
      totalReviews: 65,
      rating1: 1,
      rating2: 0,
      rating3: 2,
      rating4: 22,
      rating5: 40
    },

    quantity: 1

  },
  {
    sku: "crispy-pork-crackling",

    category: "snacks",

    name: "Crispy Pork Crackling",
    description: "Crunchy pork crackling is the most popular side dish.",
    image: "assets/dishes/dish28.jpg",

    price: 28,
    previousPrice: 31,

    suggested: true,
    special: false,

    calories: 610,
    servingPeople: 3,
    portionSize: 550,
    unitType: "g",

    ingredients: [
      "Pieces of pork rind",
      "Olive oil",
      "Grated ginger",
      "Sea salt"
    ],

    maxAdditionals: 6,
    additionals: [
      {
        name: "spicy mayo",
        description: "dipping sauce",
        price: 2,
        quantity: 0,
        limit: 3
      },
      {
        name: "sweet soy",
        description: "dipping sauce",
        price: 1.50,
        quantity: 0,
        limit: 3
      }
    ],

    reviews: {
      totalRating: 293,
      totalReviews: 61,
      rating1: 0,
      rating2: 0,
      rating3: 1,
      rating4: 10,
      rating5: 50
    },

    quantity: 1

  },
  {
    sku: "skillet-nachos",

    category: "snacks",

    name: "Skillet Nachos",
    description: "Discovering real nachos is revolutionary, homemade recipe.",
    image: "assets/dishes/dish29.jpg",

    price: 30,
    previousPrice: 35,

    suggested: true,
    special: false,

    calories: 340,
    servingPeople: 2,
    portionSize: 450,
    unitType: "g",

    ingredients: [
      "Ground beef",
      "Diced tomatoes",
      "Taco seasoning",
      "Tortilla chips",
      "Sour cream",
      "Fresh jalapenos"
    ],

    maxAdditionals: 6,
    additionals: [
      {
        name: "sour cream",
        description: "dipping sauce",
        price: 1,
        quantity: 0,
        limit: 3
      },
      {
        name: "guacamole",
        description: "avocado-based dip",
        price: 2,
        quantity: 0,
        limit: 3
      }
    ],

    reviews: {
      totalRating: 382,
      totalReviews: 81,
      rating1: 0,
      rating2: 1,
      rating3: 0,
      rating4: 20,
      rating5: 60
    },

    quantity: 1

  }
];

export default products;
