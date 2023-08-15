<script>
	import { isLoggedIn } from '../stores';
    let buttonText;
    let isLoggedInValue;

    isLoggedIn.subscribe((value) => {
        isLoggedInValue = value;
	});

    checkText();

    function checkText(){
        if(isLoggedInValue == 0){
            buttonText = "Login"
            isLoggedIn.set(1)
        } else{
            buttonText = "Logout"
            isLoggedIn.set(0)
        }
    }
	
    function login() {
        
        checkText();
    // if (buttonText == "Login"){
    //     buttonText = "Logout"
    //     isLoggedIn.set("Logout")        
    // } else {
    //     buttonText = "Login"
    //     isLoggedIn.set("Login")
    // }

    //     isLoggedIn.subscribe((value) => {
    //         isLoggedInValue = value;
	// });
        // if(isLoggedInValue == 0){
        //     buttonText = "Login"
        //     isLoggedIn.set(1)
        // } else{
        //     buttonText = "Logout"
        //     isLoggedIn.set(0)

        // }

	}
</script>

<button on:click={login}> {buttonText} </button>