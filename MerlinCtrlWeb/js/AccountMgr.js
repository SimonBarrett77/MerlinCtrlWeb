/* Merlin Control Panel 2017 */
/* 

Changelog:

30/06/2017 - Created


*/

function LoginResult() {
    this.Success = 0;
    this.Token = "";
    this.StaffID = 0;
    this.AccountPackage = "";
    this.DebugMode = false;
    this.Currency = "";
    this.EmailAddress = "";
    this.CreateDate = "";
    this.LastActive = new Date();
    this.IsCtrlCentreLogin = false;
}

function UserAuth() {
    this.ID = 0;
    this.UserToken;
    this.Email = "";
    this.Password = "";
    this.IP = "";
    this.PWResetCode = "";
}

class AccountMgr {
    constructor() {

    }

    // Athenticate a user, if successful fill loginReult.
    // params:  email and password.
    // return:  loginResult object.
    Authenticate(email, password) {
        var loginResult = new LoginResult();
        var userAuth = new UserAuth();
        var token = "";

        userAuth.Email = email;
        userAuth.Password = password;

        if (email !== "" && password !== "") {
            $.ajax({
                url: url + 'api/account/login',
                type: 'POST',
                dataType: 'json',
                data: userAuth,
                async: false,
                cache: false,
                success: function (result) {
                    if (result.Success) {
                        loginResult = result;                        
                        loginResult.LastActive = new Date();
                        localStorage.setItem("loginResult", JSON.stringify(loginResult));
                    }
                }
            });
        }
        return loginResult;
    }

    Validate() {
        var loginResult = JSON.parse(localStorage.getItem("loginResult"));

        if (loginResult != null) {
            var lastActive = new Date(loginResult.LastActive);
            var secondsPassed = Math.abs(Math.round((lastActive - Date.now()) / (1000)));
            var timeout =  (20 * 60) // 20 Minutes

            if (secondsPassed < timeout) {
                // Set last active date to now
                loginResult.LastActive = new Date();
                localStorage.setItem("loginResult", JSON.stringify(loginResult));
                return true;
            }
        }
        return false;
    }

    GetAccount() {
        var loginResult = JSON.parse(localStorage.getItem("loginResult"));

        if (!loginResult) {
            location.href = 'signin.cshtml?do=sessionexpired';
        }

        return loginResult
    }
  
}



