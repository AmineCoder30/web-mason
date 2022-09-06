import React from 'react'
import {BsBellFill,BsFillLaptopFill,BsAlarm} from 'react-icons/bs'
import img1 from '../image/575x400-01.jpg'
import img2 from '../image/575x400-02.jpg'

function About() {
  return (
    <div className='about'>
        <div className='row mb-4'>
            <img className='col-xs-12 col-sm-12 col-md-6 col-lg-6' src={img1} alt='img1'/>
            <div className='about-desc col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                <h2>In sodales lorem nec metus</h2>
                <p>Ut ultrices, urna a porttitor condimentum,
                 tortor arcu feugiat neque, quis tristique lectus 
                 nisl at nisi. In convallis, lorem eget bibendum 
                 lobortis, sem metus elementum odio,
                  vitae mattis erat quam eu ante. Duis 
                  fermentum in tellus ut tempor. In hac
                   habitasse platea dictumst. Nunc vel nulla l</p>
                <button className='btn btn-primary'>read more</button>
            </div>
        </div>
        <div className='row mb-4'>
          
            <div className='about-desc col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                <h2>Nullam condimentum purus</h2>
                <p>Curabitur consectetur sapien et vestibulum commodo.
                Phasellus id metus quam. Mauris fringilla arcu non 
                tellus malesuada tempus. Interdum et malesuada 
                fames ac ante ipsum primis in faucibus.</p>
                <p>Donec commodo semper nisl semper luctus.
                Phasellus euismod, nulla eu tristique sodales, dolor risus lobortis eros,
                pretium hendrerit ligula risus sit amet odio.</p>
                <button className='btn btn-primary'>read more</button>
        </div>
        <img className='col-xs-12 col-sm-12 col-md-6 col-lg-6' src={img2} alt='img2'/>
    </div>
    <div>
        <div className='row about-item mb-4'>
            <div className='col-12 col-md-6 col-xl-4'>
                <div>
                <span><BsAlarm/> </span>
                <h3>Nullam condi mentum</h3>
                <p>Mauris fringilla arcu non tellus malesuada tempus. 
                Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </div>
            </div>
            <div className='col-12 col-md-6 col-xl-4'>
                <div className='icon'>
                <span><BsBellFill/></span>
                <h3>Nullam condi mentum</h3>
                <p>Mauris fringilla arcu non tellus malesuada tempus. 
                Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </div>
            </div>
            <div className='col-12 col-md-6 col-xl-4'>
                <div className='icon'>
                <span><BsFillLaptopFill/></span>
                <h3>Nullam condi mentum</h3>
                <p>Mauris fringilla arcu non tellus malesuada tempus. 
                Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </div>
            </div>
       </div>
        <div className='about-text mb-4'>
        <h3>Phasellus vitae finibus lectus</h3>
        <p>Praesent finibus egestas metus id pulvinar. Nullam condimentum purus sed accumsan ornare. Pellentesque leo urna, ornare in metus in, fermentum dictum est. Maecenas vehicula velit at enim tempus, et semper sem scelerisque. Sed id sapien venenatis,
         ultrices velit sit amet, blandit nisi. Mauris ac eros nisl.</p>
        <p>Sed at mattis leo, in feugiat sem. Integer a orci neque. Aenean id lorem ut risus maximus interdum. Nunc sodales gravida semper. Mauris sollicitudin lectus imperdiet, cursus mauris ac, aliquet nulla. Integer vitae sodales elit. Morbi rutrum, dui at pharetra gravida, risus felis finibus est, 
        at vestibulum nibh velit sed nisi.</p>
        </div>
      </div>
    </div>
  )
}
export default About
