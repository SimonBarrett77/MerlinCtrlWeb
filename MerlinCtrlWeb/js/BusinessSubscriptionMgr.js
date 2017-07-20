/* Merlin Control Panel 2017 */
/* 

Changelog:

30/06/2017 - Created


*/

function BusinessSubscription() {
    this.BusinessID = 0;
    this.BusinessName = "";
    this.CreateDate = "";
    this.ValidFrom = "";
    this.ValidTo = "";
    this.TrialDays = "";
    this.LoginEmail = "";
    this.AccountPackage = "";  
}


class BusinessSubscriptionMgr {
    constructor() {
     
    }             
    
    GetAll(searchCriteria, accountType, dateFrom, dateTo) {

        var businessList = new Array();
        var accountMgr = new AccountMgr();
        var loginResult = new LoginResult();

        loginResult = accountMgr.GetAccount()

        $.ajax({
            url: url + 'api/' + loginResult.Token + '/businesssubscription/' + loginResult.StaffID,
            type: 'POST',
            dataType: 'json',
            async: false,
            cache: false,
            success: function (data, textStatus, xhr) {                
                businessList = data; 
                
            }
        });


      
        return businessList;
    }

    // Gets a single instance
    Get(id) {
        var business = new Business();


        if (business.id == id) {

        }

        return business;
    }
}
