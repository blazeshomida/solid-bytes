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

> For the full list scroll to [here](#full-list)

## Contributing

Contributions are welcome! If you have ideas for new snippets, improvements, or find any issues, please open an issue or submit a pull request on our [GitHub repository](https://github.com/blazeshomida/solid-snippets).

## License

This extension is released under the [MIT License](LICENSE).

## Acknowledgments

Thank you to the Solid community and all contributors. Your support and contributions are greatly appreciated.

---

Stay tuned for updates as we continue to expand the snippet collection and improve the extension.

## Full List

<!-- ⛔️ GENERATE-SNIPPETS-TABLE:START — Do not remove or modify this section. -->
<code>createSignal</code> • <code>createSignal</code> • <code>createEffect</code> • <code>createEffect</code> • <code>createMemo</code> • <code>createMemo</code> • <code>createResource</code> • <code>Solid Component</code> • <code>Solid Component</code> • <code>Solid Component Export</code> • <code>Solid Component Export</code> • <code>Dynamic</code> • <code>ErrorBoundary</code> • <code>For</code> • <code>Index</code> • <code>Portal</code> • <code>Show</code> • <code>Switch / Match</code> • <code>Suspense</code> • <code>SuspenseList</code> • <code>children</code> • <code>context</code> • <code>createUniqueId</code> • <code>lazy</code> • <code>createStore</code> • <code>createStore</code> • <code>batch</code> • <code>catchError</code> • 


  <table>
    <thead>
      <tr>
        <th>Prefix</th>
        <th>Language</th>
      </tr>
    </thead>
    <tbody>
  <tr><td colspan="2">
    <details>
      <summary><b>createSignal</b></summary>
      <p>Creates a simple reactive state with a getter and setter</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SSignal"</code></td>
    <td><code>js,jsx</code></td>  
  </tr>
  <tr><td colspan="2">

```tsx
const [${2:state}, set${2/(.*)/${1:/capitalize}/}] = createSignal${1}(${3})
```

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>createSignal</b></summary>
      <p>Creates a simple reactive state with a getter and setter</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SSignal"</code></td>
    <td><code>ts,tsx</code></td> 
  </tr>
  <tr><td colspan="2">

```tsx
const [${3:state}, set${3/(.*)/${1:/capitalize}/}] = createSignal${1}<${2}>(${4:null})
```

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>createEffect</b></summary>
      <p>Creates a reactive computation that runs after the render phase</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SEffect"</code></td>
    <td><code>js,jsx</code></td>  
  </tr>
  <tr><td colspan="2">

```tsx
createEffect${1}(() => { ${2} })
```

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>createEffect</b></summary>
      <p>Creates a reactive computation that runs after the render phase</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SEffect"</code></td>
    <td><code>ts,tsx</code></td> 
  </tr>
  <tr><td colspan="2">

```tsx
createEffect${1}<${2}>(() => { ${3} })
```

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>createMemo</b></summary>
      <p>Creates a readonly derived reactive memoized signal</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SMemo"</code></td>
    <td><code>js,jsx</code></td>  
  </tr>
  <tr><td colspan="2">

```tsx
const ${2:value} = createMemo${1}(() => ${3})
```

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>createMemo</b></summary>
      <p>Creates a readonly derived reactive memoized signal</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SMemo"</code></td>
    <td><code>ts,tsx</code></td> 
  </tr>
  <tr><td colspan="2">

```tsx
const ${3:value} = createMemo${1}<${2}>(() => {$4})
```

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>createResource</b></summary>
      <p>Creates a resource that wraps a repeated promise in a reactive pattern</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SResource"</code></td>
    <td><code>js,jsx</code></td>  
  </tr>
  <tr><td colspan="2">

```tsx
const [${2:data}, { mutate, refetch }] = createResource${1}(${3})
```

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>Solid Component</b></summary>
      <p>Solid Component</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SComponent"</code></td>
    <td><code>js,jsx</code></td>  
  </tr>
  <tr><td colspan="2">

```tsx
const ${1:${TM_FILENAME_BASE}} = () => {
  return <div>${1:${TM_FILENAME_BASE}}</div>
}
```

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>Solid Component</b></summary>
      <p>Solid Component</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SComponent"</code></td>
    <td><code>ts,tsx</code></td> 
  </tr>
  <tr><td colspan="2">

```tsx
type ${1:${TM_FILENAME_BASE}}Props = {}
const ${1:${TM_FILENAME_BASE}}: Component<${1:${TM_FILENAME_BASE}}Props> = (props) => {
  return <div>${1:${TM_FILENAME_BASE}}</div>
}
```

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>Solid Component Export</b></summary>
      <p>Solid Component Export</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SExportComponent"</code></td>
    <td><code>js,jsx</code></td>  
  </tr>
  <tr><td colspan="2">

```tsx
export const ${1:${TM_FILENAME_BASE}} = () => {
  return <div>${1:${TM_FILENAME_BASE}}</div>
}
```

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>Solid Component Export</b></summary>
      <p>Solid Component Export</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SExportComponent"</code></td>
    <td><code>ts,tsx</code></td> 
  </tr>
  <tr><td colspan="2">

```tsx
type ${1:${TM_FILENAME_BASE}}Props = {}
export const ${1:${TM_FILENAME_BASE}}: Component<${1:${TM_FILENAME_BASE}}Props> = (props) => {
  return <div>${1:${TM_FILENAME_BASE}}</div>
}
```

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>Dynamic</b></summary>
      <p>Renders an arbitrary custom or native component and passes the other props</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SDynamic"</code></td>
    <td><code>js,jsx</code></td>  
  </tr>
  <tr><td colspan="2">

```tsx
<Dynamic${1} component={${2:<MyComponent />}} ${3} /
```

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>ErrorBoundary</b></summary>
      <p>Catches uncaught errors inside components and renders a fallback content. Errors thrown from the fallback can be caught by a parent ErrorBoundary</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SErrorBoundary"</code></td>
    <td><code>js,jsx</code></td>  
  </tr>
  <tr><td colspan="2">

```tsx
<ErrorBoundary${1} fallback={(error, reset) => <div onClick={reset}>Error: {error.toString()}</div>}>
  ${2:${TM_SELECTED_TEXT}}
</ErrorBoundary>
```

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>For</b></summary>
      <p>Creates a list of elements from a list. It receives a map function as its child that receives a list element and an accessor with the index and returns a JSX-Element; if the list is empty, an optional fallback is returned</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SFor"</code></td>
    <td><code>js,jsx</code></td>  
  </tr>
  <tr><td colspan="2">

```tsx
<For${1} each={${2:list}()} fallback={<div>Loading...</div>}>
  {(${3:item}) => (
   ${4:<li>{${5:item.name}\}</li>}
  )}
</For>
```

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>Index</b></summary>
      <p>Non-keyed iteration over a list creating elements from its items. To be used if you have a list with fixed indices, but changing values. If you have a list with changing indices, better use `<For>`</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SIndex"</code></td>
    <td><code>js,jsx</code></td>  
  </tr>
  <tr><td colspan="2">

```tsx
<Index${1} each={${2:list}()} fallback={<div>Loading...</div>}>
  {(${3:item}) => (
    ${4:<li>{${5:item.name}\}</li>}
  )}
</Index>
```

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>Portal</b></summary>
      <p>Useful for inserting modals and tooltips outside of an cropping layout. If no mount point is given, the portal is inserted in document.body; it is wrapped in a `<div>` unless the target is document.head or `isSVG` is true. setting `useShadow` to true places the element in a shadow root to isolate styles</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SPortal"</code></td>
    <td><code>js,jsx</code></td>  
  </tr>
  <tr><td colspan="2">

```tsx
<Portal${1} mount={document.getElementById("${2}")}>
  ${3:<div>${4:My Content}</div>}
</Portal>
```

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>Show</b></summary>
      <p>Conditionally render its children or an optional fallback componentConditionally render its children or an optional fallback componentConditionally render its children or an optional fallback component</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SShow"</code></td>
    <td><code>js,jsx</code></td>  
  </tr>
  <tr><td colspan="2">

```tsx
<Show${1} when=${2:state.count > 0} fallback={<div>Loading...</div>}>
  ${3:<div>$4:My Content}</div>}
</Show>
```

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>Switch / Match</b></summary>
      <p>Switches between content based on mutually exclusive conditions. Selects a content based on condition when inside a `Switch` control flow</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SSwitch"</code></td>
    <td><code>js,jsx</code></td>  
  </tr>
  <tr><td colspan="2">

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

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>Suspense</b></summary>
      <p>Tracks all resources inside a component and renders a fallback until they are all resolved</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SSuspense"</code></td>
    <td><code>js,jsx</code></td>  
  </tr>
  <tr><td colspan="2">

```tsx
<Suspense${1} fallback={<div>Loading...</div>}>
  ${2:${TM_SELECTED_TEXT}}
</Suspense>
```

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>SuspenseList</b></summary>
      <p>**[experimental]** Controls the order in which suspended content is rendered</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SSuspenseList"</code></td>
    <td><code>js,jsx</code></td>  
  </tr>
  <tr><td colspan="2">

```tsx
<SuspenseList${1} revealOrder="${3|forwards,backwards,together|}" tail="${4|collapsed,hidden|}">
  <Suspense${2} fallback={<h2>Loading...</h2>}>
    ${5:<div>{resource.user\}</div>}
  </Suspense>
</SuspenseList>
```

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>children</b></summary>
      <p>Resolves child elements to help interact with children</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SChildren"</code></td>
    <td><code>js,jsx</code></td>  
  </tr>
  <tr><td colspan="2">

```tsx
const ${2} = children${1}(() => ${3:props.children})
```

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>context</b></summary>
      <p>Creates a Context to handle a state scoped for the children of a component. use a context to receive a scoped state from a parent's Context.Provider</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SContext"</code></td>
    <td><code>js,jsx</code></td>  
  </tr>
  <tr><td colspan="2">

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

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>createUniqueId</b></summary>
      <p>A universal id generator that is stable across server/browser. Note: on the server this only works under hydratable components</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SUuid"</code></td>
    <td><code>js,jsx</code></td>  
  </tr>
  <tr><td colspan="2">

```tsx
const ${2:id} = createUniqueId${1}()
```

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>lazy</b></summary>
      <p>Used to lazy load components to allow for code splitting. Components are not loaded until rendered</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SLazy"</code></td>
    <td><code>js,jsx</code></td>  
  </tr>
  <tr><td colspan="2">

```tsx
const ${2} = lazy${1}(() => import("${3}"))
```

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>createStore</b></summary>
      <p>Creates a reactive store that can be read through a proxy object and written with a setter function</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SStore"</code></td>
    <td><code>js,jsx</code></td>  
  </tr>
  <tr><td colspan="2">

```tsx
const [${2:state}, set${2/(.*)/${1:/capitalize}/}] = createStore${1}(${3})
```

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>createStore</b></summary>
      <p>Creates a reactive store that can be read through a proxy object and written with a setter function</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SStore"</code></td>
    <td><code>ts,tsx</code></td> 
  </tr>
  <tr><td colspan="2">

```tsx
const [${3:state}, set${3/(.*)/${1:/capitalize}/}] = createStore${1}<$2>(${4})
```

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>batch</b></summary>
      <p>Execute a callback that will not side-effect until its top-most batch is completed</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SBatch"</code></td>
    <td><code>js,jsx</code></td>  
  </tr>
  <tr><td colspan="2">

```tsx
batch${1}(() => { ${2:set${3:State}(${4})} });
```

 </td></tr>
  <tr><td colspan="2">
    <details>
      <summary><b>catchError</b></summary>
      <p>Run an effect whenever an error is thrown within the context of the child scopes</p>
    </details>
  </td></tr>
  <tr>
    <td><code>"SCatchError"</code></td>
    <td><code>js,jsx</code></td>  
  </tr>
  <tr><td colspan="2">

```tsx
const ${4:result} = catchError${1}(${2:() => {${3}\}});
```

 </td></tr></tbody></table>

<!-- ⛔️ GENERATE-SNIPPETS-TABLE:END — Do not remove or modify this section. -->
