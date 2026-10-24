const allProducts = [

    {
        id: 1,
        name: "Fresh Cow Milk",
        category: "Dairy",
        brand: "Amul",
        price: 65,
        discount: 10,
        stock: 120,
        rating: 4.8,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-2400-2400,pr-true,f-auto,q-40,dpr-2/cms/product_variant/58207565-7da6-44ce-bed6-860ecd56ba23/Heritage-Toned-Fresh-Milk-Pouch.jpeg",
        description: "Fresh and nutritious full cream cow milk.",
        unit: "1L"
    },
    {
        id: 2,
        name: "Toned Milk",
        category: "Dairy",
        brand: "Mother Dairy",
        price: 60,
        discount: 8,
        stock: 100,
        rating: 4.7,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-2400-2400,pr-true,f-auto,q-40,dpr-2/cms/product_variant/446d908b-8b03-47c7-878d-9c0b1986feee/Heritage-Special-Long-Life-Toned-Milk-Pouch-.jpeg",
        description: "Healthy toned milk with low fat.",
        unit: "1L"
    },
    {
        id: 3,
        name: "Butter",
        category: "Dairy",
        brand: "Amul",
        price: 58,
        discount: 5,
        stock: 80,
        rating: 4.7,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/e15c0b10-0367-4675-a5ab-6da2abf9bee1/Amul-Salted-Butter.jpeg",
        description: "Creamy salted butter made from fresh milk.",
        unit: "100g"
    },
    {
        id: 4,
        name: "Cheddar Cheese",
        category: "Dairy",
        brand: "Britannia",
        price: 220,
        discount: 15,
        stock: 45,
        rating: 4.6,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-1600-1600,pr-true,f-auto,q-40,dpr-2/cms/product_variant/d4b7222b-1b8e-43f6-a79d-c4163297812b/Milky-Mist-Cheese-Slices.jpeg",
        description: "Rich and creamy cheddar cheese slices.",
        unit: "200g"
    },
    {
        id: 5,
        name: "Greek Yogurt",
        category: "Dairy",
        brand: "Epigamia",
        price: 90,
        discount: 8,
        stock: 60,
        rating: 4.9,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-1500-1500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/61327d36-d1ae-4506-b440-6fb9ae4065a4/Milky-Mist-Greek-Yogurt-Combo-.jpeg",
        description: "Protein-rich thick Greek yogurt.",
        unit: "400g"
    },
    {
        id: 6,
        name: "Paneer",
        category: "Dairy",
        brand: "Mother Dairy",
        price: 120,
        discount: 10,
        stock: 75,
        rating: 4.8,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-1500-1500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/3381e20b-dea2-44a2-9c5f-a0884fdbe524/Heritage-Fresh-Paneer.jpeg",
        description: "Soft and fresh cottage cheese.",
        unit: "200g"
    },
    {
        id: 7,
        name: "Fresh Cream",
        category: "Dairy",
        brand: "Amul",
        price: 75,
        discount: 5,
        stock: 55,
        rating: 4.5,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-1920-1920,pr-true,f-auto,q-40,dpr-2/cms/product_variant/82571a54-7b14-41a2-9ae9-5481d99593c5/Amul-Whipping-Cream-Dairy-Based-Product.jpg",
        description: "Rich fresh cream for cooking and desserts.",
        unit: "250ml"
    },
    {
        id: 8,
        name: "Mozzarella Cheese",
        category: "Dairy",
        brand: "Go Cheese",
        price: 180,
        discount: 12,
        stock: 40,
        rating: 4.7,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-1600-1600,pr-true,f-auto,q-40,dpr-2/cms/product_variant/f4f3ccf6-56c2-4dd7-9932-da756835c69a/Milky-Mist-Mozzarella-Diced-Pizza-Cheese.jpeg",
        description: "Perfect mozzarella cheese for pizzas and pasta.",
        unit: "200g"
    },
    {
        id: 9,
        name: "Vanilla Ice Cream",
        category: "Dairy",
        brand: "Kwality Walls",
        price: 180,
        discount: 15,
        stock: 35,
        rating: 4.9,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-1000-1000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/f51793c2-a0fc-4440-9a79-446a337ecf1d/Cream-Bell-Sugarfree-Vanilla-Ice-Cream-Cup.png",
        description: "Creamy vanilla ice cream made with real milk.",
        unit: "700ml"
    },
    {
        id: 10,
        name: "Chocolate Milk",
        category: "Dairy",
        brand: "Amul",
        price: 40,
        discount: 5,
        stock: 90,
        rating: 4.6,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-1000-1000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/1945bfec-1494-4592-a8ee-e741a5c08868/Cavin-s-Strawberry-Milkshake-Rich-Creamy.jpeg",
        description: "Ready-to-drink delicious chocolate milk.",
        unit: "200ml"
    },
    {
        id: 11,
        name: "Fresh Apples",
        category: "Fruits",
        brand: "Farm Fresh",
        price: 180,
        discount: 10,
        stock: 120,
        rating: 4.8,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-910-910,pr-true,f-auto,q-40,dpr-2/cms/product_variant/30648529-69a1-4254-8988-b544e9a14ea0/Apple-Kashmir.jpeg",
        description: "Premium juicy Shimla apples.",
        unit: "1kg"
    },
    {
        id: 12,
        name: "Bananas",
        category: "Fruits",
        brand: "Farm Fresh",
        price: 60,
        discount: 5,
        stock: 150,
        rating: 4.7,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-3000-3000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/b3d6eec3-ba1d-4f09-ba3f-47b9b42b1aed/Banana-Elaichi-Yelakki-.jpeg",
        description: "Naturally ripened fresh bananas.",
        unit: "6 pcs"
    },
    {
        id: 13,
        name: "Oranges",
        category: "Fruits",
        brand: "Fresh Valley",
        price: 120,
        discount: 15,
        stock: 100,
        rating: 4.6,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-3000-3000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/47f7d4e6-d223-45fc-b576-c0151bd73324/Mosambi.jpeg",
        description: "Sweet and juicy Nagpur oranges.",
        unit: "1kg"
    },
    {
        id: 14,
        name: "Mango",
        category: "Fruits",
        brand: "Organic Farms",
        price: 250,
        discount: 20,
        stock: 80,
        rating: 4.9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZMEBDTQgxzXaWX_xxKKaMZSfBLRlpryhku2ggnzFvlg&s=10",
        description: "Fresh Alphonso mangoes.",
        unit: "1kg"
    },
    {
        id: 15,
        name: "Watermelon",
        category: "Fruits",
        brand: "Farm Fresh",
        price: 70,
        discount: 8,
        stock: 50,
        rating: 4.5,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-3000-3000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/16304024-e632-4b29-abb0-0320997422ce/Watermelon-Kiran-Tarbooj-.jpeg",
        description: "Sweet and refreshing watermelon.",
        unit: "1 pc"
    },
    {
        id: 16,
        name: "Papaya",
        category: "Fruits",
        brand: "Organic Farms",
        price: 65,
        discount: 10,
        stock: 60,
        rating: 4.6,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-3000-3000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/41306407-44b0-4e26-ae41-3efc8fd6c2e6/Papaya-Cut.jpeg",
        description: "Fresh ripe papaya rich in vitamins.",
        unit: "1 pc"
    },
    {
        id: 17,
        name: "Pomegranate",
        category: "Fruits",
        brand: "Fresh Valley",
        price: 190,
        discount: 12,
        stock: 70,
        rating: 4.8,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1254-1254,pr-true,f-auto,q-40,dpr-2/cms/product_variant/e8771d69-f791-4492-a4db-ae6ab9ba1efb/Pomegranate-Economy.png",
        description: "Fresh pomegranates with juicy seeds.",
        unit: "1kg"
    },
    {
        id: 18,
        name: "Pineapple",
        category: "Fruits",
        brand: "Farm Fresh",
        price: 90,
        discount: 5,
        stock: 45,
        rating: 4.7,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-960-960,pr-true,f-auto,q-40,dpr-2/cms/product_variant/d9702e32-ff02-40db-bd90-4fee452f1588/Pineapple-Chunks.jpeg",
        description: "Sweet tropical pineapple.",
        unit: "1 pc"
    },
    {
        id: 19,
        name: "Grapes",
        category: "Fruits",
        brand: "Fresh Valley",
        price: 110,
        discount: 10,
        stock: 85,
        rating: 4.8,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-3000-3000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/0400c4f6-712e-4322-8b0d-69bbc529931d/Grapes-Red-Globe-Imported.jpg",
        description: "Seedless green grapes.",
        unit: "500g"
    },
    {
        id: 20,
        name: "Kiwi",
        category: "Fruits",
        brand: "Imported",
        price: 220,
        discount: 15,
        stock: 40,
        rating: 4.9,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-1229-1229,pr-true,f-auto,q-40,dpr-2/cms/product_variant/bf1264e8-502e-4984-9f71-83fb8506e234/Bloom-Kiwi-Sungold-New-Zealand-.png",
        description: "Premium imported kiwi fruits.",
        unit: "4 pcs"
    },
    {
        id: 21,
        name: "Tomato",
        category: "Vegetables",
        brand: "Farm Fresh",
        price: 40,
        discount: 10,
        stock: 120,
        rating: 4.8,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-3000-3000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/7bbe0190-8366-4712-afa4-feb0566bf2e0/Tomato-Hybrid.jpeg",
        description: "Fresh farm tomatoes.",
        unit: "1kg"
    },
    {
        id: 22,
        name: "Potato",
        category: "Vegetables",
        brand: "Farm Fresh",
        price: 35,
        discount: 5,
        stock: 150,
        rating: 4.7,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-2940-2940,pr-true,f-auto,q-40,dpr-2/cms/product_variant/8d987d14-80ad-407a-9424-3fda999e1556/Potato.jpeg",
        description: "Premium quality potatoes.",
        unit: "1kg"
    },
    {
        id: 23,
        name: "Onion",
        category: "Vegetables",
        brand: "Fresh Harvest",
        price: 45,
        discount: 8,
        stock: 130,
        rating: 4.6,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-1024-1024,pr-true,f-auto,q-40,dpr-2/cms/product_variant/67e93080-1b79-4e17-89b5-a11cc3d0e527/Onion.jpeg",
        description: "Fresh red onions.",
        unit: "1kg"
    },
    {
        id: 24,
        name: "Carrot",
        category: "Vegetables",
        brand: "Organic Farms",
        price: 60,
        discount: 12,
        stock: 90,
        rating: 4.8,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-1224-1224,pr-true,f-auto,q-40,dpr-2/cms/product_variant/c855754b-4adf-4a5a-ba70-35378eb6baca/Carrot-Local.png",
        description: "Fresh organic carrots.",
        unit: "500g"
    },
    {
        id: 25,
        name: "Cauliflower",
        category: "Vegetables",
        brand: "Farm Fresh",
        price: 55,
        discount: 10,
        stock: 70,
        rating: 4.7,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-1024-1024,pr-true,f-auto,q-40,dpr-2/cms/product_variant/c1508c7c-8665-4a43-95db-ed0464d5341f/Cauliflower-Florets.jpeg",
        description: "Fresh white cauliflower.",
        unit: "1 pc"
    },
    {
        id: 26,
        name: "Cabbage",
        category: "Vegetables",
        brand: "Organic Farms",
        price: 45,
        discount: 5,
        stock: 80,
        rating: 4.6,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-1024-1024,pr-true,f-auto,q-40,dpr-2/cms/product_variant/dd55c192-edf3-41c9-aa25-df8b732547c8/Baby-Cabbage.png",
        description: "Green fresh cabbage.",
        unit: "1 pc"
    },
    {
        id: 27,
        name: "Brinjal",
        category: "Vegetables",
        brand: "Farm Fresh",
        price: 50,
        discount: 10,
        stock: 95,
        rating: 4.5,
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-3000-3000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/b3c37524-bbb9-496f-ada7-1f9966d16e20/Brinjal-Bharta.jpeg",
        description: "Fresh purple brinjals.",
        unit: "500g"
    },
    {
        id: 28,
        name: "Lady Finger",
        category: "Vegetables",
        brand: "Fresh Harvest",
        price: 48,
        discount: 8,
        stock: 100,
        rating: 4.7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShBqxoRpr0McFwQljkqNWCS84kbecELd7gjC5XZAyddg&s",
        description: "Tender fresh okra.",
        unit: "500g"
    },
    {
        id: 29,
        name: "Capsicum",
        category: "Vegetables",
        brand: "Organic Farms",
        price: 85,
        discount: 15,
        stock: 65,
        rating: 4.8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStuVTgpfJj0VYOmCjzsCbvgroalNlDLQBF-MSNJ6Lq8g&s",
        description: "Fresh green capsicum.",
        unit: "500g"
    },
    {
        id: 30,
        name: "Spinach",
        category: "Vegetables",
        brand: "Farm Fresh",
        price: 30,
        discount: 5,
        stock: 110,
        rating: 4.9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5uxBuk8RSDDjMszCLoeBGFx3diG31CGFxEdPUu4ogw&s=10",
        description: "Fresh spinach leaves rich in iron.",
        unit: "250g"
    },
    {
        id: 31,
        name: "Lay's Classic Chips",
        category: "Snacks",
        brand: "Lay's",
        price: 20,
        discount: 5,
        stock: 150,
        rating: 4.7,
        image: "https://m.media-amazon.com/images/I/61FXwBMClcL._SX679_.jpg",
        description: "Classic salted potato chips.",
        unit: "52g"
    },
    {
        id: 32,
        name: "Kurkure Masala Munch",
        category: "Snacks",
        brand: "Kurkure",
        price: 20,
        discount: 8,
        stock: 120,
        rating: 4.6,
        image: "https://www.bbassets.com/media/uploads/p/l/40068077_2-kurkure-namkeen-masala-munch.jpg",
        description: "Crunchy spicy corn puffs.",
        unit: "90g"
    },
    {
        id: 33,
        name: "Hide & Seek Biscuits",
        category: "Snacks",
        brand: "Parle",
        price: 40,
        discount: 10,
        stock: 100,
        rating: 4.8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvqp3pbTe_pvnqictlARbNOt03TNJuHCJOU8Y46fP1Dg&s=10",
        description: "Chocolate chip cookies.",
        unit: "120g"
    },
    {
        id: 34,
        name: "Oreo Biscuits",
        category: "Snacks",
        brand: "Oreo",
        price: 35,
        discount: 5,
        stock: 130,
        rating: 4.9,
        image: "https://www.quickpantry.in/cdn/shop/products/cadbury-oreo-creme-biscuits-chocolate-46-3-g-quick-pantry.jpg?v=1710538259&width=500",
        description: "Chocolate cream biscuits.",
        unit: "120g"
    },
    {
        id: 35,
        name: "Good Day Cookies",
        category: "Snacks",
        brand: "Britannia",
        price: 45,
        discount: 12,
        stock: 110,
        rating: 4.7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1MVhsoxAHTQRFGBmolZl8byqc583ifdxFU5AYuKNCg&s=10",
        description: "Crunchy butter cookies.",
        unit: "200g"
    },
    {
        id: 36,
        name: "Bingo Mad Angles",
        category: "Snacks",
        brand: "Bingo",
        price: 25,
        discount: 10,
        stock: 140,
        rating: 4.5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-tqUcdP5_sdZJSLBUwTLHQwt4Em2tHJQ-dWAnWVQK5A&s",
        description: "Spicy triangle chips.",
        unit: "70g"
    },
    {
        id: 37,
        name: "Haldiram's Aloo Bhujia",
        category: "Snacks",
        brand: "Haldiram's",
        price: 60,
        discount: 15,
        stock: 90,
        rating: 4.8,
        image: "https://www.haldirams.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0691%2F0948%2F1549%2Ffiles%2F1_b5586779-8200-46cc-811d-faef8e78ae07.avif%3Fv%3D1782794349%26width%3D800%26format%3Dwebp&w=1080&q=75",
        description: "Traditional crispy bhujia.",
        unit: "200g"
    },
    {
        id: 38,
        name: "Uncle Chipps",
        category: "Snacks",
        brand: "Uncle Chipps",
        price: 20,
        discount: 5,
        stock: 150,
        rating: 4.6,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZinlQsvkgEdG4h7wyme8OBO5__7yYUNsnijJ_hiHbVw&s=10",
        description: "Classic potato chips.",
        unit: "50g"
    },
    {
        id: 39,
        name: "Doritos Nacho Cheese",
        category: "Snacks",
        brand: "Doritos",
        price: 50,
        discount: 10,
        stock: 80,
        rating: 4.9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn566l5kskfJXWNR_KZov6l5ZxZYzpU75A2AEJaJVuUQ&s=10",
        description: "Crunchy nacho tortilla chips.",
        unit: "82g"
    },
    {
        id: 40,
        name: "Popcorn Butter",
        category: "Snacks",
        brand: "ACT II",
        price: 35,
        discount: 8,
        stock: 100,
        rating: 4.7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI8nU2iOhr5DlXOXnJ4FT5BVCXtQJJLo-DD8LXvGMx7g&s=10",
        description: "Instant butter popcorn.",
        unit: "90g"
    },
    {
        id: 41,
        name: "Brown Bread",
        category: "Bakery",
        brand: "Britannia",
        price: 45,
        discount: 10,
        stock: 120,
        rating: 4.7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoJCrg-wtV9puweM0tw3xc5_vh6tlGbt8Y1CcUihFggw&s",
        description: "Fresh and healthy brown bread.",
        unit: "400g"
    },
    {
        id: 42,
        name: "White Bread",
        category: "Bakery",
        brand: "Modern",
        price: 40,
        discount: 8,
        stock: 100,
        rating: 4.6,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kexG_RrRwErsv0nbtQjjTLzeVjSDNrg-OaZuGWHMhg&s",
        description: "Soft white sandwich bread.",
        unit: "400g"
    },
    {
        id: 43,
        name: "Burger Buns",
        category: "Bakery",
        brand: "Harvest Gold",
        price: 55,
        discount: 10,
        stock: 90,
        rating: 4.8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2S4rCHgKwV3J-0QstR4ZG5ZBSTfLzppwz65B_7hn8A&s=10",
        description: "Soft burger buns.",
        unit: "4 pcs"
    },
    {
        id: 44,
        name: "Hot Dog Buns",
        category: "Bakery",
        brand: "Harvest Gold",
        price: 60,
        discount: 12,
        stock: 80,
        rating: 4.7,
        image: "https://cdn.zeptonow.com/production/ik-seo/cms/product_variant/2b2dfaaf-8efa-4c4a-ad8b-a56c21eb01fc/Baker-s-Loaf-No-Palm-Oil-Hot-Dog-by-Harvest-Gold.jpeg",
        description: "Fresh hot dog buns.",
        unit: "6 pcs"
    },
    {
        id: 45,
        name: "Chocolate Muffin",
        category: "Bakery",
        brand: "Monginis",
        price: 35,
        discount: 5,
        stock: 110,
        rating: 4.8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4WmklQIV125A9buJPGNBXMaiLbnG_sWrHbZdNiqdbIA&s=10",
        description: "Soft chocolate muffin.",
        unit: "1 pc"
    },
    {
        id: 46,
        name: "Vanilla Cupcake",
        category: "Bakery",
        brand: "Monginis",
        price: 40,
        discount: 10,
        stock: 95,
        rating: 4.7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRVJJV_1Iu0FiBMcRzQGe5x566Q_KYNkbADrHro-UcEw&s=10",
        description: "Fresh vanilla cupcake.",
        unit: "1 pc"
    },
    {
        id: 47,
        name: "Garlic Bread",
        category: "Bakery",
        brand: "Britannia",
        price: 85,
        discount: 15,
        stock: 70,
        rating: 4.9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIBz8hAKrcEaWJino6UclqAsd4UfFpa1YON9txkuoKA&s=10",
        description: "Crispy garlic bread loaf.",
        unit: "250g"
    },
    {
        id: 48,
        name: "Croissant",
        category: "Bakery",
        brand: "The Baker's Dozen",
        price: 75,
        discount: 10,
        stock: 60,
        rating: 4.8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh50MIk_BDvo2CGy9cN2RLnotSGO40DKZrsQJ-4qn6Bw&s=10",
        description: "Flaky buttery croissant.",
        unit: "2 pcs"
    },
    {
        id: 49,
        name: "Donut",
        category: "Bakery",
        brand: "Mad Over Donuts",
        price: 65,
        discount: 5,
        stock: 85,
        rating: 4.7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjq6UIQzAObgiI1fV99FMR85y20V7YvGbxyVO52CM0ww&s=10",
        description: "Chocolate glazed donut.",
        unit: "1 pc"
    },
    {
        id: 50,
        name: "Fruit Cake",
        category: "Bakery",
        brand: "Britannia",
        price: 180,
        discount: 20,
        stock: 50,
        rating: 4.9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0e8b2OdsjsSAPY613T7GfA6CWzvfqzRDnVP90eV2AgQ&s=10",
        description: "Delicious fruit cake made with dry fruits.",
        unit: "500g"
    },
    { 
    id: 51, 
    name: "Fresh Chicken Curry Cut", 
    category: "Meat", 
    brand: "Licious", 
    price: 320, 
    discount: 10, 
    stock: 40, 
    rating: 4.8, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXeO4XYWtJ_YuLVVmPyLqudQU3LFd42c_luX-SguI00g&s=10", 
    description: "Fresh bone-in chicken cuts.", 
    unit: "500g" 
  },
  { 
    id: 52, 
    name: "Premium Tender Goat Mutton", 
    category: "Meat", 
    brand: "Fresho", 
    price: 450, 
    discount: 5, 
    stock: 25, 
    rating: 4.7, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPNSeNpaDPUmReql9kF0eeRrIVQnAfudxczq8Kq-d1Eg&s", 
    description: "Tender, juicy goat meat.", 
    unit: "500g" 
  },
  { 
    id: 53, 
    name: "Chicken Breast Boneless", 
    category: "Meat", 
    brand: "Licious", 
    price: 280, 
    discount: 12, 
    stock: 55, 
    rating: 4.9, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0oY0BXkQeFBasuznQdiD3tPNGg9nWxrIzIlhlZ2-mA&s=10", 
    description: "Lean boneless chicken fillets.", 
    unit: "450g" 
  },
  { 
    id: 54, 
    name: "Classic Chicken Seekh Kebab", 
    category: "Meat", 
    brand: "Meatzza", 
    price: 195, 
    discount: 15, 
    stock: 35, 
    rating: 4.6, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDV28hL1I58OyX-2Dtq2l33reOImkBITnDv9_8uphu9A&s=10", 
    description: "Spiced minced chicken kebabs.", 
    unit: "250g" 
  },
  { 
    id: 55, 
    name: "Rohu Fish Curry Cut", 
    category: "Meat", 
    brand: "Fresho", 
    price: 260, 
    discount: 8, 
    stock: 30, 
    rating: 4.5, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5EbqAsWj7Sjxp5AcaTdjgdAiMFnqMTF-aOWQYqWF2Cw&s=10", 
    description: "Cleaned freshwater fish pieces.", 
    unit: "500g" 
  },
    { 
    id: 56, 
    name: "Coca-Cola Original", 
    category: "Beverages", 
    brand: "Coca-Cola", 
    price: 40, 
    discount: 5, 
    stock: 120, 
    rating: 4.8, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFADpvkvS8NHmkUIKGXHiqBcylCSBot1fPhneiIUYKLg&s=10", 
    description: "Refreshing, crisp carbonated soft drink.", 
    unit: "750ml" 
  },
  { 
    id: 57, 
    name: "Sprite", 
    category: "Beverages", 
    brand: "Sprite", 
    price: 40, 
    discount: 0, 
    stock: 95, 
    rating: 4.7, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkPjLHmqyUZ9Mn6X8FpGgP4Zu_BqpoZjvm50keaH9U9Q&s=10", 
    description: "Crisp, clean taste of lemon-lime flavored soda.", 
    unit: "750ml" 
  },
  { 
    id: 58, 
    name: "Real Fruit Power Orange Juice", 
    category: "Beverages", 
    brand: "Real", 
    price: 130, 
    discount: 15, 
    stock: 60, 
    rating: 4.6, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT80hv4ixit2otvURPY5LN_yQ9H_ew5P5RberGJ5NoVwA&s=10", 
    description: "Packed with the goodness of orange fruit chunks and vitamin C.", 
    unit: "1L" 
  },
  { 
    id: 59, 
    name: "Tropicana 100% Mixed Fruit Juice", 
    category: "Beverages", 
    brand: "Tropicana", 
    price: 150, 
    discount: 10, 
    stock: 45, 
    rating: 4.7, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ9ktn7NLxSBbBSl2h7ByukfhKmmHIce9GQNls3p5C-Q&s=10", 
    description: "100% pure fruit juice blend with no added sugar.", 
    unit: "1L" 
  },
  { 
    id: 60, 
    name: "Thums Up", 
    category: "Beverages", 
    brand: "Thums Up", 
    price: 95, 
    discount: 8, 
    stock: 80, 
    rating: 4.9, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn5fZDk9MkH8b1ImAZvd_CAuEFt8fSISXvnku8W0sZHg&s=10", 
    description: "Strong, fizzy cola drink with a spicy taste twist.", 
    unit: "2L" 
  },
  { 
    id: 61, 
    name: "Aashirvaad Shudh Chakki Atta", 
    category: "Grocery Staples", 
    brand: "Aashirvaad", 
    price: 60, 
    discount: 5, 
    stock: 150, 
    rating: 4.9, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4l7ZWk568EfIgCJFGXHXDu5MYazS_xkxxQLlRfvYmw&s=10", 
    description: "100% pure whole wheat flour.", 
    unit: "1kg" 
  },
  { 
    id: 62, 
    name: "Fortune Premium Kachi Ghani Mustard Oil", 
    category: "Grocery Staples", 
    brand: "Fortune", 
    price: 175, 
    discount: 8, 
    stock: 90, 
    rating: 4.7, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy26CH8CfUD1GyyoOf92bP2H57pnnUyh4_zXYuaEaZqw&s", 
    description: "Pure cold-pressed mustard oil.", 
    unit: "1L" 
  },
  { 
    id: 63, 
    name: "Tata Salt", 
    category: "Grocery Staples", 
    brand: "Tata", 
    price: 28, 
    discount: 0, 
    stock: 200, 
    rating: 4.9, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVJlaUviGvWC9mrWQ7PMkCYr0GlJByN9fhEfrCXf3U6g&s", 
    description: "Iodized vacuum evaporated salt.", 
    unit: "1kg" 
  },
  { 
    id: 64, 
    name: "Daawat Rozana Super Basmati Rice", 
    category: "Grocery Staples", 
    brand: "Daawat", 
    price: 110, 
    discount: 12, 
    stock: 75, 
    rating: 4.6, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ01-7ch4HfJK2qodSsTKvMg7jpZgnfMC4KLq3jv7RIow&s", 
    description: "Naturally aged aromatic basmati rice.", 
    unit: "1kg" 
  },
  { 
    id: 65, 
    name: "Tata Sampann Unpolished Toor Dal", 
    category: "Grocery Staples", 
    brand: "Tata Sampann", 
    price: 185, 
    discount: 10, 
    stock: 65, 
    rating: 4.8, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR1_e1LqiULFSDgchJWo8EEbE_PgnxjZHwCmAOUokKxw&s", 
    description: "Nutritious unpolished pigeon pea lentils.", 
    unit: "1kg" 
  },
   { 
    id: 66, 
    name: "Vim Liquid Dishwash Gel", 
    category: "Household Goods", 
    brand: "Vim", 
    price: 155, 
    discount: 10, 
    stock: 110, 
    rating: 4.8, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_6uMnAa44SvPfTwFqUJ6yXo7Fe-pqEKegovdR6ZjOGw&s=10", 
    description: "Lemon power dishwashing liquid gel.", 
    unit: "750ml" 
  },
  { 
    id: 67, 
    name: "Surf Excel Easy Wash Detergent Powder", 
    category: "Household Goods", 
    brand: "Surf Excel", 
    price: 140, 
    discount: 5, 
    stock: 95, 
    rating: 4.7, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJODKIl5TqvZJwjfF293Cn5u9-_Vfn_nZ-IEslX_Jmg&s=10", 
    description: "Fast-dissolving tough stain removing powder.", 
    unit: "1kg" 
  },
  { 
    id: 68, 
    name: "Lizol Disinfectant Surface Cleaner", 
    category: "Household Goods", 
    brand: "Lizol", 
    price: 199, 
    discount: 12, 
    stock: 85, 
    rating: 4.9, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb9fvnK2BljX4x-4NWHLtMfy8K5RCjRFcsWgA-d2l39w&s=10", 
    description: "Citrus floral floor and surface cleaner.", 
    unit: "1L" 
  },
  { 
    id: 69, 
    name: "Harpic Power Plus Toilet Cleaner", 
    category: "Household Goods", 
    brand: "Harpic", 
    price: 105, 
    discount: 8, 
    stock: 130, 
    rating: 4.8, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0qL_y5pu9YBlnu5dGhAoJxIIl5nPfhDnRx5WwKw9NAw&s", 
    description: "Disinfectant liquid toilet cleaner.", 
    unit: "500ml" 
  },
  { 
    id: 70, 
    name: "Godrej Aer Pocket Bathroom Fragrance", 
    category: "Household Goods", 
    brand: "Godrej", 
    price: 55, 
    discount: 0, 
    stock: 180, 
    rating: 4.6, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5DW3iGsWWAHL4vjxFO4BdVkMCwXKuz09Vya4UflHq9A&s=10", 
    description: "Fresh blossom scented bathroom air freshener.", 
    unit: "10g" 
  },
  { 
    id: 71, 
    name: "Himalaya Baby Powder", 
    category: "Baby Care", 
    brand: "Himalaya", 
    price: 160, 
    discount: 5, 
    stock: 80, 
    rating: 4.8, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcIzHIqyIQ51MnjjaU8BSx-uB5AEYXKtBWNNuZ4jhgA&s=10", 
    description: "Gentle cooling powder with olive and almond oils.", 
    unit: "200g" 
  },
  { 
    id: 72, 
    name: "Pampers All Round Protection Pants", 
    category: "Baby Care", 
    brand: "Pampers", 
    price: 349, 
    discount: 15, 
    stock: 65, 
    rating: 4.9, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkIn7AKhU-HTzo-bGhSbLR1W2nUF9NqkaBtS3otZqzMg&s", 
    description: "Anti-rash diaper pants with aloe vera lotion.", 
    unit: "30 units" 
  },
  { 
    id: 73, 
    name: "Johnson's Baby Cream", 
    category: "Baby Care", 
    brand: "Johnson's", 
    price: 90, 
    discount: 0, 
    stock: 120, 
    rating: 4.7, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXP48IOR6CiE_f2l3d5dzVO8cBRrZ9_PrAclarWfMWNw&s=10", 
    description: "Moisturizing cream designed for delicate baby skin.", 
    unit: "50g" 
  },
  { 
    id: 74, 
    name: "Sebamed Baby Wash Extra Soft", 
    category: "Baby Care", 
    brand: "Sebamed", 
    price: 430, 
    discount: 8, 
    stock: 45, 
    rating: 4.9, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM0x--UBhCkHosp0mnL9gElrwoji699FJcnzHG8oe8wQ&s=10", 
    description: "Soap-free ultra-mild wash with pH 5.5 formulation.", 
    unit: "200ml" 
  },
  { 
    id: 75, 
    name: "Mother Sparsh 99% Pure Water Wipes", 
    category: "Baby Care", 
    brand: "Mother Sparsh", 
    price: 299, 
    discount: 20, 
    stock: 70, 
    rating: 4.8, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfWQkMOH2bkuGgtfD4msN9qzsKzITKA-Of3yDkb3o_6w&s=10", 
    description: "Biodegradable unscented medical-grade water wipes.", 
    unit: "80 wipes" 
  }
];






