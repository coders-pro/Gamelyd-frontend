

export const User = () => {
   const saveUserDetailsToLocalStorage = (userDetails: any) => {
        // Save user details in local storage
        localStorage.setItem('userDetails', JSON.stringify(userDetails));  
      
        return {
          type: 'SAVE_USER_DETAILS_TO_LOCAL_STORAGE',
          payload: userDetails,
        };
      };
      
     const returnUserFromLocalstorage = () => {
       const user = JSON.parse(localStorage.getItem('userDetails') || '{}')
      
       return user
      }

      return {
       save: saveUserDetailsToLocalStorage,
       get:  returnUserFromLocalstorage
      }
}