import React from 'react'
import mg1 from '../image/610x610-01.jpg'
import mg2 from '../image/610x610-02.jpg'
import mg3 from '../image/610x610-03.jpg'
import mg4 from '../image/610x610-04.jpg'

const data = [
    {
        id:1,
        image:mg1,
        date:'21 November 2017',
        title:"Nulla tempor tempus efficitur",
        para:  `Ut molestie odio et nisl congue fermentum. Aliquam consectetur est at orci aliquam maximus. Curabitur vitae arcu congue, 
                laoreet sem ut, congue eros.
                Integer bibendum lorem lorem, quis consectetur magna fringilla in. 
                Donec dapibus efficitur odio ac cursus. Integer imperdiet rhoncus volutpat.`,

    },
    {
        id:2,
        image:mg2,
        date:'16 November 2017',
        title:"Etiam fringilla ipsum at molestie",
        para:  `Nulla venenatis leo ultrices ipsum pellentesque fringilla.
                Donec viverra purus sit amet ante venenatis placerat.
                Duis venenatis sed mauris sit amet sodales. 
                In maximus eros nisl, ac egestas lorem suscipit ac. 
                Cras interdum eu dui sit amet vehicula.
                Maecenas congue dui ante, eget elementum leo vulputate eu.`,

    },
    {
        id:3,
        image:mg3,
        date:'22 October 2017',
        title:"Aliquam consectetur est at orci",
        para:  `Etiam aliquet metus nec nulla gravida, et consequat sapien venenatis.
                Cras commodo ullamcorper tortor, ut volutpat nulla eleifend quis.
                Nunc rhoncus malesuada nulla, quis tincidunt arcu dapibus non.
                Nulla vel risus sodales, hendrerit turpis eu,
                rhoncus nibh. Sed vel vestibulum velit, et tempus eros`,

    },
    {
        id:4,
        image:mg4,
        date:'18 October 2017',
        title:"Donec quis fermentum nulla",
        para:  `Vivamus efficitur lorem ac velit vulputate, sed consectetur leo fermentum.
                Fusce non lacinia eros. Suspendisse pharetra nisi fermentum bibendum condimentum.
                Nam sit amet consectetur dui. Ut malesuada commodo enim,
                nec varius diam ultricies finibus. Curabitur 
                molestie dui vel metus iaculis suscipit.`,

    }
]

 function Timeline() {
  return (
    <div className='timeline'>
           {
            data.map(item => (
                <div className={`timeline-item-${item.id} tm-flexbox-ie-fix tm-width-ie-fix`} key={item.id}>
                <div className='image'>
                    <h4>{item.date}</h4>
                    <img src={item.image} alt='imge one'/>
                </div>
                <div className='mg-desc tm-flexbox-ie-fix .tm-width-ie-fix'>
                    <h5>{item.title}</h5>
                    <p >{item.para}</p>
                    <button className='btn btn-primary tm-button-rounded'>Read More</button>
                </div>
                </div>
            ))
           }
    </div>
  )
}
export default Timeline