let loginUser = JSON.parse(localStorage.getItem("new_user"));
let currentPage = window.location.pathname;

// 1. If NOT logged in, ONLY redirect if they are trying to view home.html
if (!loginUser) {
    if (!currentPage.includes("login.html")) {
        window.location.href = "login.html";
    }
} 
// 2. If ALREADY logged in, ONLY redirect to home.html if they are sitting on login.html
else {
    if (currentPage.includes("login.html")) {
        window.location.href = "index.html";
    }
}

let welcomeE1 = document.getElementById("welcome")

if (welcomeE1){
    welcomeE1.textContent =  loginUser.userName
}


function removeAccess(){
    localStorage.removeItem("new_user")
    window.location.href = "login.html"
}



let productContainerE1 = document.getElementById("productContainer")



       
function displayallproducts(Product) {

    if (!productContainerE1) {
        return
    }


    productContainerE1.innerHTML = ""


    Product.forEach(item => {
        productContainerE1.innerHTML += `

        <div class = "child-container">
        <img src = ${item.image} alt = "" class = "productimage"/>
       <div class = "mat-containerpro">
        <h2> ${item.name} </h2>
        <h3> category: ${item.category} </h3>
        <p class = "brandofproduct"> ${item.brand}  </h4>
        <h3 class = "price"> Price: ${item.price} /- </p>
        <h3 class = "discountbadge"> ${item.discount}% </h3>
        <p> ${item.description} </p>
        <button onclick = "addToCart(${item.id})" class = "cart-button" > Add to Cart </button>
        </div>
        </div>
        
        `;

    })

}
displayallproducts(allProducts)

