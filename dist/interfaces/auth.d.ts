export interface EmailAuthEmailUpdate {
    full_name: string;
    old_email_address: string;
    new_email_address: string;
    email_verification_link: string;
}
export interface EmailAuthResetPassword {
    full_name: string;
    email_address: string;
    reset_password_link: string;
}
export interface EmailAuthSignIn {
    full_name: string;
    sign_in_device: string;
    sign_in_date: string;
    sign_in_ip_address: string;
    sign_in_location: string;
}
export interface EmailAuthSignUp {
    first_name: string;
    email_verification_link: string;
}
