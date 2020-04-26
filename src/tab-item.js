import {Component} from "doz";

export default class extends Component{

    constructor(o) {
        super(o);

        this.props = {
            show: false,
            height: '50px'
        }
    }

    template(h) {
        return h`
            <style> 
                :component {
                    display: ${this.props.show ? 'block' : 'none'};
                    height: ${this.props.height};
                    overflow-y: auto;
                }
            </style>
            <dz-empty/>
        `
    }

};