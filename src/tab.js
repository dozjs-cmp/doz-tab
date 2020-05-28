import {Component} from "doz";

export default class extends Component{

    constructor(o) {
        super(o);

        this.props = {
            items: [],
            initial: 0,
            buttonsPosition: 'top',
            height: '200px',
            buttonsSize: 'large',
            bodyBackgroundColor: '#eee',
            buttonColor: '#000',
            buttonBackgroundColor: '#ccc',
            buttonHoverColor: '#fff',
            buttonHoverBackgroundColor: '#444',
            buttonSelectedColor: '#fff',
            buttonSelectedBackgroundColor: '#888'
        };

        this.propsType = {
            initial: 'number'
        }
    }

    template(h) {
        return h`
            <div class="tab-controller">
                <style> 
                    * {
                        box-sizing: border-box;
                    }
                    
                    :component {
                        display: flex;
                        flex-wrap: wrap;
                        flex-direction: ${this.props.buttonsPosition === 'top' ? 'column-reverse' : 'column' };
                        background: ${this.props.bodyBackgroundColor};
                    }

                    .tab-controller {
                        width: 100%;
                    }
                    
                    ul.tab-buttons {
                        display: flex;
                        flex: 1;
                        padding: 0;
                        margin: 0;
                        list-style: none;
                        justify-content: stretch;
                        flex-wrap: wrap;
                        user-select: none;
                    }
                    
                    .tab-buttons li {
                        cursor: pointer;
                        flex: 1;
                        padding: ${this.props.buttonsSize === 'large' ? '16px' : '8px'} ;
                        color: ${this.props.buttonColor};
                        background: ${this.props.buttonBackgroundColor};
                        text-align: center;
                        text-transform: uppercase;
                        font-size: ${this.props.buttonSize === 'large' ? '14px' : '12px'};
                        font-weight: bold;
                    }
                    
                    .tab-buttons li:hover {
                        color: ${this.props.buttonHoverColor};
                        background: ${this.props.buttonHoverBackgroundColor};
                    }
                    
                    .tab-buttons li.selected {
                        color: ${this.props.buttonSelectedColor};
                        background: ${this.props.buttonSelectedBackgroundColor};
                    }
                </style>
                <ul class="tab-buttons">
                    ${this.props.items.map((item, i) => h`
                        <li forceupdate class="${item.selected ? 'selected' : ''}" onclick="${() => this.selectTabItem(i)}">${item.title}</li>
                    `)}
                </ul>
            </div>
        `
    }

    onMountAsync() {
        let itemComponents = Object.values(this.children);
        let tabItem;
        for (let i = 0; i < itemComponents.length; i++) {
            tabItem = itemComponents[i];
            tabItem.props.height = this.props.height;
            this.props.items.push({
                title: tabItem.props.title,
                selected: false
            });
        }
        this.selectTabItem(this.props.initial);
    }

    selectTabItem(index) {
        let itemComponents = Object.values(this.children);
        let tabItem;
        let isSelected;
        for (let i = 0; i < itemComponents.length; i++) {
            isSelected = i === index;
            tabItem = itemComponents[i];
            tabItem.props.show = isSelected;
            this.props.items[i].selected  = isSelected;
        }
    }

};