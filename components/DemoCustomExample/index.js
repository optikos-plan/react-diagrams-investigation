import {
  DiagramEngine,
  DiagramModel,
  DiagramWidget
} from 'storm-react-diagrams'
import * as React from 'react'

// import the custom models
import { TaskNodeModel } from './TaskNodeModel'
import { TaskNodeFactory } from './TaskNodeFactory'
import { SimplePortFactory } from './SimplePortFactory'
import { TaskPortModel } from './TaskPortModel'
import axios from 'axios'

// we change this to a class wwith a state
// oncomponentDidMount => axios pull data into state
//
import 'storm-react-diagrams/dist/style.min.css'
/**
 * @Author Dylan Vorster
 */
export default class TaskNode extends React.Component {
  constructor() {
    super()

    /*     this.engine = new DiagramEngine()
 *     this.engine.installDefaultFactories()
 *
 *     this.engine.registerPortFactory(
 *       new SimplePortFactory('task', config => new TaskPortModel())
 *     )
 *     this.engine.registerNodeFactory(new TaskNodeFactory(props))
 *
 *     this.model = new DiagramModel() */

    /* const node2 = new TaskNodeModel()
     * node2.setPosition(550, 108) */

    this.state = {
      nodes: [],
      tasks: []
    }

    /*     var node1 = new TaskNodeModel()
 *     var port1 = node1.getPort('bottom')
 *     node1.setPosition(500, 300)
 *
 *     var node2 = new TaskNodeModel()
 *     var port2 = node2.getPort('left')
 *     node2.setPosition(300, 200)
 *
 *     const link = port1.link(port2)
 *     link.addLabel('Hi')
 *
 *     console.log('port1', port1)
 *     console.log('port2', port2)
 *     this.model.addAll(node1, port1, node2, port2, link) */
    this.registerEngineWithTasks()
  }

  registerEngineWithTasks() {
    console.log('state', this.state.tasks)

    if (this.engine === undefined) {
      this.engine = new DiagramEngine()
      this.engine.installDefaultFactories()

      this.engine.registerPortFactory(
        new SimplePortFactory('task', config => new TaskPortModel())
      )

      const taskNames = this.state.tasks.map(task => task.title)
      console.log(taskNames)

      // sets names for generated tasks
      this.engine.registerNodeFactory(new TaskNodeFactory(taskNames))
      this.model = new DiagramModel()
    }

    this.state.tasks.forEach(task => {
      const node = new TaskNodeModel()
      this.model.addNode(node)
    })

    this.engine.setDiagramModel(this.model)
  }

  async componentDidMount() {
    const { data } = await axios.get(
      'https://optikos-data-db.herokuapp.com/api/tasks'
    )
    this.setState({ tasks: data })
    this.registerEngineWithTasks()
  }

  render() {
    return (
      <DiagramWidget
        className="srd-demo-canvas custom"
        diagramEngine={this.engine}
      />
    )
  }
}
