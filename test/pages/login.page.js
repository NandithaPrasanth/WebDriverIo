
class LoginPage{

    get userNameTextBox(){

        return $('#userName')
    }

    get passwordTextBox(){

        return $('#password')
    
    }
    get loginButton(){
        
        return $('button[class="btn btn-success"]')
    }

    // enterUserName(){}-----We can create a atomic functions like this
    // enterPassword(){}
    // click(){}
    // or

   async login(username,pass){

        await this.userNameTextBox.setValue(username)
        await this.passwordTextBox.setValue(pass)
        await this.loginButton.click()

    }
    
}

module.exports=new LoginPage()