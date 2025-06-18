export default function AppContact(){
    return(
        <section>
            <h2 className="title">Contact Us</h2>
            <div className="subtitle">Reach out for more details</div>
            <div>
<input type="alphabet" id="email-id" name="Full Name" class="input__email" placeholder="Full Name.." required=""></input>
<input type="email" id="email-id" name="email-id" class="input__email" placeholder="Email Id.." required=""></input>
<input type="tel" id="email-id" name="Phone Number" class="input__email" placeholder="Phone Number.." required=""></input>
<textarea id="email-id" name="message" class="inputarea" placeholder="Enter your message here" required></textarea>
<center>
<button className="btns">Submit</button>
</center>


            </div>
            
        </section>
    )
}