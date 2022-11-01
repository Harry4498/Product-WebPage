import React from 'react'
import './FooterMiddle.css'

function FooterMiddle() {
    const [email, setEmail] = React.useState('')

    const submitEmail = () => {
        if(email == '')
        {
            alert('Please enter your email')
            return;
        }
        console.log(email)
        fetch('https://ecom-b633d-default-rtdb.asia-southeast1.firebasedatabase.app/data.json',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        }
        )
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setEmail('')
        })
    }
  return (
    <div className='footer-middle-container'>
        <div className='f-m-left-container'>
            <ul>
                <li>Company Info</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>We are hiring</li>
                <li>Blog</li>
            </ul>
            <ul>
                <li>Legal</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>We are hiring</li>
                <li>Blog</li>
            </ul>
            <ul>
                <li>Features</li>
                <li>Business Marketing</li>
                <li>User Analytics</li>
                <li>Live Chat</li>
                <li>Unlimited Support</li>
            </ul>
            <ul>
                <li>Resources</li>
                <li>iOS & Android</li>
                <li>Watch a Demo</li>
                <li>Customers</li>
                <li>API</li>
            </ul>
        </div>
        <div className='f-m-right-container'>
            <h5>Get In Touch</h5>
            <span>
                <input type='text' placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <button onClick={submitEmail}>Subscribe</button>
            </span>
            <p>Lorem impsum dolor amit</p>
        </div>
       

    </div>
  )
}

export default FooterMiddle