// Basic function dengan tipes
function add(a: number, b: number): number {
    return a + b;
  }
  
  // Arrow function dengan tipe
  const multiply = (x: number, y: number): number => {
    return x * y;
  };
  
  // Function dengan optional parameter
  function greet(name: string, greeting?: string): string {
    if (greeting) {
      return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}`;
  }
  
  // Function dengan default parameter
  function createEmail(to: string, subject: string = "No Subject"): string {
    return `Email to : ${to}, Subject: ${subject};`;
  }
  
  function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  // Function overloads
  function processInput(input: number): number;
  function processInput(input: string): string;
  function processInput(input: number | string): number | string {
    if (typeof input === "number") {
      return input * 2;
    }
    return input.toUpperCase();
  }
  
  console.log(greet("John"));