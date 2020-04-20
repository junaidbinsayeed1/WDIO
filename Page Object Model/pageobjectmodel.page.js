class PageObjectModel
{
    get HeadingText()
    {
        return $('#content > h1');
    }

    get subHeadingText()
    {
        return $('//*[@id="content"]/h2');
    }
}

module.exports = new PageObjectModel();