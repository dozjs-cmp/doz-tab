import {Component} from "doz";

export default class Tab extends Component {

    constructor(o) {
        super(o);

        this.props = {
            items: [],
            initial: 0,
            buttonsPosition: 'top', //top|left|right|bottom
            buttonsWrap: false,
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
        let isVertical = this.props.buttonsPosition === 'left' || this.props.buttonsPosition === 'right';
        //language=html
        return h`
            <div class="tab-controller">
                <style>
                    * {
                        box-sizing: border-box;
                    }

                    :component {
                        ${isVertical
                                ? `
                                display: flex;
                                flex-direction: ${this.props.buttonsPosition === 'left' ? 'row-reverse' : 'row'} ;
                            `
                                : `
                                display: flex;
                                flex-wrap: wrap;
                                flex-direction: ${this.props.buttonsPosition === 'top' ? 'column-reverse' : 'column'};
                            `
                        }

                        background: ${this.props.bodyBackgroundColor};
                    }

                    .tab-controller {
                        ${isVertical
                                ? ``
                                : `width: 100%;`
                        }
                    }

                    ul.tab-buttons {
                        display: flex;
                        flex: 1;
                        flex-wrap: ${this.props.buttonsWrap ? 'wrap' : 'nowrap'};
                        flex-direction: ${isVertical ? 'column' : 'unset'};
                        justify-content: stretch;

                        padding: 0;
                        margin: 0;
                        list-style: none;
                        overflow: auto;
                        user-select: none;
                    }

                    .tab-buttons li {
                        cursor: pointer;
                        flex: 1;
                        padding: ${this.props.buttonsSize === 'large' ? '16px' : '8px'};
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

                    /*.tab-buttons li.focus {*/
                    /*    outline: 1px solid inherit;*/
                    /*    background: red;*/
                    /*}*/
                </style>
                <ul class="tab-buttons">
                    ${this.props.items.map((item, i) => h`
                        <li forceupdate class="${item.selected ? 'selected' : ''}" onkeydown="${(event) => {
                        if (event.key === "Enter" || event.key === " ") { // Supporta anche lo Space
                            event.preventDefault(); // Evita comportamenti predefiniti (es. scroll con Space)
                            this.selectTabItem(i)
                        }
                    }}" onclick="${() => this.selectTabItem(i)}">
                            ${typeof item.title === 'function' ? h`<${item.title}/>` : item.title}
                        </li>
                    `)}
                </ul>
            </div>
        `
    }

    onUpdate() {
        setTimeout(() => {
            document.querySelectorAll('.tab-buttons li').forEach((item) => {
                item.setAttribute('tabindex', '0');
                if (item.classList.contains('selected')) {
                    item.focus()
                }
            });
        }, 100)
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
            tabItem = itemComponents[i];
            if (!tabItem.props.__is_tab_item) continue;
            isSelected = i === index;
            tabItem.props.show = isSelected;
            this.props.items[i].selected = isSelected;
        }

        /*setTimeout(() => {
            const elSelected = document.querySelector('.tab-buttons .selected');
            if (elSelected) {
                elSelected.scrollIntoView();
            }
        })*/
    }

};