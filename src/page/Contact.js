import React from 'react'
import img3 from '../image/1080x360-01.jpg'


function Contact() {
  return (
    <div  className='contact'>
      <img src={img3} alt='img3'/>

      <h1>contact us</h1>
        <div className='row'>
          <form className='col-12 col-md-6'>
          <input type='text' placeholder='Name'/>
          <input type='email' placeholder='email'/>
          <textarea placeholder='Message'></textarea>
          <button className='btn btn-primary'>Send</button>

          </form>
          <div className='info col-12 col-md-6'>
          <p>Morbi auctor euismod dictum. Morbi eu nibh in nulla interdum placerat.
           Donec pellentesque est at sem aliquam hendrerit.</p>
            <div className='adress'>
            <div>mailling adress</div>
            <p>991 Curabitur molestie dui vel <br/>
            metus iaculis suscipit 11900</p>
            
            </div>
            <div className='phone'>
              <div>Email: <a href='mailto:info@company.com'>info@company.com</a></div>
              <div>Tel: <a href='tel:010-020-0120'>010-020-0120</a></div>
              <div>Fax: <a href='tel:090-080-0980'>090-080-0980</a></div>
            </div>
          </div>
        </div>

    </div>
  )
}
export default Contact