function filterProducts(category){
    let filterData = allProducts.filter(product => product.category === category)
    displayallproducts(filterData)
}





function filterProducts(category) {
    localStorage.setItem("selectedCategory", category);
    window.location.href = "products.html";
}


document.addEventListener("DOMContentLoaded", () => {
    let savedCategory = localStorage.getItem("selectedCategory");
    let productContainerE1 = document.getElementById("productContainer");

   
    if (productContainerE1) {
        if (savedCategory) {
            let filterData = allProducts.filter(product => product.category === savedCategory);
            displayallproducts(filterData); 
            localStorage.removeItem("selectedCategory"); 
        } else {
            displayallproducts(allProducts); 
        }
    }
});




let cartContainerE1 = document.getElementById("cartContainer")

let TotalE1 = document.getElementById("Total")
let Total = 0



let getCart = JSON.parse(localStorage.getItem("getCart")) || []






function addToCart(id) {

    let existingCart = getCart.find(item => item.id === id)

    if (existingCart) {
        existingCart.quantity += 1

        localStorage.setItem("getCart", JSON.stringify(getCart)) 
    displayCartProducts() 

        alert("product quantity is increased in cart")
        return;
    }

    let selectedProducts = allProducts.find(item => item.id === id)

    let newCart = {
        id: selectedProducts.id,
        name: selectedProducts.name,
        image: selectedProducts.image,
        price: selectedProducts.price,
        quantity: 1


    }

    getCart.push(newCart)




    alert("product added successfully")

    localStorage.setItem("getCart", JSON.stringify(getCart))


    displayCartProducts()

}
function addtoIncrement(index) {
    getCart[index].quantity += 1
    localStorage.setItem("getCart", JSON.stringify(getCart))
    displayCartProducts()


}
function addTodecrement(index) {
    if (getCart[index].quantity > 1) {
        getCart[index].quantity -= 1
    }
    else {
        getCart.splice(index, 1)
    }
    localStorage.setItem("getCart", JSON.stringify(getCart))
    displayCartProducts()


}



