# Better practices in react

> [!NOTE]
> This project is about a gif search app but (using **[Giphy API](https://developers.giphy.com/docs/sdk)**), the most important is optimization and factoring applied.

## Introduction

we often think of rendering as simply painting the DOM with its new changes, be it done by state, props, re-renders. But this implies much more.

**Virtual DOM:** representation of DOM saved in memory an internal calculation occurs to render as few changes as possible to DOM this doesn't mean that is always good or bad. Sometimes the calculation process is high due to our optimization mishandling.

So the **rendering**: is react engine process that walking the virtual DOM and collect the current state, structure, the desired changes in the user interface, etc. Then react update the virtual DOM using some calculate and also comparate the new result with the actual DOM. This calculation and comparision is officially called like **reconciliation**.

> [!IMPORTANT]
> So we conclude that rendering is a complex process in which we can mess up the optimization of our app.

## Tips

Use the extension [react-developer-tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es) to see all the tools it offers like **Components**: Here we can see the react's component tree basically its structure with hooks, props, children and parents. All the information about components.
This serves to know which component is rendered and affected their children or the app itself.

**Profiler**: maybe the above said we ask how i know when affect said component?. This tool serves to check how long it takes to load, also explains why it has rendered.

> [!IMPORTANT]
> To avoid the re-renders we can use some hooks like **useMemo**, **memo** and **useCallback** [links](https://es.reactjs.org/docs/hooks-reference.html)

Sometimes rendering is unavoidable to happen because hooks can slow it down. It's not as easy as saying "it's done rendering so i use these hooks". They use calculations to not re-render!
