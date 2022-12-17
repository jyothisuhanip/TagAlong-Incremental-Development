Property Endpoints:


1. list all properties - http://localhost:3000/properties , HTTP Method: GET

2. show a property - http://localhost:3000/properties?id={propertyid}, HTTP Method: GET

3. add a new property - http://localhost:3000/properties, HTTP Method: POST

    Sample Request Body:

            {
                "propertyId": "7",
                "hostId": "2002",
                "categoryId": "9002",
                "title": "Orlando, Tampa",
                "locationDetail": "Lunker Lodge at Lake Leon",
                "description": "169 miles away",
                "availability": "Dec 10 - 15",
                "fullDescription": "Relax with the whole family at this peaceful 5 Bedroom Villa overlooking Hout Bay Beach. 5 BEDROOMS – 3 BATHROOMS. This spacious modern family home boasting 5 bedrooms. The main bedroom ( en-suite) has a king-size bed, the remaining four bedrooms,have queen-sized beds.Open plan kitchen and lounge area with fire place overlooking the mountains.",
                "nightlyfee": "$348",
                "cleaningfee": "$90",
                "servicefee": "$177",
                "amenities": [
                    "Lake View",
                    "Wifi",
                    "Private Hot Tub",
                    "Washer",
                    "Air Conditioning",
                    "Kitchen",
                    "Free parking on premises",
                    "TV",
                    "Dryer",
                    "Coffee Maker"
                ],
                "bedrooms": "2",
                "bathrooms": "2",
                "guests": "4",
                "images": [
                    "prop3-img2.jpg",
                    "prop3-img3.jpg",
                    "prop5-img3.jpg"
                ],
                "rating": 4.1,
                "review_count": 70,
                "checkIn": "2022-11-28",
                "checkOut": "2022-12-03"
            }



4. update an existing property - http://localhost:3000/properties?id={propertyid} , HTTP Method: PUT

    Sample Request Body:

            {
                "hostId": "2002",
                "categoryId": "9002",
                "title": "Las Vegas, California",
                "locationDetail": "Broad Cove, Nova Scotia, Canada",
                "description": "169 miles away",
                "availability": "Dec 20 - 30",
                "fullDescription": "Perched high on an ocean hillside, built on 30 ft tall steel legs, the cozy quarters above are akin to an old ship’s cabin. With 360 views at 30ft up you can chart the sun and stars across the sky, set your rhythm to the ebb & flow of the tide and scout the surf from above. Greet the evenings with a cozy woodstove, sunset with drinks on the deck, moonrise with a dip in the hottub & mornings with fresh espresso.",
                "nightlyfee": "$38",
                "cleaningfee": "$80",
                "servicefee": "$77",
                "amenities": [
                    "Lake View",
                    "Wifi",
                    "Private Hot Tub",
                    "Washer",
                    "Air Conditioning",
                    "Kitchen",
                    "Free parking on premises",
                    "TV",
                    "Dryer",
                    "Coffee Maker"
                ],
                "bedrooms": "2",
                "bathrooms": "2",
                "guests": "4",
                "images": [
                    "prop3-img2.jpg",
                    "prop3-img3.jpg",
                    "prop5-img3.jpg"
                ],
                "rating": 4.1,
                "review_count": 70,
                "checkIn": "2022-11-28",
                "checkOut": "2022-12-03"
            }




5. delete an existing property - http://localhost:3000/properties?id={propertyid} , HTTP Method: DELETE



Reservation Endpoints:

1. list all reservations - http://localhost:3000/reservations?userid={userid} , HTTP Method: GET

2. show a reservation - http://localhost:3000/reservations?reservationid={reservationid} , HTTP Method: GET

3. add a new reservation - http://localhost:3000/reservations?userid={userid} , HTTP Method: POST

    Sample Request body:

            {
                "reservationId": "1010",
                "propertyId": "3",
                "checkIn": "2022-11-28",
                "checkOut": "2022-12-03",
                "paymentId": "3002",
                "upcoming": "false"
            }



4. delete an existing reservation - http://localhost:3000/reservations?reservationid={reservationid} , HTTP Method: DELETE