function displayCartProducts() {
      let Total = 0;

    if (!cartContainerE1) {
        return
    }

    cartContainerE1.innerHTML = ""


    getCart.forEach((item, index) => {
        
        
        Total += item.price * item.quantity;

    
    let itemTotal = item.price * item.quantity; 



       
        cartContainerE1.innerHTML += 
         `
        
        <div class = "child-containercart">
        <img src = ${item.image} alt = "" class = "productimagecart"/>
       <div class = "mat-container">
        <h4 > ${item.name} </h4>
        <h5 class = "price"> Price: ₹${item.price}  </h5>
        <div class="childpriceindc">
        <div>
         <p class="item-total"> Subtotal :<span class="rupees"> ₹${itemTotal}</span> </p>
         </div>
        <div class="childindec">
        <button onclick = "addTodecrement(${index})" class="addbtnsub"> -</button>
        <p class="quancart">${item.quantity}</p>
        <button onclick = "addtoIncrement(${index})" class="addbtnsub">+</button>
        </div>
        
        </div>
      
        </div>
        </div>
        
        
        
        `
        
     
    })
document.getElementById("Total").innerHTML = `₹${Total}<br>TOTAL`;
    
}
displayCartProducts()

// Form Login Page //


let userNameE1 = document.getElementById("userName")
let passwordE1 = document.getElementById("password")
let emailE1 = document.getElementById("email")
let phoneE1 = document.getElementById("phone")
let handleFormE1 = document.getElementById("handleForm")

