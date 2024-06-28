var api_URL = `https://naruto-api-rsl3.onrender.com/api/v1/characters`;
let imagetag = document.getElementById('image');
let about = document.getElementById('para');
let translatedAbout = document.getElementById('translated-para');

async function apiCall() {
    try {
        let response = await fetch(api_URL);
        let final_response = await response.json();
        console.log(final_response);
        
        let imageNum = Math.floor(Math.random() * final_response.length); // Assuming final_response is an array
        console.log(final_response[imageNum].images[0]);
        let imageLink = final_response[imageNum].images[0];
        imagetag.src = imageLink;
        
        let aboutArraySize = final_response[imageNum].about.length;
        let aboutMessage = final_response[imageNum].about[Math.floor(Math.random() * aboutArraySize)];

        // Translate to English
        googleTranslateElementInit = function() {
            new google.translate.TranslateElement({pageLanguage: 'auto', includedLanguages: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'translated-para');
        };

        translatedAbout.innerHTML = aboutMessage;
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

apiCall();
