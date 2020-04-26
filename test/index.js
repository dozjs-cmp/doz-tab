import Component from '../src/tab'
import {assert} from 'chai'

describe('my-test', function () {

    beforeEach(function () {
        document.body.innerHTML = '';
    });

    it('should an object', function () {
        assert.typeOf(Component, 'function');
    });

});