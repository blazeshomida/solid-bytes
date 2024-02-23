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
3. Type `ext install solid-bytes`
4. Hit Enter to install the extension.

Alternatively, search for "Solid Bytes" in the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`).

## Usage

To efficiently use a snippet within your Solid projects, simply start typing its prefix in your project files. The extension will display a list of snippets that match the typed prefix. When you select a snippet, it inserts the code into your file, positioning the cursor right at the end of the function or component name.

This cursor placement is specifically designed to streamline the importing process, allowing you to quickly import the necessary functions or components using `cmd + .` without having to do it manually.

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

<code>[createSignal](#createsignal)</code> • <code>[createSignal.ts](#createsignalts)</code> • <code>[createEffect](#createeffect)</code> • <code>[createEffect.ts](#createeffectts)</code> • <code>[createMemo](#creatememo)</code> • <code>[createMemo.ts](#creatememots)</code> • <code>[createResource](#createresource)</code> • <code>[Solid Component](#solid-component)</code> • <code>[Solid Component.ts](#solid-componentts)</code> • <code>[Solid Component Export](#solid-component-export)</code> • <code>[Solid Component Export.ts](#solid-component-exportts)</code> • <code>[Dynamic](#dynamic)</code> • <code>[ErrorBoundary](#errorboundary)</code> • <code>[For](#for)</code> • <code>[Index](#index)</code> • <code>[Portal](#portal)</code> • <code>[Show](#show)</code> • <code>[Switch / Match](#switch-match)</code> • <code>[Suspense](#suspense)</code> • <code>[SuspenseList](#suspenselist)</code> • <code>[children](#children)</code> • <code>[context](#context)</code> • <code>[createUniqueId](#createuniqueid)</code> • <code>[lazy](#lazy)</code> • <code>[createStore](#createstore)</code> • <code>[createStore.ts](#createstorets)</code> • <code>[batch](#batch)</code> • <code>[catchError](#catcherror)</code> •

### createSignal

<details>
  <summary><sup>View Details</sup></summary>
  <p>Creates a simple reactive state with a getter and setter</p>
</details>
<div>
  <span><code>"SSignal"</code></span>
  <span><code>js,jsx</code></span>  
</div>
    
```tsx
const [${2:state}, set${2/(.*)/${1:/capitalize}/}] = createSignal${1}(${3})
```

<sub>[Back to top](#full-list)</sub>

### createSignal.ts

<details>
  <summary><sup>View Details</sup></summary>
  <p>Creates a simple reactive state with a getter and setter</p>
</details>
<div>
  <span><code>"SSignal"</code></span>
  <span><code>ts,tsx</code></span>  
</div>
    
```tsx
const [${3:state}, set${3/(.*)/${1:/capitalize}/}] = createSignal${1}<${2}>(${4:null})
```

<sub>[Back to top](#full-list)</sub>

### createEffect

<details>
  <summary><sup>View Details</sup></summary>
  <p>Creates a reactive computation that runs after the render phase</p>
</details>
<div>
  <span><code>"SEffect"</code></span>
  <span><code>js,jsx</code></span>  
</div>
    
```tsx
createEffect${1}(() => { ${2} })
```

<sub>[Back to top](#full-list)</sub>

### createEffect.ts

<details>
  <summary><sup>View Details</sup></summary>
  <p>Creates a reactive computation that runs after the render phase</p>
</details>
<div>
  <span><code>"SEffect"</code></span>
  <span><code>ts,tsx</code></span>  
</div>
    
```tsx
createEffect${1}<${2}>(() => { ${3} })
```

<sub>[Back to top](#full-list)</sub>

### createMemo

<details>
  <summary><sup>View Details</sup></summary>
  <p>Creates a readonly derived reactive memoized signal</p>
</details>
<div>
  <span><code>"SMemo"</code></span>
  <span><code>js,jsx</code></span>  
</div>
    
```tsx
const ${2:value} = createMemo${1}(() => ${3})
```

<sub>[Back to top](#full-list)</sub>

### createMemo.ts

<details>
  <summary><sup>View Details</sup></summary>
  <p>Creates a readonly derived reactive memoized signal</p>
</details>
<div>
  <span><code>"SMemo"</code></span>
  <span><code>ts,tsx</code></span>  
</div>
    
```tsx
const ${3:value} = createMemo${1}<${2}>(() => {$4})
```

<sub>[Back to top](#full-list)</sub>

### createResource

<details>
  <summary><sup>View Details</sup></summary>
  <p>Creates a resource that wraps a repeated promise in a reactive pattern</p>
</details>
<div>
  <span><code>"SResource"</code></span>
  <span><code>js,jsx</code></span>  
</div>
    
```tsx
const [${2:data}, { mutate, refetch }] = createResource${1}(${3})
```

<sub>[Back to top](#full-list)</sub>

### Solid Component

<details>
  <summary><sup>View Details</sup></summary>
  <p>Solid Component</p>
</details>
<div>
  <span><code>"SComponent"</code></span>
  <span><code>js,jsx</code></span>  
</div>
    
```tsx
const ${1:${TM_FILENAME_BASE}} = () => {
  return <div>${1:${TM_FILENAME_BASE}}</div>
}
```

<sub>[Back to top](#full-list)</sub>

### Solid Component.ts

<details>
  <summary><sup>View Details</sup></summary>
  <p>Solid Component</p>
</details>
<div>
  <span><code>"SComponent"</code></span>
  <span><code>ts,tsx</code></span>  
</div>
    
```tsx
type ${1:${TM_FILENAME_BASE}}Props = {}
const ${1:${TM_FILENAME_BASE}}: Component<${1:${TM_FILENAME_BASE}}Props> = (props) => {
  return <div>${1:${TM_FILENAME_BASE}}</div>
}
```

<sub>[Back to top](#full-list)</sub>

### Solid Component Export

<details>
  <summary><sup>View Details</sup></summary>
  <p>Solid Component Export</p>
</details>
<div>
  <span><code>"SExportComponent"</code></span>
  <span><code>js,jsx</code></span>  
</div>
    
```tsx
export const ${1:${TM_FILENAME_BASE}} = () => {
  return <div>${1:${TM_FILENAME_BASE}}</div>
}
```

<sub>[Back to top](#full-list)</sub>

### Solid Component Export.ts

<details>
  <summary><sup>View Details</sup></summary>
  <p>Solid Component Export</p>
</details>
<div>
  <span><code>"SExportComponent"</code></span>
  <span><code>ts,tsx</code></span>  
</div>
    
```tsx
type ${1:${TM_FILENAME_BASE}}Props = {}
export const ${1:${TM_FILENAME_BASE}}: Component<${1:${TM_FILENAME_BASE}}Props> = (props) => {
  return <div>${1:${TM_FILENAME_BASE}}</div>
}
```

<sub>[Back to top](#full-list)</sub>

### Dynamic

<details>
  <summary><sup>View Details</sup></summary>
  <p>Renders an arbitrary custom or native component and passes the other props</p>
</details>
<div>
  <span><code>"SDynamic"</code></span>
  <span><code>js,jsx</code></span>  
</div>
    
```tsx
<Dynamic${1} component={${2:<MyComponent />}} ${3} /
```

<sub>[Back to top](#full-list)</sub>

### ErrorBoundary

<details>
  <summary><sup>View Details</sup></summary>
  <p>Catches uncaught errors inside components and renders a fallback content. Errors thrown from the fallback can be caught by a parent ErrorBoundary</p>
</details>
<div>
  <span><code>"SErrorBoundary"</code></span>
  <span><code>js,jsx</code></span>  
</div>
    
```tsx
<ErrorBoundary${1} fallback={(error, reset) => <div onClick={reset}>Error: {error.toString()}</div>}>
  ${2:${TM_SELECTED_TEXT}}
