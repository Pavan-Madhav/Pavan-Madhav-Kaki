/**
 * Portfolio Configuration for Pavan Madhav Kaki
 * 
 * Edit this file to update personal links, project repository URLs,
 * email address, and new milestones as your B.Tech journey advances.
 */

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string | null; // Set to actual URL (e.g., "https://github.com/Pavan-Madhav/voter-eligibility") or null if pending
  liveDemoUrl?: string | null;
  features: string[];
  pythonSourceCode: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  category: 'Education' | 'Hackathons' | 'Ideathons' | 'Projects' | 'AI Exploration';
  roleOrFocus: string;
  period: string;
  description: string;
  keyTakeaways: string[];
}

export interface LearningGoalItem {
  id: string;
  title: string;
  area: string;
  description: string;
  status: 'In Progress' | 'Upcoming Target' | 'Active Exploration';
}

export const PORTFOLIO_CONFIG = {
  personal: {
    name: 'Pavan Madhav Kaki',
    shortName: 'Pavan Madhav',
    monogram: 'PMK',
    role: 'B.Tech Student | Aspiring AI Engineer',
    education: 'B.Tech, First Semester',
    currentLevel: 'Beginner in Python, Web Development, and Generative AI',
    tagline: 'Learning, Building, and Exploring AI.',
    motto: 'Currently learning. Constantly building. Always curious.',
    heroDescription:
      "I'm a first-semester engineering student exploring Python, web development, and Generative AI. I enjoy turning ideas into practical projects, learning new technologies, and collaborating with others through hackathons and ideathons.",
    aboutIntro:
      "I am currently in the first semester of my B.Tech degree, focusing on establishing strong computer science and programming foundations. Driven by a deep curiosity for artificial intelligence and software design, I actively spend my time writing code, building beginner-level applications, and exploring the frontiers of Generative AI.",
    interests: [
      'Artificial Intelligence',
      'Generative AI',
      'Python Programming',
      'Web Development',
      'Problem Solving',
      'Hackathons and Ideathons',
    ],
    social: {
      github: 'https://github.com/Pavan-Madhav',
      // Set to your actual LinkedIn profile URL when ready, e.g. "https://linkedin.com/in/pavan-madhav"
      linkedin: null as string | null,
      // Set to your actual contact email when ready, e.g. "pavan.madhav@example.com"
      email: null as string | null,
    },
  },

  skills: {
    programming: [
      {
        name: 'Python',
        level: 'Beginner',
        status: 'Active Focus',
        notes: 'Variables, loops, conditionals, functions, basic data structures, and CLI tools',
      },
    ],
    webDevelopment: [
      {
        name: 'HTML & CSS',
        level: 'Foundational',
        status: 'Building Basics',
        notes: 'Semantic layouts, standard styling, and responsive webpage fundamentals',
      },
    ],
    artificialIntelligence: [
      {
        name: 'Generative AI',
        level: 'Beginner',
        status: 'Active Exploration',
        notes: 'Understanding foundation models, multimodal prompting, and generative paradigms',
      },
      {
        name: 'AI Tools & Prompt Engineering',
        level: 'Learning',
        status: 'Hands-on Practice',
        notes: 'Prompt formulation, iterative refinement, context window awareness, and developer tools',
      },
    ],
    developmentInterests: [
      {
        title: 'Problem Solving',
        description: 'Deconstructing real-world logic into clean, testable code sequences and algorithms.',
      },
      {
        title: 'Project Building',
        description: 'Gaining practical experience by taking small ideas from concept to working command-line and web projects.',
      },
      {
        title: 'Exploring New Technologies',
        description: 'Staying curious about emerging AI systems, modern developer tooling, and modern frameworks.',
      },
    ],
  },

  projects: [
    {
      id: 'voter-eligibility',
      title: 'Voter Eligibility Calculator',
      category: 'Logic & Conditional Programming',
      description:
        'A beginner-friendly application that checks voter eligibility based on age-related input and displays the result. Built to practice conditional statements, user input, and basic programming logic.',
      technologies: ['Python', 'Conditional Logic', 'User Input', 'Edge Case Handling'],
      // Update with repo link once pushed, e.g., "https://github.com/Pavan-Madhav/voter-eligibility-calculator"
      githubUrl: null,
      liveDemoUrl: null,
      features: [
        'Validates user age inputs against the legal voting threshold (18+)',
        'Comprehensive error detection for invalid characters and non-numeric input',
        'Calculates the exact years remaining until voting eligibility for underage users',
        'Clean conditional branching using if-elif-else statements',
      ],
      pythonSourceCode: `# Voter Eligibility Calculator
# Author: Pavan Madhav Kaki
# Language: Python 3

def check_voter_eligibility():
    print("=" * 45)
    print("       VOTER ELIGIBILITY CHECKER")
    print("=" * 45)
    
    try:
        user_input = input("Enter your age in years: ").strip()
        age = int(user_input)
        
        if age < 0:
            print("Invalid input: Age cannot be negative.")
        elif age == 0:
            print("Invalid input: Please enter a valid living age.")
        elif age >= 18:
            print(f"\\nResult: You are {age} years old.")
            print("Status: ELIGIBLE TO VOTE! Make your voice heard.")
        else:
            years_left = 18 - age
            print(f"\\nResult: You are {age} years old.")
            print(f"Status: NOT YET ELIGIBLE. You will be eligible in {years_left} year(s).")
            
    except ValueError:
        print("Error: Please enter a valid integer number for age.")

if __name__ == "__main__":
    check_voter_eligibility()
`,
    },
    {
      id: 'atm-management',
      title: 'ATM Management System',
      category: 'Menu-Driven Systems',
      description:
        'A basic ATM management application designed to practice transaction workflows, menu-driven programming, input handling, and fundamental programming concepts.',
      technologies: ['Python', 'Menu Workflows', 'Input Handling', 'State Management'],
      // Update with repo link once pushed, e.g., "https://github.com/Pavan-Madhav/atm-management-system"
      githubUrl: null,
      liveDemoUrl: null,
      features: [
        'Interactive menu-driven interface with continuous while-loop execution',
        'Real-time account balance verification and update system',
        'Secure withdrawal validation ensuring account balance cannot be overdrawn',
        'Transaction logging tracking deposits and withdrawals during the session',
      ],
      pythonSourceCode: `# ATM Management System
# Author: Pavan Madhav Kaki
# Language: Python 3

def atm_system():
    balance = 1000.0  # Initial account balance
    transaction_history = ["Account opened with $1000.00"]
    
    while True:
        print("\\n" + "=" * 40)
        print("         AUTOMATED TELLER MACHINE")
        print("=" * 40)
        print("1. Check Account Balance")
        print("2. Deposit Funds")
        print("3. Withdraw Cash")
        print("4. View Session Statement")
        print("5. Exit")
        print("=" * 40)
        
        choice = input("Select an option (1-5): ").strip()
        
        if choice == "1":
            print(f"\\nYour Current Balance is: $" + f"{balance:.2f}")
            
        elif choice == "2":
            try:
                amount = float(input("Enter amount to deposit: $"))
                if amount <= 0:
                    print("Deposit amount must be positive.")
                else:
                    balance += amount
                    transaction_history.append(f"Deposited: +$" + f"{amount:.2f}")
                    print(f"Successfully deposited $" + f"{amount:.2f}. New Balance: $" + f"{balance:.2f}")
            except ValueError:
                print("Error: Invalid monetary input.")
                
        elif choice == "3":
            try:
                amount = float(input("Enter amount to withdraw: $"))
                if amount <= 0:
                    print("Withdrawal amount must be positive.")
                elif amount > balance:
                    print("Insufficient funds! Cannot complete withdrawal.")
                else:
                    balance -= amount
                    transaction_history.append(f"Withdrew: -$" + f"{amount:.2f}")
                    print(f"Successfully withdrew $" + f"{amount:.2f}. Remaining Balance: $" + f"{balance:.2f}")
            except ValueError:
                print("Error: Invalid monetary input.")
                
        elif choice == "4":
            print("\\n--- Session Transactions ---")
            for entry in transaction_history:
                print(f"- {entry}")
            print(f"Current Balance: $" + f"{balance:.2f}")
            
        elif choice == "5":
            print("\\nThank you for using the ATM system. Have a great day!")
            break
            
        else:
            print("Invalid option selected. Please choose between 1 and 5.")

if __name__ == "__main__":
    atm_system()
`,
    },
    {
      id: 'grade-calculator',
      title: 'Student Grade Calculator',
      category: 'Arithmetic & Evaluation Logic',
      description:
        'A simple application that processes student marks and calculates grades according to defined conditions. Created to strengthen logical thinking, arithmetic operations, and conditional programming.',
      technologies: ['Python', 'Arithmetic Operations', 'Grade Logic', 'List Aggregations'],
      // Update with repo link once pushed, e.g., "https://github.com/Pavan-Madhav/student-grade-calculator"
      githubUrl: null,
      liveDemoUrl: null,
      features: [
        'Calculates aggregated total score, percentage, and letter grade',
        'Standard grading criteria (A+, A, B, C, and Needs Improvement)',
        'Input range validation checking for values between 0 and 100 per subject',
        'Average score and performance commentary output',
      ],
      pythonSourceCode: `# Student Grade Calculator
# Author: Pavan Madhav Kaki
# Language: Python 3

def calculate_grade(percentage):
    if percentage >= 90:
        return "A+ (Outstanding)"
    elif percentage >= 80:
        return "A (Excellent)"
    elif percentage >= 70:
        return "B (Good)"
    elif percentage >= 60:
        return "C (Satisfactory)"
    elif percentage >= 50:
        return "D (Pass)"
    else:
        return "F (Needs Improvement)"

def grade_calculator():
    print("=" * 45)
    print("        STUDENT GRADE CALCULATOR")
    print("=" * 45)
    
    subjects = ["Mathematics", "Programming", "Physics", "English"]
    marks = {}
    
    for subject in subjects:
        while True:
            try:
                score = float(input(f"Enter marks obtained in {subject} (0-100): "))
                if 0 <= score <= 100:
                    marks[subject] = score
                    break
                else:
                    print("Score must be between 0 and 100.")
            except ValueError:
                print("Invalid input. Please enter a valid number.")
                
    total_marks = sum(marks.values())
    max_marks = len(subjects) * 100
    percentage = (total_marks / max_marks) * 100
    grade = calculate_grade(percentage)
    
    print("\\n" + "-" * 35)
    print("          RESULT SUMMARY")
    print("-" * 35)
    for sub, sc in marks.items():
        print(f"{sub:15}: {sc:.1f} / 100")
    print("-" * 35)
    print(f"Total Marks   : {total_marks:.1f} / {max_marks}")
    print(f"Percentage    : {percentage:.2f}%")
    print(f"Final Grade   : {grade}")
    print("-" * 35)

if __name__ == "__main__":
    grade_calculator()
`,
    },
  ] as ProjectItem[],

  activities: [
    {
      id: 'btech-education',
      title: 'B.Tech Student — First Semester',
      category: 'Education',
      roleOrFocus: 'Foundations of Computer Engineering',
      period: 'Semester 1 • Current',
      description:
        'Focusing on foundational engineering mathematics, fundamental algorithmic problem solving, structured programming in Python, and computer architecture principles.',
      keyTakeaways: [
        'Building disciplined study and code practice habits',
        'Strengthening logic through regular programming assignments',
        'Connecting theoretical principles to executable software solutions',
      ],
    },
    {
      id: 'hackathons',
      title: 'Hackathons',
      category: 'Hackathons',
      roleOrFocus: 'Collaborative Problem-Solving & Rapid Prototyping',
      period: 'Active Interest & Participation',
      description:
        'Enthusiastic about participating in collegiate hackathons. Focusing on teamwork, rapid project conceptualization, and building working prototypes within time constraints.',
      keyTakeaways: [
        'Collaborative development using Git and team communication',
        'Turning problem statements into actionable technical scope',
        'Learning new tools and libraries under real-time conditions',
      ],
    },
    {
      id: 'ideathons',
      title: 'Ideathons',
      category: 'Ideathons',
      roleOrFocus: 'Innovation, Brainstorming & Practical Feasibility',
      period: 'Active Interest & Participation',
      description:
        'Participating in ideation challenges to formulate creative, technology-driven solutions for real-world problems. Focusing on practicality, user value, and technical implementation roadmaps.',
      keyTakeaways: [
        'Structured problem formulation and user-centric thinking',
        'Assessing feasibility of software and AI implementations',
        'Practicing clear, confident technical presentation and pitching',
      ],
    },
    {
      id: 'independent-projects',
      title: 'Independent Projects',
      category: 'Projects',
      roleOrFocus: 'Hands-on Practice & Fundamental Mastery',
      period: 'Self-Directed • Ongoing',
      description:
        'Developing practical beginner projects (calculators, system simulators, basic utilities) to practice conditional statements, loops, exception handling, and modular structure.',
      keyTakeaways: [
        'Translating mathematical rules into structured Python code',
        'Writing clean, readable code with descriptive naming and comments',
        'Testing boundary conditions and practicing error prevention',
      ],
    },
    {
      id: 'genai-exploration',
      title: 'Generative AI Exploration',
      category: 'AI Exploration',
      roleOrFocus: 'Foundation Models & Prompt Engineering',
      period: 'Active Curiosity & Practice',
      description:
        'Exploring the fundamentals of modern Generative AI, learning effective prompt engineering techniques, and studying how large language models can be applied to solve engineering problems.',
      keyTakeaways: [
        'Understanding generative model capabilities and constraints',
        'Experimenting with structured prompting and zero/few-shot techniques',
        'Following modern developments in AI research and developer tools',
      ],
    },
  ] as ActivityItem[],

  learningGoals: [
    {
      id: 'python-mastery',
      title: 'Strengthen Python Fundamentals & Data Structures',
      area: 'Core Programming',
      description:
        'Mastering object-oriented programming (OOP), file I/O, error handling, lists, dictionaries, sets, and basic algorithms to build a rock-solid coding foundation.',
      status: 'In Progress',
    },
    {
      id: 'web-dev',
      title: 'Deepen Web Development Skills',
      area: 'Full-Stack Foundations',
      description:
        'Advancing from HTML/CSS into responsive frontend architecture, modern JavaScript/TypeScript, and interactive browser interfaces.',
      status: 'In Progress',
    },
    {
      id: 'ai-ml-math',
      title: 'Understand AI & Machine Learning Foundations',
      area: 'Artificial Intelligence',
      description:
        'Studying core mathematical principles including linear algebra, probability, statistics, and foundational machine learning algorithms.',
      status: 'Upcoming Target',
    },
    {
      id: 'genai-llms',
      title: 'Explore Generative AI & Large Language Models',
      area: 'Applied AI',
      description:
        'Learning how LLMs function under the hood, experimenting with retrieval-augmented generation (RAG), and building simple AI-assisted workflows.',
      status: 'Active Exploration',
    },
    {
      id: 'real-world-projects',
      title: 'Build Meaningful, Real-World Projects',
      area: 'Software Engineering',
      description:
        'Transitioning from CLI exercises to complete, deployed tools that solve actual problems for students and campus communities.',
      status: 'Upcoming Target',
    },
    {
      id: 'hackathon-teamwork',
      title: 'Compete in Team Hackathons & Tech Challenges',
      area: 'Collaboration & Leadership',
      description:
        'Sharpening teamwork, code coordination, pitch delivery, and high-pressure problem solving by participating in competitive collegiate hackathons.',
      status: 'Active Exploration',
    },
  ] as LearningGoalItem[],
};
