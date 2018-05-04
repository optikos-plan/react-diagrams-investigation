import * as React from "react";
import { PortWidget } from "storm-react-diagrams";
/**
 * @author Dylan Vorster
 */
export class DiamonNodeWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (<div className={"diamond-node"} style={{
            position: "relative",
            width: this.props.size,
            height: this.props.size/2
        }}>
        {/* <input type="text" style={{"position": "relative", top: 100}} /> */}
				<svg width={this.props.size} height={this.props.size/2} dangerouslySetInnerHTML={{
            __html: `
          <g id="Layer_1">
          </g>
          <g id="Layer_2">
          <rect fill="grey" x="0" y="0" rx="10" ry="10" width="${this.props.size}" height="${this.props.size/2}"/>
          </g>
        `
        }}/>
				<div id="test" style={{
            position: "absolute",
            zIndex: 10,
            top: this.props.size / 4 - 8,
            left: -8
        }}>
					<PortWidget name="left" node={this.props.node}/>
				</div>
				<div style={{
            position: "absolute",
            zIndex: 10,
            left: this.props.size / 2 - 8,
            top: -8
        }}>
					<PortWidget name="top" node={this.props.node}/>
				</div>
				<div style={{
            position: "absolute",
            zIndex: 10,
            left: this.props.size - 8,
            top: this.props.size / 4 - 8
        }}>
					<PortWidget name="right" node={this.props.node}/>
				</div>
				<div style={{
            position: "absolute",
            zIndex: 10,
            left: this.props.size / 2 - 8,
            top: this.props.size / 2 - 8
        }}>
					<PortWidget name="bottom" node={this.props.node}/>
				</div>
			</div>);
    }
}
DiamonNodeWidget.defaultProps = {
    size: 150,
    node: null
};
