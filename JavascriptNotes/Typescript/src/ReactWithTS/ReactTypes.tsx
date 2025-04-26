//// React Types

//// Table Of Content

//// - React General Types
//// - Event Types

//// React General Types ////

/// React.FC - React Functional Component.

// It expects the component to be a function that accepts an optional props object as its first argument.
// It expects the component to return JSX (React elements) or null.
// It implicitly types the children prop (if the component accepts children).

// You can also explicitly type the props your component accepts by using the generic form: React.FC<PropsType>

//

/// React.Component

// Used for class-based components.

//

/// React.useState;

// The type for the state and the setter function returned by the useState hook. It's a generic type where you specify the type of the state value

// React.useState<StateType>;

/// React.useContext

// The type for the value returned by the useContext hook. You'll typically type the context value itself when you create the context.

interface ThemeContextValue {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined
);

const ThemedComponent: React.FC = () => {
  const themeContext = React.useContext(ThemeContext);
  if (!themeContext) {
    return <div>Theme context not provided!</div>;
  }
  return <div>Current Theme: {themeContext.theme}</div>;
};

/// React.useRef

// The type for the ref object returned by the useRef hook. You can specify the type of the element the ref will point to: React.MutableRefObject<HTMLInputElement | null>

//// Event Types ////

// React provides specific types for different DOM events. Some common ones includes the following:

// React.ChangeEvent<HTMLInputElement>: For changes in <input>, <textarea>, and <select> elements.
// React.MouseEvent<HTMLButtonElement>: For mouse events on <button> elements.
// React.FormEvent<HTMLFormElement>: For form submission events.
// React.KeyboardEvent<HTMLInputElement>: For keyboard events on <input> elements.
