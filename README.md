# Guftaar

<p align='center'>
    <img width="267" alt="guftaar_landing_page" src="https://github.com/saadsheralam/Guftaar/assets/88395107/8d696d06-003c-4a49-8576-b0b63e65a694">
</p>


Guftaar is a first-of-its-kind English language m-Health web application catering to PWS (people
who stutter), connecting them with speech therapists and also providing virtual multi-feature treatment support. 

Support for PWS, especially for developing countries, is limited. We aim to tackle
this problem in the context of Pakistan, where lack of awareness, stigmatization and
discrimination, and lack of speech therapy centers is prevalent. Additionally, the limited available support is quoted to be expensive and laborious. To make matters worse, Pakistan has a significant portion of population that suffer from speech impediments. For more details for project scope and references, please refer to the [project proposal](https://github.com/saadsheralam/Guftaar/blob/main/documentation/proposal.pdf).

This project was a collective effort of a team of 6 members, and was completed in partial fulfilment of the requirements for CS 360: Software Engineering project at LUMS. Our project received the best evaluation. 

### Features/Use Cases 
- Client Use Cases: 
    - [x] Registration and Authentication 
    - [x] Daily Task and Activities (Breathing Exercises, Linklater Voice Progression, Syllable Counting)
    - [x] Daily Task Streak
    - [x] Quick Practice 
    - [x] Client Progress Charts
    - [x] Schedule a Session 
    - [x] Meeting Reminder 
    - [x] Instructor Evaluation 
    - [ ] Buy Coures (courses to be added later)
    - [ ] Blog
    - [x] Strength Statements 
    - [x] Daily Log
- Speech Instructor Use Cases: 
    - [x] Registration and Authentication
    - [x] Meeting Availability
    - [x] View Client Progress 
    - [x] Add Client Notes 
- Admin Use Cases: 
    - [x] Add Employee (Coach, Admin)
    - [x] Review Coach Feedback 
    - [ ] Manage Blog Page 

### Documentation 
The repository contains in-depth documentation for the project: 
1. [Project Proposal](https://github.com/saadsheralam/Guftaar/blob/main/documentation/proposal.pdf): Covers project background, purpose, scope, motivation, assumptions, and constraints. 
2. [Software Requirement Specifications (SRS)](https://github.com/saadsheralam/Guftaar/blob/main/documentation/SRS.pdf): Details complete functional and non-functional requirements for the project. It also covers interface requirements and use-case views. The following diagrams in the SRS might be worth refering to: 
    - Sub-systems Interaction Diagram 
    - User Ineraction Diagram 
    - Data Flow Diagram 
    - Use Case Diagram 
    
3. [Software Design Specification (SDS)](https://github.com/saadsheralam/Guftaar/blob/main/documentation/SDS.pdf): Outlines the change log (any changes to requirements and use-cases from SRS), details the system architecture (data structures and DB model), and UI design (with Figma screens). The following diagrams in the SDS might be worth refering to:
    - System Decomposition 
    - Activity Diagram 
    - Sequence Diagrams 
    - Flow Diagram
    - Database Schema 
    - Information Architecture Diagrams
    - UI Screens 
    
4. [Testing Documentation](https://github.com/saadsheralam/Guftaar/blob/main/documentation/testing.pdf): Details test environments, test cases, manual testing, and automated testing.

### Building 
To build and run the project locally, you can follow the following steps: 
1. Clone the repository: 
```
git clone https://github.com/saadsheralam/Guftaar.git
```
2. If you do not have npm installed, install npm by following [these](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) instructions. 
3. Navigate to the cloned directory. 
4. Run the following command to install all dependencies: 
```
npm i
```
5. Create an .env file in the server directory and set it up with the `PORT` and `URI` (MongoDB connection string). An example .env file might look like this: 

```
PORT=3000
URI=mongodb+srv://<user>:<password>@<cluster0.example.mongodb.net>/?retryWrites=true&w=majority
```
6. In the root directory of the project, run the following command to start the server and connect to MongoDB: 
```
npm run start 
```
7. Navigate to the client directory, install node modules, and start the React app: 
```
cd client 
npm i --force 
npm start 
```
