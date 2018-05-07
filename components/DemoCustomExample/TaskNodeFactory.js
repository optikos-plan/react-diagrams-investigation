import * as SRD from "storm-react-diagrams";
import { TaskNodeWidget } from "./TaskNodeWidget";
import { TaskNodeModel } from "./TaskNodeModel";
import * as React from "react";
export class TaskNodeFactory extends SRD.AbstractNodeFactory {
    constructor(props) {
        super("task");
            this.state ={
                title: props, // 
                i: 0
            }

    }
    generateReactWidget(diagramEngine, node) {


        let oldI = this.state.i
            const task = <TaskNodeWidget title={this.state.title[oldI]} node={node} />;
        if (this.state.i < this.state.title.length - 1) {
            this.state.i++
        } else {
            this.state.i = 0
        }
       return task
        
    }
    getNewInstance() {
        return new TaskNodeModel();
    }
}
