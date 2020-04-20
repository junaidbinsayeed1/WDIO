describe('Getting Started', () => {
    it.skip('Testing with Locators', () => {
        browser.url('/');
        console.log(browser.getUrl());

        $('//*[@id="content"]/ul/li[6]/a').click();
        console.log(browser.getTitle());

        var a = $('//*[@id="checkboxes"]/input[1]');
        console.log('Before clicking checkbox-1 : ' + a.getAttribute('checked'));

        var v = $('#checkboxes > input[type=checkbox]:nth-child(3)');
        console.log('Before clicking checkbox-2 : ' + v.getAttribute('checked'));

        a.click();
        console.log('After clicking checkbox-1 : ' + a.getAttribute('checked'));

        v.click();
        console.log('After clicking checkbox-2 : ' + v.getAttribute('checked'));

        browser.pause(5000);

    })

        it.skip('Testing with Locators-2', () => {
            browser.url('/');
            console.log(browser.getTitle());

            var a = $('#content > ul > li:nth-child(27) > a');
            a.click();
            
            var c = $('//*[@id="content"]/div/div/div/input');
            c.setValue('1234');
            console.log('First attempt : ' + c.getValue());

            c.addValue('5678');
            console.log('Adding value to current numbers : ' + c.getValue());
            c.clearValue();
            
            browser.pause(5000);

        })

        it('Testing with name attribute', () => {
            browser.url('https://www.google.com/');
            var v = $('//*[@id="tsf"]/div[2]/div[1]/div[1]/div/div[2]/input');
            v.setValue('Hello');
            
            browser.pause(5000);

        })
})