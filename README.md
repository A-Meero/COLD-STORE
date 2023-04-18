# Coldstore App
The cold-store app open-source project on GitHub is a free software application that allows businesses to manage their cold storage facilities. It provides users with an intuitive interface for managing inventory, monitoring storage conditions, and generating reports. 

### Note:  
The project is **open-source**, which means that anyone can contribute to its development, and users are free to modify and customize the code to meet their specific needs.

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


## Communication Channel
In today's global economy, communication is an important aspect of any project. When it comes to open source projects, the success of a project can depend on how effectively the team communicates with members and users.

Communication channels are important because they allow teams to get feedback from users, who can help them make better decisions about product development and growth.

The most common communication channels that developers use are:

-Telegram for communication with authors

For Our Communcation channel we will be using telegram. 

## Version Control abd Bug Tracker Access

Version Control:

Step 1: Install Git: Install Git on local machine by following the installation instructions provided on the official Git website (https://git-scm.com/).

Step 2: Create a Git Repository: In project's root directory, open a terminal and run the following command to initialize a new Git repository:

git init
Step 3: Add and Commit Changes: Use the following commands to add files and commit changes to   Git repository:

sql
Copy code
git add .                # Add all changes
git commit -m "Initial commit"  # Commit changes with a commit message
Step 4: Create a Remote Repository: Sign up for a free account on GitHub (https://github.com/) and create a new repository for   project. Follow the instructions on GitHub to set up a remote repository.

Step 5: Link Local and Remote Repositories: Connect local repository to the remote repository on GitHub using the following command:


git remote add origin <REMOTE_REPOSITORY_URL>
Step 6: 
Push Changes: Use the following command to push   local changes to the remote repository on GitHub:

## Bug Tracking:

Step 1: Create an Issue: In GitHub repository, go to the "Issues" tab and click on "New issue" to create a new issue for a bug or task.

Step 2: Assign and Collaborate: Assign the issue to a team member responsible for fixing the bug or completing the task. Team members can collaborate by adding comments, attaching files, and discussing the issue on GitHub.

Step 3: Update and Resolve Issues: Update the status of the issue as it progresses, such as "in progress," "resolved," or "closed," depending on the situation. Collaborators can also add labels, milestones, and assignees to manage and track the progress of issues.

Step 4: Notify Team Members: GitHub provides notification features that allow team members to receive notifications about changes and updates to issues. Make sure team members are subscribed to relevant issues to stay updated.



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

## Codes of Conduct
To guide those who wish to participate in our open-source project "Cold store", we have added a code of conduct. It is possible to report unwanted behavior. Our group is dedicated to creating a warm and motivating environment for everyone, and we expect everyone to maintain the Code of Conduct. In addition, violators of our open-source code of conduct will be punished which could lead to a ban from the project.
.
.
.
### A guide to participating in the "Cold Store" project

#### Our pledge
-	With the open-source project "Cold Store", regardless of gender identification, we promise to keep community participation abuse-free for everyone..
-	Throughout our work and interactions, we pledge to contribute to a welcoming environment.
-	Our commitment is to accept responsibility, apologize to those affected by our mistakes, and learn from them.



#### Our standards
Among the behaviors that contribute to a positive community environment are:

##### -	Be friendly and patient.
Be Welcome: We strive to create a community that is inclusive of all backgrounds and identities. It includes individuals of all races, socioeconomic classes, educational levels, genders, gender identities, ages, political beliefs, religions, etc.

##### -	Respect different opinions and experiences.
Be respectful: We won't always agree, but disagreement isn't an excuse for misbehavior. There will be times when we feel frustrated, but we shouldn't let that frustration turn into a personal attack. In order for society to be productive, people must not feel uncomfortable or threatened.
Try to understand the reason for the difference: There are always social and technical disagreements. The key to resolving differences and contrasting viewpoints is to resolve them constructively. Keep in mind that we are all different. It does not mean that someone is wrong if you do not understand why they hold a particular viewpoint. Instead, focus on solving problems and learning from them.

##### -	Be kind to others.
Choose your words carefully: Kindness to others is important. Be respectful of other participants and do not insult them. Exclusionary behavior and harassment are not acceptable.


**Unacceptable behavior includes:**
-	The use of sexual language or images.
-	A personal attack or derogatory remarks.
-	Harassment in public or private.
-	If you post someone else's private information, such as an email address or physical address, without their permission, you will be breaking the code of conduct.

#### Enforcement responsibilities
Community leaders are accountable for clarifying and enforcing the rules of acceptable behavior and will take appropriate and fair action if any inappropriate behavior is observed.
Comments, commitments, code, wiki edits, issues, and other contributions that violate the Code of Conduct must be removed, edited, or rejected by community leaders.

#### Enforcement
It is possible to report abusive, harassing, or otherwise unacceptable behavior to community leaders who are responsible for enforcing the code. There will be a prompt and fair review and investigation of all complaints.
The community's leaders are obligated to respect reporters' privacy and security.

#### Enforcement Guidelines
In determining the consequences of any action, they consider to be in violation of this Code of Conduct, community leaders will follow these Community Impact Guidelines:

1.	Correction:  
Impact on the community: Behavior that is deemed inappropriate or unwelcome by the community, such as inappropriate language.  
Consequences: Warning from community leaders outlining the nature of the violation and explaining why the behavior was inappropriate. There may be a need for a public apology.
2.	Warning:  
Impact on the community: Violations resulting from a single incident or a series of incidents.  
Consequences: A warning about the consequences of continuing the behavior. Interactions with individuals are not allowed. The violation of these terms may result in a temporary ban.
3.	Temporary ban:  
Impact on the community: There is a serious violation of community norms, such as persistent inappropriate behavior.  
Consequences: Temporary restrictions on public interaction or communication with the community. There may be no communication with the individuals in question in public or privately. A ban might be imposed permanently for violations of these rules.
4.	Permanent ban:  
 Impact on the community: Demonstrates a pattern of transgressing social norms, such as persistently inappropriate behavior, or criticizing or ridiculing groups of people.  
Consequence: A permanent ban on all forms of communal interaction with the public.

#### Scope
An individual is required to adhere to this Code of Conduct when representing the community in public and in all community settings. In addition to using an official email address, posting via an official social media account, or serving as a designated representative at an event, you can also represent our community using an official email address.

## FAQ
#### Is the project completely open source? 
Yes, the project is completely open-source, and you can download the code of the software and use it or even join the project and contribute to it . 

#### What is the bar limit for someone to contribute in the project ?
Everyone can join the project and it is not restricted to only developers as even marketers can join and try to market the software in social media for example, so whatever the field you are into don’t be shy just enter the discussion page of the project and write to us about your skills and we will be happy to discuss with you how to contribute to the project in a way that is suitable with you.

#### What type of developer can contribute to the code? 
Any developer can contribute  in the following  field of code: 
The Typescript part, as most of the project is built using it  
HTML&CSS so if you want to contribute to the html page of code you are welcomed  
Front end JavaScript to contribute in making the project pages more interactive  
Note that any other developer can contribute to the code if he/she can show us a way to improve the project in a way we did not think of, so the developer should write in the discussion page about his/her idea or tool and the team will discuss their solution with them.

#### What are the programming languages used in the project ? 
Html ,CSS , Typescript, JavaScript