</ErrorBoundary>
```

<sub>[Back to top](#full-list)</sub>

### For

<details>
  <summary><sup>View Details</sup></summary>
  <p>Creates a list of elements from a list. It receives a map function as its child that receives a list element and an accessor with the index and returns a JSX-Element; if the list is empty, an optional fallback is returned</p>
</details>
<div>
  <span><code>"SFor"</code></span>
  <span><code>js,jsx</code></span>  
</div>
    
```tsx
<For${1} each={${2:list}()} fallback={<div>Loading...</div>}>
  {(${3:item}) => (
   ${4:<li>{${5:item.name}\}</li>}
  )}
</For>
```

<sub>[Back to top](#full-list)</sub>

### Index

<details>
  <summary><sup>View Details</sup></summary>
  <p>Non-keyed iteration over a list creating elements from its items. To be used if you have a list with fixed indices, but changing values. If you have a list with changing indices, better use `<For>`</p>
</details>
<div>
  <span><code>"SIndex"</code></span>
  <span><code>js,jsx</code></span>  
</div>
    
```tsx
<Index${1} each={${2:list}()} fallback={<div>Loading...</div>}>
  {(${3:item}) => (
    ${4:<li>{${5:item.name}\}</li>}
  )}
</Index>
```

<sub>[Back to top](#full-list)</sub>

### Portal

<details>
  <summary><sup>View Details</sup></summary>
  <p>Useful for inserting modals and tooltips outside of an cropping layout. If no mount point is given, the portal is inserted in document.body; it is wrapped in a `<div>` unless the target is document.head or `isSVG` is true. setting `useShadow` to true places the element in a shadow root to isolate styles</p>
</details>
<div>
  <span><code>"SPortal"</code></span>
  <span><code>js,jsx</code></span>  
</div>
    
```tsx
<Portal${1} mount={document.getElementById("${2}")}>
  ${3:<div>${4:My Content}</div>}
</Portal>
```

<sub>[Back to top](#full-list)</sub>

### Show

<details>
  <summary><sup>View Details</sup></summary>
  <p>Conditionally render its children or an optional fallback componentConditionally render its children or an optional fallback componentConditionally render its children or an optional fallback component</p>
</details>
<div>
  <span><code>"SShow"</code></span>
  <span><code>js,jsx</code></span>  
</div>
    
```tsx
<Show${1} when=${2:state.count > 0} fallback={<div>Loading...</div>}>
  ${3:<div>$4:My Content}</div>}