if(userNameE1){
userNameE1.addEventListener("focus",function(){userNameE1.style.backgroundColor = "#ccffff"});
userNameE1.addEventListener("blur",function(){userNameE1.style.backgroundColor = "#eeffe6"});
}

if(passwordE1){
passwordE1.addEventListener("focus",function(){passwordE1.style.backgroundColor = "#ccffff"});
passwordE1.addEventListener("blur",function(){passwordE1.style.backgroundColor = "#eeffe6"});
}

if(emailE1){
emailE1.addEventListener("focus",function(){emailE1.style.backgroundColor = " #ccffff"});
emailE1.addEventListener("blur",function(){emailE1.style.backgroundColor = "#eeffe6"});
}


if(phoneE1){
phoneE1.addEventListener("focus",function(){phoneE1.style.backgroundColor = " #ccffff"});
phoneE1.addEventListener("blur",function(){phoneE1.style.backgroundColor = "#eeffe6"});
}

if (handleFormE1){
handleFormE1.addEventListener("submit",function(e){

    e.preventDefault()

    if(userNameE1.value === "" ) {
        alert("username field is mandatory")
    return;
    }
    else if (userNameE1.value.length < 4){
        alert ("Min 5 characters required in usename field")
        return;
    }

    if(passwordE1.value === ""){
        alert("password field is mandatory")
        
    }
    else if(passwordE1.value.length < 6){
        alert("Min 6 characters required in password field")
    }

    let gmailPattern = /^[^ ]+@gmail\.com$/i;

    if(emailE1.value === ""){
        alert("email field is Mandatory")
    }
    else if(!emailE1.value.match(gmailPattern)){
        alert("Email must be in the format of @gmail.com")

    }

    let phonepattern = /^[0-9]{10}$/;

    if(phoneE1.value === ""){
        alert("phone field is mandatory")
    }
    else if(!phoneE1.value.match(phonepattern)){
        alert("Please enter a valid 10-digit phone number")
    }
    let new_user = {
        userName : userNameE1.value,
        email : emailE1.value,
        phone : phoneE1.value
    }
    localStorage.setItem("new_user",JSON.stringify(new_user))

    alert('form submitted successfully')
    handleFormE1.reset()

    window.location.href = "index.html"

})
}

