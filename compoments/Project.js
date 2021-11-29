import React, { Component } from "react";
import { useMediaQuery } from "react-responsive";
import PageMainPartMob from "./mobile/PageMainPartMob";
import QuoteMob from "./mobile/QuoteMob";
import PageMainPart from "./PageMainPart";
import Quote from "./Quote";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { projectType: this.props.data.type };
    // this.setState({projectType:this.props.data.type});
  }
  render() {
    const data = this.props.data;

    const type = this.props.type;
    const header = data.header;
    const projectType = this.state.projectType;
    const text = (
      <a>
        Ну базару нет, заебись сделали. Лучше чем было однозначно, хотя я хуй
        знает не понимаю. Ебать твой рот.
      </a>
    );
    const imageBlock = {
      text: [
        "Интерактивная карусель новинок со ссылками на источники.",
        "Блоки с цветовой кодировкой для разных категорий.",
        "Упрощенная новостная товарная лента",
        "Функциональность поиска по ключевым словам и категориям.",
      ],
      img: [
        "../img/ion4.png",
        "../img/ion5.png",
        "../img/ion6.png",
        "../img/ion7.png",
      ],
    };
    const gradientBlock = {
      smallText: [
        "Средняя стоимость заявки за время компании",
        "За все время ведения рекламы",
        "Продолжительность ведения рекламы",
        "Окупаемость вложений в маркетинг",
      ],
      text: ["2,87 долл.", "267 заявок", "90 дней", "326% ROI"],
    };
    const imageBlockMob = {
      text: [
        "Интерактивная карусель новинок со ссылками на источники.",
        "Блоки с цветовой кодировкой для разных категорий.",
        "Упрощенная новостная товарная лента",
        "Функциональность поиска по ключевым словам и категориям.",
      ],
      img: [
        "../img/ion4.png",
        "../img/ion5.png",
        "../img/ion6.png",
        "../img/ion7.png",
      ],
    };
    const imageBlockMob2 = {
      text: ["", "", "", ""],
      img: [
        "../img/ion4.png",
        "../img/ion5.png",
        "../img/ion6.png",
        "../img/ion7.png",
      ],
    };

    switch (projectType) {
      case "advertisements": {
        return (
          <div className="project">
            <Desktop>
              <PageMainPart
                smallText={header.smallText}
                header={header.headerText}
                button={header.button}
                img={header.img}
              />

              <div className="project-top">
                <div className="project-row">
                  <div className="project-row-text">
                    <a className="left-part">Запрос клиента:</a>
                    <a className="right-part">
                      Сарафанное радио как основной инструмент продаж перестал
                      удовлетворять потребности бизнеса, а попытки в SMM за год
                      не привели к ощутимым результатам. Нужно решение, для
                      привлечения 10 клиентов в месяц.
                    </a>
                  </div>
                  <div className="project-row-text">
                    <a className="left-part">Начальные данные:</a>
                    <a className="right-part">
                      Стоимость лида - 11,46 долл <br />
                      Стоимость лида - 11,46 долл <br />
                      Стоимость лида - 11,46 долл <br />
                      Стоимость лида - 11,46 долл <br />
                    </a>
                  </div>
                  <div className="project-row-text">
                    <a
                      className="left-part"
                      style={{ textDecoration: "underline" }}
                    >
                      Решение:
                    </a>
                    <a className="right-part">
                      Необходимо запустить рекламу в Google Adwords, что
                      позволит закрывать основные потребности по продажам. Но
                      тестовый запуск рекламы показал, что текущий сайт компании
                      не сможет обеспечить достаточное количество заявок.
                      Принято решение, разработать новый сайт, отвечающий
                      запросам пользователей.
                    </a>
                  </div>
                </div>
                <img className="project-image-main" src="../img/ion2.png" />
                <div className="project-row">
                  <div className="project-row-text">
                    <a className="left-part">Что сделали:</a>
                    <a className="right-part">
                      Проведя анализ запросов пользователей было принято решение
                      сделать основные разделы объектов, а не солнечных станций.
                      Что повысило вовлеченность пользователей на 43%.
                    </a>
                  </div>
                </div>
                <div className="project-grey">
                  <div className="project-grey-wrapper">
                    <div className="project-grey-item">
                      <a className="project-grey-item-big">2,87 долл.</a>
                      <a className="project-grey-item-small">
                        Средняя стоимость заявки за время компании
                      </a>
                    </div>
                    <div className="project-grey-item">
                      <a className="project-grey-item-big">2,87 долл.</a>
                      <a className="project-grey-item-small">
                        Средняя стоимость заявки за время компании
                      </a>
                    </div>
                    <div className="project-grey-item">
                      <a className="project-grey-item-big">2,87 долл.</a>
                      <a className="project-grey-item-small">
                        Средняя стоимость заявки за время компании
                      </a>
                    </div>
                    <div className="project-grey-item">
                      <a className="project-grey-item-big">2,87 долл.</a>
                      <a className="project-grey-item-small">
                        Средняя стоимость заявки за время компании
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-row">
                  <a className="project-row-header">Как мы этого добились:</a>
                  <div className="project-row-text">
                    <a className="left-part">Трафик система:</a>
                    <a className="right-part">
                      Проведя анализ запросов пользователей было принято решение
                      сделать основные разделы объектов, а не солнечных станций.
                      Что повысило вовлеченность пользователей на 43%.
                    </a>
                  </div>
                </div>
                <div style={{ paddingTop: "95px" }} className="img">
                  <img src="../img/ion3.png" />
                </div>
                <div className="project-row">
                  <div className="project-row-text">
                    <a className="left-part">Стратегия запуска:</a>
                    <a className="right-part">
                      Проанализировав компании конкурентов было выявленные
                      доступные окна для получения низкого CPC в компании.
                    </a>
                  </div>
                </div>
                <div className="project-row">
                  <div className="project-row-text">
                    <a className="left-part">Оптимизация:</a>
                    <a className="right-part">
                      Проанализировав компании конкурентов было выявленные
                      доступные окна для получения низкого CPC в компании.
                    </a>
                  </div>
                </div>
                <ProjectImageBlock data={imageBlock} />
              </div>
              <div className="project-top">
                <div className="project-row">
                  <div className="project-row-text">
                    <a className="left-part">Результат:</a>
                    <a className="right-part">
                      Проанализировав компании конкурентов было выявленные
                      доступные окна для получения низкого CPC в компании.
                    </a>
                  </div>
                </div>
                <div className="project-grey">
                  <div className="project-grey-wrapper">
                    <div className="project-grey-item">
                      <a className="project-grey-item-big">2,87 долл.</a>
                      <a className="project-grey-item-small">
                        Средняя стоимость заявки за время компании
                      </a>
                    </div>
                    <div className="project-grey-item">
                      <a className="project-grey-item-big">2,87 долл.</a>
                      <a className="project-grey-item-small">
                        Средняя стоимость заявки за время компании
                      </a>
                    </div>
                    <div className="project-grey-item">
                      <a className="project-grey-item-big">2,87 долл.</a>
                      <a className="project-grey-item-small">
                        Средняя стоимость заявки за время компании
                      </a>
                    </div>
                    <div className="project-grey-item">
                      <a className="project-grey-item-big">2,87 долл.</a>
                      <a className="project-grey-item-small">
                        Средняя стоимость заявки за время компании
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-next">
                  <a href="#">Следующий проект</a>
                </div>
              </div>
            </Desktop>
            <Mobile>
              <div className="project-mob">
                <PageMainPartMob
                  smallText={header.smallText}
                  header={header.headerText}
                  img={header.imgMob}
                />
                <TextBlockMob
                  header={"Запрос клиента:"}
                  text={
                    "Сарафанное радио как основной инструмент продаж перестал удовлетворять потребности бизнеса, а попытки в SMM за год не привели к ощутимым результатам. Нужно решение, для привлечения 10 клиентов в месяц."
                  }
                />
                <TextBlockMob
                  header={"Начальные данные:"}
                  underline={true}
                  text={"Стоимость лида - 11,46 долл."}
                />
                <TextBlockMob
                  header={"Решение:"}
                  underline={true}
                  text={
                    "Необходимо запустить рекламу в Google Adwords, что позволит закрывать основные потребности по продажам. Но тестовый запуск рекламы показал, что текущий сайт компании не сможет обеспечить достаточное количество заявок. Принято решение, разработать новый сайт, отвечающий запросам пользователей."
                  }
                />
                <img
                  style={{ paddingBottom: "130px" }}
                  src="../img/ion_mob2.png"
                />
                <TextBlockMob
                  header={"Что сделали:"}
                  text={
                    "Проведя анализ запросов пользователей было принято  решение сделать основные разделы объектов, а не солнечных станций. Что повысило вовлеченность пользователей на 43%."
                  }
                />
                <GradientBackdropMob data={gradientBlock} />

                <TextBlockMob header={"Как мы этого добились:"} text={""} />
                <TextBlockMob
                  header={"Трафик система:"}
                  text={
                    "Проведя анализ запросов пользователей было принято  решение сделать основные разделы объектов, а не солнечных станций. Что повысило вовлеченность пользователей на 43%."
                  }
                />

                <img
                  style={{ paddingBottom: "100px", paddingTop: "60px" }}
                  src="../img/ion_mob2.png"
                />
                <TextBlockMob
                  header={"Стратегия запуска:"}
                  text={
                    "Проанализировав компании конкурентов было выявленные доступные окна для получения низкого CPC в компании."
                  }
                />

                <TextBlockMob
                  header={"Оптимизация:"}
                  text={
                    "Проанализировав компании конкурентов было выявленные доступные окна для получения низкого CPC в компании. "
                  }
                />
                <ProjectImageBlockMob data={imageBlockMob} />
                <TextBlockMob
                  header={"Результат:"}
                  text={
                    "Проанализировав компании конкурентов было выявленные доступные окна для получения низкого CPC в компании. "
                  }
                />
                <GradientBackdropMob data={gradientBlock} />

                <div className="project-button-mob">
                  <a href={"#"}>Следующий проект</a>
                </div>
              </div>
            </Mobile>
          </div>
        );
      }
      case "webpages": {
        return (
          <div className="project">
            <Desktop>
              <PageMainPart
                smallText={header.smallText}
                header={header.headerText}
                button={header.button}
                img={header.img}
              />
              <div className="project-top">
                <div className="project-row">
                  <div className="project-row-text">
                    <a className="left-part">Запрос клиента:</a>
                    <a className="right-part">
                      Сарафанное радио как основной инструмент продаж перестал
                      удовлетворять потребности бизнеса, а попытки в SMM за год
                      не привели к ощутимым результатам. Нужно решение, для
                      привлечения 10 клиентов в месяц.
                    </a>
                  </div>
                  <div className="project-row-text">
                    <a
                      className="left-part"
                      style={{ textDecoration: "underline" }}
                    >
                      Решение:
                    </a>
                    <a className="right-part">
                      Необходимо запустить рекламу в Google Adwords, что
                      позволит закрывать основные потребности по продажам. Но
                      тестовый запуск рекламы показал, что текущий сайт компании
                      не сможет обеспечить достаточное количество заявок.
                      Принято решение, разработать новый сайт, отвечающий
                      запросам пользователей.
                    </a>
                  </div>
                </div>
                <a href="#" className="project-link">
                  Открыть проект
                </a>
                <img className="project-image-main" src="../img/ion2.png" />
                <div className="project-row">
                  <div className="project-row-text">
                    <a className="left-part">Прототип:</a>
                    <a className="right-part">
                      Проведя анализ запросов пользователей было принято решение
                      сделать основные разделы объектов, а не солнечных станций.
                      Что повысило вовлеченность пользователей на 43%.
                    </a>
                  </div>
                </div>
                <div style={{ paddingTop: "95px" }} className="img">
                  <img src="../img/ion3.png" />
                </div>
                <div className="project-row">
                  <div className="project-row-text">
                    <a className="left-part">Обновленный и упрощенный дизайн</a>
                    <a className="right-part">
                      Мы решили упростить дизайн и дать пользователям сайта
                      возможность убедиться в приемуществах компании, а не
                      только заявлять.
                    </a>
                  </div>
                </div>
                <ProjectImageBlock data={imageBlock} />
              </div>
              <img style={{ paddingTop: "250px" }} src="../img/ion8.png" />
              <div className="project-top">
                <div className="project-row">
                  <div className="project-row-text">
                    <a className="left-part">Что получилось в итоге:</a>
                    <a className="right-part">
                      Созданный сайт при неизменной трафик системе показал рост
                      CR 6% по сравнению со стартовым CR 1,7%. Рост
                      эффективности составил более 300%. Окупаемость маркетинга
                      выросла с ROI 22% до 346%.
                    </a>
                  </div>
                </div>
                <div style={{ paddingTop: "260px" }} className="img">
                  <img src="../img/ion9.png" />
                </div>
                <div className="project-row">
                  <div className="project-row-text">
                    <div className="left-part-2">
                      <a>Отзыв клиента:</a>
                      <a className="review-link">Открыть проект</a>
                    </div>
                    <div className="right-part-2">
                      <a>
                        <Quote text={text} class={"quote-project"} />
                        <a className="review-text">
                          Отзыв Рустамова А.В. Владелец компании на Google Maps
                        </a>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-next">
                <a href="#">Следующий проект</a>
              </div>
            </Desktop>
            <Mobile>
              <div className="project-mob">
                <PageMainPartMob
                  smallText={header.smallText}
                  header={header.headerText}
                  img={header.imgMob}
                />
                <TextBlockMob
                  header={"Запрос клиента:"}
                  text={
                    "Сарафанное радио как основной инструмент продаж перестал удовлетворять потребности бизнеса, а попытки в SMM за год не привели к ощутимым результатам. Нужно решение, для привлечения 10 клиентов в месяц."
                  }
                />
                <TextBlockMob
                  header={"Решение:"}
                  underline={true}
                  text={
                    "Необходимо запустить рекламу в Google Adwords, что позволит закрывать основные потребности по продажам. Но тестовый запуск рекламы показал, что текущий сайт компании не сможет обеспечить достаточное количество заявок. Принято решение, разработать новый сайт, отвечающий запросам пользователей."
                  }
                />
                <a className="project-link-mob">Открыть проект</a>
                <img
                  style={{ paddingBottom: "130px" }}
                  src="../img/ion_mob2.png"
                />
                <TextBlockMob
                  header={"Прототип:"}
                  text={
                    "Проведя анализ запросов пользователей было принято  решение сделать основные разделы объектов, а не солнечных станций. Что повысило вовлеченность пользователей на 43%."
                  }
                />
                <TextBlockMob
                  header={"Обновленный и упрощенный дизайн:"}
                  text={
                    "Проведя анализ запросов пользователей было принято  решение сделать основные разделы объектов, а не солнечных станций. Что повысило вовлеченность пользователей на 43%."
                  }
                />
                <ProjectImageBlockMob data={imageBlockMob} />
                <img
                  style={{ paddingBottom: "100px", paddingTop: "60px" }}
                  src="../img/ion_mob7.png"
                />
                <TextBlockMob
                  header={"Что получилось в итоге:"}
                  text={
                    "Созданный сайт при неизменной трафик системе показал рост CR 6% по сравнению со стартовым CR 1,7%. Рост эффективности составил более 300%. Окупаемость маркетинга выросла с ROI 22% до 346%."
                  }
                  img={"../img/ion_mob8.png"}
                  style={{ paddingBottom: "100px", paddingTop: "20px" }}
                />

                <TextBlockMob
                  header={"Что получилось в итоге:"}
                  text={
                    "Ну базару нет, заебись сделали. Лучше чем было однозначно, хотя я хуй знает не понимаю. Ебать твой рот."
                  }
                  smalltext={
                    "Отзыв Рустамова А.В.Владелец компании на Google Maps"
                  }
                  quote={true}
                />
                <div className="project-button-mob">
                  <a href={"#"}>Следующий проект</a>
                </div>
              </div>
            </Mobile>
          </div>
        );
      }
      case "design": {
        return (
          <div className="project">
            <Desktop>
              <PageMainPart
                smallText={header.smallText}
                header={header.headerText}
                button={header.button}
                img={header.img}
              />

              <div className="project-top">
                <div className="project-row">
                  <div className="project-row-text">
                    <a className="left-part">Клиент:</a>
                    <a className="right-part">
                      Сто в Вроцлаве и его друзья которые не платят нам 3й месяц
                    </a>
                  </div>
                  <div className="project-row-text">
                    <a className="left-part">Запрос клиента:</a>
                    <a className="right-part">
                      Сарафанное радио как основной инструмент продаж перестал
                      удовлетворять потребности бизнеса, а попытки в SMM за год
                      не привели к ощутимым результатам. Нужно решение, для
                      привлечения 10 клиентов в месяц.
                    </a>
                  </div>
                  <div className="project-row-text">
                    <a
                      className="left-part"
                      style={{ textDecoration: "underline" }}
                    >
                      Решение:
                    </a>
                    <a className="right-part">
                      Необходимо запустить рекламу в Google Adwords, что
                      позволит закрывать основные потребности по продажам. Но
                      тестовый запуск рекламы показал, что текущий сайт компании
                      не сможет обеспечить достаточное количество заявок.
                      Принято решение, разработать новый сайт, отвечающий
                      запросам пользователей.
                    </a>
                  </div>
                </div>

                <div style={{ paddingTop: "95px" }} className="img">
                  <img src="../img/ion3.png" />
                </div>

                <ProjectImageBlock data={imageBlock} />
              </div>
              <img
                style={{ paddingTop: "130px", paddingBottom: "150px" }}
                src="../img/ion12.png"
              />
              <div className="project-row"></div>
              <div className="project-next">
                <a href="#">Следующий проект</a>
              </div>
            </Desktop>
            <Mobile>
              <div className="project-mob">
                <PageMainPartMob
                  smallText={header.smallText}
                  header={header.headerText}
                  img={header.imgMob}
                />
                <TextBlockMob
                  header={"Запрос клиента:"}
                  text={
                    "Сарафанное радио как основной инструмент продаж перестал удовлетворять потребности бизнеса, а попытки в SMM за год не привели к ощутимым результатам. Нужно решение, для привлечения 10 клиентов в месяц."
                  }
                />
                <TextBlockMob
                  header={"Начальные данные:"}
                  text={
                    "Сарафанное радио как основной инструмент продаж перестал удовлетворять потребности бизнеса, а попытки в SMM за год не привели к ощутимым результатам. Нужно решение, для привлечения 10 клиентов в месяц."
                  }
                />
                <TextBlockMob
                  header={"Решение:"}
                  underline={true}
                  text={
                    "Необходимо запустить рекламу в Google Adwords, что позволит закрывать основные потребности по продажам. Но тестовый запуск рекламы показал, что текущий сайт компании не сможет обеспечить достаточное количество заявок. Принято решение, разработать новый сайт, отвечающий запросам пользователей."
                  }
                />
                <img
                  style={{ paddingBottom: "130px" }}
                  src="../img/ion_mob2.png"
                />

                <ProjectImageBlockMob data={imageBlockMob} />
                <img src="../img/ion_mob9.png" />

                <div className="project-button-mob">
                  <a href={"#"}>Следующий проект</a>
                </div>
              </div>
            </Mobile>
          </div>
        );
      }
      case "brandings": {
        return (
          <div className="project">
            <Desktop>
              <PageMainPart
                smallText={header.smallText}
                header={header.headerText}
                button={header.button}
                img={header.img}
              />
              <div className="project-top">
                <div className="project-row">
                  <div className="project-row-text">
                    <a className="left-part">Клиент:</a>
                    <a className="right-part">
                      Сто в Вроцлаве и его друзья которые не платят нам 3й месяц
                    </a>
                  </div>
                  <div className="project-row-text">
                    <a className="left-part">Запрос клиента:</a>
                    <a className="right-part">
                      Сарафанное радио как основной инструмент продаж перестал
                      удовлетворять потребности бизнеса, а попытки в SMM за год
                      не привели к ощутимым результатам. Нужно решение, для
                      привлечения 10 клиентов в месяц.
                    </a>
                  </div>
                  <div className="project-row-text">
                    <a
                      className="left-part"
                      style={{ textDecoration: "underline" }}
                    >
                      Решение:
                    </a>
                    <a className="right-part">
                      Необходимо запустить рекламу в Google Adwords, что
                      позволит закрывать основные потребности по продажам. Но
                      тестовый запуск рекламы показал, что текущий сайт компании
                      не сможет обеспечить достаточное количество заявок.
                      Принято решение, разработать новый сайт, отвечающий
                      запросам пользователей.
                    </a>
                  </div>
                </div>
                <img
                  style={{ paddingTop: "130px", paddingBottom: "150px" }}
                  src="../img/ion2.png"
                />
                <div className="project-row">
                  <div className="project-row-text">
                    <a className="left-part">Логотип:</a>
                    <a className="right-part">
                      Проведя анализ запросов пользователей было принято решение
                      сделать основные разделы объектов, а не солнечных станций.
                      Что повысило вовлеченность пользователей на 43%.
                    </a>
                  </div>
                </div>
                <div style={{ paddingTop: "95px" }} className="img">
                  <img src="../img/ion10.png" />
                </div>

                <ProjectImageBlock data={imageBlock} />
              </div>
              <div className="project-row">
              </div>
                <div className="project-next">
                  <a href="#">Следующий проект</a>
                </div>
            </Desktop>
            <Mobile>
              <div className="project-mob">
                <PageMainPartMob
                  smallText={header.smallText}
                  header={header.headerText}
                  img={header.imgMob}
                />
                <TextBlockMob
                  header={"Запрос клиента:"}
                  text={
                    "Сарафанное радио как основной инструмент продаж перестал удовлетворять потребности бизнеса, а попытки в SMM за год не привели к ощутимым результатам. Нужно решение, для привлечения 10 клиентов в месяц."
                  }
                />
                <TextBlockMob
                  header={"Начальные данные:"}
                  text={
                    "Сарафанное радио как основной инструмент продаж перестал удовлетворять потребности бизнеса, а попытки в SMM за год не привели к ощутимым результатам. Нужно решение, для привлечения 10 клиентов в месяц."
                  }
                />
                <TextBlockMob
                  header={"Решение:"}
                  underline={true}
                  text={
                    "Необходимо запустить рекламу в Google Adwords, что позволит закрывать основные потребности по продажам. Но тестовый запуск рекламы показал, что текущий сайт компании не сможет обеспечить достаточное количество заявок. Принято решение, разработать новый сайт, отвечающий запросам пользователей."
                  }
                />
                <img
                  style={{ paddingBottom: "130px" }}
                  src="../img/ion_mob2.png"
                />
                <TextBlockMob
                  header={"Логотип:"}
                  text={
                    "Проведя анализ запросов пользователей было принято  решение сделать основные разделы объектов, а не солнечных станций. Что повысило вовлеченность пользователей на 43%."
                  }
                />
                <img
                  style={{ paddingBottom: "130px" }}
                  src="../img/ion_mob9.png"
                />
                <ProjectImageBlockMob data={imageBlockMob} />
                <img
                  style={{ paddingBottom: "130px" }}
                  src="../img/ion_mob9.png"
                />
                <TextBlockMob
                  header={"Айдентика:"}
                  text={
                    "Проведя анализ запросов пользователей было принято  решение сделать основные разделы объектов, а не солнечных станций. Что повысило вовлеченность пользователей на 43%."
                  }
                />
                <img
                  style={{ paddingBottom: "130px" }}
                  src="../img/ion_mob9.png"
                />
                <ProjectImageBlockMob data={imageBlockMob2} />
                <img src="../img/ion_mob9.png" />

                <div className="project-button-mob">
                  <a href={"#"}>Следующий проект</a>
                </div>
              </div>
            </Mobile>
          </div>
        );
      }
    }
    return (
      <>
        <Desktop>
          <a>Упс</a>
        </Desktop>
        <Mobile>
          <a>Упс</a>
        </Mobile>
      </>
    );
  }
}

class ProjectImageBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const img = this.props.data.img;
    const text = this.props.data.text;
    return (
      <div className="project-image-blocks">
        <div className="project-image-block">
          <img src={img[0]} />
          <a>{text[0]}</a>
          <img src={img[1]} />
          <a>{text[1]}</a>
        </div>
        <div className="project-image-block" style={{ paddingTop: "300px" }}>
          <img src={img[2]} />
          <a>{text[2]}</a>
          <img src={img[3]} />
          <a>{text[3]}</a>
        </div>
      </div>
    );
  }
}
class ProjectImageBlockMob extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const img = this.props.data.img;
    const text = this.props.data.text;
    return (
      <div className="project-image-blocks-mob">
        <div className="project-image-block-mob">
          <img src={img[0]} />
          <a>{text[0]}</a>
          <img src={img[1]} />
          <a>{text[1]}</a>
          <img src={img[2]} />
          <a>{text[2]}</a>
          <img src={img[3]} />
          <a>{text[3]}</a>
        </div>
      </div>
    );
  }
}

class GradientBackdropMob extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const smallText = this.props.data.smallText;
    const text = this.props.data.text;
    return (
      <div className="gradient-mob">
        <div className="gradient-mob-wrapper">
          <div className="gradient-mob-item">
            <a className="gradient-mob-header">{text[0]}</a>
            <a className="gradient-mob-text">{smallText[0]}</a>
          </div>
          <div className="gradient-mob-item">
            <a className="gradient-mob-header">{text[1]}</a>
            <a className="gradient-mob-text">{smallText[1]}</a>
          </div>
          <div className="gradient-mob-item">
            <a className="gradient-mob-header">{text[2]}</a>
            <a className="gradient-mob-text">{smallText[2]}</a>
          </div>
          <div className="gradient-mob-item">
            <a className="gradient-mob-header">{text[3]}</a>
            <a className="gradient-mob-text">{smallText[3]}</a>
          </div>
        </div>
      </div>
    );
  }
}

class TextBlockMob extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="textblockmob">
        {this.props.underline ? (
          <a className="textmob-header" style={{ textDecoration: "underline" }}>
            {this.props.header}
          </a>
        ) : (
          <a className="textmob-header">{this.props.header}</a>
        )}
        {this.props.quote ? (
          <>
            <QuoteMob
              text={
                <a style={{ width: "100%", lineHeight: "28px" }}>
                  {this.props.text}
                </a>
              }
            />
            <a className="review-small-mob">{this.props.smalltext}</a>
          </>
        ) : (
          <a className="textmob-text">{this.props.text}</a>
        )}
        {this.props.img ? (
          <img className="textmob-img" src={this.props.img} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Project;
