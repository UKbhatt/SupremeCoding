const questions = [
  {
    id: "1",
    name: "Add Two Numbers",
    slug: "add-two-numbers",
    description: "Write a program to add two numbers.",
    difficulty: "Easy",
    sampleInput: ["2 3", "5 6"],
    status: "Unsolved",
    sampleOutput: ["5", "11"],
    hiddenTests: [
      { input: "100 200", expectedOutput: "300" },
      { input: "-1 1", expectedOutput: "0" },
    ],
    constraints: ["1 <= a, b <= 10^9"],
    languageStarterCode: {
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() {\n  int a, b;\n  cin >> a >> b;\n  cout << a + b;\n  return 0;\n}`,
      python: `a, b = map(int, input().split())\nprint(a + b)`,
      java: `import java.util.*;\npublic class Main {\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    int a = sc.nextInt(), b = sc.nextInt();\n    System.out.println(a + b);\n  }\n}`
    },
  },
  {
    id: "2",
    name: "Multiply Two Numbers",
    slug: "multiply-two-numbers",
    description: "Write a program to multiply two numbers.",
    difficulty: "Medium",
    sampleInput: ["4 5"],
    status: "Unsolved",
    sampleOutput: ["20"],
    hiddenTests: [
      { input: "10 20", expectedOutput: "200" },
      { input: "-2 3", expectedOutput: "-6" },
    ],
    constraints: ["1 <= a, b <= 10^9"],
    languageStarterCode: {
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() {\n  int a, b;\n  cin >> a >> b;\n  cout << a * b;\n  return 0;\n}`,
      python: `a, b = map(int, input().split())\nprint(a * b)`,
      java: `import java.util.*;\npublic class Main {\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    int a = sc.nextInt(), b = sc.nextInt();\n    System.out.println(a * b);\n  }\n}`
    },
  },
  {
    id: "3",
    name: "Divide Two Numbers",
    slug: "divide-two-numbers",
    description: "Write a program to divide two numbers (a / b) and output float.",
    difficulty: "Hard",
    sampleInput: ["10 2"],
    status: "Unsolved",
    sampleOutput: ["5"],
    hiddenTests: [
      { input: "100 4", expectedOutput: "25" },
      { input: "7 2", expectedOutput: "3.5" },
    ],
    constraints: ["1 <= b <= 10^9, a >= 0"],
    languageStarterCode: {
      cpp: `#include <iostream>\nusing namespace std;\nint main() {\n  double a, b;\n  cin >> a >> b;\n  cout << a / b;\n  return 0;\n}`,
      python: `a, b = map(float, input().split())\nprint(a / b)`,
      java: `import java.util.*;\npublic class Main {\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    double a = sc.nextDouble(), b = sc.nextDouble();\n    System.out.println(a / b);\n  }\n}`
    },
  },
  {
    id: "4",
    name: "Check Prime",
    slug: "check-prime",
    description: "Determine if a number is prime.",
    difficulty: "Easy",
    sampleInput: ["7"],
    status: "Unsolved",
    sampleOutput: ["Yes"],
    hiddenTests: [
      { input: "29", expectedOutput: "Yes" },
      { input: "100", expectedOutput: "No" },
    ],
    constraints: ["1 <= n <= 10^6"],
    languageStarterCode: {
      cpp: `#include <iostream>\nusing namespace std;\nbool isPrime(int n) {\n  if (n < 2) return false;\n  for (int i = 2; i * i <= n; ++i)\n    if (n % i == 0) return false;\n  return true;\n}\nint main() {\n  int n;\n  cin >> n;\n  cout << (isPrime(n) ? "Yes" : "No");\n  return 0;\n}`,
      python: `n = int(input())\nif n < 2: print("No")\nelse:\n  for i in range(2, int(n**0.5)+1):\n    if n % i == 0:\n      print("No")\n      break\n  else:\n    print("Yes")`,
      java: `import java.util.*;\npublic class Main {\n  public static boolean isPrime(int n) {\n    if (n < 2) return false;\n    for (int i = 2; i * i <= n; i++) if (n % i == 0) return false;\n    return true;\n  }\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    int n = sc.nextInt();\n    System.out.println(isPrime(n) ? "Yes" : "No");\n  }\n}`
    },
  },
  {
    id: "5",
    name: "Factorial",
    slug: "factorial",
    description: "Calculate the factorial of a given number.",
    difficulty: "Easy",
    sampleInput: ["5"],
    status: "Unsolved",
    sampleOutput: ["120"],
    hiddenTests: [
      { input: "1", expectedOutput: "1" },
      { input: "6", expectedOutput: "720" },
    ],
    constraints: ["0 <= n <= 20"],
    languageStarterCode: {
      cpp: `#include <iostream>\nusing namespace std;\nint main() {\n  int n, f = 1;\n  cin >> n;\n  for(int i = 1; i <= n; ++i) f *= i;\n  cout << f;\n  return 0;\n}`,
      python: `n = int(input())\nfact = 1\nfor i in range(1, n+1):\n  fact *= i\nprint(fact)`,
      java: `import java.util.*;\npublic class Main {\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    int n = sc.nextInt(), f = 1;\n    for(int i = 1; i <= n; i++) f *= i;\n    System.out.println(f);\n  }\n}`
    },
  },
  {
    id: "6",
    name: "Palindrome Check",
    slug: "palindrome-check",
    description: "Check if a given string is a palindrome.",
    difficulty: "Medium",
    sampleInput: ["madam"],
    status: "Unsolved",
    sampleOutput: ["Yes"],
    hiddenTests: [
      { input: "racecar", expectedOutput: "Yes" },
      { input: "hello", expectedOutput: "No" },
    ],
    constraints: ["1 <= length <= 1000"],
    languageStarterCode: {
      cpp: `#include <iostream>\nusing namespace std;\nint main() {\n  string s;\n  cin >> s;\n  string r = s;\n  reverse(r.begin(), r.end());\n  cout << (s == r ? "Yes" : "No");\n  return 0;\n}`,
      python: `s = input()\nprint("Yes" if s == s[::-1] else "No")`,
      java: `import java.util.*;\npublic class Main {\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    String s = sc.next();\n    StringBuilder sb = new StringBuilder(s);\n    System.out.println(s.equals(sb.reverse().toString()) ? "Yes" : "No");\n  }\n}`
    },
  },
  {
    id: "7",
    name: "Count Digits",
    slug: "count-digits",
    description: "Count the number of digits in a given number.",
    difficulty: "Easy",
    sampleInput: ["12345"],
    status: "Unsolved",
    sampleOutput: ["5"],
    hiddenTests: [
      { input: "0", expectedOutput: "1" },
      { input: "987654", expectedOutput: "6" },
    ],
    constraints: ["0 <= n <= 10^9"],
    languageStarterCode: {
      cpp: `#include <iostream>\nusing namespace std;\nint main() {\n  int n;\n  cin >> n;\n  cout << to_string(n).length();\n  return 0;\n}`,
      python: `n = input()\nprint(len(n))`,
      java: `import java.util.*;\npublic class Main {\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    String n = sc.next();\n    System.out.println(n.length());\n  }\n}`
    },
  },
  {
    id: "8",
    name: "Sum of Digits",
    slug: "sum-of-digits",
    description: "Find the sum of digits of a number.",
    difficulty: "Easy",
    sampleInput: ["123"],
    status: "Unsolved",
    sampleOutput: ["6"],
    hiddenTests: [
      { input: "987", expectedOutput: "24" },
      { input: "1001", expectedOutput: "2" },
    ],
    constraints: ["0 <= n <= 10^9"],
    languageStarterCode: {
      cpp: `#include <iostream>\nusing namespace std;\nint main() {\n  int n, sum = 0;\n  cin >> n;\n  while(n) {\n    sum += n % 10;\n    n /= 10;\n  }\n  cout << sum;\n  return 0;\n}`,
      python: `n = input()\nprint(sum(int(d) for d in n))`,
      java: `import java.util.*;\npublic class Main {\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    int n = sc.nextInt(), sum = 0;\n    while(n > 0) { sum += n % 10; n /= 10; }\n    System.out.println(sum);\n  }\n}`
    },
  },
  {
    id: "9",
    name: "Reverse a String",
    slug: "reverse-string",
    description: "Reverse a given string.",
    difficulty: "Easy",
    sampleInput: ["hello"],
    status: "Unsolved",
    sampleOutput: ["olleh"],
    hiddenTests: [
      { input: "racecar", expectedOutput: "racecar" },
      { input: "abc", expectedOutput: "cba" },
    ],
    constraints: ["1 <= length <= 1000"],
    languageStarterCode: {
      cpp: `#include <iostream>\nusing namespace std;\nint main() {\n  string s;\n  cin >> s;\n  reverse(s.begin(), s.end());\n  cout << s;\n  return 0;\n}`,
      python: `s = input()\nprint(s[::-1])`,
      java: `import java.util.*;\npublic class Main {\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    String s = sc.next();\n    System.out.println(new StringBuilder(s).reverse());\n  }\n}`
    },
  },
  {
    id: "10",
    name: "Find Maximum of Three Numbers",
    slug: "max-of-three",
    description: "Find the maximum among three numbers.",
    difficulty: "Easy",
    sampleInput: ["2 8 5"],
    status: "Unsolved",
    sampleOutput: ["8"],
    hiddenTests: [
      { input: "100 200 150", expectedOutput: "200" },
      { input: "-1 -2 -3", expectedOutput: "-1" },
    ],
    constraints: ["-10^9 <= a, b, c <= 10^9"],
    languageStarterCode: {
      cpp: `#include <iostream>\nusing namespace std;\nint main() {\n  int a, b, c;\n  cin >> a >> b >> c;\n  cout << max(a, max(b, c));\n  return 0;\n}`,
      python: `a, b, c = map(int, input().split())\nprint(max(a, b, c))`,
      java: `import java.util.*;\npublic class Main {\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    int a = sc.nextInt(), b = sc.nextInt(), c = sc.nextInt();\n    System.out.println(Math.max(a, Math.max(b, c)));\n  }\n}`
    },
  }
];

module.exports = questions;
