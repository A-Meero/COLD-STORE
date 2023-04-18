# Coldstore App
The cold-store app open-source project on GitHub is a free software application that allows businesses to manage their cold storage facilities. It provides users with an intuitive interface for managing inventory, monitoring storage conditions, and generating reports. The project is open-source, which means that anyone can contribute to its development, and users are free to modify and customize the code to meet their specific needs.

## Functional requirements:

- Inventory management functionality to track product names, quantities, and expiration dates
- Integration with temperature sensors to provide real-time data on storage conditions
- Alerting system for when temperature levels are outside of acceptable ranges
- Batch management features to allow users to group and track specific batches of products
- Reporting functionality to generate detailed reports on inventory levels, sales, and storage conditions
- Integration with external systems, such as accounting software or e-commerce platforms

## Non-functional requirements:

- Security features to protect sensitive data
- Scalability to handle large amounts of inventory data and real-time monitoring data
- High availability to ensure the app is always accessible to users
- User-friendly interface to make it easy for users to manage their inventory and monitor storage conditions
- Compatibility with a wide range of devices and operating systems

## User Stories
1. As a supermarket manager, I want to be able to manage my inventory, so that I can keep track of what products are in my store.
2. As a supermarket manager, I want to receive alerts when temperature levels are outside of acceptable ranges, so that I can take corrective action to preserve the quality of my products.
3. As a supermarket manager, I want to be able to group and track specific batches of products, so that I can easily manage inventory and monitor storage conditions for those batches.
4. As a supermarket manager, I want to be able to generate reports on inventory levels, sales, and storage conditions, so that I can make informed decisions about my store.
5. As a store employee, I want to be able to easily access and update inventory information, so that I can work efficiently and accurately.
6. As a store employee, I want to be able to view real-time temperature data, so that I can ensure that products are being stored properly.
7. As an accountant working for a business that uses the cold-store app, I want to be able to integrate the app with our accounting software, so that I can easily manage inventory and financial data in one place.
8. As an e-commerce business owner, I want to be able to integrate the cold-store app with my e-commerce platform, so that I can manage inventory and fulfill orders more efficiently.

## Development status:
The cold-store app project on GitHub is currently in a demo phase, where a limited version of the application is available for testing and feedback. The app includes basic inventory management, real-time temperature monitoring, and batch management features, with a user-friendly interface and compatibility with various devices and systems. The development team is seeking feedback to improve the app's functionality and usability, which will be used to refine the app's features and prioritize development efforts. The demo phase is an important step in the development process, allowing the team to gather valuable insights before releasing the app to the public, and the project is progressing towards its goal of providing a robust and flexible tool for managing cold storage and display units in supermarkets.


## Downloads:
1. Node.js: This is a JavaScript runtime environment that is required to run the Ionic development environment. You can download Node.js from the official website: https://nodejs.org/en/download/

2. Ionic CLI: The Ionic command-line interface is used to create, build, and run Ionic projects. You can install it by running the following command in your terminal or command prompt: npm install -g ionic

3. Firebase CLI: The Firebase command-line interface is used to interact with Firebase services from the command line. You can install it by running the following command in your terminal or command prompt: npm install -g firebase-tools

4. Git: Git is a version control system that allows you to track changes to your code and collaborate with others. You can download Git from the official website: https://git-scm.com/downloads

5. Code editor: A code editor is required to write and edit code for your Ionic project. You can use any code editor of your choice, such as Visual Studio Code, Sublime Text.

7. Firebase account: You will need a Firebase account to use Firebase services in your Ionic project. You can sign up for a free account on the Firebase website: https://firebase.google.com/


## Functions and Screenshots
The app allows three types of users, each with varying levels of authority and functions:

### Owners
The store owner is allowed complete control over the data in the app, they can add and edit items, suppliers and staff members to the database. Schedules can be edited and created, and requests for changing trading schedules can also be responded to. Owners can also place new orders for inventory and respond to existing orders that were shipped by the suppliers, as well as viewing existing inventory and sales reports.

- Owner Homepage

![image](https://user-images.githubusercontent.com/59618797/215782339-7876ca76-4494-4f1a-b7af-3f51fe79b2ee.png)

- View and Edit Staff Schedules

![image](https://user-images.githubusercontent.com/59618797/215782372-1fd68ea4-70ee-4f99-ac24-5cff8091d502.png)

- Create and Respond to Item Orders

![image](https://user-images.githubusercontent.com/59618797/215782456-418952d0-32ef-4c25-9554-f7f1f8d3fa2d.png)


### Staff
The store's staff can view their schedules as well as request and respond to incoming shift trade requests. They can also report a new sale as well as view sales reports.

- Staff Homepage

![image](https://user-images.githubusercontent.com/59618797/215784821-972f2663-9f30-49c2-8e5c-b8882d9b8fe2.png)

- Making a new Trade Shift Request

![image](https://user-images.githubusercontent.com/59618797/215784870-8df78123-0edd-4885-86a0-dc231b632182.png)

- Reporting a new sale

![image](https://user-images.githubusercontent.com/59618797/215785082-65d82195-c398-4224-aa53-967e2b4da7d1.png)

### Suppliers
The store's suppliers are limited to viewing order history and responding to incoming order requests from the owners.

- Supplier Homepage

![image](https://user-images.githubusercontent.com/59618797/215785775-c67a3844-a696-4deb-93a5-524a16770462.png)

- Order History

![image](https://user-images.githubusercontent.com/59618797/215785836-2f204b94-5a35-4c64-bad3-024027cd7e69.png)

