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
    getUniversity : adminUrl+'/university/getUniversities',
    uploadFile : adminUrl + '/upload',
    editAdminDetails : adminUrl + '/editDetails', 

    forgotPassword : ''


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