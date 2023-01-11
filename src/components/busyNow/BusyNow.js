import React from "react";
import "./BusyNow.css";
import { Fade } from "react-reveal";
import Section from "../section/Section";
import ks from "../../images/logos/kalkulyator-samogonshchika.png";
import tb from "../../images/social/tickling-the-brains.jpg";
import zen from "../../images/social/zen128.png";
import puls from "../../images/social/puls128.png";

const BusyNow = () => {
  return (
    <Section title="Чам занимаюсь в свободное время">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>Мои текущие проекты</h2>
            <p>
              Я погружен в IT с головой, поэтому в свободное от работы время
              развиваю свои проекты. Они разные. На текущий момент существует
              два направления:
            </p>
            <p className="blNameL">
              <span role="img" aria-label="lightning">
                ⚡
              </span>{" "}
              Блоги научно-популярной тематики на открытых площадках
            </p>
            <div>
              <img className="blogLogo" src={tb} alt="Щекотка мозгов" />
              <div className="block">
                <p className="blogName">Щекотка мозгов</p>
                <p>
                  <a href="https://dzen.ru/shchekotkamozgov">
                    <img className="socialLogo" src={zen} alt="Дзен" />
                    <span className="blNameL">Канал на Дзен</span>
                  </a>
                </p>
                <p>
                  <a href="https://pulse.mail.ru/schekotka-mozgov">
                    <img className="socialLogo" src={puls} alt="Mail Пульс" />
                    <span className="blNameL">Канал на Mail Пульс</span>
                  </a>
                </p>
              </div>
            </div>
            <p className="blNameL">
              <span role="img" aria-label="lightning">
                ⚡
              </span>{" "}
              Сайт-сервис для винокуров и самогонщиков{" "}
              <a href="https://samogoncalc.ru">samogoncalc.ru</a>
            </p>
            <div>
              <img
                className="blogLogoSam"
                src={ks}
                alt="Самогонный калькулятор"
              />
              <div className="block w70">
                <p>
                  Набор быстрых онлайн-калькуляторов для винокуров и
                  самогонщиков
                </p>
                <p>
                  Web-сервис разработан на React и Redux. Сайт SEO-оптимизирован
                  и неплохо ранжируется в поисковой выдача.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </Section>
  );
};

export default BusyNow;
