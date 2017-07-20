/* Merlin Control Panel 2017 */
/* 

Changelog:

30/06/2017 - Created


*/

function Business() {
    this.BusinessID = 0;
    this.BusinessName = "";
    this.CreateDate = "";
    this.TrialEnds = "";
    this.Email = "";
    this.Plan = "";  
}


class BusinessMgr {
    constructor() {
     
    }             
    
    GetAll(searchCriteria, accountType, dateFrom, dateTo) {

        var businessList = new Array();
        var accountMgr = new AccountMgr();
        var loginResult = new LoginResult();

        var data = "searchCriteria=" + searchCriteria + "&accountType=" + accountType + "&accountType=" + accountType + "&dateFrom=" + dateFrom + "&dateTo=" + dateTo
        loginResult = accountMgr.GetAccount()

        $.ajax({
            url: url + 'api/' + loginResult.Token + '/business/' + loginResult.StaffID,
            type: 'POST',
            data: data,
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
