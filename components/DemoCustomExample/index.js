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

const props = ['Title 1', 'Title 2', 'Title 3']

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

    this.engine = new DiagramEngine()
    this.engine.installDefaultFactories()

    this.engine.registerPortFactory(
      new SimplePortFactory('task', config => new TaskPortModel())
    )
    this.engine.registerNodeFactory(new TaskNodeFactory(props))

    this.model = new DiagramModel()

    /* const node2 = new TaskNodeModel()
     * node2.setPosition(550, 108) */

    this.state = {
      nodes: [
        /*node2*/
      ],
      tasks: [
        {
          id: 1,
          startDate: null,
          endDate: null,
          status: 'pending',
          title: 'First task',
          description: 'Testing associations',
          createdAt: '2018-05-04T15:39:32.240Z',
          updatedAt: '2018-05-04T15:39:32.240Z',
          projectId: 1,
          userId: 1,
          project: {
            id: 1,
            title: 'Project 1',
            createdAt: '2018-05-04T15:39:32.232Z',
            updatedAt: '2018-05-04T15:39:32.232Z'
          }
        },
        {},
        {}
      ]
    }
 
    var node1 = new TaskNodeModel()
    var port1 = node1.getPort('bottom')
    node1.setPosition(500, 300)


    var node2 = new TaskNodeModel()
    var port2 = node2.getPort('left')
    node2.setPosition(300, 200)

    const link = port1.link(port2)
    link.addLabel('Hi')

    console.log('port1', port1)
    console.log('port2', port2)
    this.model.addAll(node1, port1, node2, port2, link)


    this.engine.setDiagramModel(this.model)
  }

  async componentDidMount() {
    const { data } = await axios.get(
      'https://optikos-data-db.herokuapp.com/api/tasks'
    )
    console.log('this is the data from async', data)
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
