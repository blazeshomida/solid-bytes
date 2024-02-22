# Solid Snippets for VSCode

This Visual Studio Code extension offers a comprehensive collection of Solid snippets designed to boost the productivity of developers. With a focus on flexibility, these snippets cater to a wide range of Solid functionalities, from component creation and reactive utilities to context management and stores. While the snippets are not customizable, their design ensures they can be seamlessly integrated into various coding styles and project requirements.

## Features

- 🛠️ **Component Creation**: Effortlessly scaffold Solid components, including context providers and consumers, lazy-loaded components, and unique ID generators.
- ⚡ **Reactive Utilities**: Access snippets for creating signals, effects, memos, resources, and more, streamlining state management and reactive programming.
- 🗃️ **Store Integration**: Utilize snippets for creating and managing Solid stores, enhancing global state management across your application.
- 🛡️ **Error Handling and Resource Loading**: Implement error boundaries and suspense components for a more robust and performant application.
- 🌟 **Flexible and Intuitive**: Designed to be flexible, these snippets fit a wide array of use cases and coding practices, ensuring developers can quickly adapt them to their needs.
- 🚀 **Advanced Templating**: Take advantage of features like automatic capitalization and insertion of selected text to speed up development.

## Installation

1. Open Visual Studio Code.
2. Press `Ctrl+P` (Windows/Linux) or `Cmd+P` (macOS) to open the Quick Open dialog.
3. Type `ext install solid-snippets`
4. Hit Enter to install the extension.

Alternatively, search for "Solid Snippets" in the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`).

## Usage

To use a snippet, start typing its prefix in your Solid project files. The extension will show a list of suggestions. Selecting a snippet will insert it into your file. Here are some examples:

- `SComponent`: Scaffold a Solid component.
- `SSignal`: Create a reactive state with a getter and setter.
- `SErrorBoundary`: Implement an error boundary around a set of components.

## Example Snippets

### Solid Component

```js
// Prefix: SComponent
const MyComponent = () => {
  return <div>MyComponent</div>;
};
```

### Create Signal

```js
// Prefix: SSignal
const [state, setState] = createSignal(initialValue);
```

### Error Boundary

```js
// Prefix: SErrorBoundary
<ErrorBoundary
  fallback={(error, reset) => (
    <div onClick={reset}>Error: {error.toString()}</div>
  )}
>
  {children}
</ErrorBoundary>
```

## Contributing

Contributions are welcome! If you have ideas for new snippets, improvements, or find any issues, please open an issue or submit a pull request on our [GitHub repository](https://github.com/blazeshomida/solid-snippets).

## License

This extension is released under the [MIT License](LICENSE).

## Acknowledgments

Thank you to the Solid community and all contributors. Your support and contributions are greatly appreciated.

---

Stay tuned for updates as we continue to expand the snippet collection and improve the extension.
