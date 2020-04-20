const PageObjectModel = require('./Page Object Model/pageobjectmodel.page')

describe('Getting Stared', () => {
    it('With Page Object Model', () => {
        browser.url('/');

        console.log('Main Heading Text is : ' + PageObjectModel.HeadingText.getText());
        console.log('Sub-Heading Text is : ' + PageObjectModel.subHeadingText.getText());
    })

})