# Cred Dash

My project aims to create an interactive dashboard displaying credit information using modern web technologies. Leveraging the power of Faker.js for generating realistic fake data and Recharts for dynamic data visualization, this dashboard provides a comprehensive overview of credit-related metrics.
### **Additional Features**
The project has been hosted in GitHub Pages, you can access it here [Dashboard](https://dashboard.vasanth.tech)
- - - -
### **Installation and Starting the Project**
##### **Prerequisites:**
* Node.js installed on your machine. You can download it from [Node.js website](https://nodejs.org/).
##### **Steps:**
* ##### **Clone the Repository:**
``` bash 
git clone https://github.com/vasanth-selvaraj/cred-dash.git
cd cred-dash 
```
* ##### **Install Dependencies:**
```bash
npm install
```
* ##### **Start the Development Server:**
```bash
npm start
```
* ##### **Accessing the Dashboard:**
```bash
 http://localhost:3000
 ```
### key Features:
* **Data Visualization:** Utilizing *Recharts*, we implement various graph types (line charts, bar graphs, pie charts, Area Charts.) to visually represent credit-related information such as Loan Distribution, Profit Graph, Raised Capitals, and more.
* **Dynamic Filters:** The dashboard includes intuitive filtering options, allowing users to dynamically manipulate and view specific data sets based on criteria like date ranges, account status, sorting, searching and more.
* **Local Storage:** Utilizes browser's LocalStorage to store and retrive Theme data and selected company data.
* **Realistic Data Generation:** Faker.js is employed to generate credible mock data, providing a realistic simulation of credit-related statistics, customer profiles, and transactional information.
* **Responsive Design:** The dashboard is designed with responsiveness in mind, ensuring seamless viewing across various devices and screen sizes, providing an optimal user experience.
## Technologies Used
* **React:** Utilized for building a dynamic and efficient user interface.
* **Recharts:** Employs React components for crafting interactive and visually appealing graphs and charts.
* **Faker.js:** Used for generating synthetic but realistic credit-related data.
* **HTML, Tailwind CSS, TypeScript:** Core technologies for structuring, styling, and implementing interactive elements on the website with Theming.
## UI Elements
#### Dashboard Page:
![DashBoard Page](https://drive.google.com/uc?export=download&id=1G3tKIwTPCIlpad4mFbZx5v_LBPrAIV2O)
- - - -
#### Filters:
* ***Search Filter:*** To search Company Names
* ***Sort:*** The Arrows are used to sort the Table in Ascending or Descending Order
* ***Date Filter:*** Date Range Filter to filter the data between selected Date by Company Registration date
* ***Status Filter:*** A Checkbox to filter the table based on the three values **Active** , **Pending**, and **Closed**.

![Filters Page](https://drive.google.com/uc?export=download&id=1hsjwUYSrCRLnJagBgqREBNjElOq_1b-x)
----
#### Graph Switcher:
***Switcher:*** You can switch between Bar and Pie chart using this button
![Graph Switcher](https://drive.google.com/uc?export=download&id=1ayWc4EQ87udwIUnvZB9g6TOF2QnB5ABQ)
----
#### Theme Switcher:
* User can use switch between Dark and Light Mode
![Theme Switcher](https://drive.google.com/uc?export=download&id=1zm3XVKF3LiTjr8BIgqG0RDySmIuY5X1s)
----
#### Company Details Page:
![](https://drive.google.com/uc?export=download&id=1rXMFKFxx06Oe1RMkQpJTEyMX-mHVc7kO)
---
#### Company Details View navigate:
* User can click on the view button to navigate to company details page. It will be visible when hovering over the row
![Details Nav](https://drive.google.com/uc?export=download&id=1zBFMlWX2OE37zJ-fTWyvIkWoaMuFfXFp)
