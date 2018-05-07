import {
  DiagramEngine,
  DiagramModel,
  DefaultNodeModel,
  DiagramWidget
} from 'storm-react-diagrams'
import * as React from 'react'
// import the custom models
import { DiamondNodeModel } from './DiamondNodeModel'
import { DiamondNodeFactory } from './DiamondNodeFactory'
import { SimplePortFactory } from './SimplePortFactory'
import { DiamondPortModel } from './DiamondPortModel'
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
      new SimplePortFactory('diamond', config => new DiamondPortModel())
    )
    this.engine.registerNodeFactory(new DiamondNodeFactory(props))

    this.model = new DiagramModel()

    /* const node2 = new DiamondNodeModel()
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

    //4) add the models to the root graph

    /* const t1 = new DiamondNodeModel()
     * t1.setPosition(500, 300)
     * const t2 = new DiamondNodeModel()
     * t2.setPosition(400, 200)
     * const portOut = t1.getPort('bottom')
     * console.log(portOut)
     * const portIn = t2.getPort('top')
     * const link = portOut.link(portIn)
     * this.model.addAll(t1, t2, link) */

    // var node1 = new DefaultNodeModel('Node 1', 'rgb(0,192,255)')
    // var port1 = node1.addOutPort('Out')
    var node1 = new DiamondNodeModel()
    var port1 = node1.getPort('bottom')
    node1.setPosition(500, 300)

    // var node2 = new DefaultNodeModel('Node 2', 'rgb(0,192,255)')
    // var port2 = node2.addInPort('In')
    var node2 = new DiamondNodeModel()
    var port2 = node2.getPort('top')
    node2.setPosition(300, 200)

    const link = port1.addLink(port2)
    link.addLabel('Hi')

    console.log('port1 can link to port', port1.canLinkToPort(port2))
    console.log('link', link)

    console.log('port1', port1)
    console.log('port2', port2)
    this.model.addAll(node1, port1, node2, port2, link)

    /* this.state.tasks.map((task, i) => {
     *   console.log(task.title)
     *   const newTask = new DiamondNodeModel()
     *   newTask.setPosition(500, 500 - i * 100)
     *   return this.model.addAll(newTask)
     * }) */

    //5) load model into engine
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
