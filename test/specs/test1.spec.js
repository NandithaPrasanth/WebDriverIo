/*Login page
*/


describe('Demo Tests', function () {

    it('My first test', async function () {
        browser.url('https://test10.exodusvacations.in/')

    


        await $('[name="userName"]').setValue('Admin')
        await $('[name="password"]').setValue('1234')
        browser.pause(2000)
        await $('[class="btn btn-success"]').click()

        browser.pause(4000)


    })
})