</Show>
```

<sub>[Back to top](#full-list)</sub>

### Switch / Match

<details>
  <summary><sup>View Details</sup></summary>
  <p>Switches between content based on mutually exclusive conditions. Selects a content based on condition when inside a `Switch` control flow</p>
</details>
<div>
  <span><code>"SSwitch"</code></span>
  <span><code>js,jsx</code></span>  
</div>
    
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

<sub>[Back to top](#full-list)</sub>

### Suspense

<details>
  <summary><sup>View Details</sup></summary>
  <p>Tracks all resources inside a component and renders a fallback until they are all resolved</p>
</details>
<div>
  <span><code>"SSuspense"</code></span>
  <span><code>js,jsx</code></span>  
</div>
    
```tsx
<Suspense${1} fallback={<div>Loading...</div>}>
  ${2:${TM_SELECTED_TEXT}}
</Suspense>
```

<sub>[Back to top](#full-list)</sub>

### SuspenseList

<details>
  <summary><sup>View Details</sup></summary>
  <p>**[experimental]** Controls the order in which suspended content is rendered</p>
</details>
<div>
  <span><code>"SSuspenseList"</code></span>
  <span><code>js,jsx</code></span>  
</div>
    
```tsx
<SuspenseList${1} revealOrder="${3|forwards,backwards,together|}" tail="${4|collapsed,hidden|}">
  <Suspense${2} fallback={<h2>Loading...</h2>}>
    ${5:<div>{resource.user\}</div>}
  </Suspense>
</SuspenseList>
```

<sub>[Back to top](#full-list)</sub>

### children

<details>
  <summary><sup>View Details</sup></summary>
  <p>Resolves child elements to help interact with children</p>
</details>
<div>
  <span><code>"SChildren"</code></span>
  <span><code>js,jsx</code></span>  
</div>
    
```tsx
const ${2} = children${1}(() => ${3:props.children})
```

<sub>[Back to top](#full-list)</sub>

### context

<details>
  <summary><sup>View Details</sup></summary>
  <p>Creates a Context to handle a state scoped for the children of a component. use a context to receive a scoped state from a parent's Context.Provider</p>
</details>
<div>
  <span><code>"SContext"</code></span>
  <span><code>js,jsx</code></span>  
</div>
    
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

<sub>[Back to top](#full-list)</sub>

### createUniqueId

<details>
  <summary><sup>View Details</sup></summary>
  <p>A universal id generator that is stable across server/browser. Note: on the server this only works under hydratable components</p>
</details>
<div>
  <span><code>"SUuid"</code></span>
  <span><code>js,jsx</code></span>  
</div>
    
```tsx
const ${2:id} = createUniqueId${1}()
```

<sub>[Back to top](#full-list)</sub>

### lazy

<details>
  <summary><sup>View Details</sup></summary>
  <p>Used to lazy load components to allow for code splitting. Components are not loaded until rendered</p>
</details>
<div>
  <span><code>"SLazy"</code></span>
  <span><code>js,jsx</code></span>  
</div>
    
```tsx
const ${2} = lazy${1}(() => import("${3}"))
```

<sub>[Back to top](#full-list)</sub>

### createStore

<details>
  <summary><sup>View Details</sup></summary>
  <p>Creates a reactive store that can be read through a proxy object and written with a setter function</p>
</details>
<div>
  <span><code>"SStore"</code></span>
  <span><code>js,jsx</code></span>  
</div>
    
```tsx
const [${2:state}, set${2/(.*)/${1:/capitalize}/}] = createStore${1}(${3})
```

<sub>[Back to top](#full-list)</sub>

### createStore.ts

<details>
  <summary><sup>View Details</sup></summary>
  <p>Creates a reactive store that can be read through a proxy object and written with a setter function</p>
</details>
<div>
  <span><code>"SStore"</code></span>
  <span><code>ts,tsx</code></span>  
</div>
    
```tsx
const [${3:state}, set${3/(.*)/${1:/capitalize}/}] = createStore${1}<$2>(${4})
```

<sub>[Back to top](#full-list)</sub>

### batch

<details>
  <summary><sup>View Details</sup></summary>
  <p>Execute a callback that will not side-effect until its top-most batch is completed</p>
</details>
<div>
  <span><code>"SBatch"</code></span>
  <span><code>js,jsx</code></span>  
</div>
    
```tsx
batch${1}(() => { ${2:set${3:State}(${4})} });
```

<sub>[Back to top](#full-list)</sub>

### catchError

<details>
  <summary><sup>View Details</sup></summary>
  <p>Run an effect whenever an error is thrown within the context of the child scopes</p>
</details>
<div>
  <span><code>"SCatchError"</code></span>
  <span><code>js,jsx</code></span>  
</div>
    
```tsx
const ${4:result} = catchError${1}(${2:() => {${3}\}});
```

<sub>[Back to top](#full-list)</sub>

<!-- ⛔️ GENERATE-SNIPPETS-TABLE:END — Do not remove or modify this section. -->
