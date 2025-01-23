function greeter(person: string): string {
  return "Hello, "+ person + "!";
}

let user = ["Jane", "Doe"];
console.log(greeter(user)); //This will cause a compilation error because the function expects a single string argument, but it receives an array of strings.