
import React from 'react'
import './App.css'
import Product from './components/item'
import Product2 from './components/product'
import ProductSale from './components/sale-products'
import PeopleThink from './components/people'
import Choose from './components/last-choose'
import Layout from './layout/Layout'
// import Layout from './layout/Layout'

function App() {
  const products = [
    {
      img: '/img/image 12.png',
      title: 'Для эфирных масел'

    },
    {
      img: '/img/image 9.png',
      title: 'Для гидролатов'
    },
    {
      img: '/img/image 10.png',
      title: 'Медная посуда'
    },
    {
      img: '/img/image 14.png',
      title: ' Аксессуары из меди'
    },
    {
      img: '/img/Снимок экрана 2021-11-04 в 17.13 1.png',
      title: 'Индивидуальный заказ'
    },
    {
      img: '/img/Снимок экрана 2024-08-04 172850.png',
      title: 'Скидки и предложения'
    }
  ]
  const arr = [
    {
      title: "Аутентичность",
      description: "Наши изделия из меди являются очень практичными и наполнят особой магией ваш дом или рабочее пространство."
    },
    {
      title: "Изысканность",
      description: "Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен. Мы стремимся предоставить лучший товар по лучшей цене."
    },
    {
      title: "Честная оплата",
      description: "Мы стремимся предоставить лучший товар по лучшей цене с сервисом высокого уровня. Все начинается с честной оплаты."
    },
    {
      title: "Большой ассортимент",
      description: "У нас есть все от миниатюрных настольных паровых дистилляторов эфирных масел до крупногабаритного оборудования."
    },
    {
      title: "Доставка по всему миру",
      description: "Вы можете получить нашу продукцию в кратчайшие сроки в любую точку земного шара."
    },
    {
      title: "Гарантия качества",
      description: "Наше оборудование производится вручную и проходит постоянный контроль качества."
    },
    {
      title: "Удобство в использовании",
      description: "Наши изделия из меди имеют уникальный дизайн, который обеспечивает максимальное удобство в использовании."
    },
    {
      title: "Забота об окружающей среде",
      description: "От 2 до 5% от стоимости каждого приобретенного товара мы направляем на защиту окружающей среды."
    }
  ];

  return (

    
    <>
    <Layout>
        {/* <section className='glav'>
          <div className="wrap">
            <header>
              <div className="left">
                <div className="logo">
                  <img src="/public/img/logo.png" alt="" />
                </div>
                <div className="center">
                <a href="#">Каталог</a>
                <a href="#">Новости</a>
                <a href="#">Доставка</a>
                <a href="#">О нас</a>
                <a href="#">Контакты</a>
              </div>
            </div>

            <div className="right">
              <button>
                <img src="/public/img/like.png" alt="" />
              </button>
              <button>
                <img src="/public/img/user (12) 1.png" alt="" />
              </button>
              <button>
                <img src="/public/img/shopping-cart (6) 1.png" alt="" />
              </button>
            </div>
          </header>
          
          <div className="box">
            <h1>Хит продаж</h1>
            <h3>Дистиллятор для эфирных масел </h3>
            <div className="price">
              <h4>Цена</h4>
              <span>4 906 грн</span>
            </div>
            <button>
              Купить
            </button>
            <div className="colors">
              <button></button>
              <button></button>
              <button></button>
            </div>
            <div className="icons">
              <div className="tire"></div>
              <img src="/public/img/mouse (2) 1.png" alt="" />
            </div>
            <div className="relative">
              <img className='point' src="/public/img/Group 209.png" alt="" />
              <img className='point2' src="/public/img/Group 211.png" alt="" />
            </div>
          </div>
        </div>
      
      </section> */}
      <div className="wrap2">
        <h2>НАША ПРОДУКЦИЯ</h2>
        <div className="grid">
          {products.map(item => <Product item={item} />)}
          {/* <div className="item">
            <span>Для эфирных масел</span>
          </div>
          <div className="item">
            <span>Для эфирных масел</span>
          </div>
          <div className="item">
            <span>Для эфирных масел</span>
          </div>
          <div className="item">
            <span>Для эфирных масел</span>
          </div>
          <div className="item">
            <span>Для эфирных масел</span>
          </div>
          <div className="item">
            <span>Для эфирных масел</span>
          </div> */}
        </div>
        {/* <img src="/public/img/Mask Group (6).png" alt="" /> */}
      </div>
      <section className='promo'>
        <div className="wrap2">
          <h1>ЛУЧШИЕ ПРОДАЖИ</h1>
          <div className="grid">
            {products.slice(0, 3).map(item => <Product2 item={item} />)}
          </div>
          <div className="colors">
            <button></button>
            <button></button>
            <button></button>
          </div>
          <div className="button">
            <button>Перейти в каталог</button>
          </div>
        </div>
      </section>
      <section className='promo2'>
        <div className="wrap2">
          <h1>НОВИНКИ</h1>
          <div className="grid">
            {products.slice(0, 3).map(item => <Product2 item={item} />)}
          </div>
          <div className="colors">
            <button></button>
            <button></button>
            <button></button>
          </div>
          <div className="button">
            <button>Перейти в каталог</button>
          </div>
        </div>
      </section>
      <section className='promo3'>
        <div className="wrap2">
          <div className="left-cont">
           <img src="/public/img/1 + 1 = 3@2x.png" alt="" />
           <h3>Закажите два товара и получите третий бесплатно</h3>
           <button>Перейти в каталог</button>
          </div>
          <div className="right-cont">
            <img className='one' src="/public/img/Mask Group (12).png" alt="" />
            <img className='two' src="/public/img/Group 44 (1).png" alt="" />
            <img className='three' src="/public/img/Group 1.png" alt="" />
            <img className='four' src="/public/img/COPPER PRO.png" alt="" />
          </div>
        </div>
      </section>


      <div className="promo4">
        <div className="wrap2">
          <h1>МЫ РЕКОМЕНДУЕМ</h1>
          <div className="grid">
            {products.slice(0, 3).map(item => <Product2 item={item} />)}
          </div>
          <div className="colors">
            <button></button>
            <button></button>
            <button></button>
          </div>
          <div className="button">
            <button>Перейти в каталог</button>
          </div>
        </div>
      </div>
      <section className='promo5'>
        <div className="wrap2">
          <h1>СКИДКИ</h1>
          <div className="grid">
            {products.slice(0, 3).map(item => <ProductSale item={item} />)}
          </div>
          <div className="colors">
            <button></button>
            <button></button>
            <button></button>
          </div>
          <div className="button">
            <button>Перейти в каталог</button>
          </div>
        </div>
      </section>
      <section className='promo6'>
        <div className="wrap2">
          <h1>ЧТО ДУМАЮТ О НАС</h1>
          <div className="people">
            {products.slice(0, 3).map(item => <PeopleThink item={item} />)}
          </div>
          <div className="colors">
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
      </section>
      <section className='last-promo'>
        <div className="wrap2">
          <h1>Почему выбирают нас</h1>
          <div className="choose-box">
            {arr.slice(0, 8).map(item => <Choose item={item} />)}

          </div>
        </div>
      </section>
      
      {/* <footer>
        <div className="wrap2">
          <div className="footer">
            <div className="left">
              <div className="logo">
                <img src="/public/img/logo.png" alt="" />
              </div>
              <div className="texts">
                <h5>© 2021 “Copper Pro”
                  Все права защищенны</h5>
                <span>Политика конфиденциальности</span>
              </div>
            </div>
            <div className="right">
              <div className="elem">
                <span>Навигация</span>
                <a href="">Каталог</a>
                <a href="">Новости</a>
                <a href="">Доставка </a>
                <a href="">О нас</a>
                <a href="">Контакты</a>

              </div>
              <div className="elem">
                <span>Каталог</span>
                <a href="">Для эфирных масел</a>
                <a href="">Для гидролатов</a>
                <a href="">Медная посуда</a>
                <a href="">Аксессуары из меди</a>
                <a href="">Индивидуальный заказ</a>
                <a href="">Скидки и предложения</a>
              </div>
              <div className="elem">
                <span>Контакты</span>
                <a href="">Бажана 8-Б, Киев,
                  02132 Украина</a>
                <a href="">+38 (096) 990 67 56</a>
                <a href="">a.alambik@gmail.com</a>
                <div className="icons">
                  <img src="/public/img/_x30_4.Twitter.png" alt="" />
                  <img src="/public/img/_x30_1._Facebook.png" alt="" />
                  <img src="/public/img/Group 83.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
      </Layout>
    </>
  )
}

export default App
