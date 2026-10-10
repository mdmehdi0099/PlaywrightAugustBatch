/*
import { test, expect } from '@playwright/test';

test('GET users API', async ({ request }) => {
    //API stands for Application Programming Interface.
    //An API is a set of rules and mechanisms that allows two different software applications
    //to communicate with each other and exchange data.

    //1. REST API
    //REST (Representational State Transfer) is the most commonly used API style.
    /*
    Uses HTTP methods:
    Method	Purpose	                Example
    GET	    Retrieve data	        Get user by ID
    POST	Create data	            Create new user
    PUT	    Completely update data	Update user
    PATCH	Partially update data	Update user's email
    DELETE	Delete data	            Delete user

    2. SOAP API
    SOAP (Simple Object Access Protocol) is an XML-based protocol.
    <soap:Envelope>
    <soap:Body>
        <GetUser>
            <UserId>2</UserId>
        </GetUser>
    </soap:Body>
    </soap:Envelope>
    
    const response = await request.get('https://reqres.in/api/users?page=1');
    console.log(response);
    console.log("------------------------------------------------------------");
    expect(response.status()).toBe(200);
    //We convert the API response into JSON because the response received from the API 
    // is an HTTP response object, not directly a JavaScript object that we can easily 
    // access and validate.
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.page).toBe(2);
});

test('Create user API', async ({ request }) => {
    const response = await request.post(
        'https://reqres.in/api/users',
        {
            data: {
                name: 'Mehdi',
                job: 'Automation Engineer'
            }
        }
    );
    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.name).toBe('Mehdi');
    expect(responseBody.job).toBe('Automation Engineer');
});



*/