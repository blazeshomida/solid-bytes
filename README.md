# Solid Bytes for VSCode

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

<!-- ⛔️ GENERATE-SNIPPETS-TABLE:START — Do not remove or modify this section. -->

  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Content</th>
        <th>Prefix</th>
      </tr>
    </thead>
    <tbody>
  <tr>
    <td>createSignal</td>
    <td>Creates a simple reactive state with a getter and setter</td>
    <td><code>"SSignal"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
const [${2:state}, set${2/(.*)/${1:/capitalize}/}] = createSignal${1}(${3})
```

  </details></td></tr>
  <tr>
    <td>createSignal</td>  
    <td>Creates a simple reactive state with a getter and setter</td>
    <td><code>"SSignal"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
const [${3:state}, set${3/(.*)/${1:/capitalize}/}] = createSignal${1}<${2}>(${4:null})
```

  </details></td></tr>
  <tr>
    <td>createEffect</td>
    <td>Creates a reactive computation that runs after the render phase</td>
    <td><code>"SEffect"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
createEffect${1}(() => { ${2} })
```

  </details></td></tr>
  <tr>
    <td>createEffect</td>  
    <td>Creates a reactive computation that runs after the render phase</td>
    <td><code>"SEffect"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
createEffect${1}<${2}>(() => { ${3} })
```

  </details></td></tr>
  <tr>
    <td>createMemo</td>
    <td>Creates a readonly derived reactive memoized signal</td>
    <td><code>"SMemo"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
const ${2:value} = createMemo${1}(() => ${3})
```

  </details></td></tr>
  <tr>
    <td>createMemo</td>  
    <td>Creates a readonly derived reactive memoized signal</td>
    <td><code>"SMemo"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
const ${3:value} = createMemo${1}<${2}>(() => {$4})
```

  </details></td></tr>
  <tr>
    <td>createResource</td>
    <td>Creates a resource that wraps a repeated promise in a reactive pattern</td>
    <td><code>"SResource"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
const [${2:data}, { mutate, refetch }] = createResource${1}(${3})
```

  </details></td></tr>
  <tr>
    <td>Solid Component</td>
    <td>Solid Component</td>
    <td><code>"SComponent"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
const ${1:${TM_FILENAME_BASE}} = () => {
  return <div>${1:${TM_FILENAME_BASE}}</div>
}
```

  </details></td></tr>
  <tr>
    <td>Solid Component</td>  
    <td>Solid Component</td>
    <td><code>"SComponent"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
type ${1:${TM_FILENAME_BASE}}Props = {}
const ${1:${TM_FILENAME_BASE}}: Component<${1:${TM_FILENAME_BASE}}Props> = (props) => {
  return <div>${1:${TM_FILENAME_BASE}}</div>
}
```

  </details></td></tr>
  <tr>
    <td>Solid Component Export</td>
    <td>Solid Component Export</td>
    <td><code>"SExportComponent"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
export const ${1:${TM_FILENAME_BASE}} = () => {
  return <div>${1:${TM_FILENAME_BASE}}</div>
}
```

  </details></td></tr>
  <tr>
    <td>Solid Component Export</td>  
    <td>Solid Component Export</td>
    <td><code>"SExportComponent"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
type ${1:${TM_FILENAME_BASE}}Props = {}
export const ${1:${TM_FILENAME_BASE}}: Component<${1:${TM_FILENAME_BASE}}Props> = (props) => {
  return <div>${1:${TM_FILENAME_BASE}}</div>
}
```

  </details></td></tr>
  <tr>
    <td>Dynamic</td>
    <td>Renders an arbitrary custom or native component and passes the other props</td>
    <td><code>"SDynamic"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
<Dynamic${1} component={${2:<MyComponent />}} ${3} /
```

  </details></td></tr>
  <tr>
    <td>ErrorBoundary</td>
    <td>Catches uncaught errors inside components and renders a fallback content. Errors thrown from the fallback can be caught by a parent ErrorBoundary</td>
    <td><code>"SErrorBoundary"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
<ErrorBoundary${1} fallback={(error, reset) => <div onClick={reset}>Error: {error.toString()}</div>}>
  ${2:${TM_SELECTED_TEXT}}
</ErrorBoundary>
```

  </details></td></tr>
  <tr>
    <td>For</td>
    <td>Creates a list of elements from a list. It receives a map function as its child that receives a list element and an accessor with the index and returns a JSX-Element; if the list is empty, an optional fallback is returned</td>
    <td><code>"SFor"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
<For${1} each={${2:list}()} fallback={<div>Loading...</div>}>
  {(${3:item}) => (
   ${4:<li>{${5:item.name}\}</li>}
  )}
</For>
```

  </details></td></tr>
  <tr>
    <td>Index</td>
    <td>Non-keyed iteration over a list creating elements from its items. To be used if you have a list with fixed indices, but changing values. If you have a list with changing indices, better use `<For>`</td>
    <td><code>"SIndex"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
