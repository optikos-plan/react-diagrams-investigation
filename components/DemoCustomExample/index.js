import { DiagramEngine, DiagramModel, DefaultNodeModel, DiagramWidget } from "storm-react-diagrams";
import * as React from "react";
// import the custom models
import { DiamondNodeModel } from "./DiamondNodeModel";
import { DiamondNodeFactory } from "./DiamondNodeFactory";
import { SimplePortFactory } from "./SimplePortFactory";
import { DiamondPortModel } from "./DiamondPortModel";
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
        
        this.engine = new DiagramEngine();
        this.engine.installDefaultFactories();
        
        this.engine.registerPortFactory(new SimplePortFactory("diamond", config => new DiamondPortModel()));
        this.engine.registerNodeFactory(new DiamondNodeFactory(props));
        
        this.model = new DiagramModel();
        
        
        const node2 = new DiamondNodeModel();
        node2.setPosition(250, 108);
     
                        this.state = {
                            nodes: [node2],
                            tasks: [{
                                "id": 1,
                                "startDate": null,
                                "endDate": null,
                                "status": "pending",
                                "title": "First task",
                                "description": "Testing associations",
                                "createdAt": "2018-05-04T15:39:32.240Z",
                                "updatedAt": "2018-05-04T15:39:32.240Z",
                                "projectId": 1,
                                "userId": 1,
                                "project": {
                                "id": 1,
                                "title": "Project 1",
                                "createdAt": "2018-05-04T15:39:32.232Z",
                                "updatedAt": "2018-05-04T15:39:32.232Z"
                                }}, {}, {}]
                        }
   
 
    //4) add the models to the root graph
    this.state.tasks.map( task => {
        console.log(task.title) 
        return this.model.addAll(new DiamondNodeModel()
    )})
    //5) load model into engine
    this.engine.setDiagramModel(this.model);
    }

    async componentDidMount() {
        const {data} = await axios.get('https://optikos-data-db.herokuapp.com/api/tasks')
        console.log("this is the data from async", data)

    }
  
    render() {
    return (<DiagramWidget className="srd-demo-canvas custom" diagramEngine={this.engine}/>)
    }
}
