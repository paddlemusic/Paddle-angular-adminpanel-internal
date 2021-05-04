const adminUrl = '/paddle/api/v1/admin'
const userUrl = '/paddle/api/v1'
export const apiUrls = {
    login: adminUrl+'/login',
    logout: adminUrl+'/logout',
    adminProfile:adminUrl+'/viewAdminProfile',
    changePassword : adminUrl + '/changePassword',
    userSearch : adminUrl + '/userSearch',
    userProfile : adminUrl+'/getUsers',
    viewUserProfile : adminUrl + '/viewUserProfile',
    viewAdminProfile : adminUrl + '/viewAdminProfile',
    blockUnblock : adminUrl + '/blockUnblock',

    addUniversity : adminUrl+'/university/addUniversity',
    deleteUniversity : adminUrl+'/university/deleteUniversity',
    getUniversities : adminUrl+'/university/getUniversities',
    editUniversity : adminUrl+'/university/editUniversity',
    getUniversity : adminUrl+'/university/viewUniversity',
    activateDeactivateUniversity : adminUrl+'/university',

    uploadFile : adminUrl + '/upload',
    editAdminDetails : adminUrl + '/editDetails',
    forgotPassword : adminUrl + '/forgotPassword',
    resetPassword : adminUrl + '/resetPassword',
    getSongList : adminUrl + '/songs/getsongs',

    getMonthlyStreamData : adminUrl + '/analytics/getstreamStats',
    getTotalStreamData : adminUrl + '/analytics/getstreamStats',

    getMonthlyLikeShareData : adminUrl + '/analytics/getShareLike',
    getTotalLikeShareData : adminUrl + '/analytics/getShareLike',

    getMonthlyShareData : adminUrl + '/analytics/getShareAnalytics',
    getTotalShareData : adminUrl + '/analytics/getShareAnalytics',
    
    getSignupAnalytics : adminUrl + '/analytics/getSignups',
    getAppUsageAnalytics : adminUrl + '/analytics/getAppUsageTime',
    getpostAnalytics : adminUrl + '/analytics/userPostDataAnalytics',
     manageSongs : adminUrl + '/songs/songsViaUniversity',
     getAppOpenData : adminUrl + '/analytics/getAppOpenData',
     getWeeklyAppOpenData : adminUrl + '/analytics/getWeeklyAppOpenData'




}