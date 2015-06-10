angular.module('starter')

.constant('AUTH_EVENTS', {
    nonAuthenticated: 'auth-not-authenticated',
    nonAuthorized: 'auth-not-authorized'
})

.constant('USER_ROLES', {
    admin:'admin_role',
    public: 'public_role'
});