// ****** Checkout page starts Here ******//

function goToCheckout(){
    if(getCart.length === 0){
      window.location.href = "products.html"
    }
    else {
        window.location.href = "checkout.html"
    }
}

   
let checkoutContainerE1 = document.getElementById("checkoutContainer")

let subTotalE1 = document.getElementById("subTotal")
let subTotal = 0

let checkoutData = JSON.parse(localStorage.getItem("getCart")) || []



function displayCheckout(){
if(!checkoutContainerE1){
    return
}


    checkoutContainerE1.innerHTML = ""

    checkoutData.forEach(item =>{

        subTotal +=item.price * item.quantity
        let itemTotal = item.price * item.quantity; 
        checkoutContainerE1.innerHTML += `
        
        <div class="child-containercart">
         <img src = ${item.image} alt = "" class = "productimagecart"/>
        <div class="mat-container">
        <h4> ${item.name} </h4>
        <h3 class = "price"> Price: ₹${item.price} </h3>
        <p>quantity : ${item.quantity}</p>
         <p class="item-total"> Subtotal :<span class="rupees"> ₹${itemTotal}</span> </p>
        </div>
        

        
        
        </div>
        
        `
    })

    subTotalE1.innerHTML = `Grand Total :<span class="pricepdateas"> ₹${subTotal}</span>`
}
displayCheckout();


function proceedtoPlace(){
    alert("Order placed Successfully")
    localStorage.removeItem("getCart")
    window.location.href = "index.html"
}

function initFooter() {
    let yearEl = document.getElementById("currentYear");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}


function simulateDownload(platformName) {
    alert("Thank you for trying to download our app! The " + platformName + " link will be live soon.");
}


function showSupportAlert() {
    alert("Our customer support team is available 24/7. We will help you right away!");
}


initFooter();
