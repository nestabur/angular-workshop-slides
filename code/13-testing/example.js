describe('Angular Workshop Address Book', function() {
    it(
        'should show a contact detail page when a contact was selected',
        function() {
            browser.get('http://localhost:8088/');
            element(by.model('contacts')).click();

            expect(browser.getCurrentUrl()).toContain('/detail/1');
        }
    );
});