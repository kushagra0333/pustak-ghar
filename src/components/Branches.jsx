const Branches = {
  "universities": [
    {
      "name": "GGSIPU",
      "courses": [
        {
          "course": "Btech",
          "branches": ["CSE", "IT", "ECE", "Mechanical", "Civil","EEE","Electrical"],
          "semesters": [
            {
              "Year": "1st",
              "subjects": ["Math-I", "Physics","Workshop","EVS","Math-II", "Electronics", "Computer Programming","Mechanical","Chemistry","Soft skill"]
            },
            {
              "Year": "2nd",
              "subjects": ["Data Structures", "Operating Systems", "DBMS"]
            }
          ]
        },
        {
          "course": "BCA",
          "branches": ["IT", "DS", "AI"],
          "semesters": [
            {
              "Year": "1st",
              "subjects": ["Basics of Programming", "Digital Logic", "Maths"]
            },
            {
              "Year": "2nd",
              "subjects": ["Data Structures", "Computer Networks", "Statistics"]
            }
          ]
        }
      ]
    },
    {
      "name": "AKTU",
      "courses": [
        {
          "course": "Btech",
          "branches": ["CSE", "IT", "ECE"],
          "semesters": [
            {
              "Year": "1st",
              "subjects": [Math-I", "Physics","Workshop","EVS","Math-II", "Electronics", "Computer Programming","Mechanical","Chemistry","Soft skill,C programming]
            },
            {
              "Year": "2nd",
              "subjects": ["Discrete Mathematics/DSTL","DE","COA","Python","TC","DS"]
            }
          ]
        },
        {
          "course": "MBA",
          "branches": ["Finance", "Marketing"],
          "semesters": [
            {
              "semester": "1st",
              "subjects": ["Economics", "Accounting", "Marketing Principles"]
            },
            {
              "semester": "2nd",
              "subjects": ["Financial Management", "HR Management", "Statistics"]
            }
          ]
        }
      ]
    },
    {
      "name": "DU",
      "courses": [
        {
          "course": "Bsc",
          "branches": ["Physics", "Chemistry", "Mathematics"],
          "semesters": [
            {
              "semester": "1st",
              "subjects": ["Mechanics", "Inorganic Chemistry", "Calculus"]
            },
            {
              "semester": "2nd",
              "subjects": ["Electrodynamics", "Organic Chemistry", "Algebra"]
            }
          ]
        },
        {
          "course": "Bcom",
          "branches": ["Accounting", "Business Studies"],
          "semesters": [
            {
              "semester": "1st",
              "subjects": ["Accounting Basics", "Microeconomics", "Statistics"]
            },
            {
              "semester": "2nd",
              "subjects": ["Financial Accounting", "Macroeconomics", "Management"]
            }
          ]
        }
      ]
    }
  ]
}

export default Branches;
