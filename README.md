# Plan
1. Show nodes
2. Show connection between nodes
3. Modify text inside of nodes
4. Create own node
5. Connect own nodes

## Takeaways
- Documentation was incomplete
- Be careful... everything is written in TS
- CSS needs to be imported
- If nothing displays, check height

## Documentation
- What is a scene graph? URL: https://en.wikipedia.org/wiki/Scene_graph
- MVC URL: https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller
- Project Storm Arquitecture Questions: https://github.com/projectstorm/react-diagrams/blob/master/docs/Architecture%20Questions.md
- Demos: http://www.projectstorm.io/react-diagrams/?selectedKind=Simple%20Usage&selectedStory=Simple%20example&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybook%2Fcode%2Fpanel
- Node remaining example: https://github.com/projectstorm/react-diagrams/issues/50
- Another example*: https://github.com/adventure-weave/web-editor/blob/master/src/widgets/SceneNodeWidget.tsx

## Method to create custom node
* What do arguments inside super() do?

1. Create SimplePortFactory
  - constructor
  - getNewInstance()
2. Create MainPortModel
  - constructor
  - serialize()
  - deSerialize()
  - createLinkModel()
  - What are the serialize and deSerialize methods doing?
3. Create MainNodeFactory
  - constructor
  - generateReactWidget(diagramEngine, node)
  - getNewInstance()
4. Create MainNodeWidget
  - constructor
  - renders
  - What is `<g>` and what is `<polygon />`
5. Create MainNodeModel
  - constructor
