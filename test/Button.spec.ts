import 'chai';
import { expect } from 'chai';
import 'mocha';
import { Button } from '../src/Button';


describe('test Button', () => {
    it('button should have correct x,y,height,width', () => {
        const button: Button = new Button(0,0,1,1)
        expect(button.x).to.equal(0)
        expect(button.y).to.equal(0)
        expect(button.width).to.equal(1)
        expect(button.height).to.equal(1)
    })
})