import axios from "axios";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
})

const PASSWORD = process.env.EMPLOYEE_PASSWORD;

const firstNames = [
    "Armin", "Eren", "Levi", "Mikasa", "Jean", "Connie", "Sasha",
    "Reiner", "Annie", "Erwin", "Hange", "Zeke", "Historia",
    "Ymir", "Marco", "Falco", "Gabi",

    "James", "Michael", "Robert", "John", "David", "William",
    "Richard", "Joseph", "Thomas", "Charles", "Daniel", "Matthew",
    "Anthony", "Mark", "Donald", "Steven", "Paul", "Andrew",

    "Liam", "Noah", "Oliver", "Elijah", "Lucas", "Mason",
    "Logan", "Ethan", "Jacob", "Henry", "Alexander",

    "Aarav", "Vivaan", "Aditya", "Krishna", "Arjun", "Sai",
    "Rohan", "Aryan", "Kabir", "Ishaan", "Rahul",

    "Yuki", "Haruto", "Ren", "Takumi", "Sora", "Minho",
    "Jisoo", "Hyun", "Jiho", "Chen", "Wei",

    "Carlos", "Mateo", "Diego", "Luis", "Antonio", "Miguel",

    "Emma", "Olivia", "Sophia", "Isabella", "Mia", "Charlotte",
    "Amelia", "Harper", "Evelyn", "Abigail", "Emily",

    "Ava", "Ella", "Scarlett", "Grace", "Chloe", "Luna",
    "Priya", "Ananya", "Aisha", "Saanvi", "Meera", "Emmelia", "Rem",

    "Yuna", "Hina", "Sakura", "Jiyoon", "Nina", "Elena"
];

const middleNames = [
    "James", "Alexander", "Ray", "Marie", "Lee", "Anne",
    "John", "Michael", "Grace", "Rose", "Taylor", "Scott",
    "William", "Joseph", "Maria", "Thomas", "Daniel", "Jean",

    "Kumar", "Singh", "Raj", "Devi", "Patel", "Wei", "Min", "Haruto", "Ken", "Ji",

    "Gabriel", "Nathan", "Samuel", "Benjamin", "Elias",
    "Sophia", "Olivia", "Yuki"
];

const lastNames = [
    "Smith", "Johnson", "Brown", "Williams", "Jones",
    "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
    "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson",

    "Taylor", "Thomas", "Moore", "Martin", "Jackson",
    "White", "Harris", "Clark", "Lewis", "Walker",

    "Patel", "Sharma", "Verma", "Gupta", "Yadav",
    "Singh", "Kumar", "Reddy", "Nair", "Joshi",

    "Kim", "Lee", "Park", "Tanaka", "Suzuki",
    "Yamamoto", "Nakamura", "Sato", "Chen", "Wang",

    "Dubois", "Moreau", "Leroy", "Bernard", "Fischer",
    "Schmidt", "Weber", "Muller", "Silva", "Costa"
];

const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Miami",
    "San Francisco",
    "Seattle",
    "Boston",
    "Dallas",
    "Austin",

    "London",
    "Manchester",
    "Birmingham",
    "Liverpool",
    "Leeds",

    "Toronto",
    "Vancouver",
    "Montreal",
    "Ottawa",

    "Sydney",
    "Melbourne",
    "Brisbane",
    "Perth",

    "Berlin",
    "Munich",
    "Hamburg",
    "Frankfurt",

    "Paris",
    "Lyon",
    "Marseille",
    "Toulouse",

    "Tokyo",
    "Osaka",
    "Kyoto",
    "Yokohama",

    "Seoul",
    "Busan",
    "Incheon",

    "Beijing",
    "Shanghai",
    "Shenzhen",
    "Guangzhou",

    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Pune",
    "Chennai",
    "Kolkata",
    "Ahmedabad",

    "Dubai",
    "Abu Dhabi",
    "Doha",

    "Singapore",
    "Bangkok",
    "Jakarta",

    "Cape Town",
    "Johannesburg",

    "Rio de Janeiro",
    "Sao Paulo",
    "Buenos Aires"
];

