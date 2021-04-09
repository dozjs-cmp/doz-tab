# doz-tab
A simple tab component

## Install
```
npm install doz-tab
```

Live <a href="https://dozjs-cmp.github.io/doz-tab/dist/index.html">here</a>

### Example
```javascript
    import Doz from 'doz'
    import 'doz-tab'

    new Doz({
        root: '#app',
        template(h) {
            return h`
                <doz-tab buttons-position="bottom">
                    <doz-tab-item title="Mon">Content first</doz-tab-item>
                    <doz-tab-item title="Tue">content second</doz-tab-item>
                    <doz-tab-item title="Wed">content third</doz-tab-item>
                    <doz-tab-item title="Thu">content fourth</doz-tab-item>
                    <doz-tab-item title="Fri">content fifth</doz-tab-item>
                    <doz-tab-item title="Sat">content sixth</doz-tab-item>
                    <doz-tab-item title="Sun">content seventh</doz-tab-item>
                </doz-tab>
            `
        }
    });
```

## Props
| Name | Default | Description |
| ---- | ------- | ----------- |
| initial | 0 | Initial tab item selected |
| height | 200px | Body height |
| buttons-position | top | The buttons position ca be top or bottom |
| buttons-size | large | The buttons size can be small or large |
| buttons-wrap | false | If the value is true the container sets the css property flex-wrap to wrap|
| body-background-color | #eee | Body background color |
| button-color | #000 | Button color |
| button-background-color | #ccc | Button background color |
| button-hover-color | #fff | Button hover color |
| button-hover-background-color | #444 | Button hover background color |
| button-selected-color | #fff | Button selected color |
| button-selected-background-color | #888 | Button selected background color |

## Web Component
### Exposed methods
- selectTabItem(index)

#### CDN unpkg
```html
<script src="https://unpkg.com/doz-tab/dist/bundle.min.js"></script>
```

## Changelog
You can view the changelog <a target="_blank" href="https://github.com/dozjs-cmp/doz-tab/blob/master/CHANGELOG.md">here</a>

## License
doz-tab is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>