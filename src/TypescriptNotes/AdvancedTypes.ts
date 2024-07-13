//// Advanced Types

/// Type Aliases
// Description: Type aliases provide a way to create new names (aliases) for existing types.
// This can improve code readability and maintainability by giving descriptive names to complex types.

type Scouts = {
  readonly id: number;
  name: string;
  leviPresent: boolean;
  titanShifter: (height: number) => void;
};

let newScout: Scouts = {
  id: 1,
  name: "Mikasa",
  leviPresent: false,
  titanShifter: (height: number) => {
    console.log(
      `Mikasa transforms into a Titan with a height of ${height} meters!`
    );
  },
};

// Unions and Intersection
// Type Narrowing
// Nullable Types
// The Unknown Type
// The Never Type