const countries = [
    "USA",
    "Canada",
    "UK",
    "Germany",
    "France",
    "Australia",
    "Japan",
    "South Korea",
    "China",
    "India",
    "Brazil",
    "Argentina",
    "Mexico",
    "Spain",
    "Italy",
    "Netherlands",
    "Sweden",
    "Norway",
    "Switzerland",
    "Russia",
    "Singapore",
    "Thailand",
    "Indonesia",
    "UAE",
    "Qatar",
    "South Africa",
    "Turkey",
    "Saudi Arabia",
    "Egypt",
];

const educations = [
    "B.Tech",
    "M.Tech",
    "BCA",
    "MCA",
    "MBA",
    "B.Sc Computer Science",
    "M.Sc Computer Science",
    "B.E",
    "M.E",
    "BBA",
    "B.Com",
    "M.Com",
    "B.Des",
    "M.Des",
    "PhD Computer Science",
    "Diploma in IT",
    "Bachelor of Information Technology",
    "Master of Information Technology",
    "Bachelor of Software Engineering",
    "Master of Software Engineering",
    "Bachelor of Business Administration",
    "Bachelor of Arts",
    "Bachelor of Science",
    "Master of Science",
    "Cyber Security Certification",
    "Cloud Computing Certification",
    "AI & ML Specialization",
    "Data Science Certification"
];

const jobTitles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "UI/UX Designer",
    "Product Designer",
    "DevOps Engineer",
    "Cloud Engineer",
    "Software Engineer",
    "Senior Software Engineer",
    "Lead Developer",
    "Technical Architect",
    "Mobile App Developer",
    "Android Developer",
    "iOS Developer",
    "Flutter Developer",
    "React Native Developer",

    "Data Analyst",
    "Data Scientist",
    "Machine Learning Engineer",
    "AI Engineer",

    "Cyber Security Analyst",
    "Security Engineer",

    "Database Administrator",
    "System Administrator",
    "Network Engineer",

    "QA Engineer",
    "Automation Tester",
    "Manual Tester",

    "Project Manager",
    "Product Manager",
    "Scrum Master",

    "Graphic Designer",
    "Motion Designer",

    "Blockchain Developer",
    "Web3 Developer",

    "Technical Support Engineer",
    "IT Consultant",
    "Business Analyst"
];

const workModes = [
    "Remote",
    "Hybrid",
    "On-site"
];

const empTypes = [
    "Full-time",
    "Part-time",
    "Contract"
];

const genders = [
    "Male",
    "Female"
];

function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

async function generateEmployees() {
    for (let i = 1; i <= 216; i++) {
        const firstName = randomItem(firstNames);
        const middleName = randomItem(middleNames);
        const lastName = randomItem(lastNames);

        const employee = {
            empID: `EMP-${1000 + i}`,
            firstName,
            middleName,
            lastName,
            email: `${firstName.toLowerCase()}${i}@gmail.com`,
            gender: randomItem(genders),
            contactNo: `+91${Math.floor(
                1000000000 + Math.random() * 9000000000
            )}`,
            avatar: "",
            dateOfBirth: `199${Math.floor(Math.random() * 10)}-0${Math.floor(Math.random() * 9) + 1
                }-${Math.floor(Math.random() * 28) + 1}`,
            country: randomItem(countries),
            city: randomItem(cities),
            postalCode: `${Math.floor(100000 + Math.random() * 900000)}`,
            education: randomItem(educations),
            address: `${Math.floor(Math.random() * 999)} Business Street`,
            jobTitle: randomItem(jobTitles),
            workMode: randomItem(workModes),
            empType: randomItem(empTypes),
            salary: Math.floor(40000 + Math.random() * 120000),
            salaryCurrency: "USD",
            password: PASSWORD,
        };

        try {
            const response = await axios.post(
                "http://localhost:8000/api/v1/employees/onboard-employee",
                employee
            );

            console.log(
                `✅ Employee ${i} created`,
                response.data.data.empID
            );
        } catch (err) {
            console.log(
                `❌ Failed Employee ${i}`,
                err.response?.data || err.message
            );
        }
    }
}

generateEmployees();