**Login & Signup Playwright Automation**
UI automation scripts for login and signup flows using Playwright and JavaScript. The project uses Page Object Model (POM) for better structure and maintainability.

Features:
Login with valid and invalid credentials
Signup with valid email
Anonymous signup for new user and existing user
Positive and negative test cases
Easy to extend for data-driven testing  

Login-Signup-Playwright-Automation/

├── tests/                # Test scripts (Login,Signup,Anonymous)
├── pages/                # Page Object Model (signup,Login,Anonymous and Baseclasses)
├── test-data/            
├── playwright.config.js  # Playwright configuration
├── package.json          
├── package-lock.json
└── .gitignore

Test data can be added later in test-data for data-driven testing
Follows Page Object Model (POM) to separate page elements/UI actions from test scripts
