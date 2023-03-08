function ContactPage() { 
    return (
        <section>
            <h2 class="contact_heading">Get in touch with us</h2>

            <div class="container">
                <form>
                    <label for="name">Name</label>
                    <input type="text" id="fname" name="cname" placeholder="Enter Your Name" />

                    <label for="email">Email</label>
                    <input type="email" id="email" name="cemail" placeholder="Enter Your Email" /><br/>

                    <label for="number">Mobile No</label>
                    <input type="number" id="number" name="cmobile" placeholder="Enter Your Mobile Number" />
                    <br/>

                    <label for="subject">Subject</label>
                    <textarea id="subject" name="csubject" placeholder="Write something.."></textarea>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </section>
    )
};

export default ContactPage;