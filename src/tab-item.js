import {Component} from "doz";

export default class TabItem extends Component{

    constructor(o) {
        super(o);

        this.props = {
            __is_tab_item: true,
            show: false,
            height: '50px'
        }
    }

    template(h) {
        //language=html
        return h`
            <style> 
                :component {
                    width: 100%;
                    display: ${this.props.show ? 'block' : 'none'};
                    height: ${this.props.height};
                    overflow-y: ${this.props.height === 'auto' ? 'visible' : 'auto'};
                }
            </style>
            <dz-empty/>
        `
    }

};