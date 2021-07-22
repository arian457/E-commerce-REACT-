import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import image1 from './images/img-8.jpg'
import image2 from './images/img-2.jpg'
import image3 from './images/img-5.jpg'
import image4 from './images/img-4.jpg'
import image5 from './images/img-9.jpg'

function Cards() {
    return (
        <div className = 'cards'>
            <h1>Mirate estos lugares PERRITO</h1>
            <div className='cards__container'>
                <ul className='cards__items'>
                    <CardItem
                    src={image1}
                    text='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '
                    label = 'Aventura'
                    path='/services'
                    />
                      <CardItem
                    src={image2}
                    text='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur'
                    label = 'Lujo'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src={image3}
                    text='Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                    label = 'Aventura'
                    path='/services'
                    />
                      <CardItem
                    src={image4}
                    text='Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their'
                    label = 'Lujo'
                    path='/services'
                    />
                       <CardItem
                    src={image5}
                    text='Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their'
                    label = 'Lujo'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    )
}

export default Cards
