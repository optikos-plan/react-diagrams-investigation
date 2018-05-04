import * as SRD from "storm-react-diagrams";
import { DiamonNodeWidget } from "./DiamondNodeWidget";
import { DiamondNodeModel } from "./DiamondNodeModel";
import * as React from "react";
export class DiamondNodeFactory extends SRD.AbstractNodeFactory {
    constructor(props) {
        super("diamond");
            this.state ={
                title: props, // 
                i: 0
            }

    }
    generateReactWidget(diagramEngine, node) {


        let oldI = this.state.i
            const diamond = <DiamonNodeWidget title={this.state.title[oldI]} node={node} />;
        if (this.state.i < 2) {
            this.state.i++
        } else {
            this.state.i = 0
        }
       return diamond

        
    //    this.setState({ title: ["Title WORKS!"]})
    //    console.log("state", this.state.title)
   
        
    }
    getNewInstance() {
        return new DiamondNodeModel();
    }
}
