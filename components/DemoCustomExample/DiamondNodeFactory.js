import * as SRD from "storm-react-diagrams";
import { DiamonNodeWidget } from "./DiamondNodeWidget";
import { DiamondNodeModel } from "./DiamondNodeModel";
import * as React from "react";
export class DiamondNodeFactory extends SRD.AbstractNodeFactory {
    constructor(props) {
        super("diamond");
            this.state ={
                title: props // 
            }

    }
    generateReactWidget(diagramEngine, node) {
        if (this.state.title[this.state.title.length - 1]) {
            console.log("sending out diamondwidgets", this.state.title[this.state.title.length - 1])
           
            return <DiamonNodeWidget title={this.state.title[this.state.title.length - 1]} node={node}/>;
        }
        
       this.setState({ title: ["Title WORKS!"]})
   
        
    }
    getNewInstance() {
        return new DiamondNodeModel();
    }
}
