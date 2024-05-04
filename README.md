<p align="center">
  <img width="450" height="120" align="center" src="https://raw.githubusercontent.com/Ralex91/arrow/main/.github/arrow.svg">
  <br>
  <img align="center" src="https://api.visitorbadge.io/api/visitors?path=https://github.com/Ralex91/arrow/edit/main/README.md&countColor=%2337d67a">
</p>

## 🧩 What is this project?

This project is a web application built using the Next.js framework and the Mongoose library for managing a MongoDB database. It is a simple CRUD application for managing places, including their type, name, address, city, zip code, country, and details.

> ⚠️ This project is an assignment that I had to complete during my training in my school.

## ⚙️ Prerequisites

- Before launching the application, you must have a **MongoDB** database configured.

- Create a `.env` file at the root of the project with the following configuration:

  ```
  DB_URL="mongodb://127.0.0.1:27017/arrow"
  ```

  Make sure your MongoDB database is accessible at the indicated address.

## 📦 Running the Application in Development Mode

### To run the application in development mode, follow these steps:

1.  #### Clone the GitHub repository of your project.
    ```bash
    git clone https://github.com/Ralex91/arrow.git
    cd ./arrow
    ```
2.  #### Install the dependencies using your preferred package manager

    ```bash
    npm install
    ```

3.  #### Start the development server:
    ```bash
    npm run dev
    ```
    Your application will be accessible at `http://localhost:3000`.

## 🎯 API Endpoints

### The application has the following API endpoints:

- #### Retrieves the list of all places.

  `GET /api/place`

- #### Creates a new place.

  `POST /api/place`

  Exemple JSON body :

  ```json
  {
    "type": "restaurant",
    "name": "Restaurant #1",
    "address": "123 Main St",
    "city": "Paris",
    "zipCode": "75000",
    "country": "France",
    "details": {
      "starCount": 3,
      "averagePrice": 2,
      "kitchenType": "french"
    }
  }
  ```

- #### Retrieves the information of a specific place.

  `GET /api/place/:id`

- #### Deletes a place.

  `DELETE /api/place/:id`

- #### Updates the information of a place.

  `PATCH /api/place/:id`

  Exemple JSON body :

  ```json
  {
    "type": "restaurant",
    "name": "New Restaurant Name",
    "address": "New address",
    "city": "New city",
    "zipCode": "75000",
    "country": "France",
    "details": {
      "starCount": 3,
      "averagePrice": 2,
      "kitchenType": "italian"
    }
  }
  ```

- #### Allows searching for places using filters.

  `POST /api/place/search`

  Exemple JSON body :

  ```json
  {
    "type": "museum",
    "country": "France",
    "details": {
      "artMovement": "cubism",
      "artType": "sculpture"
    }
  }
  ```

## 📚 Used Libraries

### Here are the libraries used in this application and the reasons for their choice:

  - **React**: JavaScript framework for building user interfaces.
  - **Next.js**: React framework for server-side rendering and generating static websites.
  - **Mongoose**: Object Document Mapping (ODM) library for interacting with a MongoDB database.
  - **Tailwind CSS**: Utility-first CSS library for rapid and flexible design.
  - **Formik**: Library for managing React forms.
  - **Axios**: Library for making HTTP requests.
  - **Headless UI**: Library of accessible and unstyled UI components.

  These libraries were chosen for their features, popularity, ease of use.
