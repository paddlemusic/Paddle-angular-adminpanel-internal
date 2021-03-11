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

    getSignupAnalytics : adminUrl + '/analytics/getSignups',
    getAppUsageAnalytics : adminUrl + '/analytics/getAppUsageTime'
//     http://localhost:3000/paddle/api/v1/admin/analytics/getTotalSharesLikes?media_type=1&university_id=1
// ek ye hai
//     http://localhost:3000/paddle/api/v1/admin/analytics/getMonthlyShareslikes?university_id=1&month=2&media_type=1&year=2021
// dusra ye




//     fileUPload: '/upload_data_on_s3',
//     addCategory: '/admin/add_category',
//     fetchCategory: '/admin/fetch_category',
//     deleteCategory: '/admin/delete_category',
//     editCategory: '/admin/edit_category',

//     addBrand: '/admin/add_brand',
//     fetchBrand: '/admin/fetch_brand',
//     deleteBrand: '/admin/delete_brand',
//     editBrand: '/admin/edit_brand',

//     fetchProducts: '/admin/fetch_product',

//     fetchSellers: '/admin/fetch_sellers',

//     fetchSubAdmins: '/admin/fetch_sub_admin',
//     fetchOneAdmin: '/admin/fetch_particular_sub_admin',
//     editSubAdmin: '/admin/edit_sub_admin',
//     deleteSubAdmin: '/admin/delete_sub_admin',
//     addSubAdmin: '/admin/add_sub_admin',

//     forgetPassPhoneNo: '/forget_password',
//     forgetPassOtp: '/verify_phone_number',
//     setNewPassword: '/verify_otp',
//     fetchCustomers: '/admin/fetch_customer'

}