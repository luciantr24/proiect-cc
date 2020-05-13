## Proiect Cloud Computing
---

### Aplicatia ofera posibilitatea de a cauta un oras pentru a afla detalii despre temperatura(grade celsius), umiditatea si viteza vantului si un mesaj aleatoriu amuzant sau incurajator 

#### Adresa pentru accesare aplicatiei: [https://cc-proiect.herokuapp.com/](https://cc-proiect.herokuapp.com/)

### Cele doua API-uri folosite sunt:

    * Open Weather API : https://openweathermap.org/api
    * Advices API : https://api.adviceslip.com/

### Aplicatia foloseste React.js pentru partea de front-end. Aplicatia trimite request-uri de tip **GET** catre cele doua api-uri.

### Structura aplicatie 

![](/assets/api-structure.png/)

### **Requesturi si responses folosind Postman**

* Request de tip **GET** catre Open Weather API pentru a afisa vreamea din orasul Londra, UK.

    **Endpoint:**  

    api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6c04d4949ac86db24eed44c22d2ebe75

    ![](/assets/get-weather.PNG/)

    **Response**

    ```
    {
    "coord": {
        "lon": -0.13,
        "lat": 51.51
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 286.44,
        "feels_like": 281.68,
        "temp_min": 285.93,
        "temp_max": 287.15,
        "pressure": 1016,
        "humidity": 35
    },
    "visibility": 10000,
    "wind": {
        "speed": 3.6,
        "deg": 300
    },
    "clouds": {
        "all": 3
    },
    "dt": 1589308412,
    "sys": {
        "type": 1,
        "id": 1414,
        "country": "GB",
        "sunrise": 1589256762,
        "sunset": 1589312469
    },
    "timezone": 3600,
    "id": 2643743,
    "name": "London",
    "cod": 200
    }
    ```

    **Afisare din aplicatie**
    ![](/assets/app-london.PNG)

* ### Request  catre **Advices API** 
    
    ### **Request: GET** - afiseaza un mesaj aleator

    **Endpoint:**   https://api.adviceslip.com/advice

    ![](/assets/getadvice.PNG)

    **Raspuns aleator primit in aplicatia web**
    ![](/assets/advice-app.PNG)

    ### **GET by id** - afiseaza mesajul cu id-ul 5

    **Endpoint:** https://api.adviceslip.com/advice/5  

    ![](/assets/get-advice-by-id.PNG)
