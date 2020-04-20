const PageObejectModel = require('../Practice/Page Object Model/pageobjectmodel.page');
const assert = require('assert');

describe('Getting Started', () => {
    it('With Assertion', () => {
        browser.url('/');
        console.log('Page Heading is : ' + PageObejectModel.HeadingText.getText());
        assert.equal(PageObejectModel.HeadingText.getText(),'Welcome to the-internet','Heading does not match');

    })

})