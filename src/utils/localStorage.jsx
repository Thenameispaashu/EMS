  const employees = [
    {
      "id": "E001",
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [      
        {
          "taskTitle": "Task 1",
          "taskDescription": "Complete onboarding documentation.",
          "taskDate": "2025-01-17",
          "category": "Documentation",
          "active": true,
          "new": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Task 2",
          "taskDescription": "Fix bugs in the product feature.",
          "taskDate": "2025-01-18",
          "category": "Development",
          "active": true,
          "new": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Task 3",
          "taskDescription": "Prepare for client meeting.",
          "taskDate": "2025-01-20",
          "category": "Meeting",
          "active": false,
          "new": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": "E002",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Task 1",
          "taskDescription": "Write unit tests for the new API.",
          "taskDate": "2025-01-17",
          "category": "Testing",
          "active": true,
          "new": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Task 2",
          "taskDescription": "Review pull requests from the team.",
          "taskDate": "2025-01-18",
          "category": "Review",
          "active": true,
          "new": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Task 3",
          "taskDescription": "Write documentation for the new API endpoints.",
          "taskDate": "2025-01-19",
          "category": "Documentation",
          "active": true,
          "new": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Task 4",
          "taskDescription": "Prepare release notes for the new update.",
          "taskDate": "2025-01-20",
          "category": "Release",
          "active": false,
          "new": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": "E003",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Task 1",
          "taskDescription": "Integrate payment gateway.",
          "taskDate": "2025-01-17",
          "category": "Integration",
          "active": true,
          "new": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Task 2",
          "taskDescription": "Debug user authentication issues.",
          "taskDate": "2025-01-18",
          "category": "Security",
          "active": true,
          "new": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Task 3",
          "taskDescription": "Test new feature with different user roles.",
          "taskDate": "2025-01-19",
          "category": "Testing",
          "active": true,
          "new": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Task 4",
          "taskDescription": "Fix mobile responsiveness issues.",
          "taskDate": "2025-01-20",
          "category": "Frontend",
          "active": false,
          "new": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": "E004",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Task 1",
          "taskDescription": "Implement user feedback form.",
          "taskDate": "2025-01-17",
          "category": "UI/UX",
          "active": true,
          "new": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Task 2",
          "taskDescription": "Set up database migration for new features.",
          "taskDate": "2025-01-18",
          "category": "Backend",
          "active": true,
          "new": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": "E005",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Task 1",
          "taskDescription": "Review and merge code from team members.",
          "taskDate": "2025-01-17",
          "category": "Code Review",
          "active": true,
          "new": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Task 2",
          "taskDescription": "Assist with performance optimization.",
          "taskDate": "2025-01-18",
          "category": "Optimization",
          "active": true,
          "new": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Task 3",
          "taskDescription": "Provide feedback on design proposals.",
          "taskDate": "2025-01-19",
          "category": "Design",
          "active": true,
          "new": false,
          "completed": false,
          "failed": false
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": "A001",
      "email": "admin@example.com",
      "password": "123"
    }
  ];

  export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }
  export const getLocalStorage = () => {
    
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    console.log(employees, admin)

    return {employees, admin}
  }