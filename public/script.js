
document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById("login");
    const res = document.getElementById("respuesta");

    form.addEventListener("submit", async (event)=>{
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        

        try {
            const response = await fetch("/login", {
                method: "post",
                headers: { 
                    'Content-Type': 'application/json' 
                }, 
                body: JSON.stringify({ 
                    username,
                    password
                })
            })
            res.style.display = "block";
            if(response.status === 200){
                res.innerText = await response.text();
            }else{
                throw new Error("Error");
            }
        }catch(error){
            res.innerText = error;
        }
    });
});