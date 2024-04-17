document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const searchResultsBox = document.getElementById('search-results-box');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const searchInput = document.getElementById('search-input').value.trim();
        if (searchInput !== '') {
            // For demonstration purposes, we'll log the search query to the console
            console.log('Performing search for: ' + searchInput);

            // Simulate fetching matching oils (replace this with your actual search logic)
            const matchingOils = getMatchingOils(searchInput);

            // Display matching oils in the results box
            displayMatchingOils(matchingOils);
        } else {
            // Clear the results box if search input is empty
            searchResultsBox.innerHTML = '';
        }
    });

    function getMatchingOils(query) {
        // Example: Simulate fetching matching oils from a database or API
        // In this example, we return an array of matching oils (replace with your actual data)
        const oils = [
            { name: 'Lavender Oil', description: 'Description of Lavender Oil...', url: 'lavender_oil.html' },
            { name: 'Tea Tree Oil', description: 'Description of Tea Tree Oil...', url: 'tea_tree_oil.html' },
            { name: 'Peppermint Oil', description: 'Description of Peppermint Oil...', url: 'peppermint_oil.html' },
            { name: 'Almond Oil', description: 'Almond oil is rich in vitamin E and is used for moisturizing the skin...', url: 'almond_oil.html' },
            { name: 'Avocado Oil', description: 'Avocado oil is a healthy cooking oil with a high smoke point...', url: 'avocado_oil.html' },
            { name: 'Canola Oil', description: 'Canola oil is low in saturated fats and commonly used in cooking...', url: 'canola_oil.html' },
            { name: 'Castor Oil', description: 'Castor oil is used in various applications including skincare and haircare...', url: 'castor_oil.html' },
            { name: 'Coconut Oil', description: 'Coconut oil is popular for cooking and has many health benefits...', url: 'coconut_oil.html' },
            { name: 'Corn Oil', description: 'Corn oil is commonly used for frying and baking due to its neutral flavor...', url: 'corn_oil.html' },
            { name: 'Cottonseed Oil', description: 'Cottonseed oil is used in cooking and also in the production of margarine...', url: 'cottonseed_oil.html' },
            { name: 'Flaxseed Oil', description: 'Flaxseed oil is rich in omega-3 fatty acids and is used as a dietary supplement...', url: 'flaxseed_oil.html' },
            { name: 'Grapeseed Oil', description: 'Grapeseed oil is often used in cooking and skincare products...', url: 'grapeseed_oil.html' },
            { name: 'Hazelnut Oil', description: 'Hazelnut oil has a nutty flavor and is used in cooking and salad dressings...', url: 'hazelnut_oil.html' },
            { name: 'Hemp Oil', description: 'Hemp oil is derived from hemp seeds and is used in cooking and skincare products...', url: 'hemp_oil.html' },
            { name: 'Macadamia Nut Oil', description: 'Macadamia nut oil has a buttery flavor and is used in cooking and baking...', url: 'macadamia_nut_oil.html' },
            { name: 'Olive Oil', description: 'Olive oil is a staple in Mediterranean cuisine and is known for its health benefits...', url: 'olive_oil.html' },
            { name: 'Palm Oil', description: 'Palm oil is used in cooking and food products, but sustainability is a concern...', url: 'palm_oil.html' },
            { name: 'Peanut Oil', description: 'Peanut oil has a high smoke point and is used in frying and Asian cuisine...', url: 'peanut_oil.html' },
            { name: 'Rapeseed Oil', description: 'Rapeseed oil is used in cooking, biodiesel production, and industrial applications...', url: 'rapeseed_oil.html' },
            { name: 'Safflower Oil', description: 'Safflower oil is often used in cooking and has a high smoke point...', url: 'safflower_oil.html' },
            { name: 'Sesame Oil', description: 'Sesame oil is used in Asian cooking and has a distinct nutty flavor...', url: 'sesame_oil.html' },
            { name: 'Soybean Oil', description: 'Soybean oil is versatile and used in cooking, baking, and salad dressings...', url: 'soybean_oil.html' },
            { name: 'Sunflower Oil', description: 'Sunflower oil is commonly used in cooking and has a light flavor...', url: 'sunflower_oil.html' },
            { name: 'Walnut Oil', description: 'Walnut oil has a rich flavor and is used in salad dressings and cooking...', url: 'walnut_oil.html' },
            { name: 'Argan Oil', description: 'Argan oil is used in skincare and haircare products for its moisturizing properties...', url: 'argan_oil.html' },
            { name: 'Camellia Oil', description: 'Camellia oil is used in cooking and also as a moisturizer for skin and hair...', url: 'camellia_oil.html' },
            { name: 'Evening Primrose Oil', description: 'Evening primrose oil is used as a dietary supplement and in skincare...', url: 'evening_primrose_oil.html' },
            { name: 'Ghee', description: 'Ghee is clarified butter commonly used in Indian cooking for its rich flavor...', url: 'ghee.html' },
            { name: 'Grapeseed Oil', description: 'Grapeseed oil is often used in cooking and skincare products...', url: 'grapeseed_oil_2.html' },
            { name: 'Neem Oil', description: 'Neem oil is used in skincare and gardening for its insecticidal properties...', url: 'neem_oil.html' },
            { name: 'Pumpkin Seed Oil', description: 'Pumpkin seed oil is used in cooking and as a dietary supplement...', url: 'pumpkin_seed_oil.html' },
            { name: 'Safflower Oil', description: 'Safflower oil is often used in cooking and has a high smoke point...', url: 'safflower_oil_2.html' },
            { name: 'Tea Tree Oil', description: 'Tea tree oil is used in skincare and haircare for its antibacterial properties...', url: 'tea_tree_oil.html' },
            { name: 'Truffle Oil', description: 'Truffle oil is infused with truffle flavor and used to add a gourmet touch to dishes...', url: 'truffle_oil.html' },
            { name: 'Wheat Germ Oil', description: 'Wheat germ oil is rich in nutrients and used in skincare and dietary supplements...', url: 'wheat_germ_oil.html' },
            { name: 'Zucchini Seed Oil', description: 'Zucchini seed oil is used in cooking and skincare for its nutritional value...', url: 'zucchini_seed_oil.html' },
            { name: 'Castor Oil', description: 'Castor oil is used in various applications including skincare and haircare...', url: 'castor_oil_2.html' },
            { name: 'Engine Oil', description: 'Engine oil is essential for lubricating and protecting internal combustion engines...', url: 'engine_oil.html' },
            { name: 'Gear Oil', description: 'Gear oil is used in gearboxes to lubricate gears and reduce friction...', url: 'gear_oil.html' },
            { name: 'Hydraulic Oil', description: 'Hydraulic oil is used in hydraulic systems for transmitting power and lubrication...', url: 'hydraulic_oil.html' },
            { name: 'Motor Oil', description: 'Motor oil is used in internal combustion engines for lubrication and cooling...', url: 'motor_oil.html' },
            { name: 'Transmission Fluid', description: 'Transmission fluid is used in automatic transmissions for smooth gear shifting...', url: 'transmission_fluid.html' },
            { name: 'Brake Fluid', description: 'Brake fluid is used in hydraulic brake systems to transmit force and lubricate...', url: 'brake_fluid.html' },
            { name: 'Coolant', description: 'Coolant is used in engines to maintain optimal temperature and prevent overheating...', url: 'coolant.html' },
            { name: 'Grease', description: 'Grease is a semisolid lubricant used in bearings, gears, and other mechanical parts...', url: 'grease.html' },
            { name: 'Steering Fluid', description: 'Steering fluid is used in power steering systems to assist with steering...', url: 'steering_fluid.html' },
            { name: 'Diesel Oil', description: 'Diesel oil is used in diesel engines for combustion and lubrication...', url: 'diesel_oil.html' },
            { name: 'Jet Fuel', description: 'Jet fuel is used in aircraft engines for propulsion and energy...', url: 'jet_fuel.html' },
            { name: 'Kerosene', description: 'Kerosene is used as a fuel for lamps, heaters, and stoves...', url: 'kerosene.html' },
            { name: 'Lubricating Oil', description: 'Lubricating oil is used to reduce friction and wear between...', url: 'lubricating_oil.html' }
            // Add more oils as needed
        ];

        // Filter oils based on the search query
        return oils.filter(oil => oil.name.toLowerCase().includes(query.toLowerCase()));
    }

    function displayMatchingOils(oils) {
        const searchResultsBox = document.getElementById('search-results-box');
    
        if (oils.length > 0) {
            searchResultsBox.innerHTML = oils.map(oil => `
                <div class="search-result">
                    <a href="${oil.url}">${oil.name}</a>
                    <p>${oil.description}</p>
                </div>
            `).join('');
        } else {
            searchResultsBox.innerHTML = '<p>No matching oils found.</p>';
        }
    }
});
