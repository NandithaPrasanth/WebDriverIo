const loginPage = require('../pages/login.page')


describe('Demo Test', () =>{

    it('Login Test', async() => {
        browser.url('https://test10.exodusvacations.in')

        await loginPage.login('Admin', '1234')
       
        expect(browser).toHaveTitle('Axobis Restaurant - ')
        // await $('#userName').setValue('Admin')

        // await $('#password').setValue('1234')

        // await $('button[class="btn btn-success"]').click()

    })
})