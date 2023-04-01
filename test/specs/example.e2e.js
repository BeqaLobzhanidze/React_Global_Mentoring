describe('My Search Component', () => {
    it('when I will click Search button after typing something inside input', () => {
        browser.url(`./`)

        $('input').setValue('typeSomething')
        $('button[type="submit"]').click()
        expect($('#forTesting')).toHaveTextContaining('typeSomething')
    })
})

