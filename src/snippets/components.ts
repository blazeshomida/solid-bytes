import { TM } from "../constants";
import { Snippet } from "../types";

export const components: Record<string, Snippet> = {
  "Solid Component": {
    prefix: "SComponent",
    description: "Solid Component",
    body: `
    const \${1:${TM.filenameBase}} = () => {
      return <div>\${1:${TM.filenameBase}}</div>
    }
    `,
    tsBody: `
    type \${1:${TM.filenameBase}}Props = {}
    const \${1:${TM.filenameBase}}: Component<\${1:${TM.filenameBase}}Props> = (props) => {
      return <div>\${1:${TM.filenameBase}}</div>
    }
    `,
  },
  "Solid Component Export": {
    prefix: "SExportComponent",
    description: "Solid Component Export",
    body: `
    export const \${1:${TM.filenameBase}} = () => {
      return <div>\${1:${TM.filenameBase}}</div>
    }
    `,
    tsBody: `
    type \${1:${TM.filenameBase}}Props = {}
    export const \${1:${TM.filenameBase}}: Component<\${1:${TM.filenameBase}}Props> = (props) => {
      return <div>\${1:${TM.filenameBase}}</div>
    }
    `,
  },
  Dynamic: {
    prefix: "SDynamic",
    description:
      "Renders an arbitrary custom or native component and passes the other props",
    body: "<Dynamic${1} component={${2:<MyComponent />}} ${3} /",
  },
  ErrorBoundary: {
    prefix: "SErrorBoundary",
    description:
      "Catches uncaught errors inside components and renders a fallback content. Errors thrown from the fallback can be caught by a parent ErrorBoundary",
    body: `
    <ErrorBoundary\${1} fallback={(error, reset) => <div onClick={reset}>Error: {error.toString()}</div>}>
      \${2:${TM.selected}}
    </ErrorBoundary>
    `,
  },
  For: {
    prefix: "SFor",
    description:
      "Creates a list of elements from a list. It receives a map function as its child that receives a list element and an accessor with the index and returns a JSX-Element; if the list is empty, an optional fallback is returned",
    body: `
    <For\${1} each={\${2:list}()} fallback={<div>Loading...</div>}>
      {(\${3:item}) => (
       \${4:<li>{\${5:item.name}\\}</li>}
      )}
    </For>
    `,
  },
  Index: {
    prefix: "SIndex",
    description:
      "Non-keyed iteration over a list creating elements from its items. To be used if you have a list with fixed indices, but changing values. If you have a list with changing indices, better use `<For>`",
    body: `
    <Index\${1} each={\${2:list}()} fallback={<div>Loading...</div>}>
      {(\${3:item}) => (
        \${4:<li>{\${5:item.name}\\}</li>}
      )}
    </Index>
    `,
  },
  Portal: {
    prefix: "SPortal",
    description:
      "Useful for inserting modals and tooltips outside of an cropping layout. If no mount point is given, the portal is inserted in document.body; it is wrapped in a `<div>` unless the target is document.head or `isSVG` is true. setting `useShadow` to true places the element in a shadow root to isolate styles",
    body: `
    <Portal\${1} mount={document.getElementById("\${2}")}>
      \${3:<div>\${4:My Content}</div>}
    </Portal>
    `,
  },
  Show: {
    prefix: "SShow",
    description:
      "Conditionally render its children or an optional fallback componentConditionally render its children or an optional fallback componentConditionally render its children or an optional fallback component",
    body: `
    <Show\${1} when=\${2:state.count > 0} fallback={<div>Loading...</div>}>
      \${3:<div>\$4:My Content}</div>}
    </Show>
    `,
  },
  "Switch / Match": {
    prefix: "SSwitch",
    description:
      "Switches between content based on mutually exclusive conditions. Selects a content based on condition when inside a `Switch` control flow",
    body: `
    <Switch\${1} fallback={<div>Not Found</div>}>
      <Match\${2} when={\${3:state.route === "home"}}>
        \${4:<Home />}
      </Match>
      <Match when={\${5:state.route === "settings"}}>
        \${6:<Settings />}
      </Match>
    </Switch>
    `,
  },
  Suspense: {
    prefix: "SSuspense",
    description:
      "Tracks all resources inside a component and renders a fallback until they are all resolved",
    body: `
    <Suspense\${1} fallback={<div>Loading...</div>}>
      \${2:${TM.selected}}
    </Suspense>
    `,
  },
  SuspenseList: {
    prefix: "SSuspenseList",
    description:
      "**[experimental]** Controls the order in which suspended content is rendered",
    body: `
    <SuspenseList\${1} revealOrder="\${3|forwards,backwards,together|}" tail="\${4|collapsed,hidden|}">
      <Suspense\${2} fallback={<h2>Loading...</h2>}>
        \${5:<div>{resource.user\\}</div>}
      </Suspense>
    </SuspenseList>
    `,
  },
};
