import { NodeModel } from "storm-react-diagrams";
import { TaskPortModel } from "./TaskPortModel";
export class TaskNodeModel extends NodeModel {
    constructor() {
        super("task");
        this.addPort(new TaskPortModel("top"));
        this.addPort(new TaskPortModel("left"));
        this.addPort(new TaskPortModel("bottom"));
        this.addPort(new TaskPortModel("right"));
    }
}