<Index${1} each={${2:list}()} fallback={<div>Loading...</div>}>
  {(${3:item}) => (
    ${4:<li>{${5:item.name}\}</li>}
  )}
</Index>
```

  </details></td></tr>
  <tr>
    <td>Portal</td>
    <td>Useful for inserting modals and tooltips outside of an cropping layout. If no mount point is given, the portal is inserted in document.body; it is wrapped in a `<div>` unless the target is document.head or `isSVG` is true. setting `useShadow` to true places the element in a shadow root to isolate styles</td>
    <td><code>"SPortal"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
<Portal${1} mount={document.getElementById("${2}")}>
  ${3:<div>${4:My Content}</div>}
</Portal>
```

  </details></td></tr>
  <tr>
    <td>Show</td>
    <td>Conditionally render its children or an optional fallback componentConditionally render its children or an optional fallback componentConditionally render its children or an optional fallback component</td>
    <td><code>"SShow"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
<Show${1} when=${2:state.count > 0} fallback={<div>Loading...</div>}>
  ${3:<div>$4:My Content}</div>}
</Show>
```

  </details></td></tr>
  <tr>
    <td>Switch / Match</td>
    <td>Switches between content based on mutually exclusive conditions. Selects a content based on condition when inside a `<Switch>` control flow</td>
    <td><code>"SSwitch"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
<Switch${1} fallback={<div>Not Found</div>}>
  <Match${2} when={${3:state.route === "home"}}>
    ${4:<Home />}
  </Match>
  <Match when={${5:state.route === "settings"}}>
    ${6:<Settings />}
  </Match>
</Switch>
```

  </details></td></tr>
  <tr>
    <td>Suspense</td>
    <td>Tracks all resources inside a component and renders a fallback until they are all resolved</td>
    <td><code>"SSuspense"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
<Suspense${1} fallback={<div>Loading...</div>}>
  ${2:${TM_SELECTED_TEXT}}
</Suspense>
```

  </details></td></tr>
  <tr>
    <td>SuspenseList</td>
    <td>**[experimental]** Controls the order in which suspended content is rendered</td>
    <td><code>"SSuspenseList"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
<SuspenseList${1} revealOrder="${3|forwards,backwards,together|}" tail="${4|collapsed,hidden|}">
  <Suspense${2} fallback={<h2>Loading...</h2>}>
    ${5:<div>{resource.user\}</div>}
  </Suspense>
</SuspenseList>
```

  </details></td></tr>
  <tr>
    <td>children</td>
    <td>Resolves child elements to help interact with children</td>
    <td><code>"SChildren"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
const ${2} = children${1}(() => ${3:props.children})
```

  </details></td></tr>
  <tr>
    <td>context</td>
    <td>Creates a Context to handle a state scoped for the children of a component. use a context to receive a scoped state from a parent's Context.Provider</td>
    <td><code>"SContext"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
export const ${2}Context = createContext${1}(${3})
export function use${2}Context() {
  const context = useContext${1}(${2}Context)
  if (!context) {
    throw new Error("use${2}Context: cannot find a ${2}Context")
  }
  return context
}
export function ${2:Counter}Provider() {
  return (
    <${2:Counter}Context.Provider value={${3:counter}}>
      {props.children}
    </${2:Counter}Context.Provider>
  )
}
```

  </details></td></tr>
  <tr>
    <td>createUniqueId</td>
    <td>A universal id generator that is stable across server/browser. Note: on the server this only works under hydratable components</td>
    <td><code>"SUuid"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
const ${2:id} = createUniqueId${1}()
```

  </details></td></tr>
  <tr>
    <td>lazy</td>
    <td>Used to lazy load components to allow for code splitting. Components are not loaded until rendered</td>
    <td><code>"SLazy"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
const ${2} = lazy${1}(() => import("${3}"))
```

  </details></td></tr>
  <tr>
    <td>createStore</td>
    <td>Creates a reactive store that can be read through a proxy object and written with a setter function</td>
    <td><code>"SStore"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
const [${2:state}, set${2/(.*)/${1:/capitalize}/}] = createStore${1}(${3})
```

  </details></td></tr>
  <tr>
    <td>createStore</td>  
    <td>Creates a reactive store that can be read through a proxy object and written with a setter function</td>
    <td><code>"SStore"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
const [${3:state}, set${3/(.*)/${1:/capitalize}/}] = createStore${1}<$2>(${4})
```

  </details></td></tr>
  <tr>
    <td>batch</td>
    <td>Execute a callback that will not side-effect until its top-most batch is completed</td>
    <td><code>"SBatch"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
batch${1}(() => { ${2:set${3:State}(${4})} });
```

  </details></td></tr>
  <tr>
    <td>catchError</td>
    <td>Run an effect whenever an error is thrown within the context of the child scopes</td>
    <td><code>"SCatchError"→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

```tsx
const ${4:result} = catchError${1}(${2:() => {${3}\}});
```

  </details></td></tr></tbody></table>

<!-- ⛔️ GENERATE-SNIPPETS-TABLE:END — Do not remove or modify this section. -->
