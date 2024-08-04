import React from "react";

const Layout = ({ children }) => {
    return (
        <>

            <section className='glav'>
                <div className="wrap">
                    <header>
                        <div className="left">
                            <div className="logo">
                                <img src="/img/logo.png" alt="" />
                            </div>
                            <div className="center">
                                <a className="link active" href="#">Каталог</a>
                                <a className="link" href="#">Новости</a>
                                <a className="link" href="#">Доставка</a>
                                <a className="link" href="#">О нас</a>
                                <a className="link" href="#">Контакты</a>
                            </div>
                        </div>

                        <div className="right">
                            <button>
                                <img src="/img/like.png" alt="" />
                            </button>
                            <button>
                                <img src="/img/user (12) 1.png" alt="" />
                            </button>
                            <button>
                                <img src="/img/shopping-cart (6) 1.png" alt="" />
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
                            <img src="/img/mouse (2) 1.png" alt="" />
                        </div>
                        <div className="relative">
                            <img className='point' src="/img/Group 209.png" alt="" />
                            <img className='point2' src="/img/Group 211.png" alt="" />
                        </div>
                    </div>
                </div>

            </section>
            {children}

            <footer>
                <div className="wrap2">
                    <div className="footer">
                        <div className="left">
                            <div className="logo">
                                <img src="/img/logo.png" alt="" />
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
                                    <img src="/img/_x30_4.Twitter.png" alt="" />
                                    <img src="/img/_x30_1._Facebook.png" alt="" />
                                    <img src="/img/Group 83.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Layout